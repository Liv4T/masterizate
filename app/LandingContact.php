<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LandingContact extends Model
{
    protected $table = 'landing_contact';

    protected $fillable = ['name','email','phone','school','city'];


    public $timestamps = false;


}
