<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RequestPermissions extends Model
{
    protected $table = "request_permissions";
    protected $protected = ['id'];
    protected $fillable = [
        'cicle',
        'id_cicle',
        'id_area',
        'id_classroom',
        'course',
        'responded_at'
    ];
}
