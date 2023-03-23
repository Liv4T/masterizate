<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TutorClassroomTeacher extends Model
{
    protected $table = 'tutor_classroom_teacher';
    protected $guarded = ['id'];

    protected $fillable = [
        'id_classroom',
        'id_area',
        'id_user',
        'id_institution',
    ];
}
