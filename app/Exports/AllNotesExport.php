<?php

namespace App\Exports;

use DB;
use App\ConfigurationParameter;
use App\Weekly;
use App\ClassroomTeacher;
use App\Area;
use App\Classroom;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class AllNotesExport implements FromCollection , ShouldAutoSize, WithMapping, WithHeadings
{
    use Exportable;
    
    /**
    * @return \Illuminate\Support\Collection
    */    
    public function collection()
    {
        $score_base=ConfigurationParameter::where('code','CALIFICATION_BASE')->where('deleted',0)->first();

        $weekly_plans=DB::table('weekly_plan')
            ->take(60)
            ->get();

        $students=DB::table('classroom')
            ->join('classroom_student','classroom.id','=','classroom_student.id_classroom')
            ->join('users as us1','us1.id','=','classroom_student.id_user')
            ->join('classroom_teacher','classroom_teacher.id_classroom','=','classroom.id')
            ->join('users as us2','classroom_teacher.id_user','=','us2.id')
            ->select('us1.id as user_id','us1.name as user_name','us1.last_name as user_lastname', 'us1.picture as user_picture', 'us1.email as user_email','us2.name as teacher_name')
            ->orderBy('us1.last_name')
            ->get();

        foreach ($students as $key_student => $student) {

            $progress=0;
            $score=0;
            $activities_pending=0;

            $weekly_plans_with_score=0;
            $weekly_plans_with_progress=0;



            foreach ($weekly_plans as $weekly_plan) {

                $_progress=  DB::select('call obtener_progreso_modulo(?,?)',[$weekly_plan->id, $student->user_id])[0]->porcentaje;

                if($_progress>-1)
                {
                    $weekly_plans_with_progress++;
                    $progress+=$_progress;
                }


                $activities=DB::table('class')
                            ->join('activity', 'activity.id_class', '=', 'class.id')
                            ->where('class.id_weekly_plan', $weekly_plan->id)
                            ->where('activity.deleted', 0)
                            ->where('activity.state', 1)
                            ->get();

                if(count($activities)>0)
                {
                    $weekly_plans_with_score++;
                    $score+=  DB::select('call obtener_calificacion_modulo(?,?)',[$weekly_plan->id, $student->user_id])[0]->calificacion;

                    $activities_interaction=DB::table('class')
                        ->join('activity', 'activity.id_class', '=', 'class.id')
                        ->join('activity_interaction', 'activity_interaction.id_activity', '=', 'activity.id')
                        ->where('class.id_weekly_plan', $weekly_plan->id)
                        ->where('activity.deleted', 0)
                        ->where('activity.state', 1)
                        ->where('activity_interaction.deleted', 0)
                        ->where('activity_interaction.id_student', $student->user_id)//pendientes de calificacion
                        ->where('activity_interaction.state', 2)
                        ->get();

                    $activities_pending+=count($activities_interaction);
                }

            }

            $students[$key_student]->teacher_name;

            $students[$key_student]->progress = round(($weekly_plans_with_progress>0)?($progress/$weekly_plans_with_progress):-1,2);

            $students[$key_student]->score =round(($weekly_plans_with_score>0)?($score/$weekly_plans_with_score):-1,2);

            $students[$key_student]->score_base=!isset($score_base)?5:$score_base->content;

            $students[$key_student]->pending_calification =$activities_pending;
        }

        return collect($students);
    }

    public function map($students): array
    {
        return [
            $students->user_name,
            $students->user_lastname,
            $students->teacher_name,
            $students->progress <= -1 ? '0 %' :$students->progress.' %' ,
            $students->score <= -1 ? '0 %' : $students->score.' %',
            $students->score_base,
            $students->pending_calification,
        ];   
    }

    public function headings(): array
    {
        return[
            'Nombre Estudiante',
            'Apellido Estudiante',
            'Profesor',
            'Progreso',
            'Puntaje',
            'Puntaje Total',
            'Calificación Pendiente'
        ];
    }
}
