<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Messaging;
use App\ReceptorMessage;
use Illuminate\Support\Facades\Mail;
use App\User;
use Auth;

class MessagingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $data = $request->all();
        $message = new Messaging;

        $message->id_emisor = $data['id_emisor'];
        $message->message = $data['message'];
        $message->subject = $data['subject'];

        $message->save();
        if ($message->save()) {
            foreach ($data['id_receptor'] as $receptor) {
                $receptor_message = new ReceptorMessage;
                $receptor_message->id_user = $receptor;
                $receptor_message->status = 0;
                $receptor_message->id_message = $message->id;
                $receptor_message->save();
            }

            $emails = [];
            $count = 0;
            foreach ($data['id_receptor'] as $receptor) {
                $user[$count] = User::findOrFail($receptor);
                $emails[$count] = $user[$count]->email;
                $count++;
            }

            Mail::send('emails.register', $data, function ($msj) use ($message, $emails) {
                $msj->subject($message->subject)
                    ->bcc($emails);
            });
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showMessage($id)
    {
        //
        $message = Messaging::findOrFail($id);
        if ($message) {
            $user = User::findOrFail($message->id_emisor);
            $message->emisor = $user->name . " " . $user->last_name;

            $user_message = ReceptorMessage::where('id_message', $message->id)->get();
            $user_message->status = 1;
            $user_message->save();

            return $message;
        }
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showSentMessage()
    {
        $user = Auth::user();
        $message = Messaging::where('id_emisor', $user->id)->get();
        if ($message) {
            $receivers = [];
            $user_messages = ReceptorMessage::where('id_message', $message->id)->get();
            foreach ($user_messages as $receiver) {
                $user_sent = User::find($receiver);
                $receivers = +[
                    $user->email,
                ];
            }
            $message->receivers = $receivers;

            return $message;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showReceivedMessage()
    {
        $user = Auth::user();
        $messages = [];
        $messagesReceivers = ReceptorMessage::where('id_user', $user->id)->get();
        foreach ($messagesReceivers as $messagesReceiver) {
            $message = Messaging::find($messagesReceiver->id_message);
            $user = User::find($message->id_emisor);
            $message->emisor = $user->name . " " . $user->last_name;
            $messages = +[
                $message,
            ];
        }

        return $messages;
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
    public function update(Request $request)
    {
        //
        $data = $request->all();
        $message = Messaging::find($data['id_message']);

        $message->id_emisor = $data['id_emisor'];
        $message->message = $data['message'];
        $message->subject = $data['subject'];

        $message->save();
        if ($message->save()) {
            foreach ($data['id_receptor'] as $receptor) {
                $receptor_message = ReceptorMessage::where('id_message', $data['id_message'])->get();
                $receptor_message->id_user = $receptor;
                $receptor_message->status = 0;
                $receptor_message->save();
            }

            $emails = [];
            $count = 0;
            foreach ($data['id_receptor'] as $receptor) {
                $user[$count] = User::findOrFail($receptor);
                $emails[$count] = $user[$count]->email;
                $count++;
            }

            Mail::send('emails.register', $data, function ($msj) use ($message, $emails) {
                $msj->subject($message->subject)
                    ->bcc($emails);
            });
        }
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
