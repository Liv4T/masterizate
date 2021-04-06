@extends('layouts.app')

@section('content')
  @include('menu')
  @if (Auth::user()->isStudent())
    <juegos-component></juegos-component>
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
