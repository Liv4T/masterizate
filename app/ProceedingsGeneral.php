<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProceedingsGeneral extends Model
{
    protected $table = 'proceedings_general';
    protected $fillable = ['title','body','url','id_user','state','id_user_managed','viewed'];
}
