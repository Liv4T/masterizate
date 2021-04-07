<?php

namespace App\Exports;

use DB;
use App\Weekly;
use App\Area;
use App\Classroom;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class PlanificationCoursesExport implements FromCollection , ShouldAutoSize, WithMapping, WithHeadings
{
    use Exportable;

    public function __construct(String $id_area, String $id_classroom, String $teacher){
        $this->id_area = $id_area;
        $this->id_classroom = $id_classroom;
        $this->teacher = $teacher;
    }
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        $Weeks = Weekly::where('id_area', $this->id_area)->where('id_classroom', $this->id_classroom)->get();        
        return collect($Weeks);
    }

    public function map($Weeks): array
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
            $Weeks->driving_question,
            $Weeks->class_development,
            $Weeks->observation,
        ];
    }

    public function headings(): array
    {
        return[
            'Clase_Curso',
            'Profesor',
            'Ciclos',
            'Clase',
            'Observación'
        ];
    }
}
