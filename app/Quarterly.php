<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Quarterly extends Model
{
    //
    protected $table = "quarterly_plan";
    protected $fillable = ["unit_name", "content", "logro" ,"id_teacher", "id_area", "id_classroom","deleted","id_achievement"];
}
