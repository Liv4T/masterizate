<?php

namespace App\Http\Controllers;

use App\Classes;
use App\Files;
use App\Courses;
use App\Weekly;
use App\CoursesAchievement;
use App\Area;
use App\Classroom;
use Illuminate\Http\Request;
use Auth;
use PhpParser\Node\Stmt\Foreach_;

class ClassController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $clases = Classes::all();
        return $clases;
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
        $data = $request->all();
        if (isset($data['video']) && $data['video'] !== "") {
            $data['video'] = str_replace("watch?v=", "embed/", $data['video']);
        }
        if (isset($data['video1']) && $data['video1'] !== "") {
            $data['video1'] = str_replace("watch?v=", "embed/", $data['video1']);
        }
        if (isset($data['video2']) && $data['video2'] !== "") {
            $data['video2'] = str_replace("watch?v=", "embed/", $data['video2']);
        }
        $documentos = Files::where('unit', $data['name'])->where('type', 1)->orderBy('id', 'ASC')->get();
        $url_documento = [];
        foreach ($documentos as $key => $documento) {
            $url_documento[$key] = $documento->path;
        }
        $courses = Classes::create([
            'description' => $data['description'],
            'id_weekly_plan' => $data['id_weekly_plan'],
            'name' => $data['name'],
            'name_document' => $data['name_document'],
            'url'    => $data['url'],
            'url1'    => $data['url1'],
            'url2'    => $data['url2'],
            'hourly_intensity'    => $data['hourly_intensity'],
            'document' => isset($url_documento[0]) ? $url_documento[0] : '',
            'document1' => isset($url_documento[1]) ? $url_documento[1] : '',
            'document2' => isset($url_documento[2]) ? $url_documento[2] : '',
            'video'  => (isset($data['video']) && $data['video'] !== "") ? $data['video'] : '',
            'video1'  => (isset($data['video1']) && $data['video1'] !== "") ? $data['video1'] : '',
            'video2'  => (isset($data['video2']) && $data['video2'] !== "") ? $data['video2'] : '',
        ]);
        return 'ok';
        $arch = Files::findOrFail($documento->id);
        $arch->delete();
        $vid = Files::findOrFail($video->id);
        $vid->delete();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, String $id)
    {
        $clase = Classes::where('id_weekly_plan', $id)->get();
        $week = Weekly::find($id);
        $user = Auth::user();
        $achievements = [];
        if ($user->type_user == 3) {
            $Courses = Courses::where('id_area', $week->id_area)->where('id_classroom', $week->id_classroom)->first();
        } elseif ($user->type_user == 2) {
            $Courses = Courses::where('id_teacher', $user->id)->where('id_area', $week->id_area)->where('id_classroom', $week->id_classroom)->first();
        }
        if (isset($Courses)) {
            $achievements = CoursesAchievement::where('id_planification', $Courses->id)->get();
        }
        foreach ($clase as $key => $class) {
            if (is_null($clase[$key]->url) || $clase[$key]->url == "") {
                $clase[$key]->url = "";
            }
            if (is_null($clase[$key]->video2) || $clase[$key]->video2 == "") {
                $clase[$key]->video2 = "";
            } else {
                $video2 = $clase[$key]->video2;
                $type_video2 = strpos($video2, 'youtube');
                if ($type_video2 == true) {
                    $clase[$key]->video2_youtube = $video2;
                } else {
                    $clase[$key]->video2_youtube = '';
                }
            }
            if (is_null($clase[$key]->video1) || $clase[$key]->video1 == "") {
                $clase[$key]->video1 = "";
            } else {
                $video1 = $clase[$key]->video1;
                $type_video1 = strpos($video1, 'youtube');
                if ($type_video1 == true) {
                    $clase[$key]->video1_youtube = $video1;
                } else {
                    $clase[$key]->video1_youtube = '';
                }
            }
            if (is_null($clase[$key]->video) || $clase[$key]->video == "") {
                $clase[$key]->video = "";
            } else {
                $video = $clase[$key]->video;
                $type_video = strpos($video, 'youtube');
                if ($type_video == true) {
                    $clase[$key]->video_youtube = $video;
                } else {
                    $clase[$key]->video_youtube = '';
                }
            }
            if (is_null($clase[$key]->document) || $clase[$key]->document == "") {
                $clase[$key]->document = "";
            }
            if (is_null($clase[$key]->document1) || $clase[$key]->document1 == "") {
                $clase[$key]->document1 = "";
            }
            if (is_null($clase[$key]->document2) || $clase[$key]->document2 == "") {
                $clase[$key]->document2 = "";
            }
        }
        $data = [
            'clase' => $clase,
            'achievements' => $achievements
        ];
        return $data;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateClass(Request $request)
    {
        // $this->validate($request, [
        //     'description' => 'required'
        // ]);
        $data = $request->all();
        if (isset($data['video']) && $data['video'] !== "") {
            $data['video'] = str_replace("watch?v=", "embed/", $data['video']);
        }
        if (isset($data['video1']) && $data['video1'] !== "") {
            $data['video1'] = str_replace("watch?v=", "embed/", $data['video1']);
        }
        if (isset($data['video2']) && $data['video2'] !== "") {
            $data['video2'] = str_replace("watch?v=", "embed/", $data['video2']);
        }
        $documentos = Files::where('unit', $data['name'])->where('type', 1)->orderBy('id', 'DESC')->get();
        $url_documento = [];
        foreach ($documentos as $key => $documento) {
            $url_documento[$key] = $documento->path;
        }
        $class = Classes::find($data['id']);
        $class->description = $data['description'];
        $class->id_weekly_plan = $data['id_weekly_plan'];
        $class->name = $data['name'];
        $class->name_document = $data['name_document'];
        $class->url    = $data['url'];
        $class->url1    = $data['url1'];
        $class->url2    = $data['url2'];
        $class->hourly_intensity    = $data['hourly_intensity'];
        $class->document = isset($url_documento[0]) ? $url_documento[0] : $class->document;
        $class->document1 = isset($url_documento[1]) ? $url_documento[1] : $class->document1;
        $class->document2 = isset($url_documento[2]) ? $url_documento[2] : $class->document2;
        $class->video  = $data['video'];
        $class->video1  = $data['video1'];
        $class->video2  = $data['video2'];
        $class->save();

        return 'class update';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
    }
    public function getNameArea(String $id_area, String $id_classroom)
    {
        $classroom_name = '';
        $classroom = Classroom::where('id', $id_classroom)->get();
        $area = Area::where('id', $id_area)->get();

        if (isset($classroom) && count($classroom) > 0 && isset($area) && count($area) > 0) {
            $classroom_name = $area[0]->name . ' ' . $classroom[0]->name;
        }
        return response()->json($classroom_name);
    }
    public function uploadFile(Request $request)
    {
        // return $request;
        $file = request('file');
        // dd($file);
        if (!empty($file)) {
            $fileName = $file->getClientOriginalName();
            $div_file_name = explode(".", $fileName);
            $div_file_name = end($div_file_name);
            $extension = $div_file_name;
            $fileName_1 = request('name');
            $number = request('count');
            $fileName = strtr($fileName_1, " ", "_");
            // file with path
            $filePath = url('uploads/clases/' . $fileName . $number . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/clases/';
            if ($extension == "flv" || $extension == "mp4" || $extension == "m3u8" || $extension == "ts" || $extension == "3gp" || $extension == "mov" || $extension == "avi" || $extension == "wmv") {
                $type = 2;
            } else {
                $type = 1;
            }
            if ($file->move($destinationPath, $fileName . $number . "." . $extension)) {
                $file = Files::create([
                    'path' => $filePath,
                    'unit' => $fileName_1,
                    'type' => $type,
                ]);
                return "ok";
            }
            return "error";
        }
    }
    public function uploadFileUpdate(Request $request)
    {
        // return $request;
        $file = request('file');
        // dd($file);
        if (!empty($file)) {
            $fileName = $file->getClientOriginalName();
            $div_file_name = explode(".", $fileName);
            $div_file_name = end($div_file_name);
            $extension = $div_file_name;
            $fileName_1 = request('name');
            $number = request('count');
            $fileName = strtr($fileName_1, " ", "_");
            // file with path
            $filePath = url('uploads/clases/' . $fileName . $number . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/clases/';
            if ($extension == "flv" || $extension == "mp4" || $extension == "m3u8" || $extension == "ts" || $extension == "3gp" || $extension == "mov" || $extension == "avi" || $extension == "wmv") {
                $type = 2;
            } else {
                $type = 1;
            }
            //se elimina el archivo anterior
            $filenameDelete = url('uploads/clases/' . $fileName . $number . "." . $extension);
            \File::delete($filenameDelete);
            //se añade el nuevo archivo
            if ($file->move($destinationPath, $fileName . $number . "." . $extension)) {
                $files_prevoiusly = Files::where('path', $filePath)->orderBy('id', 'DESC')->first();
                if (isset($files_prevoiusly)) {
                    $files_prevoiusly->delete();
                }
                $file = Files::create([
                    'path' => $filePath,
                    'unit' => $fileName_1,
                    'type' => $type,
                ]);
                return "ok";
            }
            return "error";
        }
    }
    public function getClass()
    {

        $Classes = Classes::all();
        $data = [];
        $data[0] = [
            'id'   => 0,
            'text' => 'Seleccione',
        ];
        foreach ($Classes as $key => $class) {
            $data[$key + 1] = [
                'id'   => $class->id,
                'text' => $class->name,
            ];
        }
        return response()->json($data);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getClassId(Request $request, String $id)
    {

        $Classes = Classes::where('id_weekly_plan', $id)->get();
        $clase = [];
        $clase[0] = [
            'id'   => 0,
            'text' => 'Seleccione',
        ];
        foreach ($Classes as $key => $class) {
            $clase[$key + 1] = [
                'id'   => $class->id,
                'text' => $class->name,
            ];
        }
        $week = Weekly::find($id);
        $Courses = Courses::where('id_teacher', Auth::user()->id)->where('id_area', $week->id_area)->where('id_classroom', $week->id_classroom)->first();
        if (isset($Courses)) {
            $achievements = CoursesAchievement::where('id_planification', $Courses->id)->get();
        }
        $data = [
            'clase' => $clase,
            'achievements' => $achievements
        ];
        return response()->json($data);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function findClass(String $id)
    {

        $clases = Classes::findOrFail($id);


        return $clases;
    }
    public function activityWeekId(Request $request, String $id)
    {
        $week = $id;
        return view("activity", compact("week"));;
    }
}
