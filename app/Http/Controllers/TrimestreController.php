<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Trimestre;
use App\Period;

class TrimestreController extends Controller
{
    public function createTrimestre(Request $request){

        $data = $request->all();

        Trimestre::create([
            'nombre'=>$data['nombre'],
        ]);

        /* Save the new period */
        $periods = $data['periods'];

        foreach ($periods as $index => $period) {
            $periodos = Period::create([
                'name' => $period['name'],
                'date_from' => $period['date_from'],
                'date_to' => $period['date_to'],
                'id_institution' => $data['institution_id'],
            ]);
        }

        return response()->json($data);
    }
    public function getTrimestre(){

        $trimestres=Trimestre::all();

        return response()->json($trimestres);
    }
}
