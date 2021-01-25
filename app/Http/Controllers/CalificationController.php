<?php

namespace App\Http\Controllers;

use App\ClassContent;
use App\Classroom;
use App\ClassroomStudent;
use App\Classs;
use Illuminate\Support\Facades\Auth;
use App\Weekly;
use Illuminate\Support\Facades\DB;

class CalificationController extends Controller
{
    public function getByClassroom(int $area_id,int $classroom_id)
    {
        $auth = Auth::user();

        if(!isset($auth)) return  response()->json([]);

        $weekly_plans=Weekly::where('id_classroom',$classroom_id)->where('id_area',$area_id)->get();

        $students=DB::table('classroom_student')
                    ->join('users', 'users.id', '=', 'classroom_student.id_user')
                    ->select('users.id as user_id','users.name as user_name','users.last_name as user_lastname', 'users.picture as user_picture', 'users.email as user_email')
                    ->where('classroom_student.id_classroom', $classroom_id)
                    ->orderBy('users.last_name')
                    ->get();

        foreach ($students as $key_student => $student) {

            $progress=0;
            $score=0;
            $activities_pending=0;


            foreach ($weekly_plans as $weekly_plan) {
                $progress+=  DB::select('call obtener_progreso_modulo(?,?)',[$weekly_plan->id, $student->user_id])[0]->porcentaje;
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

            $students[$key_student]->progress = round((count($weekly_plans)>0)?($progress/count($weekly_plans)):0,2);

            $students[$key_student]->score =round((count($weekly_plans)>0)?($score/count($weekly_plans)):0,2);

            $students[$key_student]->pending_calification =$activities_pending;
        }
        //DB::select('call obtener_progreso_clase(?,?)',[$clase[$key]->id, $user->id])[0]->porcentaje;

        return  response()->json($students);


    }
    public function getByStudent(int $area_id,int $classroom_id,int $student_id){
        $auth = Auth::user();

        if(!isset($auth)) return  response()->json([]);


        $weekly_plans=Weekly::where('id_classroom',$classroom_id)->where('id_area',$area_id)->get();

        foreach ($weekly_plans as $key_weekly_plan => $weekly_plan) {
            $progress=  DB::select('call obtener_progreso_modulo(?,?)',[$weekly_plan->id, $student_id])[0]->porcentaje;
            $score=  DB::select('call obtener_calificacion_modulo(?,?)',[$weekly_plan->id, $student_id])[0]->calificacion;

            $activities_interaction=DB::table('class')
                                        ->join('activity', 'activity.id_class', '=', 'class.id')
                                        ->join('activity_interaction', 'activity_interaction.id_activity', '=', 'activity.id')
                                        ->where('class.id_weekly_plan', $weekly_plan->id)
                                        ->where('activity.deleted', 0)
                                        ->where('activity.state', 1)
                                        ->where('activity_interaction.deleted', 0)
                                        ->where('activity_interaction.id_student', $student_id)//pendientes de calificacion
                                        ->where('activity_interaction.state', 2)
                                        ->get();

            $weekly_plans[$key_weekly_plan]->progress = $progress;
            $weekly_plans[$key_weekly_plan]->score = $score;
            $weekly_plans[$key_weekly_plan]->pending_calification = count($activities_interaction);



        }


        return  response()->json($weekly_plans);
    }
    public function getByModule(int $area_id,int $classroom_id,int $student_id,int $id_module){
        $auth = Auth::user();

        if(!isset($auth)) return  response()->json([]);


            $classes=Classs::where('id_weekly_plan',$id_module)->get();

            foreach ($classes as $key_class => $class) {
                $progress=  DB::select('call obtener_progreso_clase(?,?)',[$class->id, $student_id])[0]->porcentaje;
                $score=  DB::select('call obtener_calificacion_clase(?,?)',[$class->id, $student_id])[0]->calificacion;


                $activities_interaction=DB::table('class')
                        ->join('activity', 'activity.id_class', '=', 'class.id')
                        ->join('activity_interaction', 'activity_interaction.id_activity', '=', 'activity.id')
                        ->where('class.id', $class->id)
                        ->where('activity.deleted', 0)
                        ->where('activity.state', 1)
                        ->where('activity_interaction.deleted', 0)
                        ->where('activity_interaction.id_student', $student_id)//pendientes de calificacion
                        ->where('activity_interaction.state', 2)
                        ->get();


                        $classes[$key_class]->progress = $progress;
                        $classes[$key_class]->score = $score;
                        $classes[$key_class]->pending_calification = count($activities_interaction);

            }




        return  response()->json($classes);
    }
    public function getClassContent(int $id_class,int $id_student){
        $auth = Auth::user();

        if(!isset($auth)) return  response()->json([]);

        $class=Classs::find($id_class);

        $class->content=DB::table('class_content')
                            ->leftJoin('class_content_interaction',function($leftJoin)use($id_student){
                               $leftJoin->on( 'class_content.id', '=', 'class_content_interaction.id_class_content')->where('class_content_interaction.deleted',0)->where('id_student',$id_student);
                            })
                            ->where('class_content.id_class', $id_class)
                            ->where('class_content.deleted', 0)
                            ->select('class_content.*','class_content_interaction.updated_at as date_interaction')
                            ->get();


        $class->activities=DB::table('activity')
                            ->leftJoin('activity_interaction',function($leftJoin)use($id_student){
                               $leftJoin->on( 'activity.id', '=', 'activity_interaction.id_activity')->where('activity_interaction.deleted',0)->where('id_student',$id_student);
                            })
                            ->where('activity.id_class', $id_class)
                            ->where('activity.deleted', 0)
                            ->select('activity.*','activity_interaction.latest_access_date as date_interaction','activity_interaction.score as score','activity_interaction.state as state_interaction')
                            ->get();


        return  response()->json($class);
    }
}
