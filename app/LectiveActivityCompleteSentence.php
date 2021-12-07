<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LectiveActivityCompleteSentence extends Model
{
    protected $table = 'lective_activity_complete_sentence';
    protected $fillable = ['id_lective_activity', 'content','state','deleted','updated_user'];
}
