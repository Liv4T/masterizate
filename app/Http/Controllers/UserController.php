<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::orderBy('id','DESC')->paginate(4);
     return [
         'pagination'      => [
            'total'        => $users->total(),
            'current_page' => $users->currentPage(),
            'per_page'     => $users->perPage(),
            'last_page'    => $users->lastPage(),
            'from'         => $users->firstItem(),
            'to'           => $users->lastItem(),
         ],
         'users' => $users
     ];
    }

    /**
     * login  
     */
    public function loginWeb (Request $request) {
        $user_name = $request->input('user_name');
        $password = $request->input('password');
        if (Auth::attempt(['user_name' => $user_name, 'password' => $password], false)) {
          $user = Auth::user();
          return redirect('/');
        } else {
          return redirect('/login')->with('status', 'Usuario no encontrado!');
        }
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
     $this->validate($request, [
        
            'name'=>'required',
           /* 'last_name'=>'required',
            'password'=>'required',
            'email'=>'required',
            'id_categories'=>'required',
            'id_subcategories'=>'required',
            'type_user'=>'required',
            'address'=>'required',
            'phone'=>'required',
            'id_number'=>'required'
            */
        ]);
        //console.log($request);
        User::create($request->all());
        /* Send email register */
        Mail::send('emails.register', $request->all(), function($msj){
            $msj->to(request()->email)->subject('Falta sólo un paso más');
         });
        return;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required'
        ]);
        User::find($id)->update($request->all());
        return;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $users = User::findOrFail($id);
        $users->delete();
    }
}
