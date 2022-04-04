<?php

namespace App\Http\Controllers;

use App\TutorClassroom;
use Illuminate\Http\Request;

class TutorClassroomController extends Controller
{
    public function nameClassroom(String $id_classroom)
    {
        $nameClassroom = TutorClassroom::where('id',$id_classroom)->first();

        return $nameClassroom->name;
    }
}
