<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class VinculationTutorStudent extends Model
{
    protected $table = "vinculation_tutor_students";
    protected $guarded = ["id"];
    protected $fillable = [
        "id_tutor",
        "id_student",
        "code_vinculated"
    ];
}
