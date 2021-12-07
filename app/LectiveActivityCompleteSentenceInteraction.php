<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LectiveActivityCompleteSentenceInteraction extends Model
{
    protected $table = 'lective_activity_complete_sentence_interaction';
    protected $fillable = ['id_lective_activity_complete_sentence', 'id_student','response','score','state','deleted','updated_user'];
}
