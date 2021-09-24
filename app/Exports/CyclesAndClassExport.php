<?php

namespace App\Exports;

use DB;
use App\Weekly;
use App\Classs;
use App\ClassContent;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class CyclesAndClassExport implements FromView
{
    use Exportable;

    public function __construct(String $id_area, String $id_classroom, String $id_trimestre){
        $this->id_area = $id_area;
        $this->id_classroom = $id_classroom;
        $this->id_trimestre = $id_trimestre;
    }
    /**
    * @return \Illuminate\Support\Collection
    */
    public function view(): View
    {
        $dataWeek = [];
        $dataContent = [];
        $Weeks = Weekly::where('id_area', $this->id_area)->where('id_classroom', $this->id_classroom)->where('id_trimestre', $this->id_trimestre)->get();
            foreach ($Weeks as $key => $week) {
                $class = Classs::Where('id_weekly_plan', $week->id)->get();
                $dataContent = [];
                $class_dev=json_decode($week->class_development, true);
                $class_d="";
                foreach($class_dev as $i => $v)
                {
                    $class_d .=$i+1 .'- '.$v['class_developmentC']. "\n";
                }
                foreach ($class as $keyC => $classC){
                    $content = ClassContent::where('id_class', $classC->id)->where('content', '<>', '')->get();
                    $classC->content = $content;
                }
                $dataWeek[$key] = [
                    'order_items' => $week->order_items,
                    'text' => $week->driving_question,
                    'class' => $class_d,
                    'observation' => $week->observation,
                    'ajuste_piar' => $week->ajuste_piar,
                    'class_array' => $class,
                ];
            }

        return view("exports.cyclesAndClass", compact('dataWeek'));
    }

}
