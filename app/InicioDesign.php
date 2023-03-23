<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InicioDesign extends Model
{
    protected $table = 'inicio_design';
    protected $fillable = [
        'id_tutor',
        'color',
        'banner',
        'logo',
    ];
}
