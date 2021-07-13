@extends('layouts.app')

@section('content')
@section('content')
  @include('menu')
    @if (Auth::user()->isTeacher()||Auth::user()->isPsychology()||Auth::user()->isTutor())

    @endif
    <lectives-teacher-indicators :id_lective_planification="{{ $id_lective_planification }}"></lectives-teacher-indicators>


<div class="container">

    <div class="row justify-content-center">
      <div class="card-body"> @if (session('status'))
        <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
      </div>
    </div>
    </div>
</div>
@endsection
