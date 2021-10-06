<?php

namespace App\Http\Controllers;
use App\Weekly;
use App\Classs;
use App\enableSubject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ClientController extends Controller
{
    public function getTutorCycle(String $id_tutor, String $id_trimestre, String $id_area){
        $data = Weekly::where('id_teacher',$id_tutor)
                    ->where('id_trimestre', $id_trimestre)
                    ->where('id_area',$id_area)
                    ->get();

        return response()->json($data);
    }

    public function getClass(String $id_weekly_plan){
        $data = Classs::where('id_weekly_plan',$id_weekly_plan)->get();
        return response()->json($data);
    }
}
