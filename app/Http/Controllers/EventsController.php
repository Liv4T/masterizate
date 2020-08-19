<?php

namespace App\Http\Controllers;

use App\Eventos;
use Carbon\Carbon;
use App\Area;
use App\Classroom;
use App\ClassroomStudent;
use Illuminate\Http\Request;
use Spatie\GoogleCalendar\Event;
use Auth;


class EventsController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function createEvent(Request $request)
    {
        // return $request;
        // return $request->startDateTime;
        // $event = new Event;

        // $dateFrom = Carbon::parse($request->startDateTime);
        // $dateFrom2 = $dateFrom;
        // $dateFrom->addHour(5);
        // $dateTo = Carbon::parse($request->endDateTime);
        // $dateTo2 = $dateTo;
        // $dateTo->addHour(5);

        // $event->name = $request->name;
        // $event->startDateTime = $dateFrom;
        // $event->endDateTime = $dateTo;
        // // $event->addAttendee(['email' => 'mildredfigueroaq@gmail.com']);

        // $event->save();

        $area_classroom = $request->id_area;
        $arrayAreaClassroom = explode("/", $area_classroom);

        $evento = new Eventos;
        $evento->name = $request->name;
        $evento->date_from = $request->startDateTime;
        $evento->date_to = $request->endDateTime;
        $evento->id_area = $arrayAreaClassroom[0];
        $evento->id_classroom = $arrayAreaClassroom[1];
        $evento->id_user = Auth::user()->id;
        $evento->url = $request->url;
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
        if ($user->type_user == 2) {
            $eventos_teacher = Eventos::where('id_user', $user->id)->orderBy('date_from', 'ASC')->get();
            foreach ($eventos_teacher as $index => $evento) {
                $dateTo = Carbon::parse($evento->date_to);
                if ($dateTo > $date) {
                    $area = Area::find($evento->id_area);
                    $classroom = Classroom::find($evento->id_classroom);
                    $eventos[$index] = [
                        "id" => $evento->id,
                        "name" => $evento->name,
                        "dateFrom" => $evento->date_from,
                        "dateTo" => $evento->date_to,
                        "hangout" => $evento->url,
                        "area" => $area->name,
                        "classroom" => $classroom->name,
                    ];
                }
            }
        } elseif ($user->type_user == 3) {
            $classroom_student = ClassroomStudent::where('id_user', $user->id)->first();
            $eventos_student = Eventos::where('id_classroom', $classroom_student->id_classroom)->orderBy('date_from', 'ASC')->get();
            foreach ($eventos_student as $index => $evento) {
                $dateTo = Carbon::parse($evento->date_to);
                if ($dateTo > $date) {
                    $area = Area::find($evento->id_area);
                    $classroom = Classroom::find($evento->id_classroom);
                    $eventos[$index] = [
                        "name" => $evento->name,
                        "dateFrom" => $evento->date_from,
                        "dateTo" => $evento->date_to,
                        "hangout" => $evento->url,
                        "area" => $area->name,
                        "classroom" => $classroom->name,
                    ];
                }
            }
        } elseif ($user->type_user == 1) {
            $eventos_all = Eventos::orderBy('date_from', 'ASC')->get();
            foreach ($eventos_all as $index => $evento) {
                $dateTo = Carbon::parse($evento->date_to);
                if ($dateTo > $date) {
                    $area = Area::find($evento->id_area);
                    $classroom = Classroom::find($evento->id_classroom);
                    $eventos[$index] = [
                        "name" => $evento->name,
                        "dateFrom" => $evento->date_from,
                        "dateTo" => $evento->date_to,
                        "hangout" => $evento->url,
                        "area" => $area->name,
                        "classroom" => $classroom->name,
                    ];
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
        $eventos = Eventos::findOrFail($data['id']);
        $user = Auth::user();

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
    }
    public function findEvent(String $id)
    {

        $eventos = Eventos::findOrFail($id);


        return $eventos;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $eventos = Eventos::findOrFail($id);
        $eventos->delete();
    }
}
