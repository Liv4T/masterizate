<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PermissionToPedagogics extends Model
{
    protected $table = 'permission_to_pedagogics';
    protected $guarded = ['id'];
    protected $fillable = [
        'pedagogical_activity',
        'pedagogical_id',
        'id_student',
        'parent_id',
        'permission',
    ];
}
