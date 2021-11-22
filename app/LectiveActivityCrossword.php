<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LectiveActivityCrossword extends Model
{
    protected $table = 'lective_activity_crossword';
    protected $fillable = ['id_lective_activity', 'content','state','deleted','updated_user'];
}
