<?php

namespace App\Http\Controllers;

use App\viewMessages;
use Auth;
use Illuminate\Http\Request;

class ViewMessagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        $messageView = viewMessages::where('id_received',$user->id)->get();
        return response()->json($messageView);

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
        $createView = new viewMessages();
        $createView->id_sender = $request->id_sender;
        $createView->id_received = $request->id_received;

        $createView->save();

        return response()->json('Registro Guardado');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\viewMessages  $viewMessages
     * @return \Illuminate\Http\Response
     */
    public function show(viewMessages $viewMessages)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\viewMessages  $viewMessages
     * @return \Illuminate\Http\Response
     */
    public function edit(viewMessages $viewMessages)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\viewMessages  $viewMessages
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $updateView = viewMessages::findOrFail($id);
        $updateView->visualized = $request->visualized;
        $updateView->update();

        return response()->json('Vista de Mensaje Actualizado');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\viewMessages  $viewMessages
     * @return \Illuminate\Http\Response
     */
    public function destroy(viewMessages $viewMessages)
    {
        //
    }
}
