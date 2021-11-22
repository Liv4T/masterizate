<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LectiveActivities extends Model
{
    //
    protected $table = 'lective_activities';
    protected $fillable = ['id_lective_class', 'id_lective_achievement', 'id_lective_indicator','activity_type', 'name', 'description', 'delivery_max_date','feedback_date', 'rules','is_required','state','deleted','updated_user','id_lective_quarterly_plan'];
}
