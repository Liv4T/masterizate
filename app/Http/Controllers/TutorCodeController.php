<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TutorCode;

class TutorCodeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tutorCode = TutorCode::all();
        return response()->json($tutorCode);
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
        $newTutorCode = new TutorCode();
        $newTutorCode->name = $request->name;
        $newTutorCode->description = $request->description;
        $newTutorCode->code = $request->code;
        $newTutorCode->course = $request->course;
        $newTutorCode->date = $request->date;
        $newTutorCode->save();
        return response()->json('Codigo Creado');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $updateTutorCode = TutorCode::findOrFail($id);
        $updateTutorCode->name = $request->name;
        $updateTutorCode->description = $request->description;
        $updateTutorCode->code = $request->code;
        $updateTutorCode->course = $request->course;
        $updateTutorCode->date = $request->date;
        $updateTutorCode->update();
        return response()->json('Codigo Actualizado');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $deleteTutorCode = TutorCode::findOrFail($id);
        $deleteTutorCode->delete();
        return response()->json('Codigo Eliminado');
    }
}
