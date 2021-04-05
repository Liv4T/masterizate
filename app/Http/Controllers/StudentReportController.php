<?php

namespace App\Http\Controllers;
use App\Classroom;
use App\ClassroomStudent;
use App\User;
use App\Area;
use App\StudentReport;
use App\Reason;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class StudentReportController extends Controller
{
    //
    public function saveReport(Request $request){

        $report = new StudentReport; 

        $report->student_id=$request->student_id;
        $report->reason=$request->reason;
        $report->person_inv=$request->student;
        $report->person_report=$request->person;
        $report->grade=$request->grade;
        $report->description=$request->description;
        $report->id_classroom=$request->id_classroom;
        $report->save();
    }

    public function createReason(Request $request){
        
        $reason = new Reason;

        $reason->name=$request->reason;

        $reason->save();
    }

    public function reasons(){
        $reasons=Reason::all();

        return response()->json($reasons);
    }

    public function studentsVisits(){
        $students=DB::table("users")
        ->select('users.*')
        ->where('type_user','=',3)
        ->get();
        $listStudents= [];
        foreach ($students as $index => $student) {
            $reasons=StudentReport::where('student_id','=',$student->id)->get();
            $countReason=$reasons->count();
            array_push($listStudents,[
                "id" => $student->id,
                "name" => $student->name,
                "last_name" => $student->last_name,
                "picture" => $student->picture,
                "count" => $countReason,
            ]);
        }
        return response()->json($listStudents);
    }
    /**
     * Get Reports for student.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function reportVisits($id){
        $reports=StudentReport::where('student_id','=',$id)->get();
        $listReports=[];
        foreach ($reports as $index => $report) {
            $classroom=DB::table("classroom")
            ->select('classroom.name')
            ->where('id','=',$report->id_classroom)
            ->get();
            $reason=Reason::where('id','=', $report->reason)->get();
            array_push($listReports,[
                "id" => $report->id,
                "reason" => $reason[0]->name,
                "person_inv" => $report->person_inv,
                "person_report" => $report->person_report,
                "grade" => $report->grade,
                "description" => $report->description,
                "classroom" => $classroom[0]->name,
            ]);
        }
        return response()->json($listReports);
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getAreas(int $id){
        $student = User::where('id','=',$id)->get();
        $areas = [];
        $user_asignateds = ClassroomStudent::where('id_user', $id)->get();
        if (isset($user_asignateds)) {
            foreach ($user_asignateds as $key => $user_asignated) {
                $classroom = Classroom::find($user_asignated->id_classroom);
                $class = Area::where('id_grade', $classroom->id_grade)->get();
                foreach ($class as $key => $area) {
                    array_push($areas, [
                        'text'         => $area->name . " - " . $classroom->name,
                        'student_name' => $student[0]->name,
                        'id_student'   => $student[0]->id,
                        'id_area'           => $area->id,
                        'id_classroom' => $classroom->id,
                    ]);
                }
            }
        }

        $studentsAreas = array();

        foreach ( $areas as $value ) {
            $studentsAreas[$value["student_name"]][] = $value;
        }

        return response()->json($studentsAreas);
    }
}
