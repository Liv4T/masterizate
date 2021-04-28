<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PedagogicalCourse extends Model
{
    protected $table = 'pedagogical_courses';
    protected $guarded = ['id'];
    protected $fillable = [
        'name_activity',
        'grade',
        'place',
        'departure_time',
        'time_arrival',
        'description',
        'id_classroom'
    ];
}
