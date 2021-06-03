<?php

namespace App\Http\Controllers;

use App\PIARPlanification;
use Illuminate\Http\Request;

class PIARPlanificationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('piarPlanification');
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
     * @param  \App\PIARPlanification  $pIARPlanification
     * @return \Illuminate\Http\Response
     */
    public function show(PIARPlanification $pIARPlanification)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\PIARPlanification  $pIARPlanification
     * @return \Illuminate\Http\Response
     */
    public function edit(PIARPlanification $pIARPlanification)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\PIARPlanification  $pIARPlanification
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PIARPlanification $pIARPlanification)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\PIARPlanification  $pIARPlanification
     * @return \Illuminate\Http\Response
     */
    public function destroy(PIARPlanification $pIARPlanification)
    {
        //
    }
}
