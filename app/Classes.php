<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Classes extends Model
{
    protected $table =  'class';
    protected $fillable = ['id', 'description', 'name', 'name_document', 'document', 'url', 'video', 'id_weekly_plan', 'hourly_intensity'];
}
