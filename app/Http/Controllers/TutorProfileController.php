<?php

namespace App\Http\Controllers;

use App\TutorProfile;
use App\User;
use Hash;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Throwable;

class TutorProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('tutorRegister');
    }

    public function getTutorProfile(){
        $user_id = Auth::user()->id;
        $tutor =  TutorProfile::where('user_id','=', $user_id)->get();
        return response()->json($tutor);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        try{
            DB::beginTransaction();
            
            //$tutorProfile = new TutorProfile();
            //$user = new User();
            $user = User::create([
                'name' => $request->name,
                'last_name' => $request->last_name,
                'user_name' => $request->user_name,
                'password' => isset( $request->password) ? Hash::make( $request->password) : Hash::make( $request->password),
                'email' => $request->email,
                'type_user' => 7,
                'address' => $request->address,
                'picture' => $request->picture,
                'phone' => $request->phone,
                'id_number' => $request->id_number,
            ]);

            $tutorProfile = TutorProfile::create([

                'name' => $request->name,
                'last_name' => $request->last_name,            
                'id_number' => $request->id_number,
                'country' => $request->country,
                'city' => $request->city,
                'address' => $request->address,
                'phone' => $request->phone,
                'picture' => $request->picture,
                'description' => $request->description,
                
                'twitter_profile' => $request->twitter_profile,
                'facebook_profile' => $request->facebook_profile,
                'instagram_profile' => $request->instagram_profile,
                'linkedin_profile' => $request->linkedin_profile,
                
                'section_education' => $request->section_education,
                'section_experience' => $request->section_experience,
                'documento_certificacion' => $request->documento_certificacion,
                'documento_recomendacion' => $request->documento_recomendacion,
                'classes' => $request->classes,
                'keywords' => $request->keywords,
                'user_id' => $user->id,
            ]);

                DB::commit();
                //DB::raw('unlock tables');
                if (Auth::attempt(['user_name' => $request->user_name, 'password' => $request->password], false)) {
                    $user = Auth::user();
                    return response('ok', 200);
                }
        }catch (Throwable $e){
            DB::rollback();
            return response($e->getMessage(), 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\tutorProfile  $tutorProfile
     * @return \Illuminate\Http\Response
     */
    public function show(tutorProfile $tutorProfile)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\tutorProfile  $tutorProfile
     * @return \Illuminate\Http\Response
     */
    public function edit(tutorProfile $tutorProfile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\tutorProfile  $tutorProfile
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $user_id)
    {
        $tutorProfile = TutorProfile::findOrFail($user_id);
        $user = User::findOrFail($user_id);

        $user->name = $request->name;
        $user->last_name = $request->last_name;
        $user->user_name = $request->user_name;
        $user->password = isset( $request->password) ? Hash::make( $request->password) : Hash::make( $request->password);
        $user->email = $request->email;
        $user->type_user = 7;
        $user->address = $request->address;
        $user->picture = $request->picture;
        $user->phone = $request->phone;
        $user->id_number = $request->id_number;

        if($user){
            $tutorProfile->name = $request->name;
            $tutorProfile->last_name = $request->last_name;            
            $tutorProfile->id_number = $request->id_number;
            $tutorProfile->country = $request->country;
            $tutorProfile->city = $request->city;
            $tutorProfile->address = $request->address;
            $tutorProfile->phone = $request->phone;
            $tutorProfile->picture = $request->picture;
            $tutorProfile->description = $request->description;
            
            $tutorProfile->twitter_profile = $request->twitter_profile;
            $tutorProfile->facebook_profile = $request->facebook_profile;
            $tutorProfile->instagram_profile = $request->instagram_profile;
            $tutorProfile->linkedin_profile = $request->linkedin_profile;
            
            $tutorProfile->section_education = $request->section_education;
            $tutorProfile->section_experience = $request->section_experience;
            $tutorProfile->documento_certificacion = $request->documento_certificacion;
            $tutorProfile->documento_recomendacion = $request->documento_recomendacion;
            $tutorProfile->classes = $request->classes;
            $tutorProfile->keywords = $request->keywords;

            $tutorProfile->update();
        }

        return response()->json('Datos Actualizados');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\tutorProfile  $tutorProfile
     * @return \Illuminate\Http\Response
     */
    public function destroy(tutorProfile $tutorProfile)
    {
        //
    }
}
