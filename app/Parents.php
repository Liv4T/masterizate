<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Parents extends Model
{
    protected $table = "parents";
    protected $guarded = ['id'];
    protected $fillable = [
        'name_event',
        'date_start',
        'date_end',
        'link',
        'day_week',
        'email_invited',
        'id_invited',
        'id_sender'
    ];
}
