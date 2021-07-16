<?php

namespace App\Http\Controllers;

use App\CalificationLectivesActivities;
use Auth;
use DB;
use Illuminate\Http\Request;

class CalLectivesActivitiesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
    }

    public function getNotesStudents(){
        $student = Auth::user();

        $data = DB::table('calification_lectives_activities')
                ->join('lective_activity','calification_lectives_activities.id_lective_activity','=','lective_activity.id')
                ->join('lective_activity_question','lective_activity.id','=','lective_activity_question.id_lective_activity')
                ->join('users','calification_lectives_activities.id_student','=','users.id')
                ->select(
                    'lective_activity.name as activity_name',
                    'lective_activity_question.question as question',
                    'calification_lectives_activities.calification as calification',
                    'users.name as user_name',
                    'users.last_name as user_last_name',
                    'users.email as user_email',
                    'users.picture as user_picture'
                )
                ->where('users.id','=',$student->id)
                ->get();
        return response()->json($data);
    }

    public function getLectivesActivitiesCal(String $lective_planification){
        $data = DB::table('Lective_planification')
                ->join('lective_collection','lective_planification.id_lective','=','lective_collection.id')
                ->join('lective_weekly_plan','lective_planification.id','=','lective_weekly_plan.id_lective_planification')
                ->join('lective_class','lective_weekly_plan.id','=','lective_class.id_lective_weekly_plan')
                ->join('lective_activity','lective_class.id','=','lective_activity.id_lective_class')
                ->join('lective_activity_question','lective_activity.id','=','lective_activity_question.id_lective_activity')
                ->join('lective_activity_question_answer','lective_activity_question.id','=','lective_activity_question_answer.id_lective_activity_question')
                ->join('users','lective_activity_question_answer.id_student','=','users.id')
                ->leftJoin('calification_lectives_activities','lective_planification.id','=','calification_lectives_activities.id_lective_planification')
                ->select(
                    'lective_planification.id as lective_planification_id',
                    
                    'lective_collection.id as lective_collection_id',
                    'lective_collection.name as lective_collection_name',

                    'lective_weekly_plan.id as lective_weekly_id',
                    'lective_weekly_plan.name as lective_weekly_name',

                    'lective_class.id as lective_class_id',
                    'lective_class.name as lective_class_name',

                    'lective_activity.id as lective_activity_id',
                    'lective_activity.name as lective_activity_name',
                    'lective_activity.activity_type as lective_activity_activity_type',

                    'lective_activity_question.id as lective_activity_question_id',
                    'lective_activity_question.question as lective_activity_question_question',
                    'lective_activity_question.type_question as lective_activity_question_type_question',
                    
                    'users.id as student_id',
                    'users.name as student_name',
                    'users.last_name as student_last_name',

                    'lective_activity_question_answer.id as lective_activity_question_answer_id',
                    'lective_activity_question_answer.response as lective_activity_question_answer_response',
                    'lective_activity_question_answer.is_correct as lective_activity_question_answer_is_correct',
                    'lective_activity_question_answer.created_at as lective_activity_question_answer_created_at',
                    
                    'calification_lectives_activities.id as calification_lectives_activities_id',
                    'calification_lectives_activities.calification as calification'
                )
                ->where('lective_planification.id','=', $lective_planification)
                ->orderBy('lective_activity_question_answer.created_at','DESC')
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
        $user = Auth::user();
        $calification = new CalificationLectivesActivities();
        $calification->id_lective_planification = $request->id_lective_planification;
        $calification->id_lective_activity = $request->id_lective_activity;
        $calification->id_teacher = $user->id;
        $calification->id_student = $request->id_student;
        $calification->calification = $request->calification;

        $calification->save();

        return response()->json('Calificación Registrada');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CalificationLectivesActivities  $calificationLectivesActivities
     * @return \Illuminate\Http\Response
     */
    public function show(CalificationLectivesActivities $calificationLectivesActivities)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CalificationLectivesActivities  $calificationLectivesActivities
     * @return \Illuminate\Http\Response
     */
    public function edit(CalificationLectivesActivities $calificationLectivesActivities)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CalificationLectivesActivities  $calificationLectivesActivities
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $calification = CalificationLectivesActivities::findOrFail($id);
        $calification->id_lective_planification = $request->id_lective_planification;
        $calification->id_lective_activity = $request->id_lective_activity;
        $calification->id_student = $request->id_student;
        $calification->calification = $request->calification;

        $calification->update();

        return response()->json('Calificación Actualizada');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CalificationLectivesActivities  $calificationLectivesActivities
     * @return \Illuminate\Http\Response
     */
    public function destroy(CalificationLectivesActivities $calificationLectivesActivities)
    {

    }
}
