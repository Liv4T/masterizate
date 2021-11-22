<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LectiveClassContentInteraction extends Model
{
    protected $table = 'lective_class_content_interaction';
    protected $fillable = [
        'id_lective_class_content','id_student','deleted','	updated_user'
    ];
}
