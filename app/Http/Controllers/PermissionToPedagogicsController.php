<?php

namespace App\Http\Controllers;

use App\PermissionToPedagogics;
use DB;
use Illuminate\Http\Request;

class PermissionToPedagogicsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pedagogicsPermissions = DB::table('permission_to_pedagogics')
        ->join('users','users.id','=','permission_to_pedagogics.id_student')
        ->join('users as us2','permission_to_pedagogics.parent_id','=','us2.id')
        ->select(
            'permission_to_pedagogics.id as id',
            'permission_to_pedagogics.pedagogical_activity as pedagogical_activity',
            'permission_to_pedagogics.permission as permission',
            'users.name as student_name',
            'users.last_name as student_last_name',
            'us2.name as parent_name',
            'us2.last_name as parent_last_name',
            'us2.phone as parent_phone'
        )->get();
        return response()->json($pedagogicsPermissions);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $pedagogicsPermissions = new PermissionToPedagogics();
        $pedagogicsPermissions->pedagogical_activity = $request->pedagogical_activity;
        $pedagogicsPermissions->pedagogical_id = $request->pedagogical_id;
        $pedagogicsPermissions->id_student = $request->id_student;
        $pedagogicsPermissions->parent_id = $request->parent_id;
        $pedagogicsPermissions->permission = $request->permission;
        $pedagogicsPermissions->save();
        
        return response()->json('Permiso Guardado');
    }


    public function show($id_student){
        $showedagogic = PermissionToPedagogics::where('id_student','=',$id_student)->first();
        return $showedagogic;
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\PermissionToPedagogics  $permissionToPedagogics
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $pedagogicsPermissions = PermissionToPedagogics::findOrFail($id);
        $pedagogicsPermissions->pedagogical_activity = $request->pedagogical_activity;
        $pedagogicsPermissions->pedagogical_id = $request->pedagogical_id;
        $pedagogicsPermissions->id_student = $request->id_student;
        $pedagogicsPermissions->parent_id = $request->parent_id;
        $pedagogicsPermissions->permission = $request->permission;
        $pedagogicsPermissions->update();
        
        return response()->json('Permiso Actualizado');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\PermissionToPedagogics  $permissionToPedagogics
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $pedagogicsPermissions = PermissionToPedagogics::findOrFail($id);
        $pedagogicsPermissions->delete();
        return response()->json('Permiso Eliminado');
    }
}
