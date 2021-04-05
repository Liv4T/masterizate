<?php

namespace App\Exports;

use DB;
use App\Courses;
use App\CoursesAchievement;
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

    public function __construct(String $teacherId, String $id_area, String $id_classroom, String $teacher){
        $this->teacherId = $teacherId;
        $this->id_area = $id_area;
        $this->id_classroom = $id_classroom;
        $this->teacher = $teacher;
    }
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        $achievements = [];

        $Courses = Courses::where('id_teacher', $this->teacherId)->where('id_area', $this->id_area)->where('id_classroom', $this->id_classroom)->first();
        if (isset($Courses)) {
            $achievements = CoursesAchievement::where('id_planification', $Courses->id)->get();
        }
        return collect($achievements);
    }

    public function map($data): array
    {
        $classroom_name = '';
        $classroom = Classroom::where('id', $this->id_classroom)->get();
        $area = Area::where('id', $this->id_area)->get();

        if (isset($classroom) && count($classroom) > 0 && isset($area) && count($area) > 0) {
            $classroom_name = $area[0]->name . ' ' . $classroom[0]->name;
        }

        return [
            $classroom_name,
            $this->teacher,
            $data->achievement,
            $data->percentage ? $data->percentage.'%' : '0%',
        ];
    }

    public function headings(): array
    {
        return[
            'Clase',
            'Profesor',
            'Logro',
            'Porcentaje',
        ];
    }
}
