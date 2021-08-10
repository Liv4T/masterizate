@extends('layouts.app')

@section('content')
    @if (Auth::user()->isTeacher()||Auth::user()->isPsychology()||Auth::user()->isTutor())
        <menu-docente></menu-docente>
    @endif 
<equations></equations>
<footers></footers>
<div class="container">
    <div class="row justify-content-center">
      <div class="card-body"> @if (session('status'))
        <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
      </div>
    </div>
    </div>
</div>
@endsection