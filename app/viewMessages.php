<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class viewMessages extends Model
{
    protected $table = 'view_messages';
    protected $guarded = ['id'];
    protected $fillable = [
        'id_sender',
        'id_received',
        'visualized',
        'id_message',
    ];
}
