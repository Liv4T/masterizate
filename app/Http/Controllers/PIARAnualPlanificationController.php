<?php

namespace App\Http\Controllers;

use App\PIARAnualPlanification;
use Illuminate\Http\Request;
use Auth;

class PIARAnualPlanificationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // return view('piarAnualPlanification');
    }

    public function getData(){
        $user_id = Auth::user()->id;
        $getPlanif = PIARAnualPlanification::where('id_teacher','=',$user_id)->orderBy('created_at','DESC')->take(1)->get();
        return response()->json($getPlanif);
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
        $user_id = Auth::user()->id;
        $PIARAnualPlanification = new PIARAnualPlanification;
        $PIARAnualPlanification->id_area = $request->id_area;
        $PIARAnualPlanification->id_classroom = $request->id_classroom;
        $PIARAnualPlanification->logros = $request->logros;
        $PIARAnualPlanification->trimestres = $request->trimestres;
        $PIARAnualPlanification->students = $request->students;
        $PIARAnualPlanification->id_teacher = $user_id;
        $PIARAnualPlanification->save();

        return response()->json('Planificación PIAR Guardada');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\PIARAnualPlanification  $pIARAnualPlanification
     * @return \Illuminate\Http\Response
     */
    public function show(PIARAnualPlanification $pIARAnualPlanification)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\PIARAnualPlanification  $pIARAnualPlanification
     * @return \Illuminate\Http\Response
     */
    public function edit(PIARAnualPlanification $pIARAnualPlanification)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\PIARAnualPlanification  $pIARAnualPlanification
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $PIARAnualPlanification = PIARAnualPlanification::findOrFail($id);
        $PIARAnualPlanification->id_area = $request->id_area;
        $PIARAnualPlanification->id_classroom = $request->id_classroom;
        $PIARAnualPlanification->logros = $request->logros;
        $PIARAnualPlanification->trimestres = $request->trimestres;
        $PIARAnualPlanification->students = $request->students;
        $PIARAnualPlanification->update();

        return response()->json('Planificación PIAR Actualizada');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\PIARAnualPlanification  $pIARAnualPlanification
     * @return \Illuminate\Http\Response
     */
    public function destroy(PIARAnualPlanification $pIARAnualPlanification)
    {
        $PIARAnualPlanification = PIARAnualPlanification::findOrFail($id);
        $PIARAnualPlanification->delete();
        return response()->json('Planificación PIAR Eliminada');
    }
}
