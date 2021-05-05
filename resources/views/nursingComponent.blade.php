@extends('layouts.app')

@section('content') 

    @if(Auth::user()->isAdmin())
      <menu-adm-component></menu-adm-component>
    @endif

    @if(Auth::user()->isNurse())
      <menu-nurse></menu-nurse>
    @endif
    <nursing-component></nursing-component>
<div class="container">

    <div class="row justify-content-center">
      <div class="card-body"> @if (session('status'))
        <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
      </div>
    </div>
    </div>
</div>
@endsection
