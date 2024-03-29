<?php

namespace App\Http\Controllers;

use App\Eventos;
use Carbon\Carbon;
use App\Area;
use App\Classroom;
use App\ClassroomStudent;
use App\Lective;
use App\LectivePlanification;
use App\LectiveStudent;
use App\TutorClassroom;
use App\VinculationTutorStudent;
use Illuminate\Http\Request;
use Spatie\GoogleCalendar\Event;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;


class EventsController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function createEvent(Request $request)
    {
        $evento = new Eventos;
        $evento->name = $request->name;
        $evento->date_from = $request->startDateTime;
        $evento->date_to = $request->endDateTime;
        $evento->id_area = $request->id_area;
        $evento->id_classroom = $request->id_classroom;
        $evento->id_class = $request->id_class;
        $evento->id_user = Auth::user()->id;
        $evento->url = isset($request->url) ? $request->url: 'Sin link';
        $evento->id_padre = $request->id_padre;
        $evento->save();

        return response()->json($evento);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexEvents()
    {
        // $events = Event::get();
        $eventos = [];
        $user = Auth::user();
        $date =  Carbon::now();
        $current_date=date('Y-m-d');
        $initial_range_date = date ( 'Y-m-d' , strtotime ( '-90 day' , strtotime ($current_date ) )) ;
        $end_range_date =date ( 'Y-m-d' ,  strtotime ( '+90 day' , strtotime ($current_date ) ));
        if (isset($user) && ($user->isTeacher()||$user->isTutor())) {
            $eventos_teacher = Eventos::where('id_user', $user->id)->whereDate('date_from','>=',$initial_range_date)->whereDate('date_to','<=',$end_range_date)->where('deleted_at','=', null)->orderBy('date_from', 'ASC')->get();
            foreach ($eventos_teacher as $index => $evento) {

                    if ($evento->id_classroom == 0) // is lective
                    {
                        $classroom = null;
                        $area = Lective::find($evento->id_area);
                    } else {
                        $classroom = TutorClassroom::find($evento->id_classroom);
                        $area = Area::find($evento->id_area);
                    }


                    array_push($eventos,[
                        "id" => $evento->id,
                        "name" => $evento->name,
                        "dateFrom" => $evento->date_from,
                        "dateTo" => $evento->date_to,
                        "hangout" => $evento->url,
                        "id_class" => $evento->id_class,
                        "area" => isset($area->name) ? $area->name : 'Empty',
                        "id_area" => isset($area->id) ? $area->id : '',
                        "classroom" => $classroom ? $classroom->name : '',
                        "id_classroom" => $classroom ? $classroom->id : '',
                    ]);

            }
        } elseif (isset($user) && $user->type_user == 10) {
            $vinculations = VinculationTutorStudent::where('id_student', $user->id)->get();
            $classroom_ids = [];
            foreach($vinculations as $viculation){
                $code = TutorClassroom::where('name','like','%'.$viculation->code_vinculated.'%')->first();
                array_push($classroom_ids,$code->id);
            }

            $eventos_student = Eventos::whereIn('id_classroom', $classroom_ids)->whereDate('date_from','>=',$initial_range_date)->whereDate('date_to','<=',$end_range_date)->where('deleted_at','=', null)->orderBy('date_from', 'ASC')->get();

            foreach ($eventos_student as $index => $evento) {

                        if ($evento->id_classroom == 0) // is lective
                        {
                            $classroom = null;
                            $area = Lective::find($evento->id_area);
                        } else {
                            $classroom = TutorClassroom::find($evento->id_classroom);
                            $area = Area::find($evento->id_area);
                        }
                        //$area = Area::find($evento->id_area);
                        //$classroom = Classroom::find($evento->id_classroom);
                        $eventos[$index] = [
                            "name" => $evento->name,
                            "dateFrom" => $evento->date_from,
                            "dateTo" => $evento->date_to,
                            "hangout" => $evento->url,
                            "area" => $area->name,
                            "classroom" =>  $classroom ? $classroom->name : '',
                            "id_classroom" => $classroom ? $classroom->id : '',
                            "id_class" => $evento->id_class,
                        ];


            }

            //lectives events
            $plans_student = LectiveStudent::where('id_student', $user->id)->where('deleted', 0)->get();
            foreach ($plans_student as $i_plan_student => $plan_student) {
                $planifications = LectivePlanification::where('id', $plan_student->id_lective_planification)->where('deleted', 0)->where('state', 1)->get();

                foreach ($planifications as $i_plan => $plan) {
                    $eventos_student = Eventos::where('id_area', $plan->id_lective)->where('id_classroom', 0)->orderBy('date_from', 'ASC')->get();
                    foreach ($eventos_student as $index => $evento) {
                        $dateTo = Carbon::parse($evento->date_to);
                        if ($dateTo > $date) {

                            if ($evento->id_classroom == 0) // is lective
                            {
                                $classroom = null;
                                $area = Lective::find($evento->id_area);
                            } else {
                                $classroom = TutorClassroom::find($evento->id_classroom);
                                $area = Area::find($evento->id_area);
                            }


                            //$area = Area::find($evento->id_area);
                            //$classroom = Classroom::find($evento->id_classroom);
                            array_push(
                                $eventos,
                                [
                                    "name" => $evento->name,
                                    "dateFrom" => $evento->date_from,
                                    "dateTo" => $evento->date_to,
                                    "hangout" => $evento->url,
                                    "area" => $area->name,
                                    "classroom" =>  $classroom ? $classroom->name : '',
                                ]
                            );
                        }
                    }
                }
            }
        } elseif (isset($user) && $user->type_user == 1) {
            $initial_range_date_adm = date ( 'Y-m-d' , strtotime ( '-0 day' , strtotime ($current_date ) )) ;
            $end_range_date_adm =date ( 'Y-m-d' ,  strtotime ( '+7 day' , strtotime ($current_date ) )) ;
            $eventos_all = Eventos::whereDate('date_from','>=',$initial_range_date_adm)->whereDate('date_to','<=',$end_range_date_adm)->where('deleted_at','=', null)->orderBy('date_from', 'ASC')->limit(50)->get();
            foreach ($eventos_all as $index => $evento) {

                    if ($evento->id_classroom == 0) // is lective
                    {
                        $classroom = null;
                        $area = Lective::find($evento->id_area);
                    } else {
                        $classroom = Classroom::find($evento->id_classroom);
                        $area = Area::find($evento->id_area);
                        // $area = Area::where('id', $evento->id_area)->get();

                        // var_dump($evento->id_area.' - ');
                        // die;
                    }

                    //$area = Area::find($evento->id_area);
                    // $classroom = Classroom::find($evento->id_classroom);
                    $eventos[$index] = [
                        "name" => $evento->name,
                        "dateFrom" => $evento->date_from,
                        "dateTo" => $evento->date_to,
                        "hangout" => $evento->url,
                        // "area" => $area->name,
                        "area" => isset($area->name) ? $area->name : 'Empty',
                        // "area" => isset($area['name']) ? $area['name'] : 'Empty',
                        "classroom" =>  $classroom ? $classroom->name : '',
                    ];

            }
        }
        return response()->json($eventos);
    }

    public function getAllEventsAdmin(){
        $eventos = [];
        $user = Auth::user();
        $date =  Carbon::now();
        $current_date=date('Y-m-d');
        $initial_range_date = date ( 'Y-m-d' , strtotime ( '-90 day' , strtotime ($current_date ) ));
        $end_range_date =date ( 'Y-m-d' ,  strtotime ( '+90 day' , strtotime ($current_date ) ));
        if (isset($user) && $user->type_user == 1) {
            $initial_range_date_adm = date ( 'Y-m-d' , strtotime ( '-0 day' , strtotime ($current_date ) )) ;
            $end_range_date_adm =date ( 'Y-m-d' ,  strtotime ( '+7 day' , strtotime ($current_date ) )) ;
            $eventos_all = Eventos::whereDate('date_from','>=',$initial_range_date_adm)->whereDate('date_to','<=',$end_range_date_adm)->where('deleted_at','=', null)->orderBy('date_from', 'ASC')->limit(100)->get();
            foreach ($eventos_all as $index => $evento) {

                    if ($evento->id_classroom == 0) // is lective
                    {
                        $classroom = null;
                        $area = Lective::find($evento->id_area);
                    } else {
                        $classroom = Classroom::find($evento->id_classroom);
                        $area = Area::find($evento->id_area);
                        // $area = Area::where('id', $evento->id_area)->get();

                        // var_dump($evento->id_area.' - ');
                        // die;
                    }

                    //$area = Area::find($evento->id_area);
                    // $classroom = Classroom::find($evento->id_classroom);
                    $eventos[$index] = [
                        "name" => $evento->name,
                        "dateFrom" => $evento->date_from,
                        "dateTo" => $evento->date_to,
                        "hangout" => $evento->url,
                        // "area" => $area->name,
                        "area" => isset($area->name) ? $area->name : 'Empty',
                        // "area" => isset($area['name']) ? $area['name'] : 'Empty',
                        "classroom" =>  $classroom ? $classroom->name : '',
                    ];

            }
        }
        return response()->json($eventos);
    }

    public function getStudentsClassForParents(){
        $eventos = [];
        $user = Auth::user();
        $current_date=date('Y-m-d h:i:s');
        $date =  Carbon::now();

        if(isset($user) && $user->type_user == 4){
            //Se buscan los estudiantes por medio del campo parent_id
            $students = DB::table("users")
                ->select('users.*')
                ->where('parent_id','=',$user->id)
                ->get();

            /*
                Con base a la busqueda anterior se consultan
                los eventos, areas y clases al que el estudiante se encuentre asociado y se realiza push al array eventos
            */
            foreach($students as $index => $student){
                $events_student_for_parents = DB::table('classroom_student')
                ->join('eventos', 'classroom_student.id_classroom', '=', 'eventos.id_classroom')
                ->select('eventos.*')
                ->where('classroom_student.id_user', $student->id)
                ->where('eventos.date_to','>=',$current_date)
                ->orderBy('eventos.date_from')
                ->get();

                foreach($events_student_for_parents as $index => $events_students){
                    if ($events_students->id_classroom == 0){
                        $classroom = null;
                        $area = Lective::find($events_students->id_area);
                    } else {
                        $classroom = Classroom::find($events_students->id_classroom);
                        $area = Area::find($events_students->id_area);
                    }

                    array_push($eventos,[
                        "name" => $events_students->name,
                        "dateFrom" => $events_students->date_from,
                        "dateTo" => $events_students->date_to,
                        "hangout" => $events_students->url,
                        "area" => $area->name,
                        "classroom" =>  $classroom ? $classroom->name : '',
                        "student_name" => $student->name
                    ]);
                }
            }
        }
        return response()->json($eventos);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function studentEvents()
    {
        // $events = Event::get();
        $eventos = [];
        $user = Auth::user();
        $current_date=date('Y-m-d h:i:s');
        $date =  Carbon::now();


       if (isset($user) && $user->type_user == 3) {

        $events_student=DB::table('classroom_student')
                        ->join('eventos', 'classroom_student.id_classroom', '=', 'eventos.id_classroom')
                        ->select('eventos.*')
                        ->where('classroom_student.id_user', $user->id)
                        ->where('eventos.date_to','>=',$current_date)
                        ->orderBy('eventos.date_from')
                        ->get();


            foreach ($events_student as $index => $evento) {

                if ($evento->id_classroom == 0) // is lective
                {
                    $classroom = null;
                    $area = Lective::find($evento->id_area);
                } else {
                    $classroom = Classroom::find($evento->id_classroom);
                    $area = Area::find($evento->id_area);
                }
                //$area = Area::find($evento->id_area);
                //$classroom = Classroom::find($evento->id_classroom);
                array_push($eventos,[
                    "name" => $evento->name,
                    "dateFrom" => $evento->date_from,
                    "dateTo" => $evento->date_to,
                    "hangout" => $evento->url,
                    "area" => $area->name,
                    "classroom" =>  $classroom ? $classroom->name : '',
                ]);
            }

            //lectives events
            $plans_student = LectiveStudent::where('id_student', $user->id)->where('deleted', 0)->get();
            foreach ($plans_student as $i_plan_student => $plan_student) {
                $planifications = LectivePlanification::where('id', $plan_student->id_lective_planification)->where('deleted', 0)->where('state', 1)->get();

                foreach ($planifications as $i_plan => $plan) {
                    $eventos_student = Eventos::where('id_area', $plan->id_lective)->where('id_classroom', 0)->orderBy('date_from', 'ASC')->get();
                    foreach ($eventos_student as $index => $evento) {
                        $dateTo = Carbon::parse($evento->date_to);
                        if ($dateTo > $date) {

                            if ($evento->id_classroom == 0) // is lective
                            {
                                $classroom = null;
                                $area = Lective::find($evento->id_area);
                            } else {
                                $classroom = Classroom::find($evento->id_classroom);
                                $area = Area::find($evento->id_area);
                            }


                            //$area = Area::find($evento->id_area);
                            //$classroom = Classroom::find($evento->id_classroom);
                            array_push(
                                $eventos,
                                [
                                    "name" => $evento->name,
                                    "dateFrom" => $evento->date_from,
                                    "dateTo" => $evento->date_to,
                                    "hangout" => $evento->url,
                                    "area" => $area->name,
                                    "classroom" =>  $classroom ? $classroom->name : '',
                                ]
                            );
                        }
                    }
                }
            }
        }
        return response()->json($eventos);
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

    public function todayEvents()
    {
        $eventos = [];
        $user = Auth::user();
        $current_date=date('Y-m-d');
        $date =  Carbon::now();

        if (isset($user) && $user->type_user == 3) {

            $events_student=DB::table('classroom_student')
                            ->join('eventos', 'classroom_student.id_classroom', '=', 'eventos.id_classroom')
                            ->select('eventos.*')
                            ->where('classroom_student.id_user', $user->id)
                            ->whereDate('eventos.date_from','=',$current_date)
                            ->orderBy('eventos.date_from')
                            ->limit(5)
                            ->get();


                foreach ($events_student as $index => $evento) {
                    if ($evento->id_classroom == 0) // is lective
                    {
                        $classroom = null;
                        $area = Lective::find($evento->id_area);
                    } else {
                        $classroom = Classroom::find($evento->id_classroom);
                        $area = Area::find($evento->id_area);
                    }
                    //$area = Area::find($evento->id_area);
                    //$classroom = Classroom::find($evento->id_classroom);
                    array_push($eventos,[
                        "name" => $evento->name,
                        "dateFrom" => $evento->date_from,
                        "dateTo" => $evento->date_to,
                        "hangout" => $evento->url,
                        "area" => $area->name,
                        "classroom" =>  $classroom ? $classroom->name : '',
                    ]);
                }

                //activities
                $activities_student=DB::table('classroom_student')
                    ->join('classroom', 'classroom_student.id_classroom', '=', 'classroom.id')
                    ->join('annual_planification', 'annual_planification.id_classroom', '=', 'classroom_student.id_classroom')
                    ->join('area', 'annual_planification.id_area', '=', 'area.id')
                    ->join('achievement_planification', 'achievement_planification.id_planification', '=', 'annual_planification.id')
                    ->join('activity', 'activity.id_achievement', '=', 'achievement_planification.id')
                    ->join('class', 'class.id', '=', 'activity.id_class')
                    ->leftJoin('activity_interaction', 'activity_interaction.id_activity', '=', 'activity.id')
                    ->select('area.name as area_name','classroom.name as classroom_name','activity.*','activity_interaction.score as interaction_score','activity_interaction.state as interaction_state','class.id_weekly_plan as weekly_plan_id')
                    ->where('classroom_student.id_user', $user->id)
                    ->where('activity.deleted',0)
                    ->whereDate('activity.delivery_max_date','=',$current_date)
                    ->orderBy('activity.delivery_max_date')
                    ->limit(5)
                    ->get();


                foreach ($activities_student as $index => $activity) {

                    array_push($eventos,[
                        "name" => 'ACTIVIDAD: '.$activity->name,
                        "dateFrom" => $activity->created_at,
                        "dateTo" => $activity->delivery_max_date,
                        "hangout" => '/estudiante/modulo/'.$activity->weekly_plan_id.'/clase/'.$activity->id_class,
                        "area" => $activity->area_name,
                        "classroom" =>$activity->classroom_name
                    ]);
                }


                //lectives events
                $plans_student = LectiveStudent::where('id_student', $user->id)->where('deleted', 0)->get();
                foreach ($plans_student as $i_plan_student => $plan_student) {
                    $planifications = LectivePlanification::where('id', $plan_student->id_lective_planification)->where('deleted', 0)->where('state', 1)->get();

                    foreach ($planifications as $i_plan => $plan) {
                        $eventos_student = Eventos::where('id_area', $plan->id_lective)->where('id_classroom', 0)->orderBy('date_from', 'ASC')->get();
                        foreach ($eventos_student as $index => $evento) {
                            $dateTo = Carbon::parse($evento->date_to);
                            if ($dateTo > $date) {

                                if ($evento->id_classroom == 0) // is lective
                                {
                                    $classroom = null;
                                    $area = Lective::find($evento->id_area);
                                } else {
                                    $classroom = Classroom::find($evento->id_classroom);
                                    $area = Area::find($evento->id_area);
                                }


                                //$area = Area::find($evento->id_area);
                                //$classroom = Classroom::find($evento->id_classroom);
                                array_push(
                                    $eventos,
                                    [
                                        "name" => $evento->name,
                                        "dateFrom" => $evento->date_from,
                                        "dateTo" => $evento->date_to,
                                        "hangout" => $evento->url,
                                        "area" => $area->name,
                                        "classroom" =>  $classroom ? $classroom->name : '',
                                    ]
                                );
                            }
                        }
                    }
                }
            }

            if(isset($user) && ($user->isTeacher()||$user->isTutor())) {

                $events_teacher=DB::table('classroom_teacher')
                ->join('eventos', 'classroom_teacher.id_classroom', '=', 'eventos.id_classroom')
                ->where('classroom_teacher.id_user', $user->id)
                ->where('eventos.id_user', $user->id)
                ->where('eventos.id_area','=','classroom_teacher.id_area')
                ->whereDate('eventos.date_from','=',$current_date)
                ->where('eventos.date_to','>=',date('Y-m-d H:i:s'))
                ->select('eventos.*')
                ->orderBy('eventos.date_from')
                ->limit(15)
                ->get();



                foreach ($events_teacher as $index => $evento) {

                    if ($evento->id_classroom == 0) // is lective
                    {
                        $classroom = null;
                        $area = Lective::find($evento->id_area);
                    } else {
                        $classroom = Classroom::find($evento->id_classroom);
                        $area = Area::find($evento->id_area);
                    }
                    //$area = Area::find($evento->id_area);
                    //$classroom = Classroom::find($evento->id_classroom);
                    array_push($eventos,[
                        "name" => $evento->name,
                        "dateFrom" => $evento->date_from,
                        "dateTo" => $evento->date_to,
                        "hangout" => $evento->url,
                        "area" => $area->name,
                        "classroom" =>  $classroom ? $classroom->name : '',
                    ]);
                }

            }

            return response()->json($eventos);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function eventNearStudent(String $id_area, String $id_classroom)
    {
        $user = Auth::user();
        if (isset($user) && $user->type_user == 3) {
            $date =  Carbon::now();
            $event = Eventos::where('id_area',$id_area)
                            ->where('id_classroom',$id_classroom)
                            ->where('date_from','>=',$date)
                            ->orderBy('date_from','ASC')
                            ->first();
            return $event;
        }else{
            return 0;
        }
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
    public function updateEvent(Request $request)
    {
        $data = $request->all();
        $user = Auth::user();
        if($data['todos'] === false){
            $eventos = Eventos::findOrFail($data['id']);
            $area_classroom = $data['id_area'];
            $arrayAreaClassroom = explode("/", $area_classroom);
            $eventos->name = $data['name'];
            $eventos->date_from = $data['startDateTime'];
            $eventos->date_to = $data['endDateTime'];
            $eventos->id_area = $arrayAreaClassroom[0];
            $eventos->id_classroom = $arrayAreaClassroom[1];
            $eventos->id_user = Auth::user()->id;
            $eventos->url = $data['url'];
            $eventos->save();

            return 'ok';
        }else{
            $eventos = Eventos::select('id')->where('id_padre', $data['id_padre'])->get();
            if(count($eventos) > 0){
                for($i=0; $i < count($eventos); $i++){
                    $evento = Eventos::where('id', $eventos[$i]->id)->first();
                    $area_classroom = $data['id_area'];
                    $arrayAreaClassroom = explode("/", $area_classroom);
                    $evento->name = $data['name'];
                    $evento->date_from = $data['startDateTime'];
                    $evento->date_to = $data['endDateTime'];
                    $evento->id_area = $arrayAreaClassroom[0];
                    $evento->id_classroom = $arrayAreaClassroom[1];
                    $evento->id_user = Auth::user()->id;
                    $evento->url = $data['url'];
                    $evento->save();

                }
            }else{
                return 'no';
            }
            return 'ok';
        }

    }
    public function deleteEvent(Request $request)
    {
        $data = $request->all();
        $user = Auth::user();
        if($data['todos'] === false){
            $eventos = Eventos::findOrFail($data['id']);
            $eventos->id_user = Auth::user()->id;
            $eventos->deleted_at = Carbon::now();
            $eventos->save();

            return 'ok';
        }else{
            $eventos = Eventos::select('id')->where('id_padre', $data['id_padre'])->get();
            if(count($eventos) > 0){
                for($i=0; $i < count($eventos); $i++){
                    $evento = Eventos::where('id', $eventos[$i]->id)->first();
                    $evento->id_user = Auth::user()->id;
                    $evento->deleted_at = Carbon::now();
                    $evento->save();

                }
            }else{
                return 'no';
            }
            return 'ok';
        }

    }
    public function findEvent(String $id)
    {

        $eventos = Eventos::findOrFail($id);


        return $eventos;
    }

    public function lastID(){

        $last_id= Eventos::all()->last()->id;

        return $last_id;

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // public function destroy($id)
    // {
    //     //
    //     $eventos = Eventos::findOrFail($id);
    //     $eventos->delete();
    // }

    // public function deleteEvent(Request $request)
    // {
    // 	$data = $request->all();

    //     $eventos = Eventos::findOrFail($data['id']);
    //     $eventos->deleted_at = Carbon::now();
    //     $eventos->save();

    //         return 'ok';
    // }
}
