<?php

namespace App\Http\Controllers;

use App\Assistance;
use App\User;
use App\Area;
use App\Classroom;
use App\AssitantsMotives;
use Illuminate\Http\Request;
use Auth;
class AssistanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('assistance'); 
    }

    public function getClassroom(String $area_id, String $classroom_id){
        $data = [];
        $area = Area::where('id',$area_id)->first();
        $classroom = Classroom::where('id',$classroom_id)->first();

        array_push($data,[
            "area_name" => $area->name,
            "classroom_name" => $classroom->name
        ]);

        return response()->json($data);
    }

    public function showAssistance(String $classroom_name){
        $user_id = Auth::user()->id;
        $assistances = Assistance::where('id_teacher',$user_id)->where('course',$classroom_name)->orderBy('course')->get();
        $assistants = [];

        foreach ($assistances as $key => $assis) {
            $student = User::where('id','=',$assis->id_student)->first();
            $teacher = User::where('id','=',$assis->id_teacher)->first();
            if($assis->id_motive !== null){
                $motives = AssitantsMotives::where('id',$assis->id_motive)->first();
            }

            array_push($assistants, [
                'id'           => $assis->id,
                'id_student'   => $student->id,
                'student_name' => $student->name.' '.$student->last_name,
                'teacher_name' => $teacher->name.' '.$teacher->last_name,
                'course'       => $assis->course,
                'motive'       => isset($motives) ? $motives->motive : '',
                'id_motive'    => isset($motives) ? $motives->id : '',
                'created_at'   => $assis->created_at
            ]);
        }
        return response()->json($assistants);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $assistance = new Assistance();
        $assistance->course = $request->course;
        $assistance->id_student = $request->id_student;
        $assistance->id_teacher = $request->id_teacher;
        $assistance->id_motive = $request->id_motive;
        $assistance->id_area = $request->id_area;
        $assistance->id_classroom = $request->id_classroom;

        $assistance->save();

        return response()->json('Asistencia Registrada');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Assistance  $assistance
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $assistant = Assistance::where('id','=',$id)->get();
        $assistants = [];

        foreach ($assistant as $key => $assis) {
            $student = User::where('id','=',$assis->id_student)->first();
            $teacher = User::where('id','=',$assis->id_teacher)->first();
            if($assis->id_motive !== null){
                $motives = AssitantsMotives::where('id',$assis->id_motive)->first();
            }

            array_push($assistants, [
                'id'           => $assis->id,
                'id_student'   => $student->id,
                'student_name' => $student->name.' '.$student->last_name,
                'teacher_name' => $teacher->name.' '.$teacher->last_name,
                'course'       => $assis->course,
                'motive'       => isset($motives) ? $motives->motive : '',
                'id_motive'    => isset($motives) ? $motives->id : '',
                'id_area'      => $motives->id_area,
                'id_classroom' => $motives->id_classroom,
                'created_at'   => $assis->created_at
            ]);
        }
        return response()->json($assistants);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Assistance  $assistance
     * @return \Illuminate\Http\Response
     */
    public function edit(Assistance $assistance)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Assistance  $assistance
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $assistance = Assistance::findOrFail($id);
        $assistance->id_motive = $request->id_motive;
        $assistance->id_area = $request->id_area;
        $assistance->id_classroom = $request->id_classroom;

        $assistance->update();

        return response()->json('Asistencia Actualizada');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Assistance  $assistance
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $assistance = Assistance::findOrFail($id);
        $assistance->delete();

        return response()->json('Asistencia Eliminada');
    }
}
