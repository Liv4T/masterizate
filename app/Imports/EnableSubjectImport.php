<?php

namespace App\Imports;

use App\EnableSubject;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class EnableSubjectImport implements ToModel, WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        $current_date = date('Y-m-d H:i:s');

        return new EnableSubject([
            'id_area' => $row['id_area'],
            'id_user' => $row['id_user'],
            'id_code' => $row['id_code'],
            'date_payment' => $current_date,
            'date_enable_area' => date ( 'Y-m-d H:i:s' ,  strtotime ('+365 day' , strtotime ($current_date ))),
        ]);
    }
}
