<?php

namespace App\Http\Controllers;

use App\User;
use App\EventsPsychology;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;



class PsychologyController extends Controller
{
    public function createEvent(Request $request){

        $evento = new EventsPsychology;
        $evento->name = $request->name;
        $evento->date_from = $request->startDateTime;
        $evento->date_to = $request->endDateTime;
        $evento->id_user = Auth::user()->id;
        $evento->url = $request->url;
        $evento->type_event = $request->type_event;
        $evento->user_invited = $request->user_invited; 
        $evento->save();

        if ($evento->save()) {
            if($evento->type_event == 2 || $evento->type_event == 4){
                $correos = explode(',', $request->user_invited);
                for($i=0; $i < count($correos); $i++){
                    
                    $email_u = User::find($correos[$i]);
                    $email_to = $email_u->email;

                    Mail::send('emails.psychologyInvited', ["fecha" => $request->startDateTime, "url" => $request->url], function ($message) use ($email_to) {
                        $message->to($email_to, 'Liv4T Invitación Psicólogo');
                        $message->subject('Liv4T Invitación Psicólogo');
                    });
                }
                return view("psychology", ["saved" => true]);
            }else{
                
                return response()->json($evento);

            }
        }   
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

        $fathers = DB::table("users")
        ->select('users.*')
        ->where('type_user','=',4)
        ->get();

        $psychologists = DB::table("users")
        ->select('users.*')
        ->where('type_user','=',5)
        ->get();

        array_push($users, $admins, $teachers, $fathers, $psychologists);

        return response()->json($users, 200);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function eventsCalendarSol(){

        $eventos = [];
        $user = Auth::user();
        $date =  Carbon::now();
        $current_date=date('Y-m-d');
        $initial_range_date = date ( 'Y-m-d' , strtotime ( '-90 day' , strtotime ($current_date ) )) ;
        $end_range_date =date ( 'Y-m-d' ,  strtotime ( '+90 day' , strtotime ($current_date ) )) ;
        if (isset($user)) {
            $eventos_psy = EventsPsychology::where('id_user', $user->id)->whereDate('date_from','>=',$initial_range_date)->whereDate('date_to','<=',$end_range_date)->where('type_event', '1')->where('deleted_at','=', null)->orderBy('date_from', 'ASC')->get();
            foreach ($eventos_psy as $index => $evento) {
                array_push($eventos,[
                    "id" => $evento->id,
                    "name" => $evento->name,
                    "dateFrom" => $evento->date_from,
                    "dateTo" => $evento->date_to,
                    "hangout" => $evento->url,
                    "tipoEvento" => $evento->type_event,
                ]);
            }
        }
        
        return response()->json($eventos);
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function eventsCalendarSeg(){

        $eventos = [];
        $user = Auth::user();
        $date =  Carbon::now();
        $current_date=date('Y-m-d');
        $initial_range_date = date ( 'Y-m-d' , strtotime ( '-90 day' , strtotime ($current_date ) )) ;
        $end_range_date =date ( 'Y-m-d' ,  strtotime ( '+90 day' , strtotime ($current_date ) )) ;
        if (isset($user)) {
            $eventos_psy = EventsPsychology::where('id_user', $user->id)->whereDate('date_from','>=',$initial_range_date)->whereDate('date_to','<=',$end_range_date)->where('type_event', '2')->where('deleted_at','=', null)->orderBy('date_from', 'ASC')->get();
            foreach ($eventos_psy as $index => $evento) {
                array_push($eventos,[
                    "id" => $evento->id,
                    "name" => $evento->name,
                    "dateFrom" => $evento->date_from,
                    "dateTo" => $evento->date_to,
                    "hangout" => $evento->url,
                    "tipoEvento" => $evento->type_event,
                ]);
            }
        }
        
        return response()->json($eventos);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function eventsCalendarCita(){

        $eventos = [];
        $user = Auth::user();
        $date =  Carbon::now();
        $current_date=date('Y-m-d');
        $initial_range_date = date ( 'Y-m-d' , strtotime ( '-90 day' , strtotime ($current_date ) )) ;
        $end_range_date =date ( 'Y-m-d' ,  strtotime ( '+90 day' , strtotime ($current_date ) )) ;
        if (isset($user)) {
            $eventos_psy = EventsPsychology::where('id_user', $user->id)->whereDate('date_from','>=',$initial_range_date)->whereDate('date_to','<=',$end_range_date)->where('type_event', '3')->where('deleted_at','=', null)->orderBy('date_from', 'ASC')->get();
            foreach ($eventos_psy as $index => $evento) {
                array_push($eventos,[
                    "id" => $evento->id,
                    "name" => $evento->name,
                    "dateFrom" => $evento->date_from,
                    "dateTo" => $evento->date_to,
                    "hangout" => $evento->url,
                    "tipoEvento" => $evento->type_event,
                ]);
            }
        }
        
        return response()->json($eventos);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function eventsCalendarReu(){

        $eventos = [];
        $user = Auth::user();
        $date =  Carbon::now();
        $current_date=date('Y-m-d');
        $initial_range_date = date ( 'Y-m-d' , strtotime ( '-90 day' , strtotime ($current_date ) )) ;
        $end_range_date =date ( 'Y-m-d' ,  strtotime ( '+90 day' , strtotime ($current_date ) )) ;
        if (isset($user)) {
            $eventos_psy = EventsPsychology::where('id_user', $user->id)->whereDate('date_from','>=',$initial_range_date)->whereDate('date_to','<=',$end_range_date)->where('type_event', '4')->where('deleted_at','=', null)->orderBy('date_from', 'ASC')->get();
            foreach ($eventos_psy as $index => $evento) {
                array_push($eventos,[
                    "id" => $evento->id,
                    "name" => $evento->name,
                    "dateFrom" => $evento->date_from,
                    "dateTo" => $evento->date_to,
                    "hangout" => $evento->url,
                    "tipoEvento" => $evento->type_event,
                ]);
            }
        }
        
        return response()->json($eventos);
    }

    public function findEvent(String $id)
    {

        $eventos = EventsPsychology::findOrFail($id);


        return $eventos;
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
        $eventos = EventsPsychology::findOrFail($data['id']);
        $user = Auth::user();

        $eventos->name = $data['name'];
        $eventos->date_from = $data['startDateTime'];
        $eventos->date_to = $data['endDateTime'];
        $eventos->id_user = Auth::user()->id;
        $eventos->url = $data['url'];
        $eventos->save();

        return 'ok';
    }
    public function deleteEvent(Request $request)
    {
        $data = $request->all();
        
        
            $eventos = EventsPsychology::findOrFail($data['id']);
            $eventos->id_user = Auth::user()->id;
            $eventos->deleted_at = Carbon::now();
            $eventos->save();
        
            return 'ok';
        
    }
}
