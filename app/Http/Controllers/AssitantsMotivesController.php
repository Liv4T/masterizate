<?php

namespace App\Http\Controllers;

use App\AssitantsMotives;
use Illuminate\Http\Request;
use Auth;

class AssitantsMotivesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('motiveAssistants');
    }

    public function getMotives()
    {
        if(Auth::user() &&  Auth::user()->type_user == 1 || Auth::user()->type_user == 2){
            $motivesAssistants = AssitantsMotives::all();
            return response()->json($motivesAssistants);
        }else{
            return response()->json('[]');
        }
        
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
        if(Auth::user() && Auth::user()->type_user == 1){
            $newassistantMotive = new AssitantsMotives();
            $newassistantMotive->motive = $request->motive;
            $newassistantMotive->save();

            return response()->json('Motivo de falta de asistencia Guardado');
        }else{
            return response()->json('No tiene permisos para Realizar esta acción');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\AssitantsMotives  $assitantsMotives
     * @return \Illuminate\Http\Response
     */
    public function show(AssitantsMotives $assitantsMotives)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\AssitantsMotives  $assitantsMotives
     * @return \Illuminate\Http\Response
     */
    public function edit(AssitantsMotives $assitantsMotives)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\AssitantsMotives  $assitantsMotives
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if(Auth::user() && Auth::user()->type_user == 1){
            $newassistantMotive = AssitantsMotives::findOrFail($id);
            $newassistantMotive->motive = $request->motive;
            $newassistantMotive->update();

            return response()->json('Motivo de falta de asistencia Actualizado');
        }else{
            return response()->json('No tiene permisos para realizar esta acción');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\AssitantsMotives  $assitantsMotives
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $newassistantMotive = AssitantsMotives::findOrFail($id);
        $newassistantMotive->delete();

        return response()->json('Motivo de falta de asistencia Eliminado');
    }
}
