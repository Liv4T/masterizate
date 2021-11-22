<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LectiveActivityInteraction extends Model
{
    protected $table = "lective_activity_interaction";
    protected $fillable = ["id_lective_activity", "id_student", "latest_access_date", "is_qualified", "score","qualified_date","state",'deleted','updated_user'];
}
