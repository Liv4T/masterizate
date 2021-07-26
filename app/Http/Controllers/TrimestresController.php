<?php

namespace App\Http\Controllers;

use App\Trimestres;
use Illuminate\Http\Request;

class TrimestresController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Trimestres::all();
        return response()->json($data);
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
        $trimestres = new Trimestres();
        $trimestres->name = $request->name;
        $trimestres->save();

        return response()->json('Trimestre Guardado');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Trimestres  $trimestres
     * @return \Illuminate\Http\Response
     */
    public function show(Trimestres $trimestres)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Trimestres  $trimestres
     * @return \Illuminate\Http\Response
     */
    public function edit(Trimestres $trimestres)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Trimestres  $trimestres
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $trimestres = Trimestres::findOrFail($id);
        $trimestres->name = $request->name;
        $trimestres->update();

        return response()->json('Trimestre Actualizado');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Trimestres  $trimestres
     * @return \Illuminate\Http\Response
     */
    public function destroy(Trimestres $trimestres)
    {
        $trimestres = Trimestres::findOrFail($id);
        $trimestres->name = $request->name;
        $trimestres->delete();

        return response()->json('Trimestre Eliminado');
    }
}
