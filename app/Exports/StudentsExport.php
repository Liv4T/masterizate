<?php

namespace App\Exports;

use App\User;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class StudentsExport implements FromCollection , ShouldAutoSize, WithMapping, WithHeadings
{
    use Exportable;
    /**
    * @return \Illuminate\Support\Collection
    */    
    public function collection()
    {
        return User::where('type_user','=',3)->get();
    }

    public function map($students): array
    {
        
        return [
            $students->name,
            $students->email,
            $students->parent_id ?
            User::where('parent_id','=',$students->parent_id )->first()->name
            : 
            '',
            $students->id_number,

            $students->parent_id ?
            User::where('parent_id','=',$students->parent_id )->first()->id_number
            : 
            '',

            $students->parent_id ?
            User::where('parent_id','=',$students->parent_id )->first()->phone
            : 
            '',
        ];   
    }

    public function headings(): array
    {
        return[
            'Estudiante',
            'Email_Estudiante',
            'Acudiente',
            'Identificacion_Estudiante',
            'Identificacion_Acudiente',
            'Telefono_Acudiente'
        ];
    }
}
