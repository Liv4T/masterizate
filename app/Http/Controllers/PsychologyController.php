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
    public function createEvent (Request $request){

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
        }   

        return response()->json($evento);
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
    public function eventsCalendar(){

        $eventos = [];
        $user = Auth::user();
        $date =  Carbon::now();
        $current_date=date('Y-m-d');
        $initial_range_date = date ( 'Y-m-d' , strtotime ( '-90 day' , strtotime ($current_date ) )) ;
        $end_range_date =date ( 'Y-m-d' ,  strtotime ( '+90 day' , strtotime ($current_date ) )) ;
        if (isset($user)) {
            $eventos_psy = EventsPsychology::where('id_user', $user->id)->whereDate('date_from','>=',$initial_range_date)->whereDate('date_to','<=',$end_range_date)->where('delete_at','=', null)->orderBy('date_from', 'ASC')->get();
            foreach ($eventos_psy as $index => $evento) {
                array_push($eventos,[
                    "id" => $evento->id,
                    "name" => $evento->name,
                    "dateFrom" => $evento->date_from,
                    "dateTo" => $evento->date_to,
                    "hangout" => $evento->url,
                ]);
            }
        }
        
        return response()->json($eventos);
    }
}
