<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\CustomerPlan;

class PlansController extends Controller
{
    public function getData(String $plan_type){
        $plan=CustomerPlan::where('name', $plan_type)
                            ->where('state', 1)
                            ->first();

        return response()->json($plan);
    }
}
