<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
class LectiveClassContent extends Model
{
    protected $table = 'lective_class_content';

    protected $fillable = [
        'id_lective_class', 'content_type','content','student_visited_date','state','deleted','updated_user'
    ];
}
