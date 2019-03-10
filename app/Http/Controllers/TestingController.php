<?php

namespace App\Http\Controllers;

use App;
use App\Account;
use App\Event;
use App\Extensions\payment_placetopay\src\Gateway;
use App\Jobs\SendOrderTickets;
use App\Mail\BookingConfirmed;
use App\MessageUser;
use App\Order;
use Barryvdh\DomPDF\Facade as PDF;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Mail;
use QRCode;
use Sendinblue\Mailin;
use Spatie\Permission\Models\Permission;
use \App\Message;
use Omnipay;

class TestingController extends Controller
{

public function sendemail(Request $request, string $id)
    {
        // $data = $request->json()->all();
        // $event_id = $id;
            $name = 'cesar';
            $surname = 'prueba';
        $data = [
            'namwe' => $name,
            'surname' => $surname,
        ];
        // $eventuser->email = "felipe.martinez@mocionsoft.com";
        // $email = "felipe.martinez@mocionsoft.com";
        // $image = "https://storage.googleapis.com/herba-images/evius/events/8KOZm7ZxYVst444wIK7V9tuELDRTRwqDUUDAnWzK.png";
        // $message = "mensaje";
        // $subject = "[Invitación Máxim] kraken en Colombia";

        // Mail::to($email)
        //     ->send(
        //         new BookingConfirmed($eventuser)
        //     );
        // return "ok";
        

    // var_dump($mail->build());
    // Mail::to('cesar.torres@mocionsoft.com')
    // ->send('emails.register', $name,$surname);
    // var_dump(Mail::failures());

    Mail::send('emails.register', $data, function($msj){
        $msj->to('cesar.torres@mocionsoft.com')->subject('Falta sólo un paso más');
     });
    return "ok";

    }
}