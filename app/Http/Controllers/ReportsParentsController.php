<?php

namespace App\Http\Controllers;

use App\ReportsParents;
use DB;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ReportsParentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('reportSendParents');
    }

    public function getAllRecentActivities(String $classroom_name, String $area_name){
        $data = DB::table('activity')
                ->join('class','activity.id_class','=','class.id')
                ->join('weekly_plan','class.id_weekly_plan','=','weekly_plan.id')
                ->join('area','weekly_plan.id_area','=','area.id')
                ->join('classroom','area.id_grade','=','classroom.id_grade')
                ->select(
                    'area.name as area_name',
                    'classroom.name as classroom_name',
                    'class.name as class_name',
                    'activity.name as activity_name',
                    'activity.description as activity_description',
                    'activity.delivery_max_date as activity_date',
                    'weekly_plan.driving_question as weekly_plan_driving_question',
                    'weekly_plan.observation as weekly_plan_observation',
                )->where('classroom.name','=',$classroom_name)
                 ->where('area.name','=',$area_name)
                 ->get();
        return response()->json($data);
    }

    public function getAllAssistances(String $area_name, String $classroom_name){
        $class_name = $area_name.' - '.$classroom_name;

        $data = DB::table('assistances')
                ->join('users','assistances.id_student','=','users.id')
                ->join('assitants_motives','assistances.id_motive','=','assitants_motives.id')
                ->select(
                    'assistances.course',
                    'users.name',
                    'assistances.id_motive',
                    'assitants_motives.motive'
                )
                ->where('assistances.course','=',$class_name)
                ->selectRaw('count(assitants_motives.motive) as count_assistances')
                ->selectRaw('count(assistances.course) as total_courses')
                ->groupBy('assistances.course','users.name','assistances.id_motive','assitants_motives.motive')
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
     * @param  \App\ReportsParents  $reportsParents
     * @return \Illuminate\Http\Response
     */
    public function show(ReportsParents $reportsParents)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ReportsParents  $reportsParents
     * @return \Illuminate\Http\Response
     */
    public function edit(ReportsParents $reportsParents)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ReportsParents  $reportsParents
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ReportsParents $reportsParents)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ReportsParents  $reportsParents
     * @return \Illuminate\Http\Response
     */
    public function destroy(ReportsParents $reportsParents)
    {
        //
    }
}
