@extends('layouts.app')

@section('content')
  @include('menu')
  @if (Auth::user()->isTeacher())

  @endif

  <actividadg-docente></actividadg-docente>
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
