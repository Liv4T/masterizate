<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CalificationLectivesActivities extends Model
{
    protected $table = "calification_lectives_activities";
    protected $guarded = ['id'];
    protected $fillable = [
        'id',
        'id_lective_activity',
        'id_class',
        'id_teacher',
        'id_student',
        'calification'
    ];
}
