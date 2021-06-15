<?php

namespace App\Http\Controllers;

use App\PIAR;
use App\User;
use Illuminate\Http\Request;

class PIARController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('piar');
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\PIAR  $pIAR
     * @return \Illuminate\Http\Response
     */
    public function show(PIAR $pIAR)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\PIAR  $pIAR
     * @return \Illuminate\Http\Response
     */
    public function edit(PIAR $pIAR)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\PIAR  $pIAR
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $userUpdate = User::findOrFail($id);
        $userUpdate->isPiar = $request->isPiar;
        $userUpdate->save();
        return response()->json('Estudiante PIAR Registrado');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\PIAR  $pIAR
     * @return \Illuminate\Http\Response
     */
    public function destroy(PIAR $pIAR)
    {
        //
    }
}
