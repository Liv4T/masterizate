@extends('layouts.app')

@section('content')
    @include('menu')
    @if (Auth::user()->isTeacher()||Auth::user()->isPsychology()||Auth::user()->isTutor())
        <inicio-component></inicio-component>
    @endif
  <activity-student-play-component :id_area="{{ $id_area }}" :id_classroom="{{ $id_classroom }}" :id_activity="{{ $id_activity }}"></activity-student-play-component>
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
