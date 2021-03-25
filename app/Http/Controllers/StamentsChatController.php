<?php

namespace App\Http\Controllers;

use App\StamentsChat;
use App\Staments;
use Auth;
use Illuminate\Http\Request;

class StamentsChatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('chatStaments');
    }

    public function getChats(String $chat){
        $allChat = StamentsChat::where('chat','=',$chat)->get();
        return response()->json($allChat);
    }

    public function getStamentsByUser(){
        $userId = Auth::user()->id;
        $userName = Auth::user()->name;
        $userLastName = Auth::user()->last_name;
        $fullName = $userName.' '.$userLastName;

        $staments = Staments::where('user_id','=',$userId)->orWhere('name','=',$fullName)->get();

        return response()->json($staments);
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
        $chat = new StamentChat;
        $chat->chat = $request->chat;
        $chat->message = $request->message;
        $chat->member = $request->member;
        $chat->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\StamentsChat  $stamentsChat
     * @return \Illuminate\Http\Response
     */
    public function show(StamentsChat $stamentsChat)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\StamentsChat  $stamentsChat
     * @return \Illuminate\Http\Response
     */
    public function edit(StamentsChat $stamentsChat)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\StamentsChat  $stamentsChat
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, StamentsChat $stamentsChat)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\StamentsChat  $stamentsChat
     * @return \Illuminate\Http\Response
     */
    public function destroy(StamentsChat $stamentsChat)
    {
        //
    }
}
