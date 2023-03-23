<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EnableTour extends Model
{
    //
    protected $table = 'enable_tour';
    protected $fillable = [
        'id_user',
        'calendar',
        'message',
        'question',
        'chat',
        'study_planning',
        'evaluation',
        'my_classes',
        'program_code',
        'my_students'
    ];
}
