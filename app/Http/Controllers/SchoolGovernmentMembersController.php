<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SchoolGovernmentMembers;

class SchoolGovernmentMembersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $members = SchoolGovernmentMembers::all();
        return response()->json($members);
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
        $members = new SchoolGovernmentMembers();
        $members->member = $request->member;
        $members->position = $request->position;
        $members->description = $request->descrition;
        $members->save();
        return response()->json("Miembro Creado");
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
        $members = SchoolGovernmentMembers::findOrFail($id);
        $members->member = $request->member;
        $members->position = $request->position;
        $members->description = $request->descrition;
        $members->save();
        return response()->json("Miembro Creado");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $members = SchoolGovernmentMembers::findOrFail($id);
        $members->delete();
        return response()->json("Miembro Eliminado");
    }
}
