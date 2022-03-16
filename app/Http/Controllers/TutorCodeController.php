<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TutorCode;
use App\TutorClassroom;
use App\TutorClassroomTeacher;
use App\Area;
use App\ClassroomStudent;
use App\VinculationTutorStudent;
use App\User;
use App\EnableSubject;
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
        $auth = Auth::user();
        $user = User::find($auth->id);
        $codesAll = [];
        if($user->isTutor()){
            $tutorCode = DB::table('tutor_codes')
            ->join('area', 'area.id', '=', 'tutor_codes.id_area')
            ->select('tutor_codes.id','tutor_codes.name','tutor_codes.description','tutor_codes.code','tutor_codes.date','area.id as id_area','area.name as area_name')
            ->where('tutor_codes.id_tutor', $user->id)
            ->get();

            return response()->json($tutorCode);
        }else if($user->isAdmin()){
            $tutorCode = TutorCode::all();
            foreach($tutorCode as $key =>$codes){
                $area = Area::where('id', $codes->id_area)->first();
                $tutor = User::where('id',$codes->id_tutor)->first();

                $codesAll[$key] = [
                    'area_name' => $area->name,
                    'id_area' => $area->id,
                    'name' => $codes->name,
                    'description' => $codes->description,
                    'code' => $codes->code,
                    'id_tutor' => $codes->id_tutor,
                    'tutor_name' => $tutor->name." ".$tutor->last_name,
                    'date' => $codes->date,

                ];
            }
            return response()->json($codesAll);
        }
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

        $auth = Auth::user();
        $user = User::find($auth->id);
        if($user->type_user === 1){
            $newTutorCode = new TutorCode();
            $newTutorCode->name = $request->name;
            $newTutorCode->id_tutor = $request->id_user;
            $newTutorCode->description = $request->description;
            $newTutorCode->code = str_random(6);
            $newTutorCode->id_area = $request->id_area;
            $newTutorCode->save();

            $area = area::find($request->id_area);
            $newClassroom = new TutorClassroom();
            $newClassroom->name = $request->name . '-' .$newTutorCode->code;
            $newClassroom->id_tutor = $request->id_user;
            $newClassroom->save();

            $newClassroomTeacher = new TutorClassroomTeacher();
            $newClassroomTeacher->id_classroom = $newClassroom->id;
            $newClassroomTeacher->id_area = $request->id_area;
            $newClassroomTeacher->id_user = $request->id_user;
            $newClassroomTeacher->save();
        }else{
            $newTutorCode = new TutorCode();
            $newTutorCode->name = $request->name;
            $newTutorCode->id_tutor = $user->id;
            $newTutorCode->description = $request->description;
            $newTutorCode->code = str_random(6);
            $newTutorCode->id_area = $request->id_area;
            $newTutorCode->save();

            $area = area::find($request->id_area);
            $newClassroom = new TutorClassroom();
            $newClassroom->name = $request->name . '-' .$newTutorCode->code;
            $newClassroom->id_tutor = $user->id;
            $newClassroom->save();

            $newClassroomTeacher = new TutorClassroomTeacher();
            $newClassroomTeacher->id_classroom = $newClassroom->id;
            $newClassroomTeacher->id_area = $request->id_area;
            $newClassroomTeacher->id_user = $user->id;
            $newClassroomTeacher->save();
        }




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
    public function codesPerUser($id) {
        //return $id;
        if($id<=0){
            $auth = Auth::user();
            $user = User::find($auth->id);
        }else if($id>0){
            $user = User::where('id',$id)->first();
        }
        //return $user;
        $vinculations = [];
        $data = VinculationTutorStudent::where('id_student',$user->id)->get();
        foreach($data as $key => $vinculation){
            $tutor_data = User::where('id',$vinculation->id_tutor)->first();
            $area_name = DB::table('tutor_codes')
            ->join('area', 'area.id', '=', 'tutor_codes.id_area')
            ->where('tutor_codes.code','=',$vinculation->code_vinculated)
            ->first();
            $code_id = TutorCode::where('code',$vinculation->code_vinculated)->first();
            $enable_area = EnableSubject::where('id_user',$user->id)
            ->where('id_code',$code_id->id)
            ->where('id_area',$area_name->id_area)
            ->orderBy('id','desc')
            ->first();
            $vinculations[$key]=[
                'id_student' => $user->id,
                'id_tutor' => $vinculation->id_tutor,
                'tutor_name' => $tutor_data->name.' '.$tutor_data->last_name,
                'code_vinculated' => $vinculation->code_vinculated,
                'area_name' => $area_name->name,
                'enable_area' => $enable_area->date_enable_area,
            ];
        }

        return response()->json($vinculations);

    }
}
