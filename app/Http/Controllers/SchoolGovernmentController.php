<?php

namespace App\Http\Controllers;

use App\SchoolGovernment;
use Illuminate\Http\Request;
use App\User;
use Auth;

class SchoolGovernmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view("schoolGovernment");
    }

    public function getLegislation(){
        $user_id = Auth::user()->id;
        $school = SchoolGovernment::where('user_id','=',$user_id)->get();
        return response()->json($school);
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
        $school = new SchoolGovernment;
        $school->legislation = $request->legislation;
        $school->user_id = $request->user_id;
        $school->save();
        return response()->json("Legislación Creada");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\SchoolGovernment  $schoolGovernment
     * @return \Illuminate\Http\Response
     */
    public function show(SchoolGovernment $schoolGovernment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SchoolGovernment  $schoolGovernment
     * @return \Illuminate\Http\Response
     */
    public function edit(SchoolGovernment $schoolGovernment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SchoolGovernment  $schoolGovernment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $school = SchoolGovernment::findOrFail($id);
        $school->legislation = $request->legislation;
        $school->save();
        return response()->json("Legislación Creada");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SchoolGovernment  $schoolGovernment
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        $legislation = SchoolGovernment::findOrFail($id);
        $legislation->delete();
        return response()->json("Dato Eliminado");
    }
}
