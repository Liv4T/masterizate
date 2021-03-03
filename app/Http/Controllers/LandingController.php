<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\LandingContact; 
use Illuminate\Support\Facades\Mail;

class LandingController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $contact = new LandingContact;

        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->phone = $request->phone;
        $contact->school = $request->school;
        $contact->city = $request->city;
        $contact->save();

        if ($contact->save()) {
            $email_to = $request->email;

            Mail::send('emails.landing', ["name" => $request->name, "email" => $request->email, "phone" => $request->phone, "school" => $request->school, "city" => $request->city], function ($message) use ($email_to) {
                $message->to('desarrollo@liv4t.com', 'Liv4T Contáctanos');
                $message->subject('Nuevo lead Landing');
            });
            // Mail::send('emails.landing-contact', ["name" => $request->name, "email" => $request->email, "phone" => $request->phone, "school" => $request->school, "city" => $request->city], function ($message) use ($email_to) {
            //     $message->to($email_to, 'Liv4T Contáctanos');
            //     $message->subject('');
            // });
            return view("landing", ["saved" => true]);
        }
    }
}
