<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DeleteClassAndCicles extends Model
{
    protected $table = 'delete_class_and_cicles';

    protected $guarded = ['id'];

    protected $fillable = ['id_cicle','class_selected','class','area_selected','date_to_activate_btn','date_to_deactivate_btn','text'];
}
