@extends('layouts.app')

@section('content')
  @if (Auth::user()->type_user == '5')
        <menu-psychology></menu-psychology>
  @endif
  <studentByClass-component :id_classroom="{{ $id_classroom }}" :name_classroom="'{{ $name_classroom }}'"></studentByClass-component>
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
