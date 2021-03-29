<?php

namespace App\Http\Controllers;

use App\ConfigurationParameter;
use Illuminate\Http\Request;

class ConfigurationController extends Controller
{
    public function getPropertyByCode(string $code)
    {
        $property=ConfigurationParameter::where('code',$code)->first();

        if(!isset($property)) return response()->json([]);

        return response()->json($property);

    }
    public function setProperty(Request $request,string $code)
    {
        $data=$request->all();

        ConfigurationParameter::where('code',$code)->update([
            'content'=>$data['value']
        ]);
        return response()->json([]);

    }
}
