<?php

namespace App\Http\Controllers;


use App\User;
use App\Lective;
use App\LectiveAchievement;
use App\LectivePlanification;
use App\LectiveQuarterlyPlan;
use App\LectiveStudent;
use App\LectiveWeeklyPlan;
use App\LectiveIndicator;
use Illuminate\Http\Request;
use Auth;

class LectivesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getLectives()
    {
        $auth = Auth::user();

        $user = User::find($auth->id);
        $lectives = [];
        if ($user->type_user == 1) {//admin

            $lectivePlanifications = LectivePlanification::where('deleted',0)->get();

            foreach ($lectivePlanifications as $key => $planification) {

                $lective=Lective::where('id',$planification->id_lective)->where('deleted',0)->first();

                if(isset($lective))
                {
                    $lectives[$key]=[
                        'id_planification'=>$planification->id,
                        'id_teacher'=>$planification->id_teacher,
                        'lective'=>$lective,
                        'period_consecutive'=>$planification->period_consecutive,
                        'start_date'=>$planification->start_date,
                        'end_date'=>$planification->end_date,
                        'state'=>$planification->state,
                        'id_updated_user'=>$planification->updated_user,
                    ];
                }

            }
        } elseif ($user->type_user == 2) { // teacher
            $lectivePlanifications = LectivePlanification::where('deleted',0)->where('id_teacher',$user->id)->get();

            foreach ($lectivePlanifications as $key => $planification) {

                $lective=Lective::where('id',$planification->id_lective)->where('deleted',0)->first();

                if(isset($lective))
                {
                    array_push($lectives,
                        [
                            'id_planification'=>$planification->id,
                            'id_teacher'=>$planification->id_teacher,
                            'lective'=>$lective,
                            'period_consecutive'=>$planification->period_consecutive,
                            'start_date'=>$planification->start_date,
                            'end_date'=>$planification->end_date,
                            'state'=>$planification->state,
                            'id_updated_user'=>$planification->updated_user
                        ]
                    );
                  
                }

            }
        } elseif ($user->type_user == 3) { // student
            
            $lectives_student=LectiveStudent::where('id_student',$user->id)->where('deleted',0)->get();

            foreach ($lectives_student as $key_i=> $lective_student) 
            {
                $lectivePlanifications = LectivePlanification::where('deleted',0)->where('id',$lective_student->id_lective_planification)->get();

                foreach ($lectivePlanifications as $key_j => $planification) {

             

                    $lective=Lective::where('id',$planification->id_lective)->where('deleted',0)->first();
    
                    if(isset($lective))
                    {
                        $lectives[$key_i+$key_j]=[
                            'id_planification'=>$planification->id,
                            'id_teacher'=>$planification->id_teacher,
                            'lective'=>$lective,
                            'period_consecutive'=>$planification->period_consecutive,
                            'start_date'=>$planification->start_date,
                            'end_date'=>$planification->end_date,
                            'state'=>$planification->state,
                            'id_updated_user'=>$planification->updated_user,
                        ];
                    }
    
                }
            }           
        }
        return response()->json($lectives);
    }

     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getPlanificationDetail(int $id_lective_planification)
    {
        $auth = Auth::user();

        $user = User::find($auth->id);

        $ret_model=[];

        $planification=LectivePlanification::where('deleted',0)->where('id',$id_lective_planification)->first();

        if(!isset($planification))
        {
            return response()->json($ret_model);
        }

        $ret_model['id_planification']=$planification->id;
        $ret_model['period_consecutive']=$planification->period_consecutive;

        $lective=Lective::find($planification->id_lective);

        if(!isset($lective))
        {
            return response()->json($ret_model);
        }

        $ret_model['lective']=[
            'id_lective'=>$lective->id,
            'name'=>$lective->name,
        ];  

        $ret_model['achievements']=LectiveAchievement::where('id_lective_planification',$planification->id)->where('deleted',0)->get();

        $ret_model['quarterlies']=LectiveQuarterlyPlan::where('id_lective_planification',$planification->id)->where('deleted',0)->get();

        $ret_model['weeklies']=LectiveWeeklyPlan::where('id_lective_planification',$planification->id)->where('deleted',0)->get();    

        return response()->json($ret_model);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function savePlanificationDetail(Request $request)
    {
        $data = $request->all();

        $auth = Auth::user();

        $user = User::find($auth->id);       
  
        foreach ($data['achievements'] as  $achievement) {
            if(!empty($achievement['id']))
            {
                $update_id=LectiveAchievement::where('id',$achievement['id'])->update(array('content'=>$achievement['content'],'rate'=>$achievement['rate'],'updated_user'=>$user->id));
            }
            else{
                LectiveAchievement::create([
                    'id_lective_planification'=>$data['id_planification'],
                    'content'=>$achievement['content'],
                    'rate'=>$achievement['rate'],
                    'state'=>1,
                    'deleted'=>0,
                    'updated_user'=>$user->id
                ]);
            }
        }

        foreach ($data['quarterlies'] as  $quarterly) {
            if(!empty($quarterly['id']))
            {
                $update_id=LectiveQuarterlyPlan::where('id',$quarterly['id'])->update(array('order'=>$quarterly['order'],'name'=>$quarterly['name'],'content'=>$quarterly['content'],'updated_user'=>$user->id));
            }
            else{
                LectiveQuarterlyPlan::create([
                    'id_lective_planification'=>$data['id_planification'],
                    'order'=>$quarterly['order'],
                    'name'=>$quarterly['name'],
                    'content'=>$quarterly['content'],
                    'observation'=>$quarterly['observation'],
                    'state'=>1,
                    'deleted'=>0,
                    'updated_user'=>$user->id
                ]);
            }
        }
     
      return response()->json($data);
    }    

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getIndicatorByPlanificationAchievement(int $id_lective_achievement){
        $lectiveIndicators = LectiveIndicator::where('id_lective_achievement', $id_lective_achievement)->where('deleted', 0)->get();
        return $lectiveIndicators;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function saveIndicator(Request $request,int $id_lective_planification){
        $data = $request->all();
        $auth = Auth::user();

        if(isset($data['id_lective_indicator']) && $data['id_lective_indicator']!=0)
        {
            LectiveIndicator::where('id', $data['id_lective_indicator'])->update(array('type_activity'=>$data['type_activity'], 'rate'=>$data['rate'], 'updated_user'=>$auth->id));     
        }
        else{
            LectiveIndicator::create([
                'id_lective_achievement'=>$data['id_lective_achievement'],
                'type_activity'=>$data['type_activity'],
                'rate'=>$data['rate'],
                'state'=>1,
                'deleted'=>0,
                'updated_user'=>$auth->id
            ]);
        }
        return 'Ok';
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateIndicator(Request $request, $id_lective_indicator){
        $data = $request->all();
        Indicator::where('id', $id_lective_indicator)->update(array('type_activity'=>$data['type_activity'], 'rate'=>$data['rate'], 'updated_user'=>$auth->id));     

        return 'ok';
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function removeIndicator(int $id_lective_planification,int $id_lective_indicator){
        $auth = Auth::user();

        LectiveIndicator::where('id', $id_lective_indicator)->update(array('deleted'=>1,'updated_user'=>$auth->id));

        return;
    }
}