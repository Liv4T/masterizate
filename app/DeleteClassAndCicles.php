<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DeleteClassAndCicles extends Model
{
    protected $table = 'delete_class_and_cicles';

    protected $guarded = ['id'];

    protected $fillable = ['id_class','id_cicle','date_to_activate_btn'];
}
