<?php

namespace App\Http\Controllers;

use App\VinculationTutorStudent;
use App\User;
use App\TutorClassroom;
use Illuminate\Http\Request;
use Auth;

class VinculationTutorStudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        $getVinculationsToStudents = VinculationTutorStudent::where('id_student','=', $user->id)->get();
        return response()->json($getVinculationsToStudents);
    }

    public function getVinculationsTutor()
    {
        $user = Auth::user();
        $vinculations = [];
        $classrooms = TutorClassroom::where('id_tutor', $user->id)->get();
        $tutor = User::where('id',$user->id)->first();
        foreach($classrooms as $key => $classroom){
            $exploded = explode('-',$classroom->name);
            $code = $exploded[1];
            $students = VinculationTutorStudent::where('id_tutor',$user->id)
                                                ->where('code_vinculated',$code)
                                                ->get();
            foreach($students as $key_s =>$student){
                $studentF = User::where('id',$student->id_student)->first();
                $student->student_name = $studentF->name.' '.$studentF->last_name;
            }
            $vinculations[$key] = [
                'tutor_name' => $tutor->name.' '.$tutor->last_name,
                'tutor_id' => $user->id,
                'students' => $students,
                'area_name' => isset($classroom->name) ? $classroom->name : 'Sin Salon asignado',
                'classroom_id' => isset($classroom->id) ? $classroom->id : 'Sin Salon asignado',
            ];
        }
        return response()->json($vinculations);
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
        $newVinculation = new VinculationTutorStudent();
        $newVinculation->id_tutor = $request->id_tutor;
        $newVinculation->id_student = $request->id_student;
        $newVinculation->code_vinculated = $request->code_vinculated;
        $newVinculation->save();
        return response()->json("Vinculación Registrada");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\VinculationTutorStudent  $vinculationTutorStudent
     * @return \Illuminate\Http\Response
     */
    public function show(VinculationTutorStudent $vinculationTutorStudent)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\VinculationTutorStudent  $vinculationTutorStudent
     * @return \Illuminate\Http\Response
     */
    public function edit(VinculationTutorStudent $vinculationTutorStudent)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\VinculationTutorStudent  $vinculationTutorStudent
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $updateVinculation = VinculationTutorStudent::findOrFail($id);
        $updateVinculation->id_tutor = $request->id_tutor;
        $updateVinculation->id_student = $request->id_student;
        $updateVinculation->code_vinculated = $request->code_vinculated;
        $updateVinculation->update();
        return response()->json("Vinculación Actualizada");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\VinculationTutorStudent  $vinculationTutorStudent
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $destroyVinculation = VinculationTutorStudent::findOrFail($id);
        $destroyVinculation->delete();
        return response()->json('Vinculación Eliminada');
    }
}
