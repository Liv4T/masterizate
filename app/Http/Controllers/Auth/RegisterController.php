<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name'              => ['required', 'string', 'max:255'],
            'email'             => ['required', 'string', 'email', 'max:255'],
            'password'          => ['required', 'string', 'min:6', 'confirmed'],
            'name'              => ['required', 'string', 'max:120'],
            'last_name'         => ['required', 'string', 'max:120'],
            'user_name'         => ['required', 'string', 'max:20', 'unique:users'],
            'age'               => ['required', 'string', 'max:3'],
            'birthday'          => ['required', 'date', 'max:120'],
            'id_categories'     => ['required', 'string', 'max:120'],
            'id_subcategories'  => ['required', 'string', 'max:120'],
            'type_user'         => ['required', 'string', 'max:120'],
            'address'           => ['required', 'string', 'max:120'],
            'picture'           => ['required', 'string', 'max:120'],
            'phone'             => ['required', 'string', 'max:120'],
            'id_number'         => ['required', 'string', 'max:15'], 
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'last_name'  => $data['last_name'],
            'user_name'=> $data['user_name'],
            'age' => $data['age'],
            'birthday' => $data['birthday'],
            'id_categories' => $data['name'],
            'id_subcategories'  => $data['name'],
            'type_user'  => $data['name'],
            'address'  => $data['address'],
            'picture'  => $data['picture'],
            'phone'  => $data['phone'],
            'id_number'  => $data['id_number'],
            'email' => $data['email'],
            'password' => Hash::make($data['password'])
            
        ]);
    }
}
