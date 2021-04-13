<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Assistance extends Model
{
    protected $table = 'assistances';

    protected $guarded = ['id'];

    protected $fillable = [
        'course',
        'id_student',
        'id_teacher',
        'assistance',
        'excuse',
        'other_motive'
    ];
}
