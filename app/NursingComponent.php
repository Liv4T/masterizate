<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NursingComponent extends Model
{
    protected $table = 'nursing_components';
    protected $guarded = ['id'];
    protected $fillable = [
        'course',
        'student',
        'alergies',
        'diet',
        'observation'
    ];
}
