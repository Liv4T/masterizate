<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Eventos extends Model
{
    //
    protected $table = 'eventos';

    protected $fillable = [
        'name',
        'id_classroom',
        'id_area',
        'id_class',
        'date_to',
        'date_from',
        'id_user',
        'url',
        'id_padre',
        'deleted_at'
    ];
}
