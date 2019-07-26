<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'last_name', 'password', 'age', 'birthday',  'user_name', 'email', 'id_categories', 'id_subcategories', 'type_user', 'address', 'picture', 'phone', 'id_number','country',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
    public function message()
    {
        return $this->hasMany('App\Message');
    }
    public function isModerator()
    {
        return $this->type_user === '2';
    }

    /**
     * Returns whether a user has a role of 'admin'
     *
     * @return boolean
     */
    public function isAdmin()
    {
        return $this->type_user === '1';
    }

    /**
     * Returns whether a user has a role of 'moderator' or 'admin'
     *
     * @return boolean
     */
   

    /**
     * Returns a user's role
     *
     * @return string
     */
    public function role()
    {
        return $this->type_user;
    }
}
