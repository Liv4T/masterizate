<?php

namespace App\Exports;

use App\User;
use App\ClassroomTeacher;
use App\Classroom;
use App\Area;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class MateriasTeachersExport implements FromCollection , ShouldAutoSize, WithMapping, WithHeadings
{
    use Exportable;

    /**
    * @return \Illuminate\Support\Collection
    */    
    public function collection()
    {
        $user_asignated = ClassroomTeacher::all();
        $areas = [];
        if (isset($user_asignated)) {
            foreach ($user_asignated as $key => $area) {
                $classroom = Classroom::find($area->id_classroom);
                $class = Area::find($area->id_area);
                $areas[$key] = [
                    'text'         => $class->name . " - " . $classroom->name,
                    'classroom'    => $classroom->name,
                    'id_user'      => $area->id_user ? $area->id_user : ''
                ];
            }
        }
        return collect($areas);
    }

    public function map($areas): array
    {
        return [
            $areas['text'],
            $areas['classroom'],
            User::where('id','=',$areas['id_user'])->first() ? User::where('id','=',$areas['id_user'])->first()->name : '',
        ];
    }

    public function headings(): array
    {
        return[
            'Area',
            'Clase',
            'Profesor'
        ];
    }
}
