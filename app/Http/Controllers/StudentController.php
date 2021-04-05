<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Support\Facades\Auth;

class StudentController extends Controller
{

    public function get(int $student_id){
        $auth = Auth::user();

        if(!isset($auth)) return  response()->json([]);


        $student=User::find($student_id);


        return  response()->json($student);
    }

    public function student(int $id){

        $student=User::find($id);

        $students[0] = [
            "id" => $student->id,
            "name" => $student->name,
            "last_name" => $student->last_name,
            "picture" => $student->picture,
            "email" => $student->email,
        ];

        return  response()->json($students);
    }
}
