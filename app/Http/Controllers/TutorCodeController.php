<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TutorCode;
use App\ClassroomStudent;

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

    public function getClassroomStudent($id_user){
        $classroom = ClassroomStudent::where('id_user','=',$id_user)->get();
        return response()->json($classroom);
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
        $newTutorCode->id_class = $request->id_class;
        $newTutorCode->id_classroom = $request->id_classroom;
        $newTutorCode->text = $request->text;
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
        $updateTutorCode->id_class = $request->id_class;
        $updateTutorCode->id_classroom = $request->id_classroom;
        $updateTutorCode->text = $request->text;
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
