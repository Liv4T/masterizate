<?php

namespace App\Http\Controllers;

use App\PIARClass;
use Illuminate\Http\Request;
use Auth;

class PIARClassController extends Controller
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

    public function getClass(){
        $user_id = Auth::user()->id;
        $classesPiar = PIARClass::where('teacher_id','=',$user_id)->get();
        return response()->json($classesPiar);
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
        $classPIAR = new PIARClass;
        $classPIAR->activities = $request->activities;
        $classPIAR->content = $request->content;
        $classPIAR->description = $request->description;
        $classPIAR->hourly_intensity = $request->hourly_intensity;
        $classPIAR->name = $request->name;
        $classPIAR->state = $request->state;
        $classPIAR->teacher_id = $user_id;
        $classPIAR->save();
        return response()->json("Clase para estudiantes PIAR Guardado");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\PIARClass  $pIARClass
     * @return \Illuminate\Http\Response
     */
    public function show(PIARClass $pIARClass)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\PIARClass  $pIARClass
     * @return \Illuminate\Http\Response
     */
    public function edit(PIARClass $pIARClass)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\PIARClass  $pIARClass
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $classPIAR = PIARClass::findOrFail($id);
        $classPIAR->activities = $request->activities;
        $classPIAR->content = $request->content;
        $classPIAR->description = $request->description;
        $classPIAR->hourly_intensity = $request->hourly_intensity;
        $classPIAR->name = $request->name;
        $classPIAR->state = $request->state;        
        $classPIAR->update();
        return response()->json("Clase para estudiantes PIAR Actualizado");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\PIARClass  $pIARClass
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $classPIAR = PIARClass::findOrFail($id);
        $classPIAR->delete();
        return response()->json("Clase para estudiantes PIAR Eliminado");
    }
}
