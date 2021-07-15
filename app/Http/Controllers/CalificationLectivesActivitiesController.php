<?php

namespace App\Http\Controllers;

use App\CalificationLectivesActivities;
use Auth;
use DB;
use Illuminate\Http\Request;

class CalificationLectivesActivitiesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $user = Auth::user();
        $calification = new CalificationLectivesActivities();
        $calification->id_lective_activity = $request->id_lective_activity;
        $calification->id_teacher = $user->id;
        $calification->id_student = $request->id_student;
        $calification->calification = $request->calification;

        $calification->save();

        return response()->json('Calificación Registrada');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CalificationLectivesActivities  $calificationLectivesActivities
     * @return \Illuminate\Http\Response
     */
    public function show(CalificationLectivesActivities $calificationLectivesActivities)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CalificationLectivesActivities  $calificationLectivesActivities
     * @return \Illuminate\Http\Response
     */
    public function edit(CalificationLectivesActivities $calificationLectivesActivities)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CalificationLectivesActivities  $calificationLectivesActivities
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $calification = CalificationLectivesActivities::findOrFail($id);
        $calification->id_lective_activity = $request->id_lective_activity;
        $calification->id_student = $request->id_student;
        $calification->calification = $request->calification;

        $calification->update();

        return response()->json('Calificación Actualizada');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CalificationLectivesActivities  $calificationLectivesActivities
     * @return \Illuminate\Http\Response
     */
    public function destroy(CalificationLectivesActivities $calificationLectivesActivities)
    {
        $calification = CalificationLectivesActivities::findOrFail($id);
        $calification->delelte();

        return response()->json('Calificación Eliminada');
    }
}
