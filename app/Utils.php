<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Utils extends Model
{
    protected $table = 'utils';
    protected $guarded = ['id'];
    protected $fillable = ['util','quantity','grade'];
}
