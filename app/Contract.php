<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contract extends Model
{
    protected $table = 'contract';
    protected $fillable = ['id_user', 'type', 'name', 'id_number', 'read_terms', 'agree', 'url'];
}
