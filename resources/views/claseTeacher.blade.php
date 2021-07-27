@extends('layouts.app')

@section('content')
    @if (Auth::user()->isTeacher()||Auth::user()->isPsychology()||Auth::user()->isTutor()||Auth::user()->isAdmin())
    @include('menu')
    <clases-teacher :user="{{Auth::user()}}"></clases-teacher>
    @endif
       @if (Auth::user()->isStudent())
        <inicio-component :user="{{Auth::user()}}"></inicio-component>
    @endif

{{-- <memory-create></memory-create> --}}
<div class="container">

    <div class="row justify-content-center">
      <div class="card-body"> @if (session('status'))
        <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
      </div>
    </div>
    </div>
</div>
@endsection
