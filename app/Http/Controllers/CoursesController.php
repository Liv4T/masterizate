<?php

namespace App\Http\Controllers;

use App\Courses;
use App\Activity;
use App\ActivityQuestion;
use App\ActivityCompleteSentence;
use App\ActivityCrossword;
use App\ActivityRelationship;
use App\Quarterly;
use App\Weekly;
use App\Area;
use App\Eventos;
use App\ClassContent;
use App\User;
use App\Grade;
use App\CoursesAchievement;
use App\Classroom;
use App\ClassroomStudent;
use App\ClassroomTeacher;
use App\Classs;
use App\Indicator;
use App\LectiveWeeklyPlan;
use App\LectivePlanification;
use App\LectiveQuarterlyPlan;
use App\LectiveClass;
use App\LectiveAchievement;
use App\LectiveClassContent;
use App\VinculationTutorStudent;
use App\TutorCode;
use App\TutorClassroom;
use App\TutorClassroomTeacher;
use Carbon\Carbon;
use App\Exports\PlanificationPerObjetivesExport;
use App\Exports\CyclesAndClassExport;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use DB;

class CoursesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(String $id_area, String $id_classroom)
    {
        //
        $user = Auth::user();
        $quaterly = [];
        $achievements = [];
        if ($user->type_user == 1) {
            $Courses = Courses::where('id_area', $id_area)->where('id_classroom', $id_classroom)->first();
        } elseif ($user->isTeacher()||$user->isTutor()) {
            $Courses = Courses::where('id_teacher', $user->id)->where('id_area', $id_area)->where('id_classroom', $id_classroom)->first();
        }
        if (isset($Courses)) {
            $achievements = CoursesAchievement::where('id_planification', $Courses->id)->where('deleted', 0)->get();
            if ($user->type_user == 1) {
                $Quarterlies = Quarterly::where('id_area', $id_area)->where('id_classroom', $id_classroom)->where('deleted', 0)->get();
            } elseif ($user->isTeacher()||$user->isTutor()) {
                $Quarterlies = Quarterly::where('id_teacher', $user->id)->where('id_area', $id_area)->where('id_classroom', $id_classroom)->where('deleted', 0)->get();
            }
            $Courses->achievements = $achievements;
            foreach ($Quarterlies as $key => $Quarterly) {
                $quaterly[$key] = [
                    'id' => $Quarterly->id,
                    'content' => $Quarterly->content,
                    'unit_name' => $Quarterly->unit_name,
                    'logro' => $Quarterly->logro,
                    'id_achievement' => $Quarterly['id_achievement'],
                    'id_annual' => $Courses['id'],
                ];
            }
        }

        //get classroom name
        $classroom_name = '';
        $classroom = Classroom::where('id', $id_classroom)->get();
        $area = Area::where('id', $id_area)->get();

        if (isset($classroom) && count($classroom) > 0 && isset($area) && count($area) > 0) {
            $classroom_name = $area[0]->name . ' ' . $classroom[0]->name;
        }

        $data = [
            'classroom_name' => $classroom_name,
            'quaterly' =>  $quaterly,
            'courses' => $Courses,
            'achievements' => $achievements
        ];

        return response()->json($data);
    }
    public function getAreaByClient(){

        $auth = Auth::user();
        $user = User::find($auth->id);
        $data = [];

        if($user->isClient()){
            $codeVinculated = VinculationTutorStudent::where('id_student',$user->id)->get();
            foreach($codeVinculated as $key => $vinculated){
                $code = TutorCode::where('code','=',$vinculated->code_vinculated)->first();
                $area = Area::where('id','=', $code->id_area)->first();
                $data[$key]= [
                    'id_tutor' => $vinculated->id_tutor,
                    'id_area'=>$code->id_area,
                    'area_name' => $area->name,
                    'code' => $code->code
                ];
            }
        }else if($user->isAdmin()){
            $codes = TutorCode::all();
            foreach($codes as $key => $code){
                $area = Area::where('id','=', $code->id_area)->first();
                $tutor = User::where('id', $code->id_tutor)->first();
                $classroom = TutorClassroom::where('name', $area->name.'-'.$code->code)
                ->where('id_tutor', $code->id_tutor)
                ->first();
                $data[$key]= [
                    'id_tutor' => $code->id_tutor,
                    'tutor_name' => $tutor->name. ' ' .$tutor->last_name,
                    'id_area'=>$code->id_area,
                    'area_name' => $area->name,
                    'code' => $code->code,
                    'id_classroom' =>isset($classroom->id) ? $classroom->id : 'NULL',
                ];
            }
        }


        return response()->json($data);
    }
    public function getReportPlanification(String $id_achievement, String $id_planification){

        $quaterly = [];
        $quarterlies = Quarterly::where('id_achievement', $id_achievement)->where('deleted', 0)->get();
        foreach ($quarterlies as $key_q => $quarterly) {
            $indicators = Indicator::where('id_quarterly_plan', $quarterly->id)->get();
            $quaterly[$key_q] = [
                'id' => $quarterly->id,
                'content' => $quarterly->content,
                'unit_name' => $quarterly->unit_name,
                'logro' => $quarterly->logro,
                'id_achievement' => $quarterly->id_achievement,
                'id_annual' => $id_planification,
                'indicators' => $indicators,
            ];
        }

        return response()->json($quaterly);
    }

    public function downloadReportObjetives(String $id_achievement, String $id_planification, String $objetivesName, String $areaName){
        $nameObj=str_replace(' ', '', $objetivesName);
        $nameArea=str_replace(' ', '', $areaName);
        return Excel::download(new PlanificationPerObjetivesExport($id_achievement, $id_planification),'Reporte_Planificación_'.$nameArea.'_'.$nameObj.'.xls');

    }

    public function getReportCycleAndClass(String $id_area, String $id_classroom, String $id_trimestre){

        $dataWeek = [];
        $dataContent = [];
        $Weeks = Weekly::where('id_area', $id_area)->where('id_classroom', $id_classroom)->where('id_trimestre', $id_trimestre)->get();
            foreach ($Weeks as $key => $week) {
                $class = Classs::Where('id_weekly_plan', $week->id)->get();
                $dataContent = [];
                foreach ($class as $keyC => $classC){
                    $content = ClassContent::where('id_class', $classC->id)->where('content', '<>', '')->get();
                    $classC->content = $content;
                }
                $dataWeek[$key] = [
                    'id'   => $week->id,
                    'text' => $week->driving_question,
                    'class' => $week->class_development,
                    'observation' => $week->observation,
                    'id_area' =>  $week->id_area,
                    'id_classroom' =>  $week->id_classroom,
                    'id_trimestre' => $week->id_trimestre,
                    'ajuste_piar' => $week->ajuste_piar,
                    'order_items' => $week->order_items,
                    'class_array' => $class,
                ];
            }

            return response()->json($dataWeek);
    }

    public function downloadReportCycles(String $id_area, String $id_classrom, String $id_trimestre){
        return Excel::download(new CyclesAndClassExport($id_area, $id_classrom,$id_trimestre),'Reporte_Ciclos_y_Clases_'.$id_area.'_'.$id_classrom.'.xls');

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

        if(!isset($auth)) return response()->json([]);

        $user = User::find($auth->id);
        $areas = [];
        if ($user->type_user == 1) {
            $user_asigneds = ClassroomTeacher::all();
            foreach ($user_asigneds as $key => $user_asigned) {
                $user = User::find($user_asigned->id_user);
                $classroom = Classroom::find($user_asigned->id_classroom);
                $class = Area::find($user_asigned->id_area);
                $areas[$key] = [
                    'id' => isset($class->id) ? $class->id : '',
                    'text' => isset($class->name) && isset($classroom->name) ? $class->name . " - " . $classroom->name : '',
                    'id_classroom' => isset($classroom->id) ? $classroom->id : '',
                    'calification_base'=>$user_asigned->percent_calification
                ];
            }
        } elseif ($user->isTeacher()) {
            $user_asignated = ClassroomTeacher::where('id_user', $user->id)->get();
            if (isset($user_asignated)) {
                foreach ($user_asignated as $key => $area) {
                    $classroom = Classroom::find($area->id_classroom);
                    $class = Area::find($area->id_area);
                    $areas[$key] = [
                        'id'           => $class->id,
                        'user_type'    => $user->type_user,
                        'text'         => $class->name.' '.$classroom->name,
                        'classroom_name'    => $classroom->name,
                        'id_area'         => $class->id,
                        'area_name'         => $class->name,
                        /*
                            Se comenta la linea para no obtener el curso ya que se darán tutorias para
                            De la materia como tal
                        */
                        // 'text'         => $class->name . " - " . $classroom->name,
                        'id_classroom' => $classroom->id,
                        'calification_base'=>$area->percent_calification
                    ];
                }
            }
        } elseif ($user->type_user == 3) {
            $user_asignateds = ClassroomStudent::where('id_user', $user->id)->get();
            if (isset($user_asignateds)) {
                foreach ($user_asignateds as $key => $user_asignated) {
                    $classroom = Classroom::find($user_asignated->id_classroom);
                    $class = Area::where('id_grade', $classroom->id_grade)->get();
                    foreach ($class as $key => $area) {
                        $areas[$key] = [
                            'id' => $area->id,
                            'text' => $area->name,
                            'id_classroom' => $user_asignated->id_classroom,
                        ];
                    }
                }
            }
        }elseif ($user->isTutor()) {
            $user_asignated = TutorClassroomTeacher::where('id_user', $user->id)->get();
            if (isset($user_asignated)) {
                foreach ($user_asignated as $key => $area) {
                    $classroom = TutorClassroom::find($area->id_classroom);
                    $class = Area::find($area->id_area);
                    $areas[$key] = [
                        'id'           => $class->id,
                        'user_type'    => $user->type_user,
                        'text'         => $class->name.' '.$classroom->name,
                        'classroom_name'    => $classroom->name,
                        'id_area'         => $class->id,
                        'area_name'         => $classroom->name,
                        /*
                            Se comenta la linea para no obtener el curso ya que se darán tutorias para
                            De la materia como tal
                        */
                        // 'text'         => $class->name . " - " . $classroom->name,
                        'id_classroom' => $classroom->id,
                    ];
                }
            }

        }
        return response()->json($areas);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getTutorAreas($id)
    {
        if($id <= 0){
            $auth = Auth::user();
            $user = User::find($auth->id);
        }else if($id > 0){
            $user = User::where('id',$id)->first();
        }

        if(!isset($user)) return response()->json([]);

        $areasAll = [];
        $areas = Area::all();
        $data = TutorCode::where('id_tutor', $user->id)->get();
        foreach($areas as $key => $area){
            $areasAll[$key] = [
                'id'           => $area->id,
                'id_area'      => $area->id,
                'user_type'    => $user->type_user,
                'area_name'    => $area->name,
                'text'         => $area->name,
            ];

            foreach($data as $code){
                if($area->id === $code->id_area){
                    unset($areasAll[$key]);

                }
            }
        }

        $areasAll = array_values($areasAll);

        return response()->json($areasAll);
    }

    public function getStudentNewAreas($select)
    {
        $auth = Auth::user();
        $user = User::find($auth->id);
        if(!isset($user)) return response()->json([]);

        $areasAll = [];
        $data = VinculationTutorStudent::where('id_student',$user->id)->get();

        if($select === 'ALL'){
            if ($user->isClient()) {
                $tutorships = TutorCode::all();
                foreach($tutorships as $key_t => $tutorship){
                    $area = Area::where('id',$tutorship->id_area)->first();
                    $tutor_data = User::where('id',$tutorship->id_tutor)->first();
                    $areasAll[$key_t] = [
                        'id_tutor_code'=> $tutorship->id,
                        'id_area'      => $tutorship->id_area,
                        'area_name'    => $area->name,
                        'code'         => $tutorship->code,
                        'id_tutor'     => $tutorship->id_tutor,
                        'tutor_name'   => $tutor_data->name.' '.$tutor_data->last_name,
                    ];
                    foreach($data as $key_d => $vinculation){
                        if($tutorship->code === $vinculation->code_vinculated){
                            unset($areasAll[$key_t]);
                        }
                    }
                }
            }
        }else{
            $tutorships = TutorCode::where('id_area',$select)->get();
            foreach($tutorships as $key_t => $tutorship){
                $area = Area::where('id',$tutorship->id_area)->first();
                $tutor_data = User::where('id',$tutorship->id_tutor)->first();
                $areasAll[$key_t] = [
                    'id_tutor_code'=> $tutorship->id,
                    'id_area'      => $tutorship->id_area,
                    'area_name'    => $area->name,
                    'code'         => $tutorship->code,
                    'id_tutor'     => $tutorship->id_tutor,
                    'tutor_name'   => $tutor_data->name.' '.$tutor_data->last_name,
                ];
                foreach($data as $key_d => $vinculation){
                    if($tutorship->code === $vinculation->code_vinculated){
                        unset($areasAll[$key_t]);
                    }
                }
            }
        }
        $areasAll = array_values($areasAll);
        return response()->json($areasAll);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    public function teacherScoreUpdate(Request $request,int $area_id,int $classroom_id){
        $user = Auth::user();
        $data = $request->all();

        if (isset($user) && ($user->isTutor()||$user->isTeacher())) {

            if(!isset($data)) {return;}

            ClassroomTeacher::where('id_user',$user->id)->where('id_classroom',$classroom_id)->where('id_area',$area_id)->update(['percent_calification'=>$data['percent_calification']]);

        }

        return;

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (isset($request->duplicate) && $request->duplicate == 1) {
            $data = $request->all();
            $course = Courses::create([
                'id_area'    => $data['id_area'],
                'id_classroom'  => $data['id_classroom'],
                'id_teacher'     =>  Auth::user()->id,
            ]);

            $achievements = $data['logros'];

            foreach ($achievements as $achievement) {
                // dd($achievement);
                $logro = new CoursesAchievement;
                $logro->achievement =     $achievement['achievement'];
                $logro->percentage =      $achievement['percentage'];
                $logro->id_planification =  $course->id;
                $logro->deleted = 0;
                $logro->save();
            }

            $Quarterlies = $data['trimestres'];

            foreach ($Quarterlies as $index => $Quarterly) {
                $subCate = Quarterly::create([
                    'content' => $Quarterly['content'],
                    'unit_name' => $Quarterly['unit_name'],
                    'logro' => $Quarterly['logro'],
                    'id_area'    => $data['id_area'],
                    'id_classroom'    => $data['id_classroom'],
                    'id_achievement' => $Quarterly['id_achievement'],
                    'id_teacher'     =>  Auth::user()->id,
                    'deleted' => 0,
                ]);
            }
            return "ok";
        } else { // duplicate =false
            $data = $request->all();

            $courses = Courses::where('id_teacher', Auth::user()->id)->where('id_area', $data['id_area'])->where('id_classroom', $data['id_classroom'])->get();

            if (count($courses) == 0) {
                $course = Courses::create([
                    'id_area'    => $data['id_area'],
                    'id_classroom'  => $data['id_classroom'],
                    'id_teacher'     =>  Auth::user()->id,
                ]);
                if(!isset($data['logros'])){
                    $logro = CoursesAchievement::create([
                        'achievement'       => "Logros de la planificacion general",
                        'percentage'        => 0,
                        'id_planification'  => $course->id,
                        'deleted' => 0,
                    ]);
                }
                if(isset($data['logros'])){
                    $achievements = $data['logros'];

                    foreach ($achievements as $index => $achievement) {

                        if (isset($achievement['id_achievement'])) {
                            $achievementUpdatedRowsCount = CoursesAchievement::where('id', $achievement['id_achievement'])->update(array('percentage' => $achievement['porcentaje'], 'achievement' => $achievement['logro']));

                            if ($achievementUpdatedRowsCount <= 0) {
                                $logro = CoursesAchievement::create([
                                    'achievement'       => "Logros de la planificacion general",
                                    'percentage'        => 0,
                                    'id_planification'  => $course->id,
                                    'deleted' => 0,
                                ]);
                            }
                        } else {
                            $logro = CoursesAchievement::create([
                                'achievement'       => $achievement['logro'],
                                'percentage'        => $achievement['porcentaje'],
                                'id_planification'  => $course->id,
                                'deleted' => 0,
                            ]);
                        }
                    }
                }

            }
            if(isset($data['logros']) && count($courses) > 0){
                $courses = Courses::where('id_teacher', Auth::user()->id)->where('id_area', $data['id_area'])->where('id_classroom', $data['id_classroom'])->get();
                $achievements = $data['logros'];

                foreach ($achievements as $index => $achievement) {

                    if (isset($achievement['id_achievement'])) {
                        $achievementUpdatedRowsCount = CoursesAchievement::where('id', $achievement['id_achievement'])->update(array('percentage' => $achievement['porcentaje'], 'achievement' => $achievement['logro']));

                        if ($achievementUpdatedRowsCount <= 0) {
                            $logro = CoursesAchievement::create([
                                'achievement'       => $achievement['logro'],
                                'percentage'        => $achievement['porcentaje'],
                                'id_planification'  => $courses[0]->id,
                                'deleted' => 0,
                            ]);
                        }
                    } else {
                        $logro = CoursesAchievement::create([
                            'achievement'       => $achievement['logro'],
                            'percentage'        => $achievement['porcentaje'],
                            'id_planification'  => $courses[0]->id,
                            'deleted' => 0,
                        ]);
                    }
                }
            }

            if(isset($data['trimestres'])){

                $Quarterlies = $data['trimestres'];
                $courses = Courses::where('id_teacher', Auth::user()->id)->where('id_area', $data['id_area'])->where('id_classroom', $data['id_classroom'])->get();
                foreach ($Quarterlies as $index => $Quarterly) {

                    if (isset($Quarterly['id_quaterly'])) {
                        if(isset($Quarterly['logro'])){
                            $quarterlyUpdatedRowsCount = Quarterly::where('id', $Quarterly['id_quaterly'])->update(array('content' => $Quarterly['contenido'], 'unit_name' => $Quarterly['name'], 'logro' => $Quarterly['logro'], 'id_achievement' => $Quarterly['objetive'] ));
                        }else{
                            $quarterlyUpdatedRowsCount = Quarterly::where('id', $Quarterly['id_quaterly'])->update(array('content' => $Quarterly['contenido'], 'unit_name' => $Quarterly['name'], 'id_achievement' => $Quarterly['objetive']));
                        }

                        if ($quarterlyUpdatedRowsCount <= 0) {
                            $subCate = Quarterly::create([
                                'content' => $Quarterly['contenido'],
                                'unit_name' => $Quarterly['name'],
                                'logro' => $Quarterly['logro'],
                                'id_area'    => $data['id_area'],
                                'id_classroom'    => $data['id_classroom'],
                                'id_teacher'     =>  Auth::user()->id,
                                'id_planification' => $courses[0]->id,
                                'deleted' => 0,
                                'id_achievement' => $Quarterly['objetive'],
                            ]);
                        }
                    } else {
                        $subCate = Quarterly::create([
                            'content' => $Quarterly['contenido'],
                            'unit_name' => $Quarterly['name'],
                            'logro' => $Quarterly['logro'],
                            'id_area'    => $data['id_area'],
                            'id_classroom'    => $data['id_classroom'],
                            'id_teacher'     =>  Auth::user()->id,
                            'id_planification' => $courses[0]->id,
                            'deleted' => 0,
                            'id_achievement' => $Quarterly['objetive'],
                        ]);
                    }
                }
            }
            return "ok";
        }
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
        if (isset($request->duplicate) && $request->duplicate == 1) {
            $data = $request->all();
            $Weeks = $data['semana'];
            $count = 1;
            foreach ($Weeks as $index => $week) {
                $subCate = Weekly::create([
                    'driving_question' => $week['text'],
                    'class_development' => $week['class'],
                    'observation' => $week['observation'],
                    'id_area'    => $data['id_area'],
                    'id_classroom'    => $data['id_classroom'],
                    'week'    => $count,
                    'id_teacher'     =>  Auth::user()->id,
                ]);
                $count = $count + 1;
            }
            return "ok";
        } elseif (isset($request->duplicate) && $request->duplicate == 2) {
            // return $request;
            $data = $request->all();
            $Weeks = $data['semana'];
            $count = 0;
            $countWeek = 1;
            $weeksTeacher = Weekly::where('id_teacher', Auth::user()->id)->where('id_area', $data['id_area'])->where('id_classroom', $data['id_classroom'])->get();
            $totalWeeks = sizeof($weeksTeacher);
            foreach ($Weeks as $index => $week) {
                foreach ($weeksTeacher as $key => $weekTeacher) {
                    if ($countWeek <= $totalWeeks && $key == $index) {
                        $weekTeacher->driving_question = $week['text'];
                        $weekTeacher->class_development = $week['class'];
                        $weekTeacher->observation = $week['observation'];
                        $weekTeacher->id_area    = $data['id_area'];
                        $weekTeacher->id_classroom    = $data['id_classroom'];
                        $weekTeacher->id_teacher     =  Auth::user()->id;
                        $weekTeacher->save();
                        $countWeek = $countWeek + 1;
                    }
                }
                $count = $countWeek;
            }
            foreach ($Weeks as $index => $week) {
                if ($index > ($totalWeeks - 1)) {
                    $subCate = Weekly::create([
                        'driving_question' => $week['text'],
                        'class_development' => $week['class'],
                        'observation' => $week['observation'],
                        'id_area'    => $data['id_area'],
                        'id_classroom'    => $data['id_classroom'],
                        'week'    => $count,
                        'id_teacher'     =>  Auth::user()->id,
                    ]);
                    $count = $count + 1;
                }
            }
            return "ok";
        } else {
            $data = $request->all();
            $Weeks = $data['semana'];

            $count = 1;
            foreach ($Weeks as $index => $week) {
                $subCate = Weekly::create([
                    'driving_question' => $week['driving_question'],
                    'class_development' => $week['class_development'],
                    'observation' => $week['observation'],
                    'ajuste_piar' => $week['ajustes'],
                    'order_items' => $week['numeroCiclo'],
                    'id_area'    => $data['id_area'],
                    'id_classroom'    => $data['id_classroom'],
                    'id_trimestre' => $data['id_trimestre'],
                    'week'    => $count,
                    'id_teacher'     =>  Auth::user()->id,
                ]);
                $count = $count + 1;
            }
            return "ok";
        }
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
            $week_update->id_trimestre = $week['id_trimestre'];
            $week_update->ajuste_piar = $week['ajuste_piar'];
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
    public function destroy($id)
    {
        $week = Weekly::findOrFail($id);
        $week->delete();
        return response()->json('Ciclo Eliminados');
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

    public function editGetWeek(String $id_area, String $id_classroom, String $id_trimestre)
    {
        $user = Auth::user();
        $data = [];
        if ($user->isAdmin()) {
            $Weeks = Weekly::where('id_area', $id_area)->where('id_classroom', $id_classroom)->where('id_trimestre', $id_trimestre)->get();
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
                    'id_area' =>  $week->id_area,
                    'id_classroom' =>  $week->id_classroom,
                    'id_trimestre' => $week->id_trimestre,
                ];
            }
        } elseif ($user->isTeacher()||$user->isTutor()) {
            $Weeks = Weekly::where('id_teacher', $user->id)->where('id_area', $id_area)->where('id_classroom', $id_classroom)->get();
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
                    'id_area' =>  $week->id_area,
                    'id_classroom' =>  $week->id_classroom,
                    'id_trimestre' => $week->id_trimestre,
                ];
            }
        }
        return response()->json($data);
    }

    public function editOneWeek(String $id_area, String $id_classroom, String $id_trimestre)
    {
        $user = Auth::user();
        $data = [];

        if($user->type_user==1)
        {
            $Weeks = Weekly::where('id_area', $id_area)
            ->where('id_classroom', $id_classroom)
            ->where('id_trimestre', $id_trimestre)
            ->get();
        }
        else
        {
            $Weeks = Weekly::where('id_teacher', $user->id)
            ->where('id_area', $id_area)
            ->where('id_classroom', $id_classroom)
            ->where('id_trimestre', $id_trimestre)
            ->get();
        }

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
                'id_area' =>  $week->id_area,
                'id_classroom' =>  $week->id_classroom,
                'id_teacher' => $week->id_teacher,
                'id_trimestre' => $week->id_trimestre,
                'order_items' => $week->order_items,
                'ajuste_piar' => $week->ajuste_piar,
            ];
        }
        return response()->json($data);
    }
    public function oneCycle(String $id)
    {
        $data = [];


        $Weeks = Weekly::where('id', $id)->get();

        $data = [];
        foreach ($Weeks as $key => $week) {
            $data[$key] = [
                'id'   => $week->id,
                'text' => $week->driving_question,
                'class' => $week->class_development,
                'observation' => $week->observation,
                'id_area' =>  $week->id_area,
                'id_classroom' =>  $week->id_classroom,
                'id_teacher' => $week->id_teacher,
                'id_trimestre' => $week->id_trimestre,
                'order_items' => $week->order_items,
                'ajuste_piar' => $week->ajuste_piar,
            ];
        }
        return response()->json($data);
    }

    public function viewGetWeek(String $id_area, String $id_classroom, String $id_trimestre)
    {
        $Weeks = Weekly::where('id_area', $id_area)->where('id_classroom', $id_classroom)->where('id_trimestre', $id_trimestre)->get();
        $data = [];
        foreach ($Weeks as $key => $week) {
            $data[$key] = [
                'id'   => $week->id,
                'text' => $week->driving_question,
                'class' => $week->class_development,
                'observation' => $week->observation,
                'id_area' =>  $week->id_area,
                'id_classroom' =>  $week->id_classroom,
                'id_trimestre' => $week->id_trimestre,
            ];
        }
        return response()->json($data);
    }
    public function showWeek(String $id)
    {
        $weeks = Weekly::findOrFail($id);
        return response()->json($weeks);
    }
    public function copyInformation(Request $request)
    {
        $auth=Auth::user();
        $data = $request->all();
        $class_plan = $data['class_planning'];

        if(isset($data['fromData']) && isset($data['toData']) && isset($data['fromData']['weekly_planning']['id']) && isset($data['fromData']['trimestres']))
        {
            //copy weekly_planning
            $weekly_planning_id=0;
            if( $data['toData']['weekly_planning']=='new')
            {
                $weekly_plan=Weekly::find($data['fromData']['weekly_planning']['id']);
                $new_weekly_plan=Weekly::create([
                    'driving_question'=>$weekly_plan->driving_question,
                    'class_development'=>$weekly_plan->class_development,
                    'observation'=>$weekly_plan->observation,
                    'id_teacher'=>$weekly_plan->id_teacher,
                    'id_area'=>$data['toData']['area']['id'],
                    'id_classroom'=>$data['toData']['area']['id_classroom'],
                    'id_trimestre'=>$data['fromData']['trimestres'],
                    'ajuste_piar'=>$weekly_plan->ajuste_piar,
                    'order_items'=>$weekly_plan->order_items,
                    'week'=>$weekly_plan->week,
                    'status'=>$weekly_plan->status,
                    'observation_coord'=>$weekly_plan->observation_coord
                ]);
                $weekly_planning_id=$new_weekly_plan->id;
            }
            else
            {
                $weekly_plan=Weekly::find($data['fromData']['weekly_planning']['id']);
                Weekly::where('id',$data['toData']['weekly_planning']['id'])->update([
                    'driving_question'=>$weekly_plan->driving_question,
                    'class_development'=>$weekly_plan->class_development,
                    'observation'=>$weekly_plan->observation,
                    'week'=>$weekly_plan->week,
                    'id_trimestre'=>$weekly_plan->id_trimestre,
                    'ajuste_piar'=>$weekly_plan->ajuste_piar,
                    'order_items'=>$weekly_plan->order_items,
                    'status'=>$weekly_plan->status,
                    'observation_coord'=>$weekly_plan->observation_coord
                ]);
                $weekly_planning_id=$data['toData']['weekly_planning']['id'];
            }

            //copy class information
            if($data['fromData']['class_planning']=='null')
            {

            }
            else if($data['fromData']['class_planning']=='all')
            {
                $class_planning=Classs::where('id_weekly_plan',$data['fromData']['weekly_planning']['id'])->where('deleted', 0)->get();
                foreach ($class_planning as $key_c => $clase) {
                    if($class_plan[$key_c]['id'] === $clase->id){
                        $class =Classs::create([
                            'name'=>$clase->name,
                            'date_init_class'=>$class_plan[$key_c]['date_init_class'],
                            'description'=> $clase->description,
                            'name_document'=> $clase->name_document,
                            'document'=> $clase->document,
                            'url'=> $clase->url,
                            'url_class'=>$clase->url_class,
                            'video'=> $clase->video,
                            'id_weekly_plan'=> $weekly_planning_id,
                            'status'=> $clase->status,
                            'video1'=> $clase->video1,
                            'video2'=> $clase->video2,
                            'url1'=> $clase->url1,
                            'url2'=> $clase->url2,
                            'document1'=> $clase->document1,
                            'document2'=> $clase->document2,
                            'observation'=> $clase->observation,
                            'hourly'=> $clase->hourly,
                            'activityForPIARStudents'=>  $clase->activityForPIARStudents,
                            'activityForSelectStudents'=> $clase->activityForSelectStudents,
                            'activityForAllStudents'=> $clase->activityForAllStudents,
                            'selectedStudents'=> $clase->selectedStudents,
                            'work'=> $clase->work,
                            'transversals'=> $clase->transversals,
                            'objetivesClass'=> $clase->objetivesClass
                        ]);

                        $date_i= $class_plan[$key_c]['date_init_class'];
                        $explode=explode("T", $date_i);
                        $date_init= $explode[0] . ' ' . $explode[1];
                        $date_fin=date( 'Y-m-d H:i' ,  strtotime ( '+2 hour' , strtotime ($date_init))) ;
                        $evento = new Eventos;
                        $evento->name = $clase->name;
                        $evento->date_from = $date_init;
                        $evento->date_to = $date_fin;
                        $evento->id_area = $data['toData']['area']['id'];
                        $evento->id_classroom = $data['toData']['area']['id_classroom'];
                        $evento->id_user = Auth::user()->id;
                        $evento->url = $clase->url_class;
                        $evento->id_padre = NULL;
                        $evento->save();
                    }
                    if(isset($class))
                    {
                        $classes_content=ClassContent::where('id_class',$clase->id)->where('deleted',0)->get();
                        foreach ($classes_content as $key_cc => $class_content) {
                            ClassContent::create([
                                'id_class'=>$class->id,
                                'order'=>$class_content->order,
                                'content_type'=>$class_content->content_type,
                                'content'=>$class_content->content,
                                'description'=>$class_content->description,
                                'observation'=>$class_content->observation,
                                'is_required'=>$class_content->is_required,
                                'state'=>$class_content->state,
                                'deleted'=>0,
                                'updated_user'=> $auth->id
                            ]);
                        }
                    }
                }
                $activities=Activity::where('id_class', $clase->id)->get();
                foreach ($activities as $key_a => $activity) {
                    $activity_new=Activity::create([
                        'id_class'=>$class->id,
                        'id_quarterly_plan'=>$activity->id_quarterly_plan,
                        'id_achievement'=>$activity->id_achievement,
                        'id_indicator'=>$activity->id_indicator,
                        'activity_type'=>$activity->activity_type,
                        'name'=>$activity->name,
                        'description'=>$activity->description,
                        'is_required'=>1,
                        'state'=>1,
                        'deleted'=>0,
                        'updated_user'=>$auth->id,
                        'delivery_max_date'=>$activity->delivery_max_date,
                        'feedback_date'=>$activity->feedback_date
                    ]);
                    if($activity->activity_type==='CUESTIONARIO'){

                        $activityQ=ActivityQuestion::where('id_activity', $activity->id)->where('deleted', 0)->first();
                        if(isset($activityQ)){
                            ActivityQuestion::create([
                                'id_activity'=>$activity_new->id,
                                'question'=>$activityQ->question,
                                'type_question'=>$activityQ->type_question,
                                'content'=>$activityQ->content,
                                'correct_answer'=>$activityQ->correct_answer,
                                'justify'=>$activityQ->justify,
                                'state'=>1,
                                'deleted'=>0,
                                'updated_user'=>$auth->id
                            ]);
                        }
                    }
                    if($activity->activity_type==='COMPLETAR_ORACION'){
                        $activityC=ActivityCompleteSentence::where('id_activity', $activity->id)->where('deleted', 0)->first();
                        if(isset($activityC)){
                            ActivityCompleteSentence::create([
                                'id_activity'=>$activity_new->id,
                                'content'=>$activityC->content,
                                'state'=>1,
                                'deleted'=>0,
                                'updated_user'=>$auth->id
                            ]);
                        }
                    }
                    if($activity->activity_type==='RELACION'){
                        $activityR=ActivityRelationship::where('id_activity', $activity->id)->where('deleted', 0)->first();
                        if(isset($activityR)){
                            ActivityRelationship::create([
                                'id_activity'=>$activity_new->id,
                                'content'=>$activityR->content,
                                'state'=>1,
                                'deleted'=>0,
                                'updated_user'=>$auth->id
                            ]);
                        }
                    }
                    if($activity->activity_type==='CRUCIGRAMA'){
                        $activityCR=ActivityCrossword::where('id_activity', $activity->id)->first();
                        //return $activityCR;
                        if(isset($activityCR)){
                            ActivityCrossword::create([
                                'id_activity'=>$activity_new->id,
                                'content'=>$activityCR->content,
                                'state'=>1,
                                'deleted'=>0,
                                'updated_user'=>$auth->id
                            ]);
                        }
                    }
                }
            }
            else{

                if($data['fromData']['class_planning']=='null')
                {

                }
                else if($data['toData']['class_planning']=='new')
                {
                    $clase=Classs::find($data['fromData']['class_planning']['id']);
                    $class=Classs::create([
                        'name'=>$clase->name,
                        'date_init_class'=>$data['fromData']['class_planning']['date_init_class'],
                        'description'=> $clase->description,
                        'name_document'=> $clase->name_document,
                        'document'=> $clase->document,
                        'url'=> $clase->url,
                        'url_class'=>$clase->url_class,
                        'video'=> $clase->video,
                        'id_weekly_plan'=> $weekly_planning_id,
                        'status'=> $clase->status,
                        'video1'=> $clase->video1,
                        'video2'=> $clase->video2,
                        'url1'=> $clase->url1,
                        'url2'=> $clase->url2,
                        'document1'=> $clase->document1,
                        'document2'=> $clase->document2,
                        'observation'=> $clase->observation,
                        'hourly'=> $clase->hourly,
                        'activityForPIARStudents'=>  $clase->activityForPIARStudents,
                        'activityForSelectStudents'=> $clase->activityForSelectStudents,
                        'activityForAllStudents'=> $clase->activityForAllStudents,
                        'selectedStudents'=> $clase->selectedStudents,
                        'work'=> $clase->work,
                        'transversals'=> $clase->transversals,
                        'objetivesClass'=> $clase->objetivesClass
                    ]);

                    $date_i= $data['fromData']['class_planning']['date_init_class'];
                    $explode=explode("T", $date_i);
                    $date_init= $explode[0] . ' ' . $explode[1];
                    $date_fin=date( 'Y-m-d H:i' ,  strtotime ( '+2 hour' , strtotime ($date_init))) ;
                    $evento = new Eventos;
                    $evento->name = $clase->name;
                    $evento->date_from = $date_init;
                    $evento->date_to = $date_fin;
                    $evento->id_area = $data['toData']['area']['id'];
                    $evento->id_classroom = $data['toData']['area']['id_classroom'];
                    $evento->id_user = Auth::user()->id;
                    $evento->url = $clase->url_class;
                    $evento->id_padre = NULL;
                    $evento->save();

                    if(isset($class))
                    {
                        $classes_content=ClassContent::where('id_class',$clase->id)->where('deleted',0)->get();
                        foreach ($classes_content as $key_cc => $class_content) {
                            ClassContent::create([
                                'id_class'=>$class->id,
                                'order'=>$class_content->order,
                                'content_type'=>$class_content->content_type,
                                'content'=>$class_content->content,
                                'description'=>$class_content->description,
                                'observation'=>$class_content->observation,
                                'is_required'=>$class_content->is_required,
                                'state'=>$class_content->state,
                                'deleted'=>0,
                                'updated_user'=> $auth->id
                            ]);
                        }


                    }
                    $activities=Activity::where('id_class', $clase->id)->get();
                    foreach ($activities as $key_a => $activity) {
                        $activity_new=Activity::create([
                            'id_class'=>$class->id,
                            'id_quarterly_plan'=>$activity->id_quarterly_plan,
                            'id_achievement'=>$activity->id_achievement,
                            'id_indicator'=>$activity->id_indicator,
                            'activity_type'=>$activity->activity_type,
                            'name'=>$activity->name,
                            'description'=>$activity->description,
                            'is_required'=>1,
                            'state'=>1,
                            'deleted'=>0,
                            'updated_user'=>$auth->id,
                            'delivery_max_date'=>$activity->delivery_max_date,
                            'feedback_date'=>$activity->feedback_date
                        ]);
                        if($activity->activity_type==='CUESTIONARIO'){

                            $activityQ=ActivityQuestion::where('id_activity', $activity->id)->where('deleted', 0)->first();
                            if(isset($activityQ)){
                                ActivityQuestion::create([
                                    'id_activity'=>$activity_new->id,
                                    'question'=>$activityQ->question,
                                    'type_question'=>$activityQ->type_question,
                                    'content'=>$activityQ->content,
                                    'correct_answer'=>$activityQ->correct_answer,
                                    'justify'=>$activityQ->justify,
                                    'state'=>1,
                                    'deleted'=>0,
                                    'updated_user'=>$auth->id
                                ]);
                            }
                        }
                        else if($activity->activity_type==='COMPLETAR_ORACION'){
                            $activityC=ActivityCompleteSentence::where('id_activity', $activity->id)->where('deleted', 0)->first();
                            if(isset($activityC)){
                                ActivityCompleteSentence::create([
                                    'id_activity'=>$activity_new->id,
                                    'content'=>$activityC->content,
                                    'state'=>1,
                                    'deleted'=>0,
                                    'updated_user'=>$auth->id
                                ]);
                            }
                        }
                        else if($activity->activity_type==='RELACION'){
                            $activityR=ActivityRelationship::where('id_activity', $activity->id)->where('deleted', 0)->first();
                            if(isset($activityR)){
                                ActivityRelationship::create([
                                    'id_activity'=>$activity_new->id,
                                    'content'=>$activityR->content,
                                    'state'=>1,
                                    'deleted'=>0,
                                    'updated_user'=>$auth->id
                                ]);
                            }
                        }
                        else if($activity->activity_type==='CRUCIGRAMA'){
                            $activityCR=ActivityCrossword::where('id_activity', $activity->id)->where('deleted', 0)->first();
                            if(isset($activityCR)){
                                ActivityCrossword::create([
                                    'id_activity'=>$activity_new->id,
                                    'content'=>$activityCR->content,
                                    'state'=>1,
                                    'deleted'=>0,
                                    'updated_user'=>$auth->id
                                ]);
                            }
                        }
                    }
                }
                else
                {
                    $clase=Classs::find($data['fromData']['class_planning']['id']);
                    Classs::where('id',$data['toData']['class_planning']['id'])->update([
                        'name'=>$clase->name,
                        'date_init_class'=>$data['fromData']['class_planning']['date_init_class'],
                        'description'=> $clase->description,
                        'name_document'=> $clase->name_document,
                        'document'=> $clase->document,
                        'url'=> $clase->url,
                        'url_class'=>$clase->url_class,
                        'video'=> $clase->video,
                        'status'=> $clase->status,
                        'video1'=> $clase->video1,
                        'video2'=> $clase->video2,
                        'url1'=> $clase->url1,
                        'url2'=> $clase->url2,
                        'document1'=> $clase->document1,
                        'document2'=> $clase->document2,
                        'observation'=> $clase->observation,
                        'hourly'=> $clase->hourly,
                        'activityForPIARStudents'=>  $clase->activityForPIARStudents,
                        'activityForSelectStudents'=> $clase->activityForSelectStudents,
                        'activityForAllStudents'=> $clase->activityForAllStudents,
                        'selectedStudents'=> $clase->selectedStudents,
                        'work'=> $clase->work,
                        'transversals'=> $clase->transversals,
                        'objetivesClass'=> $clase->objetivesClass
                    ]);

                    $date_i= $data['fromData']['class_planning']['date_init_class'];
                    $explode=explode("T", $date_i);
                    $date_init= $explode[0] . ' ' . $explode[1];
                    $date_fin=date( 'Y-m-d H:i' ,  strtotime ( '+2 hour' , strtotime ($date_init))) ;
                    $evento = new Eventos;
                    $evento->name = $clase->name;
                    $evento->date_from = $date_init;
                    $evento->date_to = $date_fin;
                    $evento->id_area = $data['toData']['area']['id'];
                    $evento->id_classroom = $data['toData']['area']['id_classroom'];
                    $evento->id_user = Auth::user()->id;
                    $evento->url = $clase->url_class;
                    $evento->id_padre = NULL;
                    $evento->save();

                }
            }


        }
    }
    public function copyInformationLectives(Request $request)
    {
        $auth=Auth::user();
        $data = $request->all();
        $class_plan = $data['class_planning'];
        //return $class_plan;

        if(isset($data['fromData']) && isset($data['toData']) && isset($data['fromData']['weekly_planning']['id']) && isset($data['fromData']['trimestres']))
        {
            //copy weekly_planning
            $weekly_planning_id=0;
            if( $data['toData']['weekly_planning']=='new')
            {
                //return $data['toData']['area'];
                $weekly_plan=LectiveWeeklyPlan::find($data['fromData']['weekly_planning']['id']);
                $new_weekly_plan=LectiveWeeklyPlan::create([
                    'id_lective_planification'=>$data['toData']['area']['id_planification'],
                    'order'=>$weekly_plan->order,
                    'name'=>$weekly_plan->name,
                    'content'=>$weekly_plan->content,
                    'id_trimestre'=>$data['fromData']['trimestres'],
                    'observation'=>$weekly_plan->observation,
                    'state'=>$weekly_plan->state,
                    'deleted'=>$weekly_plan->deleted,
                    'updated_user'=>$weekly_plan->updated_user,
                ]);
                $weekly_planning_id=$new_weekly_plan->id;
            }
            else
            {
                $weekly_plan=LectiveWeeklyPlan::find($data['fromData']['weekly_planning']['id']);
                LectiveWeeklyPlan::where('id',$data['toData']['weekly_planning']['id'])->update([
                    'id_lective_planification'=>$data['toData']['area']['id_planification'],
                    'order'=>$weekly_plan->order,
                    'name'=>$weekly_plan->name,
                    'content'=>$weekly_plan->content,
                    'id_trimestre'=>$data['fromData']['trimestres'],
                    'observation'=>$weekly_plan->observation,
                    'state'=>$weekly_plan->state,
                    'deleted'=>$weekly_plan->deleted,
                    'updated_user'=>$weekly_plan->updated_user,
                ]);
                $weekly_planning_id=$data['toData']['weekly_planning']['id'];
            }


            //copy class information
            if($data['fromData']['class_planning']=='null')
            {

            }
            else if($data['fromData']['class_planning']=='all')
            {

                $class_planning=LectiveClass::where('id_lective_weekly_plan',$data['fromData']['weekly_planning']['id'])->get();

                foreach ($class_planning as $key_c => $clase) {
                    if($class_plan[$key_c]['id_class'] === $clase->id){
                        $class =LectiveClass::create([
                            'name'=>$clase->name,
                            'id_lective_weekly_plan'=>$weekly_planning_id,
                            'description'=> $clase->description,
                            'hourly_intensity'=> $clase->hourly_intensity,
                            'state'=> $clase->state,
                            'deleted'=> $clase->deleted,
                            'updated_user'=>$clase->updated_user,
                        ]);
                        $date_i= $class_plan[$key_c]['date_init_class'];
                        $explode=explode("T", $date_i);
                        $date_init= $explode[0] . ' ' . $explode[1];
                        $date_fin=date( 'Y-m-d H:i' ,  strtotime ( '+2 hour' , strtotime ($date_init))) ;
                        $evento = new Eventos;
                        $evento->name = $clase->name;
                        $evento->date_from = $date_init;
                        $evento->date_to = $date_fin;
                        $evento->id_area = $data['toData']['area']['lective']['id'];
                        $evento->id_classroom = 0;
                        $evento->id_user = Auth::user()->id;
                        $evento->url = 'no hay url asiganada';
                        $evento->id_padre = NULL;
                        $evento->save();
                    }
                    if(isset($class))
                    {
                        $classes_content=LectiveClassContent::where('id_lective_class',$clase->id)->where('deleted',0)->get();
                        foreach ($classes_content as $key_cc => $class_content) {
                            LectiveClassContent::create([
                                'id_lective_class'=>$class->id,
                                'content_type'=>$class_content->content_type,
                                'content'=>$class_content->content,
                                'description'=>$class_content->description,
                                'student_visited_date'=>$class_content->student_visited_date,
                                'state'=>$class_content->state,
                                'deleted'=>0,
                                'updated_user'=> $auth->id
                            ]);
                        }

                    }
                }

            }
            else{

                if($data['fromData']['class_planning']=='null')
                {

                }
                else if($data['toData']['class_planning']=='new')
                {
                    $clase=LectiveClass::find($data['fromData']['class_planning']['id']);

                    $class=LectiveClass::create([
                        'name'=>$clase->name,
                        'id_lective_weekly_plan'=>$weekly_planning_id,
                        'description'=> $clase->description,
                        'hourly_intensity'=> $clase->hourly_intensity,
                        'state'=> $clase->state,
                        'deleted'=> $clase->deleted,
                        'updated_user'=>$clase->updated_user,
                    ]);

                    //$date_i= $data['fromData']['class_planning']['date_init_class'];
                    //$explode=explode("T", $date_i);
                    //$date_init= $explode[0] . ' ' . $explode[1];
                    $date_init= $data['fromData']['class_planning']['date_init_class'];
                    $date_fin=date( 'Y-m-d H:i' ,  strtotime ( '+2 hour' , strtotime ($date_init))) ;
                    $date_init= $data['fromData']['class_planning']['date_init_class'];
                    $date_fin=date_add($date_init, date_interval_create_from_date_string("2 hours"));
                    $evento = new Eventos;
                    $evento->name = $clase->name;
                    $evento->date_from = $date_init;
                    $evento->date_to = $date_fin;
                    $evento->id_area = $data['toData']['area']['id'];
                    $evento->id_classroom = 0;
                    $evento->id_user = Auth::user()->id;
                    $evento->url = 'no hay url asiganada';
                    $evento->id_padre = NULL;
                    $evento->save();

                    if(isset($class))
                    {
                        $classes_content=LectiveClassContent::where('id_class',$clase->id)->where('deleted',0)->get();
                        foreach ($classes_content as $key_cc => $class_content) {
                            LectiveClassContent::create([
                                'id_lective_class'=>$class->id,
                                'content_type'=>$class_content->content_type,
                                'content'=>$class_content->content,
                                'description'=>$class_content->description,
                                'student_visited_date'=>$class_content->student_visited_date,
                                'state'=>$class_content->state,
                                'deleted'=>0,
                                'updated_user'=> $auth->id
                            ]);
                        }


                    }
                }
                else
                {
                    $clase=LectiveClass::find($data['fromData']['class_planning']['id']);

                    LectiveClass::where('id',$data['toData']['class_planning']['id'])->update([
                        'name'=>$clase->name,
                        'id_lective_weekly_plan'=>$weekly_planning_id,
                        'description'=> $clase->description,
                        'hourly_intensity'=> $clase->hourly_intensity,
                        'state'=> $clase->state,
                        'deleted'=> $clase->deleted,
                        'updated_user'=>$clase->updated_user,
                    ]);

                    //$date_i= $data['fromData']['class_planning']['date_init_class'];
                    //$explode=explode("T", $date_i);
                    //$date_init= $explode[0] . ' ' . $explode[1];
                    $date_init= $data['fromData']['class_planning']['date_init_class'];
                    $date_fin=date( 'Y-m-d H:i' ,  strtotime ( '+2 hour' , strtotime ($date_init))) ;
                    $date_init= $data['fromData']['class_planning']['date_init_class'];
                    $date_fin=date_add($date_init, date_interval_create_from_date_string("2 hours"));
                    $evento = new Eventos;
                    $evento->name = $clase->name;
                    $evento->date_from = $date_init;
                    $evento->date_to = $date_fin;
                    $evento->id_area = $data['toData']['area']['id'];
                    $evento->id_classroom = 0;
                    $evento->id_user = Auth::user()->id;
                    $evento->url = 'no hay url asiganada';
                    $evento->id_padre = NULL;
                    $evento->save();

                }
            }


        }
    }
    public function deleteObjetive(int $id){
       $update= CoursesAchievement::where('id', $id)->update(['deleted' => 1]);

       return 'ok';

    }
    public function deleteLogro(int $id){
        $update= Quarterly::where('id', $id)->update(['deleted' => 1]);

        return 'ok';

     }
}
