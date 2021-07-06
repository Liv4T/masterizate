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

    public function getAllRecentActivities(String $area_id){
        $actual_date = Carbon::today();
        
        $data = DB::table('activity')
                ->join('class','activity.id_class','=','class.id')
                ->join('weekly_plan','class.id_weekly_plan','=','weekly_plan.id')
                ->join('area','weekly_plan.id_area','=','area.id')
                ->join('classroom','weekly_plan.id_classroom','=','classroom.id')
                // ->join('annual_planification','classroom.id','=','annual_planification.id_classroom')
                ->join('achievement_planification','achievement_planification.id','=','activity.id_achievement')
                ->select(
                    'area.name as area_name',
                    'classroom.name as classroom_name',
                    'class.name as class_name',
                    'achievement_planification.achievement as logro',
                    'achievement_planification.percentage as percentage',
                    'activity.name as activity_name',
                    'activity.description as activity_description',
                    'activity.delivery_max_date as activity_date',
                    'weekly_plan.driving_question as weekly_plan_driving_question',
                    'weekly_plan.observation as weekly_plan_observation',
                )
                 ->where('area.id','=',$area_id)
                 ->where('activity.delivery_max_date','>=',$actual_date)
                 ->first();
        return response()->json($data);
    }

    public function getAllAssistances(String $user_name){
        $data = DB::table('assistances')
                ->join('users','assistances.id_student','=','users.id')
                ->join('assitants_motives','assistances.id_motive','=','assitants_motives.id')
                ->select(
                    'assistances.course',
                    'users.name',
                    'assistances.id_motive',
                    'assitants_motives.motive'
                )
                ->where('users.name','=',$user_name)
                ->selectRaw('count(assitants_motives.motive) as count_assistances')
                ->selectRaw('count(assistances.course) as total_assistances')
                ->groupBy('assistances.course','users.name','assistances.id_motive','assitants_motives.motive')
                ->get();

        return response()->json($data);
    }

    public function getNotesBySudentAndArea($id_student){
        $data = DB::table('score_cumulative')
                  ->join('users','score_cumulative.id_user','=','users.id')
                  ->join('area','score_cumulative.id_area','=','area.id')
                  ->join('classroom_student','users.id','=','classroom_student.id_user')
                  ->join('classroom','classroom_student.id_classroom','=','classroom.id')
                  ->select(
                      'users.id as user_id',
                      'users.name as student_name',
                      'users.last_name as student_last_name',
                      'area.name as area_name',
                      'classroom.name as classroom_name',
                      'score_cumulative.score as score'
                  )
                  ->where('users.id','=',$id_student)
                  ->orderBy('score_cumulative.created_at','ASC')
                  ->first();
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
