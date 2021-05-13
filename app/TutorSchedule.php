<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TutorSchedule extends Model
{
    //
    protected $table = 'tutor_schedule';

    protected $fillable = [
        'days', 'date_from', 'date_to','tutorial_value','area_id','code_id','classroom_id','teacher_id','duration_minutes','state','deleted'
    ];
}
