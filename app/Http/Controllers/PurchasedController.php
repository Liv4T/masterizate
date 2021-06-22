<?php

namespace App\Http\Controllers;

use App\Customer;
use App\CustomerInvoice;
use App\CustomerInvoiceItem;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Throwable;

class PurchasedController extends Controller
{
    public function payPaypal(string $data_string){
        
        $auth = Auth::user();
        
        if (!isset($data_string)) {
            return view('purchasePlanError')->with('error', 'No se puede procesar pago, información inválida.');
        }

        $data = json_decode(base64_decode($data_string), true);
        $current_date = date('Y-m-d H:i:s');

        if (!isset($data) || !isset($data['plan_id']) || !isset($data['quantity']) || !isset($data['english_id'])) {
            return view('purchasePlanError')->with('error', 'No se puede procesar pago, información inválida.');
        }


        if ($data['quantity'] <= 0) {
            return view('purchasePlanError')->with('error', 'No se puede procesar pago, cantidad inválida.');
        }

        $customer = Customer::where('user_id', $auth->id)->where('deleted', 0)->where('state', 1)->first();

        if (!isset($customer)) {
            return view('purchasePlanError')->with('error', 'No se puede procesar pago, cliente ináctivo.');
        }
        $plan_price = CustomerPlanPrice::where('customer_plan_id', $plan->id)->where('state', 1)->first();
        //aqui traer el total del $data_string
        //$total_plan = (($plan_price->value - $plan_price->discount_value) * $data['quantity']);
        $total = $data['total'];

        //add invoice
        try {

            DB::beginTransaction();

            $last_cons= CustomerInvoice::all()->last()->consecutive;

            if($last_cons==NULL){
                $consecutive=0;
            }
                
            $consecutive = $last_cons->consecutive + 1;

            $invoice = CustomerInvoice::create([
                'prefix_code' => 'LIV4T',
                'consecutive' => $consecutive,
                'customer_id' => $customer->id,
                'sale_date' => date('Y-m-d H:i:s'),
                'channel_sale' => 'WEB',
                'total' => $total,
                'customer_voucher_id' => 0,
                'customer_voucher_value' => 0,
                'state' => 1,
                'deleted' => 0,
                'updated_user' => $auth->id
            ]);


            $invoice_item = CustomerInvoiceItem::create([
                'customer_invoice_id' => $invoice->id,
                'customer_plan_id' => $plan->id,
                'customer_plan_name' => $plan->name,
                'quantity' => $data['quantity'],
                'unit_value' => $plan_price->value,
                'discount_value' => $plan_price->discount_value,
                'tax_percent' => 0,
                'currency_code' => $plan_price->currency_code,
                'tax_value' => 0,
                'total_value' => $total_plan,
                'deleted' => 0,
                'updated_user' => $auth->id
            ]);

            if ($total == 0) {
                $invoice_items = CustomerInvoiceItem::where('customer_invoice_id', $invoice->id)->where('deleted', 0)->get();

                $last_cons= CustomerInvoice::all()->last()->consecutive;
                
                $consecutive = $last_cons->consecutive + 1;
               

                CustomerInvoice::where('id', $invoice->id)->update([
                    'prefix_code' => 'LIV4T',
                    'consecutive' => $consecutive,
                    'state' => 2
                ]);

            DB::commit();

            if ($total == 0) {
                Db::raw('unlock tables');
            }
        } catch (Throwable $e) {
            DB::rollback();
            return view('purchasePlanError')->with('error', $e->getMessage());
        }
    }
}
