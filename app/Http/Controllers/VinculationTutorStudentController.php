<?php

namespace App\Http\Controllers;

use App\VinculationTutorStudent;
use Illuminate\Http\Request;
use Auth;

class VinculationTutorStudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        $getVinculationsToStudents = VinculationTutorStudent::where('id_student','=', $user->id)->get();
        return response()->json($getVinculationsToStudents);
    }

    public function getVinculationsTutor()
    {
        $user = Auth::user();
        $getVinculationsToTutors = VinculationTutorStudent::where('id_tutor','=', $user->id)->get();
        return response()->json($getVinculationsToTutors);
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
        $newVinculation = new VinculationTutorStudent();
        $newVinculation->id_tutor = $request->id_tutor;
        $newVinculation->id_student = $request->id_student;
        $newVinculation->code_vinculated = $request->code_vinculated;
        $newVinculation->save();
        return response()->json("Vinculación Registrada");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\VinculationTutorStudent  $vinculationTutorStudent
     * @return \Illuminate\Http\Response
     */
    public function show(VinculationTutorStudent $vinculationTutorStudent)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\VinculationTutorStudent  $vinculationTutorStudent
     * @return \Illuminate\Http\Response
     */
    public function edit(VinculationTutorStudent $vinculationTutorStudent)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\VinculationTutorStudent  $vinculationTutorStudent
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $updateVinculation = VinculationTutorStudent::findOrFail($id);
        $updateVinculation->id_tutor = $request->id_tutor;
        $updateVinculation->id_student = $request->id_student;
        $updateVinculation->code_vinculated = $request->code_vinculated;
        $updateVinculation->update();
        return response()->json("Vinculación Actualizada");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\VinculationTutorStudent  $vinculationTutorStudent
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $destroyVinculation = VinculationTutorStudent::findOrFail($id);
        $destroyVinculation->delete();
        return response()->json('Vinculación Eliminada');
    }
}
