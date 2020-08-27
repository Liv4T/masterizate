<?php

namespace App\Http\Controllers;


use App\User;
use App\Lective;
use App\LectiveAchievement;
use App\LectiveClass;
use App\LectiveClassContent;
use App\LectivePlanification;
use App\LectiveQuarterlyPlan;
use App\LectiveStudent;
use App\LectiveWeeklyPlan;
use App\ClassroomStudent;
use App\Classroom;
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
    public function getIndicatorByPlanificationAchievement(int $id_lective_planification,int $id_lective_achievement){
        $lectiveIndicators = LectiveIndicator::where('id_lective_achievement', $id_lective_achievement)->where('deleted', 0)->get();
        return response()->json($lectiveIndicators);
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

        if(isset($data['id_indicator']) && $data['id_indicator']!=0)
        {
            LectiveIndicator::where('id', $data['id_indicator'])->update(array('type_activity'=>$data['type_activity'], 'rate'=>$data['rate'], 'updated_user'=>$auth->id));     
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

     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function saveWeeklyPlanification(Request $request)
    {
        $data = $request->all();

        $auth = Auth::user();

        $user = User::find($auth->id);
       
  
        foreach ($data['weeklies'] as  $weekly_plan) {
            if(!empty($weekly_plan['id']))
            {
                $update_id=LectiveWeeklyPlan::where('id',$weekly_plan['id'])->update(array('name'=>$weekly_plan['name'],'content'=>$weekly_plan['content'],'order'=>$weekly_plan['order'],'updated_user'=>$user->id));
            }
            else{
                LectiveWeeklyPlan::create([
                    'id_lective_planification'=>$data['id_planification'],
                    'content'=>$weekly_plan['content'],
                    'name'=>$weekly_plan['name'],
                    'order'=>$weekly_plan['order'],
                    'observation'=>$weekly_plan['observation'],
                    'state'=>1,
                    'deleted'=>0,
                    'updated_user'=>$user->id
                ]);
            }
        }

     
      return response()->json($data);
    }



    
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getWeeklyPlanificationDetail(int $id_lective_planification,int $id_weekly_plan)
    {
        $auth = Auth::user();

        $user = User::find($auth->id);

        $ret_model=[];

        $courses=LectiveClass::where('deleted',0)->where('id_lective_weekly_plan',$id_weekly_plan)->get();



        foreach ($courses as $key_course => $course) {
            

            $course_content_data=LectiveClassContent::where('deleted',0)->where('id_lective_class',$course->id)->get();

                $course_content=[];

                foreach ($course_content_data as $key_course_content => $course_content_item) {
                    array_push($course_content,[
                        'id_content'=>$course_content_item->id,
                        'content_type'=>$course_content_item->content_type,
                        'content'=>$course_content_item->content,
                        'description'=>$course_content_item->description,
                        'student_visited_date'=>$course_content_item->student_visited_date,
                        'state'=>$course_content_item->state
                    ]);
                }


                array_push($ret_model,[
                    'id_class'=>$course->id,
                    'name'=>$course->name,
                    'description'=>$course->description,
                    'hourly_intensity'=>$course->hourly_intensity,
                    'state'=>$course->state,
                    'content'=>$course_content
                ]);
        }




        return response()->json($ret_model);

    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function saveWeeklyPlanificationDetail(Request $request,int $id_lective_planification,int $id_weekly_plan)
    {
        $auth = Auth::user();

        $data = $request->all();

        $user = User::find($auth->id);


        foreach ($data as $key => $item) {

            
            if(isset($item['id_class']) && $item['id_class']!=0 )
            {
                LectiveClass::where('id',$item['id_class'])->update(array('name'=>$item['name'],'description'=>$item['description'],'hourly_intensity'=>$item['hourly_intensity'],'updated_user'=> $user->id));
                $id_class=$item['id_class'];


                if(isset($id_class)) // es una actualizacion
                {
                    foreach ($item['content'] as $key_d => $item_detail) {
                        if(isset($item_detail['id_content'])&& $item_detail['id_content']!=0)
                        {
                            LectiveClassContent::where('id',$item_detail['id_content'])->update(array('content'=>$item_detail['content'],'description'=>$item_detail['description'],'updated_user'=> $user->id));
                        }
                        else if(isset($item_detail['id_content']) && $item_detail['id_content']==0)
                        {
                            LectiveClassContent::create([
                                'id_lective_class'=>$id_class,
                                'content_type'=>$item_detail['content_type'],
                                'content'=>$item_detail['content'],
                                'description'=>$item_detail['description'],
                                'state'=>1,
                                'deleted'=>0,
                                'updated_user'=>$user->id
                            ]);
                        }
                    }
                }

            }
            else if(isset($item['id_class']) && $item['id_class']==0) // es una creacion
            {
                $class=LectiveClass::create([
                    'id_lective_weekly_plan'=>$id_weekly_plan,
                    'name'=>$item['name'],
                    'description'=>$item['description'],
                    'hourly_intensity'=>$item['hourly_intensity'],
                    'state'=>1,
                    'deleted'=>0,
                    'updated_user'=>$user->id
                ]);

                $id_class=$class->id;


                if(isset($id_class))
                {
                    foreach ($item['content'] as $key_d => $item_detail) {
                        LectiveClassContent::create([
                                'id_lective_class'=>$id_class,
                                'content_type'=>$item_detail['content_type'],
                                'content'=>$item_detail['content'],
                                'description'=>$item_detail['description'],
                                'state'=>1,
                                'deleted'=>0,
                                'updated_user'=>$user->id
                            ]);
                    }
                }
            }

            


        }

        return;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getPlanificationStudents(int $id_lective_planification)
    {

        $auth = Auth::user();

        $user = User::find($auth->id);
        $students = [];

        $lective_students= LectiveStudent::where('id_lective_planification',$id_lective_planification)->where('deleted',0)->where('state',1)->get();
      
        foreach ($lective_students as $key_i => $lective_student) {
            $user=User::find($lective_student->id_student);

            $user_grade=ClassroomStudent::where('id_user',$lective_student->id_student)->first();
            if(isset($user_grade)){$classroom=Classroom::find( $user_grade->id_classroom);}else{$classroom=null;}
      

            

            array_push($students,[
                'id_user'=>$lective_student->id_student,
                'identification'=>$user->id_number,
                'name'=>$user->name,
                'last_name'=>$user->last_name,
                'picture'=>$user->picture,
                'grade'=>$classroom!=null?$classroom->name:''
            ]);

        }

        return response()->json($students);
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function findStudents(String $content)
    {

        $auth = Auth::user();

        $user_identification_finded = User::where('type_user',3)->Where('id_number',$content)->take(3)->get();
        $user_lastname_finded = User::where('type_user',3)->Where('last_name','like',$content.'%')->take(3)->get();
        $user_name_finded = User::where('type_user',3)->Where('name','like',$content.'%')->take(3)->get();

        $students = [];


        foreach ($user_identification_finded as $key_i => $user) {
           

            array_push($students,[
                'id_user'=>$user->id,
                'identification'=>$user->id_number,
                'name'=>$user->name,
                'last_name'=>$user->last_name,
                'selected'=>0
            ]);

        }


        foreach ($user_lastname_finded as $key_i => $user) {
           

            array_push($students,[
                'id_user'=>$user->id,
                'identification'=>$user->id_number,
                'name'=>$user->name,
                'last_name'=>$user->last_name,
                'selected'=>0
            ]);

        }


        
        foreach ($user_name_finded as $key_i => $user) {
           

            array_push($students,[
                'id_user'=>$user->id,
                'identification'=>$user->id_number,
                'name'=>$user->name,
                'last_name'=>$user->last_name,
                'selected'=>0
            ]);

        }

        return response()->json($students);
    }



      /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function addStudents(Request $request,int $id_lective_planification)
    {

        $auth = Auth::user();

        $data = $request->all();


        $user = User::find($auth->id);

        foreach ($data as $key_i => $student) {
            $student_exist=LectiveStudent::where('id_lective_planification',$id_lective_planification)->where('deleted',0)->where('id_student',$student['id_user'])->get();

            if(count( $student_exist)==0)
            {
                LectiveStudent::create([
                    'id_lective_planification'=>$id_lective_planification,
                    'id_student'=>$student['id_user'],
                    'state'=>1,
                    'deleted'=>0,
                    'updated_user'=>$user->id
                ]);
            }
        }

        return;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function removeStudent(int $id_lective_planification, int $id_student)
    {

        $auth = Auth::user();

        LectiveStudent::where('id_lective_planification',$id_lective_planification)->where('deleted',0)->where('id_student',$id_student)->update(array('deleted'=>1,'updated_user'=>$auth->id));

        return;
    }

}
