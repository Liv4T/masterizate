<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Classes extends Model
{
    protected $fillable = ['name','description','id_user','id_category','id_subcategory','subject','fromW','toW','fromH','toH','objetive','quiz','indicator','percent','local','regional','world'];
}
