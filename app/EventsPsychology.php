<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EventsPsychology extends Model
{
    protected $table = 'events_psychology';

    protected $fillable = [
        'name', 'date_to', 'date_from', 'id_user', 'url', 'user_invited'
    ];
}
