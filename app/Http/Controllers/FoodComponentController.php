<?php

namespace App\Http\Controllers;

use App\FoodComponent;
use Auth;
use DB;
use Illuminate\Http\Request;

class FoodComponentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('foodComponent');
    }

    public function getFoodInformation(){
        $food = FoodComponent::all();
        return response()->json($food);
    }

    public function getCoursesAndStudents(){
        $user = Auth::user();
        if($user->new_coord_area === 'Primaria'){
            $filterPrimarySecundary = 6;
        }else if($user->new_coord_area === 'Secundaria'){
            $filterPrimarySecundary = 7;
        }

        if($user->new_coord_area === 'Primaria' || $user->new_coord_area === 'Secundaria'){
            $getCoursesAndStudents = DB::table('classroom')
            ->join('classroom_student','classroom_student.id_classroom','=','classroom.id')
            ->join('users','users.id','=','classroom_student.id_user')
            ->select(
                'classroom.id as id_classroom',
                'classroom.id_grade as id_grade',
                'classroom.name as grade',
                'classroom_student.id_user as id_student',
                'users.name as name_student',
                'users.last_name as lastName_student'
            )
            ->where('classroom.id_grade','<=',$filterPrimarySecundary)
            ->orderBy('grade')
            ->get();
            return response()->json($getCoursesAndStudents);
        }else if($user->new_coord_area === 'General'){
            $getCoursesAndStudents = DB::table('classroom')
            ->join('classroom_student','classroom_student.id_classroom','=','classroom.id')
            ->join('users','classroom_student.id_user','=','users.id')
            ->select(
                'classroom.id as id_classroom',
                'classroom.id_grade as id_grade',
                'classroom.name as grade',
                'classroom_student.id_user as id_student',
                'users.name as name_student',
                'users.last_name as lastName_student'
            )
            ->orderBy('grade')
            ->get();
            return response()->json($getCoursesAndStudents);
        }
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $newFood = new FoodComponent();
        $newFood->id_classroom = $request->id_classroom;
        $newFood->id_course = $request->id_course;
        $newFood->course = $request->course;
        $newFood->id_student = $request->id_student;
        $newFood->name_student = $request->name_student;
        $newFood->diet = $request->diet;
        $newFood->observation = $request->observation;

        $newFood->save();
        return response()->json('Dato de Alimento Guardado');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\FoodComponent  $foodComponent
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $updateFood = FoodComponent::findOrFail($id);
        $updateFood->id_classroom = $request->id_classroom;
        $updateFood->id_course = $request->id_course;
        $updateFood->course = $request->course;
        $updateFood->id_student = $request->id_student;
        $updateFood->name_student = $request->name_student;
        $updateFood->diet = $request->diet;
        $updateFood->observation = $request->observation;

        $updateFood->update();
        return response()->json('Dato de Alimento Actualizado');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\FoodComponent  $foodComponent
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $deleteFood = FoodComponent::findOrFail($id);
        $deleteFood->delete();
        return response()->json('Dato de Alimento Eliminado');
    }
}
