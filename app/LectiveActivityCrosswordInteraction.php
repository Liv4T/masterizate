<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LectiveActivityCrosswordInteraction extends Model
{
    protected $table = 'lective_activity_crossword_interaction';
    protected $fillable = ['id_lective_activity_crossword', 'id_student','response','score','state','deleted','updated_user'];
}
