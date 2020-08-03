<?php

namespace App\Http\Controllers;

use App\Activity;
use App\Trivia;
use App\Answer;
use App\Area;
use App\Courses;
use App\Indicator;
use App\Classroom;
use Illuminate\Http\Request;
use Auth;

class ActivityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexActivityByArea(String $id_area, String $id_classroom)
    {
        $user = Auth::user();
        if ($user->type_user == 3) {
            $Course = Courses::where('id_area', $id_area)->where('id_classroom', $id_classroom)->first();
        } elseif ($user->type_user == 2) {
            $Course = Courses::where('id_teacher', $user->id)->where('id_area', $id_area)->where('id_classroom', $id_classroom)->first();
        }
        if (isset($Course)) {
            $indicators = Indicator::where('id_annual', $Course->id)->get();
            $activities = [];
            foreach ($indicators as $key => $indicator) {
                $activity = Activity::where('id_indicator', $indicator->id)->get();
                foreach ($activity as $num => $act) {
                    $activities[$key] = [
                        'id' => $act->id,
                        'activity_name' => $act->activity_name,
                        'activity_type' => $act->activity_type,
                        'deliver_date' => $act->deliver_date,
                        'feedback_date' => $act->feedback_date,
                    ];
                }
            }
            return response()->json($activities);
        }
        return null;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Activity = Activity::all();

        return response()->json($Activity);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function activityId(Request $request, String $id)
    {
        $quiz = $id;
        return view("trivia", compact("quiz"));;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getActivityById(String $id)
    {
        return Activity::find($id);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAllQuestions(Request $request, String $id)
    {
        $Trivias = Trivia::where('id_activity', $id)->inRandomOrder()->get();
        $trivia = [];
        foreach ($Trivias as $key => $Trivia) {
            $answers = Answer::where('question',  $Trivia->id)->inRandomOrder()->get();
            $respuestas = array();
            foreach ($answers as $answer) {
                if ($answer->correct == 1) {
                    $respuestas[] = ["text" => $answer->answer, 'correct' => true];
                } else {
                    $respuestas[] = ["text" => $answer->answer];
                }
            }
            // var_dump($respuestas);
            // die;
            $trivia[$key] = [
                'text' => $Trivia->question,
                'responses' => $respuestas

            ];
        }
        $quiz = [
            'questions' => $trivia
        ];

        return response()->json($quiz);
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
        $data = $request->all();
        $activity = Activity::create([
            'achievement'   => $data['achievement'],
            'activity_desc' => $data['activity_desc'],
            'activity_name' => $data['activity_name'],
            'activity_type' => $data['activity_type'],
            'deliver_date'  => $data['deliver_date'],
            'feedback_date' => $data['feedback_date'],
            'id_weekly_plan' => $data['id_weekly_plan'],
            'id_indicator' => $data['id_indicator'],
        ]);

        $Trivias = $data['trivia'];

        foreach ($Trivias as $index => $Trivia) {
            $trivia = Trivia::create([
                'question' => $Trivia['question'],
                'id_activity' => $activity->id,
            ]);
            $answers1 = Answer::create([
                'answer' => $Trivia['answer_1'],
                'question' => $trivia->id,
                'correct' => false
            ]);
            $answers2 = Answer::create([
                'answer' => $Trivia['answer_2'],
                'question' => $trivia->id,
                'correct' => false
            ]);
            $answers3 = Answer::create([
                'answer' => $Trivia['answer_3'],
                'question' => $trivia->id,
                'correct' => false
            ]);
            $answers4 = Answer::create([
                'answer' => $Trivia['correct_answer'],
                'question' => $trivia->id,
                'correct' => true
            ]);
        }

        return 'ok';
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Activity  $activity
     * @return \Illuminate\Http\Response
     */
    public function show(Activity $activity)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Activity  $activity
     * @return \Illuminate\Http\Response
     */
    public function edit(Activity $activity)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Activity  $activity
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Activity $activity)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Activity  $activity
     * @return \Illuminate\Http\Response
     */
    public function destroy(Activity $activity)
    {
        //
    }
    public function showTrivia(String $id)
    {
        $trivias = Trivia::where('id_activity', $id)->get();
        $Trivias = array();
        foreach ($trivias as $key => $trivia) {
            $answers = Answer::where('question',  $trivia->id)->inRandomOrder()->get();
            $respuestas = array();
            foreach ($answers as $answer) {
                if ($answer->correct == 1) {
                    $respuestas[] = ["answer" => $answer->answer, 'correct' => true];
                } else {
                    $respuestas[] = ["answer" => $answer->answer];
                }
            }
            // var_dump($respuestas);
            // die;
            $Trivias[$key] = [
                'questions' => $trivia->question,
                'responses' => $respuestas

            ];
        }
        return response()->json($Trivias);
    }
}
