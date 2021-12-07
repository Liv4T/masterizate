<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LectiveActivityQuestionInteraction extends Model
{
    protected $table = 'lective_activity_question_interaction';
    protected $fillable = ['id_lective_activity_question', 'id_student','response','score','state','deleted','updated_user'];
}
