<?php

namespace App\Http\Controllers;

use App\TutorProfile;
use App\User;
use Hash;
use Auth;
use Illuminate\Http\Request;

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
        $tutorProfile = new TutorProfile();
        $user = new User();

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

        if($user->save()){
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
            $tutorProfile->user_id = $user->id;

            $tutorProfile->save();
            
            if (Auth::attempt(['user_name' => $request->user_name, 'password' => $request->password], false)) {
                $user = Auth::user();
                return redirect('/inicio');
            }else {
                return 'Ha ocurrido un error, intenta mas tarde';
            }
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
