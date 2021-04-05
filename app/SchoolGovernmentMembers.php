<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SchoolGovernmentMembers extends Model
{
    protected $table = "school_government_members";
    protected $guarded = ['id'];
    protected $fillable = ['member','position','description','order','user_creator_id','user_id','image','imageSchoolGovernment','modeInsert'];
}
