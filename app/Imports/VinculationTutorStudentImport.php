<?php

namespace App\Imports;

use App\VinculationTutorStudent;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class VinculationTutorStudentImport implements ToModel, WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new VinculationTutorStudent([
            'id_tutor' => $row['id_tutor'],
            'id_student' => $row['id_student'],
            'code_vinculated' => $row['code_vinculated'],
        ]);
    }
}
