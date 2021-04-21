<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class CoordinatorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     *  Return a consult from students of Primary
    */

    public function showPrimaryStudents(){
        $primary = DB::select('call obtener_materias_grados_primaria()')->get();
        return response()->json($primary);
    }

    /**
     *  Return a consult from students of Secundary
    */

    public function showSecundaryStudents(){
        $secundary = DB::select('call obtener_materias_grados_secundaria()')->get();
        return response()->json($secundary);
    }

    /**
     *  Return a consult from students
    */

    public function showStudentsGrade(){
        $allGrade = DB::select('call obtener_materias_grados()')->get();
        return response()->json($allGrade);
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
