<?php

namespace App\Http\Controllers;

use App\TutorProfile;
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

        $tutorProfile->description = $request->description;
        $tutorProfile->background_information = $request->background_information;
        $tutorProfile->twitter_profile = $request->twitter_profile;
        $tutorProfile->facebook_profile = $request->facebook_profile;
        $tutorProfile->instagram_profile = $request->instagram_profile;
        $tutorProfile->linkedin_profile = $request->linkedin_profile;
        $tutorProfile->country = $request->country;
        $tutorProfile->city = $request->city;
        $tutorProfile->education_information = $request->education_information;
        $tutorProfile->experience_education = $request->experience_education;
        $tutorProfile->cartification = $request->cartification;
        $tutorProfile->recommendation = $request->recommendation;
        $tutorProfile->class_offer = $request->class_offer;
        $tutorProfile->key_words = $request->key_words;
        $tutorProfile->user_id = $request->user_id;

        $user->name = $request->name;
        $user->last_name = $request->last_name;
        $user->password = isset( $request->password) ? Hash::make( $request->password) : Hash::make( $request->password);
        $user->email = $request->email;
        $user->type_user = 7;
        $user->address = $request->address;
        $user->picture = $request->picture;
        $user->phone = $request->phone;
        $user->id_number = $request->document;

        $tutorProfile->save();
        $user->save();

        return view('home');

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
        
        $tutorProfile->description = $request->description;
        $tutorProfile->background_information = $request->background_information;
        $tutorProfile->twitter_profile = $request->twitter_profile;
        $tutorProfile->facebook_profile = $request->facebook_profile;
        $tutorProfile->instagram_profile = $request->instagram_profile;
        $tutorProfile->linkedin_profile = $request->linkedin_profile;
        $tutorProfile->country = $request->country;
        $tutorProfile->city = $request->city;
        $tutorProfile->education_information = $request->education_information;
        $tutorProfile->experience_education = $request->experience_education;
        $tutorProfile->cartification = $request->cartification;
        $tutorProfile->recommendation = $request->recommendation;
        $tutorProfile->class_offer = $request->class_offer;
        $tutorProfile->key_words = $request->key_words;
        $tutorProfile->user_id = $request->user_id;

        $user->name = $request->name;
        $user->last_name = $request->last_name;
        $user->password = isset($request->password) ? Hash::make($request->password) : Hash::make($request->password);
        $user->email = $request->email;
        $user->type_user = 7;
        $user->address = $request->address;
        $user->picture = $request->picture;
        $user->phone = $request->phone;
        $user->id_number = $request->document;

        $tutorProfile->update();
        $user->update();

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
