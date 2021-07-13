<?php

namespace App\Exports;

use App\Classroom;
use App\Classs;
use App\Area;
use App\User;
use App\ClassContent;
use App\Weekly;
use Illuminate\Support\Facades\DB;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class ProductsExport implements FromView
{
    public function view(): View
    {
        $contentsClass = ClassContent::all();
        $datos = DB::table('weekly_plan')
            ->join('class', 'weekly_plan.id', '=', 'class.id_weekly_plan')
            ->join('area', 'weekly_plan.id_area', '=', 'area.id')
            ->join('classroom', 'weekly_plan.id_classroom', '=', 'classroom.id')
            ->join('users', 'weekly_plan.id_teacher', '=', 'users.id')
            // ->join('class_content', 'class.id', '=', 'class_content.id_class')
            // 'class_content.content_type as class_type', 'class_content.content as content', 'class_content.description as content_description',
            ->select('class.id as id_class', 'classroom.name as classroom_name', 'users.name as user_name', 'users.last_name as user_lastname', 'weekly_plan.driving_question as cicle', 'class.name as class_name', 'class.description as class_description', 'area.name as area', 'class.created_at as date')
            ->orderBy('class.id')
            // ->take(10)
            ->get();

        $id = $datos[0]->id_class;
        $arrayCont = [];
        foreach ($datos as $key => $dat) {
            $arrayCont = [];
            foreach ($contentsClass as $index => $content) {
                if ($content->id_class == $dat->id_class) {
                    $arrayCont[] = [
                        'content_type' => $content->content_type,
                        'content' => $content->content,
                        'description' => $content->description,
                    ];
                }
                $dat->content = $arrayCont;
            }
        }
        return view("exports.classContent", compact("datos"));
    }
}
