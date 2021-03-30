<?php

namespace App\Http\Controllers;

use App\SchoolGovernment;
use Illuminate\Http\Request;
use App\User;
use Auth;
use App\ClassroomTeacher;
use App\Area;
use App\Classroom;
use App\Quarterly;
use App\CoursesAchievement;
use App\Courses;
use App\ClassroomStudent;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\StudentsExport;
use App\Exports\MateriasByTeacherExport;
use App\Exports\MateriasTeachersExport;
use App\Exports\CourseExport;
use App\Exports\NotesExport;

class SchoolGovernmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view("schoolGovernment");
    }

    public function areaTeacher($teacherId){
        $user_asignated = ClassroomTeacher::where('id_user', $teacherId)->get();
        $areas = [];
        if (isset($user_asignated)) {
            foreach ($user_asignated as $key => $area) {
                $classroom = Classroom::find($area->id_classroom);
                $class = Area::find($area->id_area);
                $areas[$key] = [
                    'id'           => $area->id,
                    'id_area'      => $class->id,
                    'text'         => $class->name . " - " . $classroom->name,
                    'classroom'    => $classroom->name,
                    'id_classroom' => $classroom->id,
                ];
            }
        }

        return response()->json($areas);
    }

    public function reportTeacher($teacherId){
        return Excel::download(new MateriasByTeacherExport($teacherId),'Reporte_Materias.xlsx');
    }
    
    public function reportAllMateriasTeachers(){
        return Excel::download(new MateriasTeachersExport(),'Reporte_Materias.xlsx');
    }

    public function reportCourse(int $area_id,int $classroom_id, String $teacher, String $area){
        return Excel::download(new CourseExport($area_id, $classroom_id, $teacher, $area),'Reporte_Curso.xlsx');
    }

    public function reportNotes(int $area_id,int $classroom_id,int $id_student){
        return Excel::download(new NotesExport($area_id, $classroom_id, $id_student),'Reporte_Notas.xlsx');
    }

    public function reportPlanificationTeacher($teacherId, $id_area, $id_classroom){
        $quaterly = [];
        $achievements = [];

        $Courses = Courses::where('id_teacher', $teacherId)->where('id_area', $id_area)->where('id_classroom', $id_classroom)->first();
        if (isset($Courses)) {
            $achievements = CoursesAchievement::where('id_planification', $Courses->id)->get();

            $Quarterlies = Quarterly::where('id_teacher', $teacherId)->where('id_area', $id_area)->where('id_classroom', $id_classroom)->get();
            $Courses->achievements = $achievements;
            foreach ($Quarterlies as $key => $Quarterly) {
                $quaterly[$key] = [
                    'id' => $Quarterly->id,
                    'content' => $Quarterly->content,
                    'unit_name' => $Quarterly->unit_name
                ];
            }
        }
        $classroom_name = '';
        $classroom = Classroom::where('id', $id_classroom)->get();
        $area = Area::where('id', $id_area)->get();

        if (isset($classroom) && count($classroom) > 0 && isset($area) && count($area) > 0) {
            $classroom_name = $area[0]->name . ' ' . $classroom[0]->name;
        }

        $data = [
            'classroom_name' => $classroom_name,
            'quaterly' =>  $quaterly,
            'courses' => $Courses,
            'achievements' => $achievements
        ];

        return response()->json($data);
    }

    public function students(){
        $students = User::where('type_user','=',3)->get();
        return response()->json($students);
    }

    public function getLegislation(){
        $school = SchoolGovernment::all();
        return response()->json($school);
    }

    public function getAllAreas(){
        $areas = Area::all();
        return response()->json($areas);
    }

    public function user(String $userid){
        $user = User::where('id',$userid)->get();
        return response()->json($user);
    }

    public function getReportStudents(){
        return Excel::download(new StudentsExport,'Reporte_Estudiantes.xlsx');  
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
        $school = new SchoolGovernment;
        $school->legislation = $request->legislation;
        $school->user_id = $request->user_id;
        $school->save();
        return response()->json("Legislación Creada");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\SchoolGovernment  $schoolGovernment
     * @return \Illuminate\Http\Response
     */
    public function show(SchoolGovernment $schoolGovernment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SchoolGovernment  $schoolGovernment
     * @return \Illuminate\Http\Response
     */
    public function edit(SchoolGovernment $schoolGovernment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SchoolGovernment  $schoolGovernment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $school = SchoolGovernment::findOrFail($id);
        $school->legislation = $request->legislation;
        $school->save();
        return response()->json("Legislación Creada");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SchoolGovernment  $schoolGovernment
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        $legislation = SchoolGovernment::findOrFail($id);
        $legislation->delete();
        return response()->json("Dato Eliminado");
    }
}
