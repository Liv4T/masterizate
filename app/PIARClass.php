<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PIARClass extends Model
{
    protected $table = "p_i_a_r_classes";
    protected $fillable = ['id'];
    protected $guarded = [
        'activities',
        'content',
        'description',
        'hourly_intensity',
        'name',
        'state',
        'teacher_id'
    ];
}
