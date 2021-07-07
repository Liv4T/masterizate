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
use App\Exports\CourseAllExport;
use App\Exports\NotesExport;
use App\Exports\PlanificationExport;
use App\Exports\PlanificationQuaterlyExport;
use App\Exports\PlanificationCoursesExport;
use App\Exports\AllNotesExport;

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

    public function reportAllCourse(int $classroom){
        return Excel::download(new CourseAllExport($classroom),'Reporte_Cursos.xlsx');
    }

    public function reportNotes(int $area_id,int $classroom_id, String $teacher_name, String $area_name){
        return Excel::download(new NotesExport($area_id, $classroom_id, $teacher_name, $area_name),'Reporte_Notas.xlsx');
    }

    public function reportAllNotes(int $classroom){
        return Excel::download(new AllNotesExport($classroom),'Reporte_Notas.xlsx');
    }

    public function reportPlanificationTeacher(String $teacherId, String $id_area, String $id_classroom, String $teacher){
        return Excel::download(new PlanificationExport($teacherId, $id_area, $id_classroom, $teacher),'Reporte_Planificación_Anual.xls');
    }

    public function reportPlanificationQuaterlyTeacher(String $teacherId, String $id_area, String $id_classroom, String $teacher){
        return Excel::download(new PlanificationQuaterlyExport($teacherId, $id_area, $id_classroom, $teacher),'Reporte_Planificación_Trimestral.xls');
    }

    public function reportPlanificationCoursesTeacher(String $id_area, String $id_classroom, String $teacher){
        return Excel::download(new PlanificationCoursesExport($id_area, $id_classroom, $teacher),'Reporte_Planificación_Clases.xls');
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
        $user = User::where('id',$userid)->first();
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
