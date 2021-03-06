@extends('layouts.app')

@section('content')
      @include('menu')
    @if (Auth::user()->isTeacher()||Auth::user()->isPsychology()||Auth::user()->isTutor())

    @endif
 @if (Auth::user()->type_user == '4')
    <menu-padres></menu-padres>
 @endif
  <student-calendar-component :type_u="{{ $type_user }}" :user="{{Auth::user()}}"></student-calendar-component>
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

