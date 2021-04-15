<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\UserProfile;
use Illuminate\Support\Facades\Auth;

class UserProfileController extends Controller
{
    public function GetByUserId(int $user_id)
    {
        $auth=Auth::user();

        $user = User::find($user_id);

        if(!isset($user)) return response('user dont exists',400);

        $user->isAuthenticated=($auth->id==$user_id);

        $data_profile=UserProfile::where('id_user',$user_id)->where('deleted',0)->where('state',1)->get();

        $profile=[];
        foreach ($data_profile as $prop) {
            $profile[$prop->section]=$prop->content;
        }

        $user->profile=$profile;

        return response()->json($user);

    }
}
