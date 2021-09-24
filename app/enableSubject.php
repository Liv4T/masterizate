<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class enableSubject extends Model
{
    protected $table = "enable_subjects";
    protected $guarded = ['id'];
    protected $fillable = [
        'id_area',
        'id_code',
        'date_payment',
        'date_enable_area',
    ];
}
