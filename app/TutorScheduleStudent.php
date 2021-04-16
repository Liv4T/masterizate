<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TutorScheduleStudent extends Model
{
    //
    protected $table = 'tutor_schedule_student';

    protected $fillable = [
        'tutorschedule_id', 'student_id','date_from', 'date_to','time_index','observations','meetup','state','deleted'
    ];
}
