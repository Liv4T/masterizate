<?php

namespace App\Exports;

use DB;
use App\Indicator;
use App\Quarterly;
use App\Area;
use App\Classroom;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class PlanificationPerObjetivesExport implements FromCollection , ShouldAutoSize, WithMapping, WithHeadings
{
    use Exportable;

    public function __construct(String $id_achievement, String $id_planification){
        $this->id_achievement = $id_achievement;
        $this->id_planification = $id_planification;
    }
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        $quaterly = [];
        $quarterlies = Quarterly::where('id_achievement', $this->id_achievement)->where('deleted', 0)->get();
        foreach ($quarterlies as $key_q => $quarterly) {
            $indicators = Indicator::where('id_quarterly_plan', $quarterly->id)->get();
            $unit=json_decode($quarterly->unit_name, true);
            $indicador="";
            $activities="";
            foreach($unit as $i => $v)
            {
                $indicador .=$i+1 .'- '.$v['indicador']. "\n";
            }
            foreach($indicators as $k => $z)
            {
                $activities .=$k+1 .'- '.$z['type_activity']. '('. $z['activity_rate']. ')'. "\n";
            }
            $quaterly[$key_q] = [
                'logro' => $quarterly->logro,
                'unit_name' => $indicador,
                'content' => $quarterly->content,
                'indicators' => $activities,
            ];
        }
        return collect($quaterly);
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
