<?php

namespace App\Http\Controllers;

use App\Effectiveness;
use App\User;
use Auth;
use Illuminate\Http\Request;

class EffectivenessController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('effectiveness');
    }

    public function getEffectiveness(){
        $user_id = Auth::user()->id;
        $effectiveness = Effectiveness::where('teacher_id','=',$user_id)->orderBy('course')->get();
        $effectivenessResult = [];

        foreach ($effectiveness as $key => $effectiv) {
            $student = User::where('id','=',$effectiv->student_id)->first();
            $teacher = User::where('id','=',$effectiv->teacher_id)->first();

            array_push($effectivenessResult, [
                'id'           => $effectiv->id,
                'id_student'   => $student->id,
                'student_name' => $student->name.' '.$student->last_name,
                'teacher_name' => $teacher->name.' '.$teacher->last_name,
                'course'       => $effectiv->course,
                'effectiveness'=> $effectiv->score_effectiveness,
            ]);
        }
        return response()->json($effectivenessResult);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $auth = Auth::user()->id;
        $effectiveness = new Effectiveness();
        $effectiveness->teacher_id = $auth;
        $effectiveness->student_id = $request->student_id;
        $effectiveness->course = $request->course;
        $effectiveness->score_effectiveness = $request->score_effectiveness;

        $effectiveness->save();

        return response()->json('Efectividad Guardada');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Effectiveness  $effectiveness
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $effectiveness = Effectiveness::findOrFail($id);
        return response()->json($effectiveness);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Effectiveness  $effectiveness
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $effectiveness = Effectiveness::findOrFail($id);
        $effectiveness->student_id = $request->student_id;
        $effectiveness->course = $request->course;
        $effectiveness->score_effectiveness = $request->score_effectiveness;

        $effectiveness->update();

        return response()->json('Efectividad Actualizada');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Effectiveness  $effectiveness
     * @return \Illuminate\Http\Response
     */
    public function destroy(Effectiveness $effectiveness)
    {
        $effectiveness = Effectiveness::findOrFail($id);
        $effectiveness->delete();

        return response()->json('Efectividad Eliminada');
    }
}
