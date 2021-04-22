@extends('layouts.app')

@section('content')
@include('menu')
@if (Auth::user()->isTeacher()||Auth::user()->isPsychology()||Auth::user()->isTutor())
    <inicio-component></inicio-component>
@endif
@if (Auth::user()->isTeacher()||Auth::user()->isCoordinator())
    <observer-component :user="{{Auth::user()}}"></observer-component>
@endif


<div class="container">
    <div class="row justify-content-center">
        <div class="card-body"> @if (session('status'))
            <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
        </div>
    </div>
</div>
</div>
@endsection
