<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AssitantsMotives extends Model
{
    protected $table = 'assitants_motives';
    protected $guarded = ['id'];
    protected $fillable = [
        'motive',
        'id_area',
        'id_classroom'
    ];
}
