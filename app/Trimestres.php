<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Trimestres extends Model
{
    protected $table = "trimestres";
    protected $guarded=['id'];
    protected $fillable=[
        'nombre'
    ];
}
