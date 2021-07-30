<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Trimestre extends Model
{
    //
    protected $table = "trimestres";
    protected $fillable = ["nombre"];
}
