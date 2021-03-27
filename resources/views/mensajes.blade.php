@extends('layouts.app')

@section('content')
  @if (Auth::user()->type_user == '2')
        <menu-docente></menu-docente>
        <inicio-component></inicio-component>
  @endif
  @if (Auth::user()->type_user == '3')
    <menu-lateral></menu-lateral>
 @endif
  @if (Auth::user()->type_user == '1')
    <menu-adm></menu-adm>
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
