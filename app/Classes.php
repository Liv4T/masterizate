<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Classes extends Model
{
    protected $table =  'class';
    protected $fillable = ['id', 'description', 'name', 'name_document', 'document', 'document1', 'document2', 'url', 'url1', 'url2', 'video', 'video1', 'video2', 'id_weekly_plan', 'hourly_intensity'];
}
