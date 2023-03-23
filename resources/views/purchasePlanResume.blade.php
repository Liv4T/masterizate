@extends('layouts.app')

@section('content')

<purchase-plan-resume :plan_type="'{{ $plan_type }}'" :payment_currency="'{{ $payment_type }}'" :aut="'{{ Auth::user()?Auth::user()->type_user:0 }}'" code="{{ $code }}"></purchase-plan-resume>
<footers></footers>
<div class="container">
    <div class="row justify-content-center">
      <div class="card-body"> @if (session('status'))
        <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
      </div>
    </div>
    </div>
</div>
@endsection
