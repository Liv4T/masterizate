<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NursingComponent extends Model
{
    protected $table = 'nursing_components';
    protected $guarded = ['id'];
    protected $fillable = [
        'id_course',
        'course',
        'id_student',
        'student',
        'alergies',
        'diet',
        'observation',
        'blood_rh'
    ];
}
