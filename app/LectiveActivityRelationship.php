<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LectiveActivityRelationship extends Model
{
    protected $table = 'lective_activity_relationship';
    protected $fillable = ['id_lective_activity', 'content','state','deleted','updated_user'];
}
