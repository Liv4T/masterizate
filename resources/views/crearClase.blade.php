@extends('layouts.app')

@section('content')
    @include('menu')
    @if (Auth::user()->isTeacher()||Auth::user()->isPsychology()||Auth::user()->isTutor())

    @endif
<crearc-component :id_area="{{ $id_area }}" :id_classroom="{{ $id_classroom }}" ></crearc-component>
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
