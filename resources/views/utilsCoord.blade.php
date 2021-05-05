@extends('layouts.app')

@section('content')
    @if (Auth::user()->type_user == '1')
      <menu-adm-component></menu-adm-component>
    @elseif(Auth::user()->type_user == '8')
      <menu-coord></menu-coord>
    @endif
    <utils-coord :user="{{Auth::user()}}"></utils-coord>
    <div class="container">
      <div class="row justify-content-center">
        <div class="card-body"> @if (session('status'))
          <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
        </div>
      </div>
    </div>
@endsection
