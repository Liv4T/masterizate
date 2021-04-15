<?php

namespace App\Http\Controllers;

use App\DeleteClassAndCicles;
use Illuminate\Http\Request;
use DB;

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

    public function getPermissions(){
        $permissions = DB::table('delete_class_and_cicles')->orderBy('id','DESC')->get();
        return response()->json($permissions);
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
        $deleteClassAndCicles->id_cicle = $request->id_cicle;
        $deleteClassAndCicles->date_to_activate_btn = $request->date_to_activate_btn;
        $deleteClassAndCicles->date_to_deactivate_btn = $request->date_to_deactivate_btn;
        $deleteClassAndCicles->text = $request->text;
        $deleteClassAndCicles->class_selected = $request->class_selected;
        $deleteClassAndCicles->area_selected = $request->area_selected;
        $deleteClassAndCicles->save();

        return response()->json('Dato Guardado, se habilitara la opción en la fecha establecida.');
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
        $deleteClassAndCicles->id_cicle = $request->id_cicle;
        $deleteClassAndCicles->date_to_activate_btn = $request->date_to_activate_btn;
        $deleteClassAndCicles->date_to_deactivate_btn = $request->date_to_deactivate_btn;
        $deleteClassAndCicles->text = $request->text;
        $deleteClassAndCicles->class_selected = $request->class_selected;
        $deleteClassAndCicles->area_selected = $request->area_selected;
        $deleteClassAndCicles->update();

        return response()->json('Dato Actualizado, se habilitara la opción en la fecha establecida.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\DeleteClassAndCicles  $deleteClassAndCicles
     * @return \Illuminate\Http\Response
     */
    public function destroy(String $id)
    {
        $deleteClassAndCicles = DeleteClassAndCicles::findOrFail($id);
        $deleteClassAndCicles->delete();

        return response()->json('Dato Eliminado');
    }
}
