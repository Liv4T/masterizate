<?php

namespace App\Http\Controllers;

use App\Classes;
use App\Files;
use Illuminate\Http\Request;

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
        $video = Files::where('unit', $data['name'])->where('type', 2)->first();
        $documento = Files::where('unit', $data['name'])->where('type', 1)->first();
        $courses = Classes::create([
            'description' => $data['description'],
            'id_weekly_plan' => $data['id_weekly_plan'],
            'name' => $data['name'],
            'name_document' => $data['name_document'],
            'url'    => $data['url'],
            'document' => $documento->path,
            'video'  => $video->path,
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
        return $clase;
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
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'description' => 'required'
        ]);
        Classes::find($id)->update($request->all());
        return;
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
            $fileName = strtr($fileName_1, " ", "_");
            // file with path
            $filePath = url('uploads/clases/' . $fileName . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/clases/';
            if ($extension == "flv" || $extension == "mp4" || $extension == "m3u8" || $extension == "ts" || $extension == "3gp" || $extension == "mov" || $extension == "avi" || $extension == "wmv") {
                $type = 2;
            } else {
                $type = 1;
            }
            if ($file->move($destinationPath, $fileName . "." . $extension)) {
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
    public function activityWeekId(Request $request, String $id)
    {
        $week = $id;
        return view("activity", compact("week"));;
    }
}
