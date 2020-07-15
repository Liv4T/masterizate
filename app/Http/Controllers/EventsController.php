<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\GoogleCalendar\Event;
use Carbon\Carbon;


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
        $event = new Event;

        $dateFrom = Carbon::parse($request->startDateTime);
        $dateFrom->addHour(5);
        $dateTo = Carbon::parse($request->endDateTime);
        $dateTo->addHour(5);

        $event->name = $request->name;
        $event->startDateTime = $dateFrom;
        $event->endDateTime = $dateTo;
        // $event->addAttendee(['email' => 'mildredfigueroaq@gmail.com']);

        $event->save();
        return response()->json($event);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexEvents()
    {
        $events = Event::get();
        $eventos = [];
        $date =  Carbon::now();
        foreach ($events as $event) {
            if (!is_null($event->hangoutLink) && ($event->start->dateTime > $date)) {
                $dateTime = explode("T", $event->start->dateTime);
                $dateTimes = $dateTime[0];
                $hour = $dateTime[1];
                $hourarray = explode("-", $hour);
                $hour = $hourarray[0];
                $eventos[] = [
                    "name" => $event->summary,
                    "date" => $dateTimes,
                    "hour" => $hour,
                    "hangout" => $event->hangoutLink,
                ];
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
    public function update(Request $request, $id)
    {
        //
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
    }
}
