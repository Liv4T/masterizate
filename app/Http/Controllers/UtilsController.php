<?php

namespace App\Http\Controllers;

use App\Utils;
use Auth;
use DB;
use Illuminate\Http\Request;

class UtilsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('utilsCoord');
    }

    public function getUtils(){
        $utils = Utils::all();
        return response()->json($utils);
    }

    public function getGrades(){
        $user = Auth::user();

        if($user->newCoordArea === 'Primaria'){
            $primary = DB::table("classroom")
                ->select('classroom.id_grade as id_grade','classroom.name as grade')
                ->where('classroom.id_grade','<=',6)
                ->get();
            return response()->json($primary);
        }else if($user->newCoordArea === 'Secundaria'){
            $secundary = DB::table("classroom")
                ->select('classroom.id_grade as id_grade','classroom.name as grade')
                ->where('classroom.id_grade','>=',7)
                ->get();
            return response()->json($secundary);
        }else if($user->newCoordArea === 'General'){
            $general = DB::table("classroom")
                ->select('classroom.id_grade as id_grade','classroom.name as grade')
                ->get();
            return response()->json($general);
        }
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $utils = new Utils();
        $utils->util = $request->util;
        $utils->quantity = $request->quantity;
        $utils->grade = $request->grade;
        $utils->save();
        return response()->json('Utiles Guardados');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Utils  $utils
     * @return \Illuminate\Http\Response
     */
    public function show(Utils $utils)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Utils  $utils
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $utils = Utils::findOrFail($id);
        $utils->util = $request->util;
        $utils->quantity = $request->quantity;
        $utils->grade = $request->grade;
        $utils->update();
        return response()->json('Utiles Actualizados');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Utils  $utils
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $utils = Utils::findOrFail($id);
        $utils->delete();
        return response()->json('Util Eliminado');
    }
}
