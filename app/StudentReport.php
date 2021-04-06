<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StudentReport extends Model
{
    //
    protected $table = 'student_report';

    protected $fillable = [
        'id_student',

    ];
}
