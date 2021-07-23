<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Trimestre;

class TrimestreController extends Controller
{
    public function createTrimestre(Request $request){
        
        $data = $request->all();

        Trimestre::create([
            'nombre'=>$data['nombre'],
        ]);

        return response()->json($data);
    }
    public function getTrimestre(){

        $trimestres=Trimestre::all();

        return response()->json($trimestres);
    }
}
