@extends('layouts.app')

@section('content')
  @if (Auth::user()->type_user == '5')
        <menu-psychology></menu-psychology>
  @endif
  <report-visits-component :id_student="{{ $id_student }}"></report-visits-component>
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
