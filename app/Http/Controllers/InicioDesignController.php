<?php

namespace App\Http\Controllers;

use App\InicioDesign;
use Auth;
use Illuminate\Http\Request;

class InicioDesignController extends Controller
{
    public function saveDesign(Request $request){
        $user = Auth::user();

        $design = InicioDesign::create([
            'id_tutor' => $user->id,
            'color' => $request->color,
            'banner' => $request->banner,
            'logo' => $request->logo,
        ]);

        return response(200,'Guardado');
    }
    public function updateDesign(Request $request){
        $design = InicioDesign::where('id',$request->id)->update([
            'color' => $request->color,
            'banner' => $request->banner,
            'logo' => $request->logo,
        ]);

        return response(200,'Actualizado');
    }
}
