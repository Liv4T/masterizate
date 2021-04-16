<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Effectiveness extends Model
{
    protected $table = "effectivenesses";
    protected $guarded = ['id'];
    protected $fillable = ['teacher_id','student_id','course','score_effectiveness'];
}
