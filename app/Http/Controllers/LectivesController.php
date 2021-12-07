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
use App\LectiveActivities;
use App\LectiveActivityCompleteSentence;
use App\LectiveActivityCrossword;
use App\LectiveActivityRelationship;
use App\LectiveClassContentInteraction;
use App\LectiveActivityQuestionInteraction;
use App\LectiveActivityCompleteSentenceInteraction;
use App\LectiveActivityRelationshipInteraction;
use App\LectiveActivityCrosswordInteraction;
use App\LectiveActivityInteraction;
use App\ClassroomStudent;
use App\Classroom;
use App\LectiveActivity;
use App\LectiveActivityQuestion;
use App\LectiveActivityQuestionAnswer;
use App\LectiveIndicator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
        $lectives = [];
        $auth = Auth::user();

        if(!isset($auth)) return response()->json($lectives);

        $user = User::find($auth->id);

        if ($user->isAdmin()) {//admin

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
        } elseif ($user->isTutor()||$user->isTeacher()) { // teacher
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
        } elseif ($user->isStudent()) { // student

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

        $user_identification_finded = User::where('type_user',3)->Where('id_number',$content)->get();
        $user_lastname_finded = User::where('type_user',3)->Where('last_name','like',$content.'%')->get();
        $user_name_finded = User::where('type_user',3)->Where('name','like',$content.'%')->get();

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



     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getCourse(int $id_lective_planification,int $id_weekly_plan,int $id_class)
    {
        $lective_course=LectiveClass::where('id',$id_class)->where('deleted',0)->where('state',1)->first();
        return response()->json($lective_course);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getActivities(int $id_lective_planification,int $id_weekly_plan,int $id_class)
    {
        $lective_activities=LectiveActivity::where('id_lective_class',$id_class)->where('deleted',0)->get();
        return response()->json($lective_activities);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function saveActivity(Request $request,int $id_lective_planification,int $id_weekly_plan,int $id_class){
        $data = $request->all();
        $auth = Auth::user();





            if(isset($data['id_activity']) && $data['id_activity']!=0)
            {
                 LectiveActivity::where('id',$data['id_activity'])->update(array(
                     'activity_type'=>$data['activity_type'],
                     'name'=>$data['name'],
                     'description'=>$data['description'],
                     'delivery_date'=>$data['delivery_date'],
                     'feedback_date'=>$data['feedback_date']
                 ));



                if($data['activity_type']=='ENCUESTA_UNICA_RTA')
                {
                    LectiveActivityQuestion::where('id_lective_activity',$data['id_activity'])->update(array('deleted'=>1));

                    foreach ($data['module']['questions'] as $key_q => $question) {
                        if(isset($question['id']))
                        {
                            LectiveActivityQuestion::where('id',$question['id'])->update(array(
                                'deleted'=>0,
                                'updated_user'=>$auth->id,
                                'question'=>$question['content'],
                                'type_question'=>$data['type_question'],
                                'content'=>json_encode($question)
                            ));
                        }
                        else
                        {
                            $lective_activity_answer= LectiveActivityQuestion::create([
                                'id_lective_activity'=>$data['id_activity'],
                                'question'=>$question['content'],
                                'type_question'=>$data['type_question'],
                                'content'=>json_encode($question),
                                'state'=>1,
                                'deleted'=>0,
                                'updated_user'=>$auth->id
                            ]);
                        }
                    }
                }

            }
            else{

                //crear actividad
                $lective_activity=LectiveActivity::create([
                    'id_lective_class'=>$id_class,
                    'id_lective_indicator'=>$data['indicator']['id'],
                    'activity_type'=>$data['activity_type'],
                    'name'=>$data['name'],
                    'description'=>$data['description'],
                    'delivery_date'=>$data['delivery_date'],
                    'feedback_date'=>$data['feedback_date'],
                    'state'=>1,
                    'deleted'=>0,
                    'updated_user'=>$auth->id
                ]);

                if($data['activity_type']=='ENCUESTA_UNICA_RTA')
                {

                    foreach ($data['module']['questions'] as $key_q => $question) {
                       $lective_activity_answer= LectiveActivityQuestion::create([
                            'id_lective_activity'=>$lective_activity->id,
                            'question'=>$question['content'],
                            'type_question'=>$question['type_question'],
                            'content'=>json_encode($question),
                            'state'=>1,
                            'deleted'=>0,
                            'updated_user'=>$auth->id
                        ]);
                    }


                }


            }



        return 'Ok';
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getActivitiesByPlan(int $id_lective_planification)
    {
        $auth = Auth::user();
        $activities=[];
        $weekly_plans=LectiveWeeklyPlan::where('id_lective_planification',$id_lective_planification)->where('deleted',0)->where('state',1)->get();
            foreach ($weekly_plans as $key_i => $weekly_plan) {
                $courses=LectiveClass::where('id_lective_weekly_plan',$weekly_plan->id)->where('deleted',0)->where('state',1)->get();
                    foreach ( $courses as $key_j => $course) {
                        $activity=LectiveActivity::where('id_lective_class',$course->id)->where('deleted',0)->where('state',1)->first();

                        if(isset($activity))
                        {
                            $indicator=LectiveIndicator::find($activity->id_lective_indicator);

                            $achievement=LectiveAchievement::find($indicator->id_lective_achievement);

                            $module=[];
                            if($activity->activity_type=='ENCUESTA_UNICA_RTA')
                            {
                                $questions=LectiveActivityQuestion::where('id_lective_activity',$activity->id)->where('deleted',0)->get();

                                foreach ($questions as $key_q => $question) {
                                    array_push($module,[
                                        'id_question'=> $question->id,
                                        'question'=> $question->question,
                                        'type_question'=> $question->type_question,
                                        'content'=> json_decode($question->content),
                                        'response'=>LectiveActivityQuestionAnswer::where('id_lective_activity_question',$question->id)->where('deleted',0)->where('id_student',$auth->id)->first()
                                    ]);
                                }

                            }

                            array_push($activities,[
                                'id_activity'=>$activity->id,
                                'name'=>$activity->name,
                                'description'=>$activity->description,
                                'delivery_date'=>date_format(date_create($activity->delivery_date),'Y-m-d'),
                                'feedback_date'=>date_format(date_create($activity->feedback_date),'Y-m-d'),
                                'activity_type'=>$activity->activity_type,
                                'state'=>$activity->state,
                                'course'=>$course,
                                'weekly_plan'=>$weekly_plan,
                                'indicator'=>$indicator,
                                'achievement'=> $achievement,
                                'module'=>$module
                            ]);
                        }



                }
            }

        return response()->json($activities);
    }

    public function showDataClass(Request $request, String $id)
    {
        $clase = LectiveClass::where('id_lective_weekly_plan', $id)->get();
        $week = LectiveWeeklyPlan::find($id);
        $user = Auth::user();
        $achievements = [];
        $area = [];
        if ($user->isStudent()) {
            $Courses = LectivePlanification::where('deleted',0)->where('id',$week->id_lective_planification)->first();
        } elseif ($user->isTeacher()||$user->isTutor()) {
            $Courses = LectivePlanification::where('deleted',0)->where('id_teacher',$user->id)->where('id',$week->id_lective_planification)->first();
        }
        if (isset($Courses)) {
            $achievements = LectiveAchievement::where('id_lective_planification', $Courses->id)->get();
        }

        if(isset($week))
        {
            $area=Lective::find($Courses->id_lective);
        }

        $data = [
            'clase' => $clase,
            'achievements' => $achievements,
            'area'=>$area,
            'user_type'=>$user->type_user,
        ];
        return $data;
    }

    public function getWeeks(String $id_lective_planification)
    {

        $data = [];
        $Weeks = LectiveWeeklyPlan::where('id_lective_planification', $id_lective_planification)
                                    ->where('state', 1)
                                    ->where('deleted', 0)
                                    ->get();

        foreach ($Weeks as $key => $week) {
            $data[$key] = [
                'id'   => $week->id,
                'id_lective_planification' => $week->id_lective_planification,
                'name' => $week->name,
                'content' => $week->observation,
                'observation' =>  $week->observation,
            ];
        }
        return response()->json($data);
    }

    public function getLectiveWeeklyName(String $id_weekly)
    {
        $weekly_name = '';
        $weekly = LectiveWeeklyPlan::find($id_weekly);
        $weekly_name = $weekly->name;

        return response()->json($weekly_name);
    }

    public function saveClass(Request $request,int $id_module)
    {
        $auth = Auth::user();

        $this->validate($request, [
            'name' => 'required',
            'description' => 'required'
        ]);

        $data = $request->all();
        //return $data;
        $id_course=0;
        if(isset($data['id_lective_class']))
        {
            LectiveClass::where('id',$data['id_lective_class'])->update(
                array(
                    'name'=>$data['name'],
                    'description'=>$data['description'],
                    'objetivesClass'=>$data['objetivesClass'],
                    'work' => $data['work'],
                    'transversals' => $data['transversals'],
                    'hourly_intensity'=>isset($data['hourly_intensity']) ? $data['hourly_intensity'] : 0,
                    'activity_quantity'=>count($data['activities']),
                    'content_quantity'=>count($data['content']),
                    'activityForPIARStudents' => $data['activityForPIARStudents'],
                    'activityForSelectStudents' => $data['activityForSelectStudents'],
                    'activityForAllStudents' => $data['activityForAllStudents'],
                    'selectedStudents' => $data['selectedStudents'],
                    'url_class' => $data['url_class'],
                    'date_init_class' => $data['date_init_class'],
                ));
                $id_course=$data['id_lective_class'];
        }
        else{

            $course=LectiveClass::create([
                'name'=>$data['name'],
                'description'=>$data['description'],
                'hourly_intensity'=>isset($data['hourly_intensity']) ? $data['hourly_intensity'] : 0,
                'id_lective_weekly_plan'=>$id_module,
                'objetivesClass'=>$data['objetivesClass'],
                'work' => $data['work'],
                'transversals' => $data['transversals'],
                'activity_quantity'=>count($data['activities']),
                'content_quantity'=>count($data['content']),
                'activityForPIARStudents' => $data['activityForPIARStudents'],
                'activityForSelectStudents' => $data['activityForSelectStudents'],
                'activityForAllStudents' => $data['activityForAllStudents'],
                'selectedStudents' => $data['selectedStudents'],
                'url_class' => $data['url_class'],
                'date_init_class' => $data['date_init_class'],
                'state'=>1,
                'updated_user'=>$auth->id,
                'deleted'=>0
            ]);
            $id_course=$course->id;
        }

        if($id_course==0) return;

        //update class content
        LectiveClassContent::where('id_lective_class',$id_course)->update(array('deleted'=>1));
        $order_id=0;
        if(count($data['content'])>0)
        {
            foreach($data['content'] as $i_resource => $resource) {

                if($resource['content_type']=='YOUTUBE')
                {
                    $order_id=1;
                }
                else if($resource['content_type']=='VIDEO')
                {
                    $order_id=1;
                }
                else if($resource['content_type']=='LINK')
                {
                    $order_id=2;
                }
                else if($resource['content_type']=='DOCUMENT')
                {
                    $order_id=3;
                }
                else
                    $order_id=4;

                if(isset($resource['id']))
                {
                    LectiveClassContent::where('id',$resource['id'])->update(array('order'=>$order_id,'deleted'=>0,'state'=>1,'content'=>$resource['content'],'description'=>$resource['description'],'is_required'=>$resource['is_required'],'updated_user'=>$auth->id));
                }
                else
                {

                    LectiveClassContent::create([
                        'id_lective_class'=>$id_course,
                        'order'=>$order_id,
                        'content_type'=>$resource['content_type'],
                        'description'=>$resource['description'],
                        'content'=>$resource['content'],
                        'is_required'=>isset($resource['is_required'])?$resource['is_required']:0,
                        'state'=>1,
                        'deleted'=>0,
                        'updated_user'=>$auth->id
                    ]);
                }
            }//foreach class_content
        }

        //update activities
        $activities= LectiveActivities::where('id_lective_class',$id_course)->where('deleted',0)->get();

        foreach($activities as $activity)
        {
            LectiveActivityQuestion::where('id_lective_activity',$activity->id)->update(array('deleted'=>1));
            LectiveActivityCompleteSentence::where('id_lective_activity',$activity->id)->update(array('deleted'=>1));
            LectiveActivityCrossword::where('id_lective_activity',$activity->id)->update(array('deleted'=>1));
            LectiveActivityRelationship::where('id_lective_activity',$activity->id)->update(array('deleted'=>1));
        }

        LectiveActivities::where('id_lective_class',$id_course)->update(array('deleted'=>1));
        if(count($data['activities'])>0)
        {
            //return $data['activities'];
            foreach($data['activities'] as $i_activity => $activity) {

                /* $ids=explode("/",$activity['quarterly_plan']);
                $id_quarterly_plan=$ids[0];
                $id_achievement=$ids[1]; */
                $id_activity=0;
                if(isset($activity['id']))
                {
                    $id_activity=$activity['id'];
                    LectiveActivities::where('id',$activity['id'])->update(array('deleted'=>0,'state'=>1,'name'=>$activity['name'],'description'=>$activity['description'],'activity_type'=>$activity['activity_type'],'is_required'=>1,'updated_user'=>$auth->id,'delivery_max_date'=>$activity['delivery_max_date'],'feedback_date'=>$activity['feedback_date']));
                }
                else
                {
                    $activity_new=LectiveActivities::create([
                        'id_lective_class'=>$id_course,
                        'id_lective_achievement'=>$activity['id_lective_achievement'],
                        /* 'id_lective_quarterly_plan'=>$activity['id_quarterly_plan'], */
                        /* 'id_lective_indicator'=>$activity['activitys'], */
                        'activity_type'=>$activity['activity_type'],
                        'name'=>$activity['name'],
                        'description'=>$activity['description'],
                        'is_required'=>1,
                        'state'=>1,
                        'deleted'=>0,
                        'updated_user'=>$auth->id,
                        'delivery_max_date'=>$activity['delivery_max_date'],
                        'feedback_date'=>$activity['feedback_date']
                    ]);
                    $id_activity=$activity_new->id;
                }


                if($id_activity!=0 && $activity['activity_type']=='CUESTIONARIO')
                {
                    //update activity_questions
                    LectiveActivityQuestion::where('id_lective_activity',$id_activity)->update(array('deleted'=>1));
                    foreach($activity['module']['questions'] as $i_question => $question) {
                        $id_question=0;
                        if(isset($question['id']))
                        {
                            $id_question=$question['id'];
                            LectiveActivityQuestion::where('id',$question['id'])->update(array('deleted'=>0,'state'=>1,'question'=>$question['question'],'type_question'=>$question['type_question'],'content'=>(isset($question['options'])?json_encode($question['options']):'[]'),'correct_answer'=>(isset($question['valid_answer_index'])?$question['valid_answer_index']:0),'justify'=>$question['justify'],'updated_user'=>$auth->id));
                        }
                        else{
                            $question_new=LectiveActivityQuestion::create([
                                'id_lective_activity'=>$id_activity,
                                'question'=>$question['question'],
                                'type_question'=>$question['type_question'],
                                'content'=>isset($question['options'])?json_encode($question['options']):'[]',
                                'correct_answer'=>isset($question['valid_answer_index'])?$question['valid_answer_index']:0,
                                'justify'=>$question['justify'],
                                'state'=>1,
                                'deleted'=>0,
                                'updated_user'=>$auth->id
                            ]);
                            $id_question=$question_new->id;
                        }
                    }
                }

                if($id_activity!=0 && $activity['activity_type']=='COMPLETAR_ORACION')
                {
                    //inactive exists
                    LectiveActivityCompleteSentence::where('id_lective_activity',$id_activity)->update(array('deleted'=>1));
                    foreach($activity['module']['sentences'] as $i_modelo => $modelo) {
                        $id_modelo=0;
                        if(isset($modelo['id']))
                        {
                            $id_modelo=$modelo['id'];
                            LectiveActivityCompleteSentence::where('id',$modelo['id'])->update(array('deleted'=>0,'state'=>1,'content'=>json_encode($modelo),'updated_user'=>$auth->id));
                        }
                        else{
                            $modelo_new=LectiveActivityCompleteSentence::create([
                                'id_lective_activity'=>$id_activity,
                                'content'=>json_encode($modelo),
                                'state'=>1,
                                'deleted'=>0,
                                'updated_user'=>$auth->id
                            ]);
                            $id_modelo=$modelo_new->id;
                        }
                    }
                }

                if($id_activity!=0 && $activity['activity_type']=='CRUCIGRAMA')
                {
                    //inactive exists
                    LectiveActivityCrossword::where('id_lective_activity',$id_activity)->update(array('deleted'=>1));
                    $id_modelo=0;
                    $modelo=$activity['module'];
                    if(isset($modelo['id']))
                    {
                        $id_modelo=$modelo['id'];
                        LectiveActivityCrossword::where('id',$modelo['id'])->update(array('deleted'=>0,'state'=>1,'content'=>json_encode($modelo),'updated_user'=>$auth->id));
                    }
                    else{
                        $modelo_new=LectiveActivityCrossword::create([
                            'id_lective_activity'=>$id_activity,
                            'content'=>json_encode($modelo),
                            'state'=>1,
                            'deleted'=>0,
                            'updated_user'=>$auth->id
                        ]);
                        $id_modelo=$modelo_new->id;
                    }
                }

                if($id_activity!=0 && $activity['activity_type']=='RELACION')
                {
                    //inactive exists
                    LectiveActivityRelationship::where('id_lective_activity',$id_activity)->update(array('deleted'=>1));

                    $id_modelo=0;
                    $modelo=$activity['module'];
                    if(isset($modelo['id']))
                    {
                        $id_modelo=$modelo['id'];
                        LectiveActivityRelationship::where('id',$modelo['id'])->update(array('deleted'=>0,'state'=>1,'content'=>json_encode($modelo),'updated_user'=>$auth->id));
                    }
                    else{
                        $modelo_new=LectiveActivityRelationship::create([
                            'id_lective_activity'=>$id_activity,
                            'content'=>json_encode($modelo),
                            'state'=>1,
                            'deleted'=>0,
                            'updated_user'=>$auth->id
                        ]);
                        $id_modelo=$modelo_new->id;
                    }
                }
            }//foreach activities
        }

        return;
    }

    public function getDataClass(int $id_module,int $id_course)
    {
        $auth = Auth::user();
        $user = User::find($auth->id);

        $course=LectiveClass::where('id',$id_course)->first();
        // return ;
        $car_class = 0;
        // Saber el id de la siguiente clase
        $classes = LectiveClass::where('id_lective_weekly_plan', $course->id_weekly_plan)->get();
        foreach($classes as $index_class => $clas){
            if($clas->id == $id_course){
                $car_class = $index_class;
                break;
            }
        }
        $car_class = $car_class +1;
        $next_class = isset($classes[$car_class]) ? $classes[$car_class]->id:false;

        $class_resources=[];

        $content=LectiveClassContent::where('id_lective_class', $course->id)->where('deleted',0)->orderBy('order', 'ASC')->orderBy('id', 'ASC')->get();

        $class_content_required_quantity=0;
        foreach($content as $i_content => $resource) {

            $class_content_interaction=null;
            if($user->type_user==3)//student
            {
                $class_content_interaction= LectiveClassContentInteraction::where('id_lective_class_content',$resource->id)->where('deleted',0)->where('id_student',$user->id)->first();
            }

            array_push( $class_resources,[
                'id'=>$resource->id,
                'id_lective_class'=>$resource->id_class,
                'order'=>$resource->order,
                'content_type'=>$resource->content_type,
                'description'=>$resource->description,
                'content'=>$resource->content,
                'observation'=>$resource->observation,
                'is_required'=>$resource->is_required,
                'interaction'=> $class_content_interaction

            ]);

            if($resource->is_required)
                $class_content_required_quantity++;
        }

        //get progress
        $class_interaction=null;
        $progress=0;
        if($user->type_user==3)//student
        {   //revisar este metodo en la db
            $progress=DB::select('call obtener_progreso_clase(?,?)',[$course->id, $user->id])[0]->porcentaje;
        }

        $ret=[
            'state'=>$course->state,
            'id_lective_class'=>$course->id,
            'name'=>$course->name,
            'description'=>$course->description,
            'id_lective_weekly_plan'=>$course->id_weekly_plan,
            'hourly_intensity'=>$course->hourly_intensity,
            'content'=>$class_resources,
            'activities'=>[],
            'activity_quantity'=>$course->activity_quantity,
            'work' => $course->work,
            'transversals' => $course->transversals,
            'objetivesClass' => $course->objetivesClass,
            'content_quantity'=>$course->content_quantity,
            'class_interaction'=>$class_interaction,
            'progress'=> $progress,
            'next_class'=>$next_class,
            'activityForPIARStudents' => $course->activityForPIARStudents == 0 ? false : true,
            'activityForSelectStudents' => $course->activityForSelectStudents == 0 ? false : true,
            'activityForAllStudents' => $course->activityForAllStudents == 0 ? false : true,
            'selectedStudents' => $course->selectedStudents,
            'url_class' => $course->url_class,
            'date_init_class' => $course->date_init_class,
        ];

        $activities=LectiveActivities::where('id_lective_class', $course->id)->where('deleted',0)->get();

        foreach($activities as $i_activity => $activity) {

            $module=[];

            if($activity->activity_type=='CUESTIONARIO')
            {
                $module=[
                    'questions'=>[]
                ];

                $activity_questions=LectiveActivityQuestion::where('id_lective_activity',$activity->id)->where('deleted',0)->get();

                foreach($activity_questions as $i_question => $question) {
                    $student_response=[];
                    $response='';
                    if($user->type_user==3)//student
                    {
                        $student_response=LectiveActivityQuestionInteraction::where('id_lective_activity_question',$question->id)->where('id_student',$user->id)->where('deleted',0)->first();

                        if(!isset($student_response))
                        {
                            $student_response=['response'=>-1];
                        }
                        else{
                            $response=$student_response->response;
                        }
                    }

                    array_push($module['questions'],[
                        'id'=>$question->id,
                        'question'=>$question->question,
                        'type_question'=>$question->type_question,
                        'options'=>json_decode($question->content),
                        'valid_answer_index'=>json_decode($question->correct_answer),
                        'justify'=>$question->justify,
                        'state'=>$question->state,
                        'student_response'=>$student_response,
                        'response'=>$response
                    ]);
                }
            }

            if($activity->activity_type=='COMPLETAR_ORACION')
            {
                $module=[
                    'sentences'=>[]
                ];

                $activity_sentences=LectiveActivityCompleteSentence::where('id_lective_activity',$activity->id)->where('deleted',0)->get();

                foreach($activity_sentences as $sentence) {
                    $student_response=[];
                    if($user->type_user==3)//student
                    {
                        $model_student_response=LectiveActivityCompleteSentenceInteraction::where('id_lective_activity_complete_sentence',$sentence->id)->where('id_student',$user->id)->where('deleted',0)->first();

                        if(!isset($model_student_response))
                        {
                            $student_response=[];
                        }
                        else{
                            $student_response=json_decode($model_student_response->response);
                        }
                    }

                    $sentence_content=json_decode($sentence->content,true);

                    $sentence_content['id']=$sentence->id;
                    $sentence_content['state']=$sentence->state;
                    $sentence_content['student_response']=$student_response;

                    array_push($module['sentences'],$sentence_content);
                }
            }

            if($activity->activity_type=='RELACION')
            {
                $module=[];

                $activity_relationship=LectiveActivityRelationship::where('id_lective_activity',$activity->id)->where('deleted',0)->first();

                if(isset($activity_relationship))
                {
                    $student_response=null;
                    if($user->type_user==3)//student
                    {
                        $student_response=LectiveActivityRelationshipInteraction::where('id_lective_activity_relationship',$activity_relationship->id)->where('id_student',$user->id)->where('deleted',0)->first();

                        if(!isset($student_response))
                        {
                            $student_response=null;
                        }
                    }
                    $module=json_decode($activity_relationship->content,true);
                    $module['id']=$activity_relationship->id;
                    $module['state']=$activity_relationship->state;
                    if(isset($student_response))
                    {
                        $module['student_response']=json_decode($student_response->response);
                    }
                }
            }

            if($activity->activity_type=='CRUCIGRAMA')
            {

                $module=[];
                $activity_crossword=LectiveActivityCrossword::where('id_lective_activity',$activity->id)->where('deleted',0)->first();
                if(isset($activity_crossword))
                {
                    $student_response=null;
                    if($user->type_user==3)//student
                    {
                        $student_response=LectiveActivityCrosswordInteraction::where('id_lective_activity_crossword',$activity_crossword->id)->where('id_student',$user->id)->where('deleted',0)->first();

                        if(!isset($student_response))
                        {
                            $student_response=null;
                        }
                    }
                    $module=json_decode($activity_crossword->content,true);
                    $module['id']=$activity_crossword->id;
                    $module['state']=$activity_crossword->state;

                    if(isset($student_response))
                    {
                        $module['words']=json_decode($student_response->response);
                    }
                }
            }

            if($user->type_user==3)//student
            {
                $interaction=LectiveActivityInteraction::where('id_lective_activity',$activity->id)->where('id_student',$user->id)->where('deleted',0)->first();
            }

            if(!isset($interaction))
            {
                $interaction=['state'=>1,'score'=>0];
            }
            array_push($ret['activities'],[
                'id'=>$activity->id,
                'id_lective_achievement'=>$activity->id_achievement,
                'activitys'=>$activity->id_indicator,
                'quarterly_plan'=>$activity->id_quarterly_plan,
                'activity_type'=>$activity->activity_type,
                'name'=>$activity->name,
                'description'=>$activity->description,
                'delivery_max_date'=>$activity->delivery_max_date,
                'feedback_date'=>$activity->feedback_date,
                'rules'=>json_decode($activity->rules),
                'is_required'=>$activity->is_required,
                'state'=>$activity->state,
                'updated_user'=>$activity->updated_user,
                'module'=>$module,
                'interaction'=> $interaction
            ]);
        }
        return response()->json($ret);
    }

}
