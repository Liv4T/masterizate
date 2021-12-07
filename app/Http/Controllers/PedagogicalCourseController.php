<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PedagogicalCourse;

class PedagogicalCourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('pedagogicalCourse');
    }

    public function getPedagogic(){
        $allPedagogic = PedagogicalCourse::all();
        return response()->json($allPedagogic);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //$user = Auth::user();
        $file =request('file');
        //return $request;
        //$file = request('file');
        if (!empty($file)) {
            $fileName = $file->getClientOriginalName();
            $div_file_name = explode(".", $fileName);
            $div_file_name = end($div_file_name);
            $extension = $div_file_name;
            $fileName_1 = request('name');
            $fileName = strtr($fileName_1, " ", "_");
            // file with path
            $filePath = url('uploads/circulares/' . $fileName . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/circulares/';

            if ($file->move($destinationPath, $fileName . "." . $extension)) {
                $pedagogicalCourse = new PedagogicalCourse();
                $pedagogicalCourse->name_activity = request('name_activity');
                $pedagogicalCourse->grade = request('grade');
                $pedagogicalCourse->id_classroom = request('id_classroom');
                $pedagogicalCourse->place = request('place');
                $pedagogicalCourse->departure_time = request('departure_time');
                $pedagogicalCourse->time_arrival = request('time_arrival');
                $pedagogicalCourse->description = request('description');
                $pedagogicalCourse->url_circular = $filePath;

                $pedagogicalCourse->save();

                return "Salida Pedagogica Guardada";
            }
            return "error";
        }else{
            $pedagogicalCourse = new PedagogicalCourse();
            $pedagogicalCourse->name_activity = request('name_activity');
            $pedagogicalCourse->grade = request('grade');
            $pedagogicalCourse->id_classroom = request('id_classroom');
            $pedagogicalCourse->place = request('place');
            $pedagogicalCourse->departure_time = request('departure_time');
            $pedagogicalCourse->time_arrival = request('time_arrival');
            $pedagogicalCourse->description = request('description');

            $pedagogicalCourse->save();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
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
        $pedagogicalCourse = PedagogicalCourse::findOrFail($id);
        $pedagogicalCourse->name_activity = $request->name_activity;
        $pedagogicalCourse->grade = $request->grade;
        $pedagogicalCourse->id_classroom = $request->id_classroom;
        $pedagogicalCourse->place = $request->place;
        $pedagogicalCourse->departure_time = $request->departure_time;
        $pedagogicalCourse->time_arrival = $request->time_arrival;
        $pedagogicalCourse->description = $request->description;

        $pedagogicalCourse->update();

        return response()->json('Salida Pedagogica Actualizada');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $pedagogicalCourse = PedagogicalCourse::findOrFail($id);
        $pedagogicalCourse->delete();
        return response()->json('Salida Pedagogica Eliminada');
    }
    public function uploadFileUpdate(Request $request, int $id)
    {
        $file = request('file');
        if (!empty($file)) {
            $fileName = $file->getClientOriginalName();
            $div_file_name = explode(".", $fileName);
            $div_file_name = end($div_file_name);
            $extension = $div_file_name;
            $fileName_1 = request('name');
            $fileName = strtr($fileName_1, " ", "_");
            // file with path
            $filePath = url('uploads/circulares/' . $fileName . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/circulares/';
            //Buscamos la ruta del archivo a eliminar
            $fileSearch = PedagogicalCourse::where('id', $id)->first();
            $arrayNames = explode("/", $fileSearch->url_circular);
            $nameArchive = end($arrayNames);
            //se elimina el archivo anterior
            $filenameDelete = 'uploads/circulares/' . $nameArchive;
            unlink($filenameDelete);
            //se añade el nuevo archivo
            if ($file->move($destinationPath, $fileName . "." . $extension)) {
                $file = PedagogicalCourse::where('id', $id)->update([
                    'url_circular' => $filePath,
                ]);
                return "ok";
            }
            return "error";
        }
    }
}
