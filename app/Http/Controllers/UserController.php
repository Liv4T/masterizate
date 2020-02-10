<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
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
        $users = User::all();
        return $users;
     /*[
         'pagination'      => [
            'total'        => $users->total(),
            'current_page' => $users->currentPage(),
            'per_page'     => $users->perPage(),
            'last_page'    => $users->lastPage(),
            'from'         => $users->firstItem(),
            'to'           => $users->lastItem(),
         ],
         'users' => $users
     ];*/
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
           'last_name'=>'required',
            'password'=>'required',
            'email'=>'required',
            'id_categories'=>'required',
            'id_subcategories'=>'required',
            'type_user'=>'required',
            'address'=>'required',
            'phone'=>'required',
            'id_number'=>'required'
        ]);
        // User::create($request->all());
           $data = $request->all();
           $user = new User;
           $user->name = isset($data['name']) ? $data['name'] : "";
           $user->last_name = isset($data['last_name']) ? $data['last_name'] : "";
           $user->email = isset($data['email']) ? $data['email'] : "";
           $user->user_name = isset($data['user_name']) ? $data['user_name'] : "";
           $user->birthday = isset($data['birthday']) ? $data['birthday'] : "";
           $user->phone = isset($data['phone']) ? $data['phone'] : "";
           $user->id_number = isset($data['id_number']) ? $data['id_number'] : "";
           $user->password = isset($data['Cpassword']) ? $data['Cpassword'] : $data['password'];
           $user->address = isset($data['address']) ? $data['address'] : "";
           $user->id_categories = isset($data['id_categories']) ? $data['id_categories'] : "";
           $user->id_subcategories = isset($data['id_subcategories']) ? $data['id_subcategories'] : ""; 
           $user->save();
            if($data['picture']){
                $img = $this->saveImg($data['picture'],1360,765);
                $user->picture = $img;
                $user->save();
            }
        /* Send email register */
        if (isset($data['email'])) {
            Mail::send('emails.register', $data, function ($msj) use ($data) {
                $msj->to($data['email'])->subject('Falta sólo un paso más');
            });
        }
        return view('home');
        // return response()->json([true]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $user = Auth::user();
        return $user;
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
     public function saveImg($file,$width,$height)
    {
        $file = base64_encode(file_get_contents($file));
        $random = str_random(10);
        $nombre = $random.'-'.$file;
        $path   = base_path('../uploads/images/'.$nombre);
        $url    = 'images/'.$nombre;
        file_put_contents(base_path('../uploads/images/'.$nombre), $file);
        // $image->save($path);
        return $url;
    
    }
    public function resetPassword($email){
        User::where('email',$email)->first();
    }
}