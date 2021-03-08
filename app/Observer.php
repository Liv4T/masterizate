<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Observer extends Model
{
    protected $table = "observers";
    protected $guarded = ['id'];
    protected $fillable = [
        'id_course',
        'name',
        'date_birth',
        'id_student',
        'size',
        'identification',
        'father_name',
        'mother_name',
        'office_father',
        'office_mother',
        'user_creator',
        'address',
        'phone',
    ];

    public function user(){
        return $this->hasOne(User::class);
    }
}
