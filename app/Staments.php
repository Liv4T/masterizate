<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Staments extends Model
{
    protected $table = "staments";
    protected $guarded = ['id'];
    protected $fillable = ['member','name','stament','rol'];
}
