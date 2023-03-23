<?php

namespace App\Http\Controllers;

use App\EnableSubject;
use App\Area;
use Carbon\Carbon;
use App\TutorCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EnableSubjectController extends Controller
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $enabled = new EnableSubject();
        $enabled->id_area = $request->id_area;
        $enabled->id_code = $request->id_code;
        $enabled->id_user = Auth::user();
        $enabled->date_payment = $request->date_payment;
        $enabled->date_enable_area = $request->date_enable_area;

        $enabled->save();

        return response()->json("Registro Guardado");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\EnableSubject  $EnableSubject
     * @return \Illuminate\Http\Response
     */
    public function show(String $id_subject)
    {
        $subject = EnableSubject::where('id',$id_subject)->first();
        $tutorCode = TutorCode::where('id',$subject->id_code)->first();
        $dateNow = Carbon::now();

        if(Carbon::parse($subject->date_enable_area) >= $dateNow){
            $area = Area::where('id',$subject->id_area)->first();
            $data = [
                'Area'=> $area,
                'TutorCode'=> $tutorCode,
                'Subject'=> $subject
            ];

            return response()->json($data);
        }else{
            return response()->json("No Está habilitada la materia consultada");
        }


    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\EnableSubject  $EnableSubject
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $enabled = EnableSubject::findOrFail($id);
        $enabled->id_area = $request->id_area;
        $enabled->id_code = $request->id_code;
        $enabled->date_payment = $request->date_payment;
        $enabled->date_enable_area = $request->date_enable_area;

        $enabled->update();

        return response()->json("Registro Actualizado");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\EnableSubject  $enableSubject
     * @return \Illuminate\Http\Response
     */
    public function destroy(EnableSubject $enableSubject, $id)
    {
        $enabled = EnableSubject::findOrFail($id);
        $enabled->delete();
        return response()->json("Registro Eliminado");
    }

    public function checkPay(String $id_area, String $code){
        $dateNow = Carbon::now();
        $tutorCode = TutorCode::where('code',$code)->first();
        $data = EnableSubject::where('id_area', $id_area)
                                ->where('id_code', $tutorCode->id)
                                ->where('id_user', Auth::user()->id)
                                ->whereDate('date_enable_area', '>=', $dateNow)
                                ->first();

        if(isset($data)){
            return 0;
        }else{
            return 1;
        }
    }
}
