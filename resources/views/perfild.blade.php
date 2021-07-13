@extends('layouts.app')

@section('content')
<!--<formstyle></formstyle>-->
      @include('menu')
    @if (Auth::user()->isTeacher()||Auth::user()->isPsychology()||Auth::user()->isTutor())

    @endif
 @if(Auth::user()->type_user == '6')
    <menu-school></menu-school>
  @endif
  <perfil-docente></perfil-docente>
  <footers></footers>
<div class="container">
  <!--<app-vue></app-vue>-->
    <div class="row justify-content-center">
      <div class="card-body"> @if (session('status'))
        <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
      </div>
    </div>
    </div>
</div>
@endsection
