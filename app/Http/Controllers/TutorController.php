<?php
namespace App\Http\Controllers;

use App\TutorSchedule;
use App\TutorScheduleStudent;
use App\User;
use DateInterval;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TutorController extends Controller
{
    public function AddSchedule(Request $request,int $area_id,int $classroom_id)
    {
        $user=User::find(Auth::id());

        if(!$user->isTutor())
        {
            return response('user invalid',400);
        }

        $data = $request->all();

        TutorSchedule::create([
            'days'=>json_encode($data['days']),
            'date_from'=>$data['date_from'],
            'date_to'=>$data['date_to'],
            'duration_minutes'=>$data['duration_minutes'],
            'area_id'=>$area_id,
            'classroom_id'=>$classroom_id,
            'teacher_id'=>$user->id,
            'state'=>1,
            'deleted'=>0,
        ]);
        return response()->json($data);
    }
    public function UpdateSchedule(Request $request,int $area_id,int $classroom_id,int $schedule_id)
    {
        $user=User::find(Auth::id());

        if(!$user->isTutor())
        {
            return response('user invalid',400);
        }

        $data = $request->all();

        $schedule=TutorSchedule::find($schedule_id);

        if(!isset($schedule))  return response('Horario de tutorías no encontrado',400);

        $schedules_busy=TutorScheduleStudent::where('tutorschedule_id',$schedule->id)->where('deleted',0)->get();

        if(count($schedules_busy)>0)  return response('No se puede actualizar, existen tutorías pendientes y/o creadas',400);

        $schedule->days=json_encode($data['days']);
        $schedule->date_from=$data['date_from'];
        $schedule->date_to=$data['date_to'];
        $schedule->duration_minutes=$data['duration_minutes'];
        $schedule->save();

        return response('',200);
    }

    public function GetAllSchedule(int $area_id,int $classroom_id)
    {
        $user=User::find(Auth::id());

        if(!$user->isTutor())
        {
            return response('user invalid',400);
        }


        $data=TutorSchedule::where('teacher_id',$user->id)->where('area_id',$area_id)->where('classroom_id',$classroom_id)->where('deleted',0)->where('state',1)->get();

        foreach ($data as $key => $row) {
           $data[$key]->days=json_decode($row['days']);
        }

        return response()->json($data);
    }
    public function GetAvailableSchedule(int $area_id,int $classroom_id, string $date_find)
    {
        $user=User::find(Auth::id());

        if(!$user->isStudent())
        {
            return response('user invalid',400);
        }

        //$current_date=date("Y-m-d H:i:s");
        $data=[];

        $schedules=TutorSchedule::where('area_id',$area_id)->where('classroom_id',$classroom_id)->whereDate('date_from','<=',$date_find)->whereDate('date_to','>=',$date_find)->where('deleted',0)->where('state',1)->get();



        foreach ($schedules as $key => $row) {

           $schedules[$key]->days=json_decode($row['days']);

           $schedules_busy=TutorScheduleStudent::where('tutorschedule_id',$row->id)->where('student_id','!=',$user->id)->where('deleted',0)->get();

           $schedules_busy_mine=TutorScheduleStudent::where('tutorschedule_id',$row->id)->where('student_id',$user->id)->where('deleted',0)->get();

           //calculate minutes
           $minutes = (strtotime($row['date_from'])-strtotime($row['date_to']))/60;
           $minutes = abs($minutes); $minutes = floor($minutes);

           //range minutes
           $ever_time=floor($minutes/$row['duration_minutes']);

           $teacher=User::find($row->teacher_id);

           for ($i=1; $i<=$ever_time ; $i++) {
                $available_schedules =[];
                $busy_schedules_mine =[];

                //calcule time
                $time = new DateTime($row->date_from);
                $time->add(new DateInterval('PT' . (($i-1)*$row['duration_minutes']) . 'M'));
                $date_from=$time->format('Y-m-d H:i');
                $date_finded=$time->format('Y-m-d');
                $time->add(new DateInterval('PT' . ($row['duration_minutes']) . 'M'));
                $date_to=$time->format('Y-m-d H:i');

                //evalue day
                if($date_finded!=$date_find){
                    continue;
                }

                //evalue hours
                $time_from=new DateTime($row->date_from);
                $time_to=new DateTime($row->date_to);
                if(strtotime($date_find.' '.$time_from->format('H:i'))>strtotime($date_from))
                {
                    continue;
                }
                if(strtotime($date_find.' '.$time_to->format('H:i'))<strtotime($date_to))
                {
                    continue;
                }
                //setDate



                 //get schedules other
                if(isset($schedules_busy)&& count($busy_schedules_mine)>0)
                    $available_schedules = array_filter($schedules_busy, function($schedule_busy) use ($i){
                        if($schedule_busy->time_index==$i)
                        {
                            return true;
                        }

                        return false;
                    });

                //get schedules mine
                if(isset($busy_schedules_mine)&& count($busy_schedules_mine)>0)
                    $busy_schedules_mine = array_filter($schedules_busy_mine, function($schedule_busy) use ($i){
                        if($schedule_busy->time_index==$i)
                        {
                            return true;
                        }

                        return false;
                    });



                //schedule is available
                if(count($available_schedules)==0)
                {

                    array_push($data,[
                        'time_index'=>$i,
                        'schedule_id'=>$row->id,
                        'date_from'=>$date_from,
                        'date_to'=>$date_to,
                        'teacher'=>['name'=>$teacher->name.' '.$teacher->last_name,'id'=>$teacher->id,'email'=>$teacher->email],
                        'state'=>1,
                        'reserved'=>[]
                    ]);
                } else if(count($busy_schedules_mine)>0)
                {
                    array_push($data,[
                        'time_index'=>$i,
                        'schedule_id'=>$row->id,
                        'date_from'=>$date_from,
                        'date_to'=>$date_to,
                        'teacher'=>['name'=>$teacher->name.' '.$teacher->last_name,'id'=>$teacher->id,'email'=>$teacher->email],
                        'state'=>2,
                        'reserved'=>$busy_schedules_mine[0]
                    ]);
                }


           }

        }

        return response()->json($data);
    }
    public function DeleteSchedule(Request $request,int $area_id,int $classroom_id,int $schedule_id)
    {
        $user=User::find(Auth::id());

        if(!$user->isTutor())
        {
            return response('user invalid',400);
        }

        $data = $request->all();

        $schedule=TutorSchedule::find($schedule_id);

        if(!isset($schedule))  return response('Horario de tutorías no encontrado',400);

        $current_date=date("Y-m-d");

        $schedules_busy=TutorScheduleStudent::where('tutorschedule_id',$schedule->id)->whereDate('date_to','>=',$current_date)->where('deleted',0)->first();

        if(isset($schedules_busy))  return response('No se puede eliminar, existen tutorías pendientes.',400);

        $schedule->deleted=1;

        $schedule->save();

        return response('',200);
    }

}
