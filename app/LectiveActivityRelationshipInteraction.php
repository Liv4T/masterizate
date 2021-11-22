<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LectiveActivityRelationshipInteraction extends Model
{
    protected $table = 'lective_activity_relationship_interaction';
    protected $fillable = ['id_lective_activity_relationship', 'id_student','response','score','state','deleted','updated_user'];
}
