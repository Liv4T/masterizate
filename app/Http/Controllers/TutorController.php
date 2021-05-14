<?php
namespace App\Http\Controllers;

use App\Area;
use App\Classroom;
use App\Eventos;
use App\TutorSchedule;
use App\TutorScheduleEvent;
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
            'tutorial_value'=>$data['tutorial_value'],
            'duration_minutes'=>$data['duration_minutes'],
            'area_id'=>$area_id,
            'code_id'=>$data['code_id'],
            'classroom_id'=>$classroom_id,
            'teacher_id'=>$user->id,
            'state'=>1,
            'deleted'=>0,
        ]);
        return response()->json($data);
    }
    public function getScheduleCodes($id_code){
        $scheduleCode = TutorSchedule::where('code_id','=',$id_code)->get();
        return response()->json($scheduleCode);
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
        $schedule->tutorial_value = $data['tutorial_value'];
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
    public function GetScheduleStudent(int $schedulestudent_id){
        $user=User::find(Auth::id());

        $scheduleStudent=TutorScheduleStudent::where('id',$schedulestudent_id)->where('deleted',0)->first();

        if(!isset($scheduleStudent))
        {
            return response('programacion de tutoria no encontrada',400);
        }


        $schedule=TutorSchedule::find($scheduleStudent->tutorschedule_id);

        if(!isset($schedule))
        {
            return response('programacion de tutoria no encontrada',400);
        }

        $scheduleStudent->area=Area::find($schedule->area_id);
        $scheduleStudent->classroom=Classroom::find($schedule->classroom_id);
        $scheduleStudent->teacher=User::find($schedule->teacher_id);
        $scheduleStudent->duration=$schedule->duration_minutes;

        return response()->json($scheduleStudent);
    }
    public function GetAvailableSchedule(int $area_id,int $classroom_id, string $date_find)
    {
        $user=User::find(Auth::id());

        if(!$user->isStudent())
        {
            return response('user invalid',400);
        }

        $current_date=date("Y-m-d H:i:s");
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

           if($ever_time<1)
           {
                $ever_time=1;
           }

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

                if($current_date>$date_from){
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
                if(isset($schedules_busy)&& count($schedules_busy)>0)
                {

                    foreach ($schedules_busy as $schedule_busy) {
                        if($schedule_busy->time_index==$i)
                        {
                            array_push($available_schedules,$schedule_busy);
                        }
                    }
                }

                //get schedules mine
                if(isset($schedules_busy_mine)&& count($schedules_busy_mine)>0)
                {
                    foreach ($schedules_busy_mine as $schedule_busy) {
                        if($schedule_busy->time_index==$i)
                        {
                            array_push($busy_schedules_mine,$schedule_busy);
                        }
                    }
                }

                //schedule is available
                if(count($available_schedules)==0 && count($busy_schedules_mine)==0)
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
                }
                else if(count($busy_schedules_mine)>0)
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

    public function GetAvailableScheduleCode(string $area_id,string $code_id, string $date_find)
    {
        $user=User::find(Auth::id());

        if(!$user->isStudent())
        {
            return response('user invalid',400);
        }

        $current_date=date("Y-m-d H:i:s");
        $data=[];

        $schedules=TutorSchedule::where('area_id','=',$area_id)->where('code_id','=',$code_id)->whereDate('date_from','<=',$date_find)->whereDate('date_to','>=',$date_find)->where('deleted',0)->where('state',1)->get();

        foreach ($schedules as $key => $row) {
           $schedules[$key]->days=json_decode($row['days']);

           $schedules_busy=TutorScheduleStudent::where('tutorschedule_id','=',$row->id)->where('student_id','!=',$user->id)->where('deleted',0)->get();

           $schedules_busy_mine=TutorScheduleStudent::where('tutorschedule_id','=',$row->id)->where('student_id',$user->id)->where('deleted',0)->get();

           //calculate minutes
           $minutes = (strtotime($row['date_from'])-strtotime($row['date_to']))/60;
           $minutes = abs($minutes); $minutes = floor($minutes);

           //range minutes
           $ever_time=floor($minutes/$row['duration_minutes']);

           if($ever_time<1)
           {
                $ever_time=1;
           }

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

                if($current_date>$date_from){
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
                if(isset($schedules_busy)&& count($schedules_busy)>0)
                {

                    foreach ($schedules_busy as $schedule_busy) {
                        if($schedule_busy->time_index==$i)
                        {
                            array_push($available_schedules,$schedule_busy);
                        }
                    }
                }

                //get schedules mine
                if(isset($schedules_busy_mine)&& count($schedules_busy_mine)>0)
                {
                    foreach ($schedules_busy_mine as $schedule_busy) {
                        if($schedule_busy->time_index==$i)
                        {
                            array_push($busy_schedules_mine,$schedule_busy);
                        }
                    }
                }

                //schedule is available
                if(count($available_schedules)==0 && count($busy_schedules_mine)==0)
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
                }
                else if(count($busy_schedules_mine)>0)
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

    public function ProgrameSchedule(Request $request,int $area_id,int $classroom_id)
    {
        $user=User::find(Auth::id());

        if(!$user->isStudent())
        {
            return response('user invalid',400);
        }

        $data = $request->all();


        $existScheduleStudent=TutorScheduleStudent::where('tutorschedule_id',$data['schedule']['schedule_id'])->where('time_index',$data['schedule']['time_index'])->where('deleted',0)->first();

        if(isset($existScheduleStudent))
        {
            return response('Horario ya se encuentra programado',400);
        }
        else
        {
            $scheduleCreated= TutorScheduleStudent::create([
                "tutorschedule_id"=>$data['schedule']['schedule_id'],
                "student_id"=>$user->id,
                "date_from"=>$data['schedule']['date_from'],
                "date_to"=>$data['schedule']['date_to'],
                "time_index"=>$data['schedule']['time_index'],
                "observations"=>$data['observations'],
                "state"=>1,
                "deleted"=>0
            ]);

            $area=Area::find($area_id);
            $classroom=Classroom::find($classroom_id);

            //programe events
            TutorScheduleEvent::create([
               "id_classroom"=>$classroom_id,
               "id_schedulestudent"=>$scheduleCreated->id,
               "id_area"=>$area_id,
               "name"=>$area->name.' '.$classroom->name.' - '.$user->name.' '.$user->last_name,
               "date_to"=>$data['schedule']['date_to'],
               "date_from"=>$data['schedule']['date_from'],
               "id_user"=>$data['schedule']['teacher']['id'],
               "url"=>"",
               "state"=>1,
               "deleted"=>0
           ]);

           TutorScheduleEvent::create([
                "id_classroom"=>$classroom_id,
                "id_schedulestudent"=>$scheduleCreated->id,
                "id_area"=>$area_id,
                "name"=>$area->name.' '.$classroom->name.' - '.$data['schedule']['teacher']['name'],
                "date_to"=>$data['schedule']['date_to'],
                "date_from"=>$data['schedule']['date_from'],
                "id_user"=>$user->id,
                "url"=>"/estudiante/tutorias/".$scheduleCreated->id,
                "state"=>1,
                "deleted"=>0
            ]);

            return response('OK',200);
        }

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
    public function GetScheduleEvents(){

        $user=User::find(Auth::id());

        if(!$user->isStudent() && !$user->isTutor())
        {
            return response('[]',200);
        }

        $current_date=date("Y-m-d H:i:s");
        $events=TutorScheduleEvent::where('id_user',$user->id)->where('date_to','>=',$current_date)->where('deleted',0)->get();

        foreach ($events as $key => $event) {
           $studentSchedule= TutorScheduleStudent::find($event->id_schedulestudent);
           $events[$key]->observations=$studentSchedule->observations;

        }

        return response()->json($events);

    }
    public function UpdateLinkMeet(Request $request,int $schedulestudent_id){
        $user=User::find(Auth::id());

        if(!$user->isTutor())
        {
            return response('User invalid',400);
        }

        $data = $request->all();

        $tutorScheduleStudent=TutorScheduleStudent::find($schedulestudent_id);

        if(!isset($tutorScheduleStudent))
        {
            return response('Tutorial not found',400);
        }

        $tutorScheduleStudent->meetup=$data['link'];


        $tutorScheduleStudent->save();

        TutorScheduleEvent::where('id_schedulestudent',$schedulestudent_id)->where('deleted',0)->update(["url"=>$data['link']]);


         return response('ok',200);

    }

}
