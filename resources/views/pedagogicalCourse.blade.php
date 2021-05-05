@extends('layouts.app')

@section('content')
    @if(Auth::user()->isAdmin())
    <menu-adm-component></menu-adm-component>
    <!-- <menu-adm></menu-adm> -->
    @endif

    @if(Auth::user()->isCoordinator())
    <menu-coord></menu-coord>
    @endif
    <pedagogical-course :user="{{Auth::user()}}"></pedagogical-course>
    <div class="container">
      <div class="row justify-content-center">
        <div class="card-body"> @if (session('status'))
          <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
        </div>
      </div>
    </div>
@endsection
