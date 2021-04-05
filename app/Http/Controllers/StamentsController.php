<?php

namespace App\Http\Controllers;

use App\Staments;
use Auth;
use Illuminate\Http\Request;

class StamentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('staments');
    }


    public function getStaments(){
        $user_id = Auth::user()->id;
        $staments = Staments::where('user_id','=',$user_id)->get();
        return response()->json($staments);
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
        $stament = new Staments;
        $stament->name = $request->name;
        $stament->member = $request->member;
        $stament->stament = $request->stament;
        $stament->rol = $request->rol;
        $stament->user_id = Auth::user()->id;
        $stament->save();
        return 'Estamento Guardado';
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Staments  $staments
     * @return \Illuminate\Http\Response
     */
    public function show(Staments $staments)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Staments  $staments
     * @return \Illuminate\Http\Response
     */
    public function edit(Staments $staments)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Staments  $staments
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, String $id)
    {
        $stament = Staments::findOrFail($id);
        $stament->name = $request->name;
        $stament->member = $request->member;
        $stament->stament = $request->stament;
        $stament->rol = $request->rol;
        $stament->update();
        return 'Estamento Actualizado';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Staments  $staments
     * @return \Illuminate\Http\Response
     */
    public function destroy(String $id)
    {
        $stament = Staments::findOrFail($id);
        $stament->delete();
        return 'Estamento Eliminado';
    }
}
