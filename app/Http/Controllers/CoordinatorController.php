<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class CoordinatorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('materiasCoord');
    }

    /**
     *  Return a consult from students of Primary
    */

    public function showPrimaryStudents(){
        $primary = DB::select('call obtener_materias_grados_primaria()');
        return response()->json($primary);
    }

    /**
     *  Return a consult from students of Secundary
    */

    public function showSecundaryStudents(){
        $secundary = DB::select('call obtener_materias_grados_secundaria()');
        return response()->json($secundary);
    }

    /**
     *  Return a consult from students
    */

    public function showStudentsGrade(){
        $allGrade = DB::select('call obtener_materias_grados()');
        return response()->json($allGrade);
    }

    /*
        return the courses for primary Courses
    */
    public function getPrimaryCourses(){
        $primary = DB::table('weekly_plan')
            ->join('area','area.id','=','weekly_plan.id_area')
            ->join('classroom','classroom.id','=','weekly_plan.id_classroom')
            ->select('classroom.id_grade as id_grade','area.name AS materia','classroom.name AS grade','weekly_plan.driving_question AS ciclo','weekly_plan.class_development AS class')
            ->where('classroom.id_grade','<=',6)
            ->orderBy('id_grade')
            ->get();
        return response()->json($primary);
    }
    /* 
        return thoe courses for secundary Courses
    */
    public function getSecundaryCourses(){
        $secundary = DB::table('weekly_plan')
            ->join('area','area.id','=','weekly_plan.id_area')
            ->join('classroom','classroom.id','=','weekly_plan.id_classroom')
            ->select('classroom.id_grade as id_grade','area.name AS materia','classroom.name AS grade','weekly_plan.driving_question AS ciclo','weekly_plan.class_development AS class')
            ->where('classroom.id_grade','>=',7)
            ->orderBy('id_grade')
            ->get();
        return response()->json($secundary);
    }

    /*
        return all Courses
    */
    public function getAllCourses(){
        $allCourses = DB::table('weekly_plan')
            ->join('area','area.id','=','weekly_plan.id_area')
            ->join('classroom','classroom.id','=','weekly_plan.id_classroom')
            ->select('classroom.id_grade as id_grade','area.name AS materia','classroom.name AS grade','weekly_plan.driving_question AS ciclo','weekly_plan.class_development AS class')
            ->orderBy('id_grade')
            ->get();
        return response()->json($allCourses);
    }

    public function getStudentsPrimary(){
        $primary = DB::table('classroom')
            ->join('grade','classroom.id_grade','=','grade.id')
            ->join('classroom_student','classroom.id','=','classroom_student.id_classroom')
            ->join('users','classroom_student.id_user','=','users.id')
            ->select('classroom.id_grade as id_grade','grade.name as grade','classroom.name as course','classroom_student.id_user as user_id','users.name','users.last_name')
            ->where('classroom.id_grade','<=',6)
            ->orderBy('grade')
            ->get();
        return response()->json($primary);
    }

    public function getStudentsSecundary(){
        $secundary = DB::table('classroom')
            ->join('grade','classroom.id_grade','=','grade.id')
            ->join('classroom_student','classroom.id','=','classroom_student.id_classroom')
            ->join('users','classroom_student.id_user','=','users.id')
            ->select('classroom.id_grade as id_grade','grade.name as grade','classroom.name as course','classroom_student.id_user as user_id','users.name','users.last_name')
            ->where('classroom.id_grade','>=',7)
            ->orderBy('grade')
            ->get();
        return response()->json($secundary);
    }

    public function getAllStudents(){
        $primary = DB::table('classroom')
            ->join('grade','classroom.id_grade','=','grade.id')
            ->join('classroom_student','classroom.id','=','classroom_student.id_classroom')
            ->join('users','classroom_student.id_user','=','users.id')
            ->select('classroom.id_grade as id_grade','grade.name as grade','classroom.name as course','classroom_student.id_user as user_id','users.name','users.last_name')
            ->orderBy('grade')
            ->get();
        return response()->json($primary);
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
    }
}
