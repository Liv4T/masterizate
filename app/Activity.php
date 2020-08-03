<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    //
    protected $table = "activity";
    protected $fillable = ["achievement", "activity_desc", "activity_name", "activity_type", "deliver_date", "id_indicator", "feedback_date", "id_weekly_plan"];
}
