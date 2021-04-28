<?php

namespace App\Http\Controllers;

use App\RequestPermissions;
use Illuminate\Http\Request;
use Carbon\Carbon;
use DB;

class RequestPermissionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $getPermissions = DB::table('request_permissions')
                            ->orderByRaw('created_at DESC')
                            ->get();
        return response()->json($getPermissions);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $newPermission = new RequestPermissions();
        $newPermission->cicle = $request->cicle;
        $newPermission->id_cicle = $request->id_cicle;
        $newPermission->id_area = $request->id_area;
        $newPermission->id_classroom = $request->id_classroom;
        $newPermission->course = $request->course;
        $newPermission->responded_at = $request->responded_at;
        $newPermission->save();

        return response()->json('Solicitud de Permiso Creada');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\RequestPermissions  $requestPermissions
     * @return \Illuminate\Http\Response
     */
    public function show(RequestPermissions $requestPermissions)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\RequestPermissions  $requestPermissions
     * @return \Illuminate\Http\Response
     */
    public function edit(RequestPermissions $requestPermissions)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\RequestPermissions  $requestPermissions
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $newPermission = RequestPermissions::findOrFail($id);
        $newPermission->cicle = $request->cicle;
        $newPermission->id_cicle = $request->id_cicle;
        $newPermission->id_area = $request->id_area;
        $newPermission->id_classroom = $request->id_classroom;
        $newPermission->course = $request->course;
        $newPermission->responded_at = $request->responded_at;
        $newPermission->update();
        
        return response()->json('Solicitud de Permiso Actualizada');
    }

    public function updatedResponded_at($id){
        $newPermission = RequestPermissions::where('id','=',$id)->update(['responded_at'=>Carbon::now()]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\RequestPermissions  $requestPermissions
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $newPermission = RequestPermissions::findOrFail($id);
        $newPermission->delete();

        return response()->json('Solicitud de Permiso Eliminada');
    }
}
