<?php

namespace App\Exports;

use DB;
use App\ConfigurationParameter;
use App\Weekly;
use App\Area;
use App\Classroom;
use App\User;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class NotesExport implements FromCollection , ShouldAutoSize, WithMapping, WithHeadings
{
    use Exportable;
    
    public function __construct(int $area_id,int $classroom_id,int $id_student){
        $this->area_id = $area_id;
        $this->classroom_id = $classroom_id;
        $this->id_student = $id_student;

        
    }
    /**
    * @return \Illuminate\Support\Collection
    */    
    public function collection()
    {
        $students=User::where('id','=',$this->id_student)->get();
    
        $score_base=ConfigurationParameter::where('code','CALIFICATION_BASE')->where('deleted',0)->first();

        $area=Area::find($this->area_id);

        $classroom=Classroom::find($this->classroom_id);

        $weekly_plans=Weekly::where('id_classroom',$this->classroom_id)->where('id_area',$this->area_id)->get();

            $progress=0;
            $score=0;
            $activities_pending=0;

            $weekly_plans_with_score=0;
            $weekly_plans_with_progress=0;

            foreach ($weekly_plans as $weekly_plan) {
                foreach ($students as $student){
                    $_progress=  DB::select('call obtener_progreso_modulo(?,?)',[$weekly_plan->id, $student->id])[0]->porcentaje;
                }
                
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
                    foreach($students as $student){
                        $score+=  DB::select('call obtener_calificacion_modulo(?,?)',[$weekly_plan->id, $student->id])[0]->calificacion;
                    }

                    $activities_interaction=DB::table('class')
                        ->join('activity', 'activity.id_class', '=', 'class.id')
                        ->join('activity_interaction', 'activity_interaction.id_activity', '=', 'activity.id')
                        ->where('class.id_weekly_plan', $weekly_plan->id)
                        ->where('activity.deleted', 0)
                        ->where('activity.state', 1)
                        ->where('activity_interaction.deleted', 0)
                        ->where('activity_interaction.id_student', $this->id_student)//pendientes de calificacion
                        ->where('activity_interaction.state', 2)
                        ->get();

                    $activities_pending+=count($activities_interaction);
                }
            }
            foreach($students as $student){
                $student->progress = round(($weekly_plans_with_progress>0)?($progress/$weekly_plans_with_progress):-1,2);

                $student->score =round(($weekly_plans_with_score>0)?($score/$weekly_plans_with_score):-1,2);

                $student->score_base=!isset($score_base)?5:$score_base->content;

                $student->pending_calification =$activities_pending;

                $student->area_id=$this->area_id;

                $student->area_name=$area->name;

                $student->classroom_id=$this->classroom_id;

                $student->classroom_name=$classroom->name;
            }
        return $student;
    }

    public function map($student): array
    {
       
        return [
            $student->name,
            $student->last_name,
            $student->progress <= 0 ? '0%' : $student->progress.' %',
            $student->score <= 0 ? '0%' : $student->score.' %',
            $student->score_base,
            $student->pending_calification ? $student->pending_calification : 'Sin calificación pendiente',
            $student->area_name
        ];   
    }

    public function headings(): array
    {
        return[
            'Nombre',
            'Apellido',
            'Progreso en porcentaje',
            'Puntaje',
            'Puntaje Total',
            'Calificación Pendiente',
            'Area'
        ];
    }
}
