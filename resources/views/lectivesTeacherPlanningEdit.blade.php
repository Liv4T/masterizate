@extends('layouts.app')

@section('content')
      @include('menu')
    @if (Auth::user()->isTeacher()||Auth::user()->isPsychology()||Auth::user()->isTutor())

    @endif
  <lectives-teacher-planning-edit :id_lective_planification="{{ $id_lective_planification }}"></lectives-teacher-planning-edit>
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


