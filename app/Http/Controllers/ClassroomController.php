<?php

namespace App\Http\Controllers;

use App\Classroom; 
use App\ClassroomStudent;
use App\User;
use Illuminate\Http\Request;

class ClassroomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function classroomByInstitution($id){
        
        $classroom = Classroom::where('id_institution', $id)->get();

        foreach ($classroom as $index => $classR) {
            $class[$index] = [
                "id" => $classR->id,
                "id_grade" => $classR->id_grade,
                "name" => $classR->name,
            ];
        }
        return response()->json($class);
    }

     /**
     * Display a listing of the resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function studentsForClassroom($id){
        $students = [];
        $classroom_student = ClassroomStudent::where('id_classroom', $id)->get();
        $classroom = Classroom::find($id);
        foreach($classroom_student as $index => $class){
            $student = User::findOrFail($class->id_user);

            $students[$index] = [
                "id" => $student->id,
                "name" => $student->name,
                "last_name" => $student->last_name,
                "type_user" => $student->type_user,
                "picture" => $student->picture,
                "email" => $student->email,
                "classroomName" => $classroom->name,
            ];

        }

        return response()->json($students);

    }
}
