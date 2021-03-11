<?php

namespace App\Http\Controllers;

use App\SchoolGovernment;
use Illuminate\Http\Request;

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
    public function update(Request $request, SchoolGovernment $schoolGovernment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SchoolGovernment  $schoolGovernment
     * @return \Illuminate\Http\Response
     */
    public function destroy(SchoolGovernment $schoolGovernment)
    {
        //
    }
}
