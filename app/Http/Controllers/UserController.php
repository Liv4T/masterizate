<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\User;
use Illuminate\Support\Facades\Hash;
use Auth;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use DB;

class UserController extends Controller
{
    use ThrottlesLogins;
    protected $maxAttempts = 2; // Default is 5
    protected $decayMinutes = 2; // Default is 1

    public function __construct()
    {
        $this->middleware('throttle:3,1')->only('loginWeb');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::orderBy('created_at', 'desc')->get();
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
    public function loginWeb(Request $request)
    {
        $user_name = $request->input('user_name');
        $password = $request->input('password');
        $attempts = session()->get('login.attempts', 0); // obtener intentos, default: 0
        if (Auth::attempt(['user_name' => $user_name, 'password' => $password, 'status'=> 1], false)) {
            $user = Auth::user();
            return redirect('/inicio');
        } else if(Auth::attempt(['user_name' => $user_name, 'password' => $password, 'status'=> 0], false)){
            session()->put('login.attempts', 0);
            return redirect()->back()->with(['status' => 'Usuario Bloqueado espera 5 Minutos Para acceder de nuevo']);   
        } else {
            if ($attempts<10) {
                session()->put('login.attempts', $attempts + 1); // incrementrar intentos
                return redirect()->back()->with(['status' => 'Usuario y/o Contraseña Incorrectos']);   
            }
            if ($attempts>=10) {
                $user = User::where('user_name',$user_name)->first();
                $user->status = 0;
                $user->update();
                // $schedule->call(new updateStatusUsers)->daily();
                return redirect()->back()->with(['status' => 'Usuario Bloqueado espera 5 Minutos']);   
            }   
            
        }
    }

    /**
     * login for purchasePlansResume
     */
    public function loginClientWeb(Request $request)
    {
        $user_name = $request->input('user_name');
        $password = $request->input('password');
        if (Auth::attempt(['user_name' => $user_name, 'password' => $password], false)) {
            $user = Auth::user();
            $client = Customer::where('user_id', $user->id)->where('deleted', 0)->first();

            if (!isset($client)) {
                Customer::create([
                    'user_id' => $user->id,
                    'type' => 1,
                    'state' => 1,
                    'deleted' => 0,
                    'updated_user' => $user->id
                ]);
            }

            return redirect('/cliente/cuenta');
        } else {
            return redirect('/compra/plan');
        }
    }

    public function getStudentsByClassroom(){
        $students = DB::table('classroom_student')
            ->join('users', 'classroom_student.id_user', '=', 'users.id')
            ->join('classroom', 'classroom_student.id_classroom', '=', 'classroom.id')
            ->select('classroom_student.id as classroom_student_id','classroom_student.id_classroom as classroom_id','classroom.name as classroom_name','users.id as user_id','users.name as user_name','users.last_name as user_last_name')
            ->get();

        return response()->json($students);
    }

    public function getTeachersByClassroom(){
        $teachers = DB::table('classroom_teacher')
            ->join('users','classroom_teacher.id_user','=','users.id')
            ->join('area','classroom_teacher.id_classroom','=','area.id')
            ->select('users.id as user_id','users.name as user_name','users.last_name as user_last_name','area.name as area_name')
            ->get();

        return response()->json($teachers);
    }

    public function getAdministrators(){
        $administrators = User::where('type_user','=',1)->get();
        return response()->json($administrators);
    }

    public function getParents(){
        $parents = User::where('type_user','=',4)->get();
        return response()->json($parents);
    }


    public function getPsicologist(){
        $psicologist = User::where('type_user','=',5)->get();
        return response()->json($psicologist);   
    }

    public function getSchoolGovernment(){
        $administrators = User::where('type_user','=',6)->get();
        return response()->json($administrators);   
    }

    public function getTutor(){
        $psicologist = User::where('type_user','=',7)->get();
        return response()->json($psicologist);   
    }

    public function getCoordinador(){
        $psicologist = User::where('type_user','=',8)->get();
        return response()->json($psicologist);   
    }

    public function getNurse(){
        $nurse = User::where('type_user','=',9)->get();
        return response()->json($nurse);
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

            'name' => 'required',
            'last_name' => 'required',
            'password' => 'required',
            'email' => 'required',
            'type_user' => 'required',
            'address' => 'required',
            'phone' => 'required',
            'id_number' => 'required'
        ]);

        // User::create($request->all());
        $data = $request->all();
        $url = url()->current();
        $url = explode("/", $url);
        $url = $url[0] . "//" . $url[2];

        $user = new User;
        $user->name = isset($data['name']) ? $data['name'] : "";
        $user->last_name = isset($data['last_name']) ? $data['last_name'] : "";
        $user->email = isset($data['email']) ? $data['email'] : "";
        $user->user_name = isset($data['user_name']) ? $data['user_name'] : "";
        $user->phone = isset($data['phone']) ? $data['phone'] : "";
        $user->id_number = isset($data['id_number']) ? $data['id_number'] : "";
        $user->password = isset($data['Cpassword']) ? Hash::make($data['Cpassword']) : Hash::make($data['password']);
        $user->address = isset($data['address']) ? $data['address'] : "";
        $user->type_user = isset($data['type_user']) ? $data['type_user'] : "";
        $user->picture = isset($data['user_name']) ? $url . "/uploads/images/" . $data['user_name'] . ".png" : "";
        $user->new_coord_area = isset($data['new_coord_area']) ? $data['new_coord_area'] : "";
        $user->save();

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

    public function showCoordinator()
    {
        $user = User::where('type_user','=',8)->get();
        return response()->json($user);
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
    public function uploadFile(Request $request)
    {
        // return $request;
        $file = request('file');
        // dd($file);
        if (!empty($file)) {
            $fileName = request('user_name');
            // file with path
            $filePath = url('uploads/images/' . $fileName . ".png");
            //Move Uploaded File
            $destinationPath = 'uploads/images';
            if ($file->move($destinationPath, $fileName . ".png")) {
                return "ok";
            }
        }
    }
    public function resetPassword(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if ($user) {
            $password = time() . $user->id;
            $data = [
                'user' => $user,
                'password' => $password,
                'email' => $user->email,
            ];

            Mail::send('emails.forgotPassword', $data, function ($msj) use ($data) {
                $msj->to($data['email'])->subject('Olvidé Contraseña');
            });

            $user->password = Hash::make($password);
            $user->save();
            return view('home');
        } else {
            return redirect()->back()->withErrors(['error' => 'Las credenciales ingresadas no coinciden en nuestros registros']);
        }
    }
    public function changePassword(Request $request)
    {
        $user = Auth::user();
        $password = $request->password;
        if ($user) {
            $user->password = Hash::make($password);
            $user->save();
            return 'ok';
        } else {
            return 'false';
        }
    }
    public function logOut()
    {
        // Cerramos la sesión
        Auth::logout();
        // Volvemos al login y mostramos un mensaje indicando que se cerró la sesión
        return Redirect::to('login');
    }
    public function TypeUserLog(){
        $user=Auth::user()->type_user;
        
        return response()->json($user);
    }
}
