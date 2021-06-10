<?php

namespace App\Http\Controllers;

use App\PIARClass;
use Illuminate\Http\Request;

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
        $classPIAR = new PIARClass;
        $classPIAR->create($request->all());
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
        $classPIAR->update($request->all());
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
