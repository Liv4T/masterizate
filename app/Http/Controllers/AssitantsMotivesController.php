<?php

namespace App\Http\Controllers;

use App\AssitantsMotives;
use Illuminate\Http\Request;

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
        $motivesAssistants = AssitantsMotives::all();
        return response()->json($motivesAssistants);
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
        $newassistantMotive = new AssitantsMotives();
        $newassistantMotive->motive = $request->motive;
        $newassistantMotive->save();

        return response()->json('Motivo de falta de asistencia Guardado');
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
        $newassistantMotive = AssitantsMotives::findOrFail($id);
        $newassistantMotive->motive = $request->motive;
        $newassistantMotive->update();

        return response()->json('Motivo de falta de asistencia Actualizado');
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
