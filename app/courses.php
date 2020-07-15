<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Courses extends Model
{
    //
    protected $table = "annual_planification";
    protected $fillable = ["achievement_1", "achievement_2", "achievement_3", "achievement_4", "id_teacher", "id_materia"];
}
