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

class CyclesAndClassExport implements FromCollection , ShouldAutoSize, WithMapping, WithHeadings
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
    public function collection()
    {
        $dataWeek = [];
        $dataContent = [];
        $Weeks = Weekly::where('id_area', $this->id_area)->where('id_classroom', $this->id_classroom)->where('id_trimestre', $this->id_trimestre)->get();
            foreach ($Weeks as $key => $week) {
                $class = Classs::Where('id_weekly_plan', $week->id)->get();
                $dataContent = [];
                foreach ($class as $keyC => $classC){
                    $content = ClassContent::where('id_class', $classC->id)->where('content', '<>', '')->get();
                    $classC->content = $content;
                }
                $dataWeek[$key] = [
                    'id'   => $week->id,
                    'text' => $week->driving_question,
                    'class' => $week->class_development,
                    'observation' => $week->observation,
                    'id_area' =>  $week->id_area,
                    'id_classroom' =>  $week->id_classroom,
                    'id_trimestre' => $week->id_trimestre,
                    'ajuste_piar' => $week->ajuste_piar,
                    'order_items' => $week->order_items,
                    'class_array' => $class,
                ];
            }

        return collect($dataWeek);
    }

    public function map($data): array
    {

        return [
            $data
        ];
    }

    public function headings(): array
    {
        return[
            'Logro',
            'Indicadores',
            'Contenido',
            'Actividades',
        ];
    }
}
