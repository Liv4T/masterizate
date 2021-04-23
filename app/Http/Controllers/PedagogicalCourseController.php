<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PedagogicalCourse;

class PedagogicalCourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('pedagogicalCourse');
    }

    public function getPedagogic(){
        $allPedagogic = PedagogicalCourse::all();
        return response()->json($allPedagogic);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $pedagogicalCourse = new PedagogicalCourse();
        $pedagogicalCourse->name_activity = $request->name_activity;
        $pedagogicalCourse->grade = $request->grade;
        $pedagogicalCourse->place = $request->place;
        $pedagogicalCourse->departure_time = $request->departure_time;
        $pedagogicalCourse->time_arrival = $request->time_arrival;
        $pedagogicalCourse->description = $request->description;
        $pedagogicalCourse->permission = $request->permission;

        $pedagogicalCourse->save();

        return response()->json('Salida Pedagogica Guardada');
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $pedagogicalCourse = PedagogicalCourse::findOrFail($id);
        $pedagogicalCourse->name_activity = $request->name_activity;
        $pedagogicalCourse->grade = $request->grade;
        $pedagogicalCourse->place = $request->place;
        $pedagogicalCourse->departure_time = $request->departure_time;
        $pedagogicalCourse->time_arrival = $request->time_arrival;
        $pedagogicalCourse->description = $request->description;
        $pedagogicalCourse->permission = $request->permission;

        $pedagogicalCourse->update();

        return response()->json('Salida Pedagogica Actualizada');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $pedagogicalCourse = PedagogicalCourse::findOrFail($id);
        $pedagogicalCourse->delete();
        return response()->json('Salida Pedagogica Eliminada');
    }
}
