<?php

namespace App\Http\Controllers;

use App\DeleteClassAndCicles;
use Illuminate\Http\Request;

class DeleteClassAndCiclesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('deleteClassAndCicles');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $deleteClassAndCicles = new DeleteClassAndCicles();
        $deleteClassAndCicles->id_class = $request->id_class;
        $deleteClassAndCicles->id_cicle = $request->id_cicle;
        $deleteClassAndCicles->date_to_activate_btn = $request->date_to_activate_btn;
        $deleteClassAndCicles->save();

        return response()->json('Dato Guardado, se habilitara la opción para eliminar las clases o cicles en la fecha establecida.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\DeleteClassAndCicles  $deleteClassAndCicles
     * @return \Illuminate\Http\Response
     */
    public function show(DeleteClassAndCicles $deleteClassAndCicles)
    {
        //
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\DeleteClassAndCicles  $deleteClassAndCicles
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $deleteClassAndCicles = DeleteClassAndCicles::find($id);
        $deleteClassAndCicles->id_class = $request->id_class;
        $deleteClassAndCicles->id_cicle = $request->id_cicle;
        $deleteClassAndCicles->date_to_activate_btn = $request->date_to_activate_btn;
        $deleteClassAndCicles->update();

        return response()->json('Dato Actualizado, se habilitara la opción para eliminar las clases o cicles en la fecha establecida.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\DeleteClassAndCicles  $deleteClassAndCicles
     * @return \Illuminate\Http\Response
     */
    public function destroy(DeleteClassAndCicles $deleteClassAndCicles)
    {
        $deleteClassAndCicles = DeleteClassAndCicles::find($id);
        $deleteClassAndCicles->id_class = $request->id_class;
        $deleteClassAndCicles->id_cicle = $request->id_cicle;
        $deleteClassAndCicles->date_to_activate_btn = $request->date_to_activate_btn;
        $deleteClassAndCicles->destroy();

        return response()->json('Dato Eliminado');
    }
}
