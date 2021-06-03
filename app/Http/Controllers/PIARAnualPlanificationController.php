<?php

namespace App\Http\Controllers;

use App\PIARAnualPlanification;
use Illuminate\Http\Request;

class PIARAnualPlanificationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('piarAnualPlanification');
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
     * @param  \App\PIARAnualPlanification  $pIARAnualPlanification
     * @return \Illuminate\Http\Response
     */
    public function show(PIARAnualPlanification $pIARAnualPlanification)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\PIARAnualPlanification  $pIARAnualPlanification
     * @return \Illuminate\Http\Response
     */
    public function edit(PIARAnualPlanification $pIARAnualPlanification)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\PIARAnualPlanification  $pIARAnualPlanification
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PIARAnualPlanification $pIARAnualPlanification)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\PIARAnualPlanification  $pIARAnualPlanification
     * @return \Illuminate\Http\Response
     */
    public function destroy(PIARAnualPlanification $pIARAnualPlanification)
    {
        //
    }
}
