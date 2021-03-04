<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use DB;
use App\User;
use App\Parents;

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

    public function getInvitatios(){
        $user_id = Auth::user()->id;
        $parents = Parents::where('id_sender','=', $user_id)->orderBy('id', 'asc')->get();
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
        $parents->type_event = $request->type_event;
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
        return;
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
        return "ok";
    }
}
