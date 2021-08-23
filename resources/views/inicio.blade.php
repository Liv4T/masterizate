@extends('layouts.app')

@section('content')
    @if (Auth::user()->isTeacher())
    @include('menu')
     <calendar-component type_u="2" :user="{{Auth::user()}}"></calendar-component>
    @endif
      @if (Auth::user()->isPsychology()
          ||Auth::user()->isTutor()
          ||Auth::user()->isAdmin() 
          ||Auth::user()->isSchoolGovernment()
          ||Auth::user()->isParent()
          ||Auth::user()->isCoordinator()
          ||Auth::user()->isNurse()
          ||Auth::user()->isClient()
          )
    @include('menu')

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
