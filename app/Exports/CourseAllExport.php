<?php

namespace App\Exports;

use DB;
use App\ConfigurationParameter;
use App\Weekly;
use App\Area;
use App\ClassroomStudent;
use App\Classs;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class CourseAllExport implements FromCollection , ShouldAutoSize, WithMapping, WithHeadings
{
    use Exportable;
    
    /**
    * @return \Illuminate\Support\Collection
    */    
    public function collection()
    {          
        $score_base=ConfigurationParameter::where('code','CALIFICATION_BASE')->where('deleted',0)->first();

        $weekly_plans=Weekle::all();

        $students = DB::select('call getAllStudentsWithTeacher()');

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

                $activities=classs::join('activity', 'activity.id_class', '=', 'class.id')
                    ->where('class.id_weekly_plan', $weekly_plan->id)
                    ->where('activity.deleted', 0)
                    ->where('activity.state', 1)
                    ->get();
                                
                if(count($activities)>0)
                {
                    $weekly_plans_with_score++;
                    $score+=  DB::select('call obtener_calificacion_modulo(?,?)',[$weekly_plan->id, $student->user_id])[0]->calificacion;

                    $activities_interaction = classs::join('activity', 'activity.id_class', '=', 'class.id')
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

            $students[$key_student]->progress = round(($weekly_plans_with_progress>0)?($progress/$weekly_plans_with_progress):-1,2);

            $students[$key_student]->score =round(($weekly_plans_with_score>0)?($score/$weekly_plans_with_score):-1,2);

            $students[$key_student]->score_base=!isset($score_base)?5:$score_base->content;

            $students[$key_student]->pending_calification =$activities_pending;
            
            $students[$key_student]->classroom = $students[$key_student]->classroom.' '.$students[$key_student]->area;

            $students[$key_student]->teacher_name;

            $students[$key_student]->driving_question;

            $students[$key_student]->observation;
        }
        return collect($students);
    }

    public function map($students): array
    {
        
        return [
            $students->user_name,
            $students->user_lastname,
            $students->score ? $students->score : '0' , 
            $students->score_base,
            $students->classroom,
            $students->teacher_name,
            $students->driving_question,
            $students->observation,
        ];   
    }

    public function headings(): array
    {
        return[
            'Nombre',
            'Apellido',
            'Puntaje',
            'Puntaje Total',
            'Curso',
            'Profesor',
            'Ciclo',
            'Observación del Ciclo'
        ];
    }
}
