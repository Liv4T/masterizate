<?php

namespace App\Http\Controllers;

use App\Assistance;
use App\User;
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

    public function showAssistance(){
        $user_id = Auth::user()->id;
        $assistances = Assistance::where('id_teacher','=',$user_id)->orderBy('created_at')->get();
        $assistants = [];

        foreach ($assistances as $key => $assis) {
            $student = User::where('id','=',$assis->id_student)->first();
            $teacher = User::where('id','=',$assis->id_teacher)->first();

            array_push($assistants, [
                'id'           => $assis->id,
                'student_name' => $student->name.' '.$student->last_name,
                'teacher_name' => $teacher->name.' '.$teacher->last_name,
                'course'       => $assis->course,
                'assistance'   => $assis->assistance,
                'excuse'       => $assis->excuse,
                'other_motive' => $assis->other_motive,
                'motive'       => $assis->motive,
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
        $assistance->assistance = $request->assistance;
        $assistance->excuse = $request->excuse;
        $assistance->other_motive = $request->other_motive;
        $assistance->motive = $request->motive;

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

            array_push($assistants, [
                'id'           => $assis->id,
                'student_name' => $student->name.' '.$student->last_name,
                'teacher_name' => $teacher->name.' '.$teacher->last_name,
                'course'       => $assis->course,
                'assistance'   => $assis->assistance,
                'excuse'       => $assis->excuse,
                'other_motive' => $assis->other_motive,
                'motive'       => $assis->motive,
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
        $assistance->assistance = $request->assistance;
        $assistance->excuse = $request->excuse;
        $assistance->other_motive = $request->other_motive;
        $assistance->motive = $request->motive;

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
