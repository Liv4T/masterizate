<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TutorSchedule extends Model
{
    //
    protected $table = 'tutor_schedule';

    protected $fillable = [
        'days', 'date_from', 'date_to','area_id','classroom_id','teacher_id','duration_minutes','state','deleted'
    ];
}
