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
use App\Classroom;
use App\Classs;
use App\Area;
use App\User;
use App\ClassContent;
use App\Weekly;
use Illuminate\Support\Facades\DB;

class TestingController extends Controller
{

    public function sendemail(Request $request, string $id)
    {
        // $data = $request->json()->all();
        $name = 'Mildred';
        $surname = 'prueba';
        $data = [
            'namwe' => $name,
            'surname' => $surname,
        ];
        Mail::send('emails.register', $data, function ($msj) {
            $msj->to('desarrollador.sr@dybcatering.com')->subject('Theres only one more step to go');
        });
        return "ok";
    }
    public function sqlQuery()
    {
        // SELECT classroom.name, users.name, users.last_name, weekly_plan.driving_question, class.name, class.description, class_content.content_type, class_content.content, class_content.description, area.name, class.created_at 
        // FROM weekly_plan 
        // INNER JOIN class ON weekly_plan.id=class.id_weekly_plan 
        // INNER JOIN area ON weekly_plan.id_area=area.id 
        // INNER JOIN classroom ON weekly_plan.id_classroom=classroom.id 
        // INNER JOIN users ON weekly_plan.id_teacher= users.id 
        // INNER JOIN class_content ON class.id= class_content.id_class ORDER BY classroom.id

        $contentsClass = ClassContent::all();
        $datos = DB::table('weekly_plan')
            ->join('class', 'weekly_plan.id', '=', 'class.id_weekly_plan')
            ->join('area', 'weekly_plan.id_area', '=', 'area.id')
            ->join('classroom', 'weekly_plan.id_classroom', '=', 'classroom.id')
            ->join('users', 'weekly_plan.id_teacher', '=', 'users.id')
            // ->join('class_content', 'class.id', '=', 'class_content.id_class')
            // 'class_content.content_type as class_type', 'class_content.content as content', 'class_content.description as content_description',
            ->select('class.id as id_class', 'classroom.name as classroom_name', 'users.name as user_name', 'users.last_name as user_lastname', 'weekly_plan.driving_question as cicle', 'class.name as class_name', 'class.description as class_description', 'area.name as area', 'class.created_at as date')
            ->orderBy('class.id')
            ->take(10)
            ->get();

        // $arrayNew[$key] = [
        //     'id_class' => $dat->id_class,
        //     'classroom_name' => $dat->classroom_name,
        //     'user_name' => $dat->user_name,
        //     'user_lastname' => $dat->user_lastname,
        //     'cicle' => $dat->cicle,
        //     'class_name' => $dat->class_name,
        //     'class_description' => $dat->class_description,
        //     'class_type' => $dat->class_type,
        //     'content' => $dat->content,
        //     'content_description' => $dat->content_description,
        //     'area' => $dat->area,
        //     'date' => $dat->date,
        // ];
        $id = $datos[0]->id_class;
        $arrayCont = [];
        foreach ($datos as $key => $dat) {
            $arrayCont = [];
            foreach ($contentsClass as $index => $content) {
                if ($content->id_class == $dat->id_class) {
                    $arrayCont[] = [
                        'content_type' => $content->content_type,
                        'content' => $content->content,
                        'description' => $content->description,
                    ];
                }
                $dat->content = $arrayCont;
            }
        }
        return view("exports.classContent", compact("datos"));
        return $datos;
    }
}
