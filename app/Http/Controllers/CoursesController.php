<?php

namespace App\Http\Controllers;

use App\Courses;
use App\Quarterly;
use App\Weekly;
use App\Area;
use App\User;
use App\Grade;
use App\Classroom;
use App\ClassroomStudent;
use App\ClassroomTeacher;
use Illuminate\Http\Request;
use Auth;

class CoursesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $Courses = Courses::where('id_teacher', Auth::user()->id)->get();
        $Quarterlies = Quarterly::where('id_teacher', Auth::user()->id)->get();
        $quaterly = [];
        // $data[0] = [
        //     'id'   => 0,
        //     'text' => 'Seleccione',
        // ];
        foreach ($Quarterlies as $key => $Quarterly) {
            $quaterly[$key] = [
                'content' => $Quarterly->content,
                'unit_name' => $Quarterly->unit_name
            ];
        }
        $data = [
            'quaterly' =>  $quaterly,
            'courses' => $Courses
        ];

        return response()->json($data);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAreaByUser()
    {
        //
        $auth = Auth::user();

        $user = User::find($auth->id);
        $areas = [];
        if($user->type_user == 2){
            $user_asinated = ClassroomTeacher::where('id_user',$user->id)->get();
            foreach($user_asinated as $key => $area){
                $class = Area::find($area->id_area);
                $areas[$key] = [
                    'id' => $class->id,
                    'text' => $class->nmae,
                ];
            }
        }elseif($user->type_user == 3){
            $user_asinated = ClassroomStudent::where('id_user',$user->id)->get();
            $classroom = Classroom::find($user_asinated->id_classroom);
            $class = Area::where('id_grade',$classroom->id_grade)->get();
            foreach($class as $key => $area){
                $areas[$key] = [
                    'id' => $area->id,
                    'text' => $area->nmae,
                ];
            }
        }

        return response()->json($areas);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
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
        $courses = Courses::create([
            'achievement_1' => $data['logro1'],
            'achievement_2' => $data['logro2'],
            'achievement_3' => $data['logro3'],
            'achievement_4' => $data['logro4'],
            'id_materia'    => $data['materia'],
            'id_teacher'     =>  Auth::user()->id,
        ]);


        $Quarterlies = $data['trimestre'];

        foreach ($Quarterlies as $index => $Quarterly) {
            $subCate = Quarterly::create([
                'content' => $Quarterly['contenido'],
                'unit_name' => $Quarterly['name'],
                'id_materia'    => $data['materia'],
                'id_teacher'     =>  Auth::user()->id,
            ]);
        }
        return "ok";
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Courses  $courses
     * @return \Illuminate\Http\Response
     */
    public function courseWeekly(Request $request)
    {
        //
        $data = $request->all();
        $Weeks = $data['semana'];

        $count = 1;
        foreach ($Weeks as $index => $week) {
            $subCate = Weekly::create([
                'driving_question' => $week['driving_question'],
                'class_development' => $week['class_development'],
                'observation' => $week['observation'],
                'id_materia'    => $data['id_materia'],
                'week'    => $count,
                'id_teacher'     =>  Auth::user()->id,
            ]);
            $count = $count + 1;
        }
        return "ok";
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Courses  $courses
     * @return \Illuminate\Http\Response
     */
    public function updateCourseWeekly(Request $request)
    {
        //
        $data = $request->all();
        $Weeks = $data['semana'];

        foreach ($Weeks as $index => $week) {
            $week_update = Weekly::findOrFail($week['id']);
            $week_update->driving_question = $week['text'];
            $week_update->class_development = $week['class'];
            $week_update->observation = $week['observation'];
            $week_update->save();
        }
        return "ok";
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Courses  $courses
     * @return \Illuminate\Http\Response
     */
    public function show(Courses $courses)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Courses  $courses
     * @return \Illuminate\Http\Response
     */
    public function edit(Courses $courses)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Courses  $courses
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Courses $courses)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Courses  $courses
     * @return \Illuminate\Http\Response
     */
    public function destroy(Courses $courses)
    {
        //
    }

    public function getWeek()
    {

        $Weeks = Weekly::all();
        $data = [];
        $data[0] = [
            'id'   => 0,
            'text' => 'Seleccione',
        ];
        foreach ($Weeks as $key => $week) {
            $data[$key + 1] = [
                'id'   => $week->id,
                'text' => $week->driving_question,
            ];
        }
        return response()->json($data);
    }

    public function editGetWeek()
    {

        $Weeks = Weekly::where('id_teacher', Auth::user()->id)->get();
        $data = [];
        // $data[0] = [
        //     'id'   => 0,
        //     'text' => 'Seleccione',
        // ];
        foreach ($Weeks as $key => $week) {
            $data[$key] = [
                'id'   => $week->id,
                'text' => $week->driving_question,
                'class' => $week->class_development,
                'observation' => $week->observation,
            ];
        }
        return response()->json($data);
    }
    public function viewGetWeek()
    {

        $Weeks = Weekly::where('id_teacher', 254)->get();
        $data = [];
        // $data[0] = [
        //     'id'   => 0,
        //     'text' => 'Seleccione',
        // ];
        foreach ($Weeks as $key => $week) {
            $data[$key] = [
                'id'   => $week->id,
                'text' => $week->driving_question,
                'class' => $week->class_development,
                'observation' => $week->observation,
            ];
        }
        return response()->json($data);
    }
    public function showWeek(String $id)
    {
        $weeks = Weekly::findOrFail($id);
        return response()->json($weeks);
    }
}
