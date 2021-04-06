@extends('layouts.app')

@section('content')
      @include('menu')
    @if (Auth::user()->isTeacher()||Auth::user()->isPsychology()||Auth::user()->isTutor())
        <inicio-component></inicio-component>
    @endif
 @if (Auth::user()->type_user == '5')
 <menu-psychology></menu-psychology>
 <inicio-component></inicio-component>
@endif
 @if (Auth::user()->type_user == '4')
    <menu-padres></menu-padres>
 @endif
 @if (Auth::user()->type_user == '6')
    <menu-school></menu-school>
 @endif
  <mensajes-component></mensajes-component>
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
