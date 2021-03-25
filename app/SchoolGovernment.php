<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SchoolGovernment extends Model
{
    protected $table = "school_governments";
    protected $guarded = 'id';
    protected $fillable = ['legislation'.'user_id'];
}
