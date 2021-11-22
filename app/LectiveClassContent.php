<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
class LectiveClassContent extends Model
{
    protected $table = 'lective_class_content';

    protected $fillable = [
        'id_lective_class','order','content_type','content','description','observation','is_required','state','deleted','updated_user'
    ];
}
