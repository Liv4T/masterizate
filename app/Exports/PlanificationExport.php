<?php

namespace App\Exports;

use DB;
use App\Courses;
use App\CoursesAchievement;
use App\Quarterly;
use App\Area;
use App\Classroom;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class PlanificationExport implements FromCollection , ShouldAutoSize, WithMapping, WithHeadings
{
    use Exportable;
    
    public function __construct(String $teacherId, String $id_area, String $id_classroom){
        $this->teacherId = $teacherId;
        $this->id_area = $id_area;
        $this->id_classroom = $id_classroom;
    }
    /**
    * @return \Illuminate\Support\Collection
    */    
    public function collection()
    {
        $quaterly = [];
        $achievements = [];

        $Courses = Courses::where('id_teacher', $this->teacherId)->where('id_area', $this->id_area)->where('id_classroom', $this->id_classroom)->first();
        if (isset($Courses)) {
            $achievements = CoursesAchievement::where('id_planification', $Courses->id)->get();

            $Quarterlies = Quarterly::where('id_teacher', $this->teacherId)->where('id_area', $this->id_area)->where('id_classroom', $this->id_classroom)->get();
            $Courses->achievements = $achievements;
            foreach ($Quarterlies as $key => $Quarterly) {
                $quaterly[$key] = [
                    'id' => $Quarterly->id,
                    'content' => $Quarterly->content,
                    'unit_name' => $Quarterly->unit_name
                ];
            }
        }
        $classroom_name = '';
        $classroom = Classroom::where('id', $this->id_classroom)->get();
        $area = Area::where('id', $this->id_area)->get();

        if (isset($classroom) && count($classroom) > 0 && isset($area) && count($area) > 0) {
            $classroom_name = $area[0]->name . ' ' . $classroom[0]->name;
        }

        $data = [
            'classroom_name' => $classroom_name,
            'quaterly' =>  $quaterly,
            'courses' => $Courses,
            'achievements' => $achievements
        ];

        return collect($data);   
    }

    public function map($data): array
    {
        return [
            $data->classroom_name,
            $data->quaterly,
            $data->courses,
            $data->achievements,
        ];   
    }

    public function headings(): array
    {
        return[
            'Salon',
            'Trimestre',
            'Curso',
            'Logros'
        ];
    }
}
