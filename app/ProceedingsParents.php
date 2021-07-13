<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProceedingsParents extends Model
{
    protected $table = 'proceedings_parents';
    protected $fillable = ['title','body','url','id_padre','state','id_tutor','viewed'];
}
