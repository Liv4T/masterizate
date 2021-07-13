@extends('layouts.app')

@section('content')
  @if (Auth::user()->type_user == '5')
        <menu-psychology></menu-psychology>

  @endif
  <student-report-component :id_student="{{ $id_student }}" :name_classroom="'{{ $name_classroom }}'" :id_classroom="{{ $id_classroom }}"></student-report-component>
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
