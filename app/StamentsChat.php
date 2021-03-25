<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StamentsChat extends Model
{
    protected $table = ['staments_chats'];
    protected $guarded = ['id'];
    protected $fillable = ['chat','message','member'];
}
