<?php

namespace App\Http\Controllers;

use Auth;
use PDF;
use Illuminate\Http\Request;
use App\Contract;
use PhpParser\Node\Expr\AssignOp\Concat;

class ContractController extends Controller
{
    public function downloadPDF(Request $request)
    {
        // return $request;
        $user = Auth::user();
        $time = time();
        $contrato_pdf = "contrato-" . $request->id_number . "-" . $time . ".pdf";
        $url_pdf = "/uploads/contratos/" . $contrato_pdf;
        $contract = Contract::create([
            'id_user' => $user->id,
            'name' => $request->name,
            'type' => $request->type,
            'id_number' => $request->id_number,
            'url' => $url_pdf
        ]);
        $data = [
            'name' => $request->name,
            'id_number' => $request->id_number,
        ];
        $pdf = \PDF::loadView('contract', $data)
            ->save(public_path('uploads/contratos/') . $contrato_pdf);

        return response('ok', 200);
    }
    public function show()
    {
        $user = Auth::user();
        $data = Contract::where('id_user', $user->id)->first();
        return $data;
    }
    public function updateContract()
    {
        $user = Auth::user();
        $contract = Contract::where('id_user', $user->id)->first();
        $contract->read_terms = 1;
        $contract->agree = 1;
        $contract->save();
    }
}
