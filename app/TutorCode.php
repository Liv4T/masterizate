<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TutorCode extends Model
{
    protected $table = 'tutor_codes';
    protected $guarded = ['id'];

    protected $fillable = [
        'name',
        'description',
        'code',
        'id_class',
        'id_classroom',
        'text',
        'date',
    ];
}
