<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\user;
class LectiveActivityQuestion extends Model
{
    protected $table = 'lective_activity_question';

    protected $fillable = [
        'id_lective_activity','question','type_question','content','correct_answer','justify','state','deleted','updated_user'
    ];
}
