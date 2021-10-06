<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TutorCode;
use App\ClassroomStudent;
use Auth;
use DB;

class TutorCodeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        $tutorCode = DB::table('tutor_codes')
                    ->join('area', 'area.id', '=', 'tutor_codes.id_area')
                    // ->join('classroom_teacher','classroom_teacher.id_area', '=', 'area.id')
                    ->select('tutor_codes.id','tutor_codes.name','tutor_codes.description','tutor_codes.code','tutor_codes.date','area.id as id_area','area.name as area_name')
                    ->get();
        // $tutorCode = TutorCode::where('id_tutor','=',$user->id)->get();
        return response()->json($tutorCode);
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
        $user = Auth::user();
        $newTutorCode = new TutorCode();
        $newTutorCode->name = $request->name;
        $newTutorCode->id_tutor = $user->id;
        $newTutorCode->description = $request->description;
        $newTutorCode->code = str_random(6);
        $newTutorCode->date = $request->date;
        $newTutorCode->id_area = $request->id_area;
        $newTutorCode->save();
        return response()->json('Codigo Creado');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($code)
    {
        $tutorCode = DB::table('tutor_codes')
            ->join('area', 'area.id', '=', 'tutor_codes.id_area')
            ->join('classroom_teacher','classroom_teacher.id_area', '=', 'area.id')
            ->join('tutor_schedule','tutor_schedule.code_id','=','tutor_codes.id')
            ->select('tutor_codes.id','tutor_codes.id_tutor','tutor_codes.name','tutor_codes.description','tutor_codes.code','tutor_codes.date','area.id as id_area','area.name as area_name', 'classroom_teacher.id_classroom as id_classroom','tutor_schedule.tutorial_value as tutorial_value')
            ->where('tutor_codes.code','=',$code)
            ->first();
        return response()->json($tutorCode);
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
    public function update(Request $request, $id)
    {
        $user = Auth::user();
        $updateTutorCode = TutorCode::findOrFail($id);
        $updateTutorCode->name = $request->name;
        $updateTutorCode->id_tutor = $user->id;
        $updateTutorCode->description = $request->description;
        $updateTutorCode->date = $request->date;
        $updateTutorCode->id_area = $request->id_area;
        $updateTutorCode->update();
        return response()->json('Codigo Actualizado');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $deleteTutorCode = TutorCode::findOrFail($id);
        $deleteTutorCode->delete();
        return response()->json('Codigo Eliminado');
    }

    public function validateCode(String $code){

        $data = TutorCode::where('code', $code)->first();

        if($data!=NULL){
            return 0;
        }else{
            return 1;
        }
    }
}
