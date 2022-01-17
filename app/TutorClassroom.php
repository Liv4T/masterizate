<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TutorClassroom extends Model
{
    protected $table = 'tutor_classroom';
    protected $guarded = ['id'];

    protected $fillable = [
        'name',
        'id_institution',
    ];
}
