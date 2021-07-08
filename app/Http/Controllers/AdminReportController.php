<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class AdminReportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
    }

    public function ReportWeeklyPlan(){
        $data = DB::table('weekly_plan')
            ->join('class','weekly_plan.id','=','class.id_weekly_plan')
            ->join('area','weekly_plan.id_area','=','area.id')
            ->join('classroom','weekly_plan.id_classroom','=','classroom.id')
            ->join('users','weekly_plan.id_teacher','=','users.id')
            ->select(
                'classroom.name as classroom_name',
                'users.name as user_name',
                'users.last_name as user_last_name',
                'weekly_plan.driving_question as driving_question',
                'class.name as class_name',
                'class.description as class_description',
                'area.name as area_name',
                'class.created_at as created_at'
            )
            ->orderBy('classroom.id')
            ->get();

        return response()->json($data);
    }

    public function ReportAnnualPlanification(){
        $data = DB::table('annual_planification')
            ->join('achievement_planification','annual_planification.id','=','achievement_planification.id_planification')
            ->join('users','annual_planification.id_teacher','=','users.id')
            ->join('area','annual_planification.id_area','=','area.id')
            ->join('classroom','annual_planification.id_classroom','=','classroom.id')
            ->select(
                'classroom.name as classroom_name',
                'users.name as user_name',
                'users.last_name as user_last_name',
                'achievement_planification.achievement as achievement_planification',
                'area.name as area_name',
                'annual_planification.created_at as created_at'
            )
            ->get();
        return response()->json($data);
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
