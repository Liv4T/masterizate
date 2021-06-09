<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PIARAnualPlanification extends Model
{
    protected $table = "p_i_a_r_anual_planifications";
    protected $guarded = ['id'];
    protected $fillable = [
        'id_area',
        'id_classroom',
        'logros',
        'trimestres',
        'students',
        'id_teacher'
    ];
}
