<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TutorCode extends Model
{
    protected $table = "tutor_codes";
    protected $guarded = ['id'],

    protected $fillable = [
        'name',
        'description',
        'code',
        'course',
        'date',
    ];
}
