<?php

namespace App\Http\Controllers;

use App\EnableTour;
use Auth;
use Illuminate\Http\Request;

class EnableTourController extends Controller
{
    public function enableTour(String $condition){
        $user = Auth::user();
        $query = EnableTour::where('id_user',$user->id)->where($condition, 0)->first();

        if(isset($query)){
            return 1;
        }else{
            return 0;
        }
    }
    public function disableTour(String $condition){
        $user = Auth::user();
        EnableTour::where('id_user',$user->id)->first()->update([$condition => 1]);

        return response()->json('Actualizado');
    }
}
