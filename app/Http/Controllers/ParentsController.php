<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use DB;
use App\User;
use App\Parents;
use App\ClassroomStudent;
use App\Classroom;
use App\Area;
use App\Weekly;
use App\Observer;

class ParentsController extends Controller
{
    public function __construct(){
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('parents');
    }

    public function getParents(){
        $parents = User::where('type_user','=',4)->get();
        return response()->json($parents, 200);
    }

    public function getDataObserverStudents(){
        $user_name = Auth::user()->name;

        $observer = Observer::where('father_name','=', $user_name)->get();
        $observerMother = Observer::where('mother_name','=', $user_name)->get();

        if($observer){
            return $observer;
        }else if($observerMother){
            return $observerMother;
        }else {
            return [];
        }
    }

    public function getInvitatios(){
        $user_id = Auth::user()->id;
        $parents = Parents::where('id_sender','=', $user_id)->orWhere('id_invited','=', $user_id)->orderBy('id', 'asc')->get();
        return response()->json($parents, 200);return $parents;
    }
    public function getUsersToInvitations(){
        $users = [];

        $admins = DB::table("users")
        ->select('users.*')
        ->where('type_user','=',1)
        ->get();

        $teachers = DB::table("users")
        ->select('users.*')
        ->where('type_user','=',2)
        ->get();

        $psychologists = DB::table("users")
        ->select('users.*')
        ->where('type_user','=',5)
        ->get();

        array_push($users, $admins, $teachers, $psychologists);

        return response()->json($users, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $parents = new Parents;
        $parents->name_event = $request->name_event;
        $parents->date_start = $request->date_start;
        $parents->date_end = $request->date_end;
        $parents->link = $request->link;
        $parents->day_week = $request->day_week;
        $parents->email_invited = $request->email_invited;
        $parents->id_invited = $request->id_invited;
        $parents->id_sender = $request->id_sender;

        $parents->save();

        return response()->json($parents);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $parents = Parents::find($id);
        return $parents;
    }

    public function getAreas(){
        $user_id = Auth::user()->id;
        $students = User::where('parent_id','=',$user_id)->get();
        $areas = [];
        
        foreach ($students as $index => $student) {
            $user_asignateds = ClassroomStudent::where('id_user', $student->id)->get();
            if (isset($user_asignateds)) {
                foreach ($user_asignateds as $key => $user_asignated) {
                    $classroom = Classroom::find($user_asignated->id_classroom);
                    $class = Area::where('id_grade', $classroom->id_grade)->get();
                    foreach ($class as $key => $area) {
                        array_push($areas, [
                            'text'         => $area->name . " - " . $classroom->name,
                            'student_name' => $student->name,
                            'id_student'   => $student->id,
                            'id_area'           => $area->id,
                            'id_classroom' => $classroom->id,
                        ]);
                    }
                }
            }
        }

        $studentsAreas = array();

        foreach ( $areas as $value ) {
            $studentsAreas[$value["student_name"]][] = $value;
        }

        return response()->json($studentsAreas);
    }

    public function getNotes(int $id_student, int $id_area, int $id_classroom){
        $scores=[];

        $weekly_plans=Weekly::where('id_classroom',$id_classroom)->where('id_area',$id_area)->get();

        $students=DB::table('classroom_student')
            ->join('users', 'users.id', '=', 'classroom_student.id_user')
            ->select('users.id as user_id','users.name as user_name','users.last_name as user_lastname', 'users.picture as user_picture', 'users.email as user_email')
            ->where('classroom_student.id_classroom', $id_classroom)
            ->orderBy('users.last_name')
            ->get();

        foreach ($students as $key_student => $student) {

            $progress=0;
            $score=0;
            $activities_pending=0;

            $weekly_plans_with_score=0;
            $weekly_plans_with_progress=0;


            foreach ($weekly_plans as $weekly_plan) {

                $_progress=  DB::select('call obtener_progreso_modulo(?,?)',[$weekly_plan->id, $student->user_id])[0]->porcentaje;

                if($_progress>-1)
                {
                    $weekly_plans_with_progress++;
                    $progress+=$_progress;
                }


                $activities=DB::table('class')
                            ->join('activity', 'activity.id_class', '=', 'class.id')
                            ->where('class.id_weekly_plan', $weekly_plan->id)
                            ->where('activity.deleted', 0)
                            ->where('activity.state', 1)
                            ->get();

                if(count($activities)>0)
                {
                    $weekly_plans_with_score++;
                    $score+=  DB::select('call obtener_calificacion_modulo(?,?)',[$weekly_plan->id, $student->user_id])[0]->calificacion;

                    $activities_interaction=DB::table('class')
                        ->join('activity', 'activity.id_class', '=', 'class.id')
                        ->join('activity_interaction', 'activity_interaction.id_activity', '=', 'activity.id')
                        ->where('class.id_weekly_plan', $weekly_plan->id)
                        ->where('activity.deleted', 0)
                        ->where('activity.state', 1)
                        ->where('activity_interaction.deleted', 0)
                        ->where('activity_interaction.id_student', $student->user_id)//pendientes de calificacion
                        ->where('activity_interaction.state', 2)
                        ->get();

                    $activities_pending+=count($activities_interaction);
                }
            }

            $students[$key_student]->progress = round(($weekly_plans_with_progress>0)?($progress/$weekly_plans_with_progress):-1,2);

            $students[$key_student]->score =round(($weekly_plans_with_score>0)?($score/$weekly_plans_with_score):-1,2);

            $students[$key_student]->score_base=5;

            $students[$key_student]->pending_calification =$activities_pending;
        }

        return  response()->json($students);
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
        $parents = Parents::find($id);
        $parents->name_event = $request->name_event;
        $parents->date_start = $request->date_start;
        $parents->date_end = $request->date_end;
        $parents->link = $request->link;
        $parents->update();

        return response()->json('ok');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $parentsData = Parents::find($id);
        $parentsData->delete();
        return response()->json('ok');
    }
}
