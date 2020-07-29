<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ScoreController extends Controller
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
    public function saveIndicator(Request $request)
    {
        $data = $request->all();

        $indicator = New Indicator;

        $indicator->id_annual = $data['id_annual'];
        $indicator->type_activity = $data['type_activity'];
        $indicator->activity_rate = $data['activity_rate'];
        $indicator->save()

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $user = Auth::user();

        $scoreActivity = New ScoreActivity;

        $scoreActivity->id_user = $user->id;
        $scoreActivity->score = $data['score'];
        $scoreActivity->id_indicator = $data['id_indicator'];
        $scoreActivity->save();

        $indicator = Indicator::find($data['id_indicator']);
        $score_indicator = ($indicator->activity_rate/100);

        $scoreAnual = ScoreAnual::where('id_user',$user->id)->where('id_annual',$indicator->id_annual)->first();
        if(isset($scoreAnual)){
            $scoreAnual->score = $scoreAnual->score + ($scoreActivity->score * $score_indicator);
            $scoreAnual->save();
        }else{
            $scoreAnual = New ScoreAnual;
            $scoreAnual->id_score = $scoreActivity->id; 
            $scoreAnual->id_annual = $indicator->id_annual;
            $scoreAnual->score = ($scoreActivity->score * $score_indicator);
            $scoreAnual->id_user = $user->id;
            $scoreAnual->save();
        }

        $achievement = Courses::find($indicator->id_achievement);
        $score_achievement = ($achievement->percentaje/100);

        $scoreCumulative = ScoreCumulative::where('id_user',$user->id)->where('id_area',$achievement->id_materia)->first();
        if(isset($scoreCumulative)){
            $scoreCumulative->score = $scoreCumulative->score + ($scoreAnual->score * $score_achievement);
        }else{
            $scoreCumulative = New ScoreCumulative;
            $scoreCumulative->id_user = $user->id;
            $scoreCumulative->score = ($scoreAnual->score * $score_achievement);
            $scoreCumulative->id_area = $achievement->id_materia;
        }
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
