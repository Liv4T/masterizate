<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ProceedingsGeneral;
use App\User;
use Illuminate\Support\Facades\DB;
use App\ConfigurationParameter;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class ProceedingsGeneralController extends Controller
{
    public function save(Request $request)
    {
        //return $request;
        $user = Auth::user();

        $students = json_decode($request->id_user_managed, true);

        if($user->type_user==7){
            $user_id = $user->id;
        }else{
            $user_id = "";
        }

        ProceedingsGeneral::create([
            'title' => $request->title,
            'body' => $request->body,
            'id_user_managed' => $request->id_user_managed,
            'state' => 0,
            'viewed' =>0,
            'id_user' => $user_id,
        ]);
        foreach($students as $student){
            $users = User::where('id',$student)->first();
            $email = $users->email;
            Mail::send('emails.generalProceedings', ["title" => $request->title, "body" => $request->body], function ($msj) use ($email) {
                $msj->to($email, 'Masterizate Comunicado');
                $msj->subject('Comunicado');
            });
        }


        return response()->json('Acta Guardada');
    }
    public function uploadFile(Request $request)
    {
        $user = Auth::user();

        if($user->type_user==2){
            $user_id = $user->id;
        }else{
            $user_id = "";
        }

        $file = request('file');
        if (!empty($file)) {
            $fileName = $file->getClientOriginalName();
            $div_file_name = explode(".", $fileName);
            $div_file_name = end($div_file_name);
            $extension = $div_file_name;
            $fileName_1 = request('name');
            $fileName = strtr($fileName_1, " ", "_");
            // file with path
            $filePath = url('uploads/actas/general/' . $fileName . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/actas/general/';
            if ($file->move($destinationPath, $fileName . "." . $extension)) {
                ProceedingsGeneral::create([
                    'url' => $filePath,
                    'id_user_managed' => request('id_user_managed'),
                    'state' => 0,
                    'viewed' =>0,
                    'id_user' => $user_id,
                ]);
                return 'ok';
            }
            return "error";
        }
    }
    public function uploadFileUpdate(Request $request, int $id)
    {
        // return $request;
        $file = request('file');
        // dd($file);
        if (!empty($file)) {
            $fileName = $file->getClientOriginalName();
            $div_file_name = explode(".", $fileName);
            $div_file_name = end($div_file_name);
            $extension = $div_file_name;
            $fileName_1 = request('name');
            $fileName = strtr($fileName_1, " ", "_");
            // file with path
            $filePath = url('uploads/actas/general/' . $fileName . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/actas/general';
            //Buscamos la ruta del archivo a eliminar
            $fileSearch = ProceedingsGeneral::where('id', $id)->first();
            $arrayNames = explode("/", $fileSearch->url);
            $nameArchive = end($arrayNames);
            //se elimina el archivo anterior
            $filenameDelete = 'uploads/actas/general/' . $nameArchive;
            unlink($filenameDelete);
            //se añade el nuevo archivo
            if ($file->move($destinationPath, $fileName . "." . $extension)) {
                $file = ProceedingsGeneral::where('id', $id)->update([
                    'url' => $filePath,
                ]);
                return "ok";
            }
            return "error";
        }
    }
    public function uploadFileUpdateSign(Request $request, int $id)
    {
        // return $request;
        $file = request('file');
        // dd($file);
        if (!empty($file)) {
            $fileName = $file->getClientOriginalName();
            $div_file_name = explode(".", $fileName);
            $div_file_name = end($div_file_name);
            $extension = $div_file_name;
            $fileName_1 = request('name');
            $fileName = strtr($fileName_1, " ", "_");
            // file with path
            $filePath = url('uploads/actas/general/' . $fileName . "_FIRMADA" . "." . $extension);
            //Move Uploaded File
            $destinationPath = 'uploads/actas/general/';
            //se añade el nuevo archivo
            if ($file->move($destinationPath, $fileName . "_FIRMADA" . "." . $extension)) {
                $file = ProceedingsGeneral::where('id', $id)->update([
                    'url' => $filePath,
                    'state' => 1,
                ]);
                return "ok";
            }
            return "error";
        }
    }
    public function indexProceedings()
    {
        $user = Auth::user();
        $user_id = $user->id;
        $proceedings=[];
        $proceedingsC=[];
        $proceedingsR=[];
        if($user->type_user==1){
            $proceedingsC=ProceedingsGeneral::all();
            $proceedingsC->type="Administrador";
        }else if($user->type_user==7){
            $proceedingsC=ProceedingsGeneral::where('id_user', $user_id)->get();
        }

        if($user->type_user==10){
            $proceedingsR=ProceedingsGeneral::where('id_user_managed', $user_id)->get();
        }

        foreach ($proceedingsC as $key => $proceedingC) {

            // if(isset($proceedingC->id_user_managed)){
            //     $name_parent=User::where('id', $proceedingC->id_user_managed)->get();
            // }else{
            //     $name_parent="No hay usuario registrado";
            // }

            // $proceedingC->user_name=$name_parent[0]->name;

        }

        foreach ($proceedingsR as $key => $proceedingR) {

            if(isset($proceedingR->id_user_managed)){
                $name_parent=User::where('id', $proceedingR->id_user_managed)->get();
            }else{
                $name_parent="No hay usuario registrado";
            }

            $proceedingR->user_name=$name_parent[0]->name;

        }

        array_push($proceedings, $proceedingsC, $proceedingsR);

        return response()->json($proceedings);
    }
    public function urlArchive(int $id)
    {
        $file = ProceedingsGeneral::where('id', $id)->first();

        $arrayNames = explode("/", $file->url);
        $nameArchive = end($arrayNames);
        $filename = '../../../uploads/actas/general/' . $nameArchive;

        return $filename;

    }
    public function generatePdf(int $id)
    {
        $templateHeader=ConfigurationParameter::where('code','TEMPLATE_NOTESHEET_HEADER')->first();
        $templateFooter=ConfigurationParameter::where('code','TEMPLATE_NOTESHEET_FOOTER')->first();
        $file = ProceedingsGeneral::where('id', $id)->first();
        $current_date=date('Y-m-d');
        $html='';
        $html.=$file->title;
        $html.=$file->body;

        $mpdf = new \Mpdf\Mpdf(['setAutoTopMargin' => 'stretch']);

        $mpdf->SetHTMLHeader($templateHeader->content);

        $mpdf->SetWatermarkImage("data:image/png;base64,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");
        $mpdf->showWatermarkImage = true;

        $mpdf->SetHTMLFooter($templateFooter->content);

        $mpdf->WriteHTML($html);

        $temp = tmpfile();
        $path_temp = tempnam(sys_get_temp_dir(), 'prefix');
        $filename=$path_temp.uniqid();
        $mpdf->Output( $filename);


        return response()->make(file_get_contents($filename), 200, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'inline; filename="'. 'acta_' .$id.'_'.$current_date.'.pdf"'
        ]);
    }
    public function updateViewed(int $id)
    {
        $user = Auth::user();
        $user_id = $user->id;
        $file = ProceedingsGeneral::where('id', $id)->where('id_user_managed', $user_id)->update([
            'viewed' => 1,
        ]);

        return $file;
    }
    public function downloadProceedings(int $id)
    {
        $fileSearch = ProceedingsGeneral::where('id', $id)->first();
        $arrayNames = explode("/", $fileSearch->url);
        $nameArchive = end($arrayNames);
        $pathtoFile = 'uploads/actas/general/' . $nameArchive;

        return response()->download($pathtoFile);
    }
    public function getUsersToProceedings(){
        $users = [];

        $admins = DB::table("users")
        ->select('users.*')
        ->where('type_user','=',1)
        ->get();

        $teachers = DB::table("users")
        ->select('users.*')
        ->where('type_user','=',7)
        ->get();

        $students = DB::table("users")
        ->select('users.*')
        ->where('type_user','=',10)
        ->get();

        array_push($users, $admins, $teachers, $students);

        return response()->json($users, 200);
    }
}
