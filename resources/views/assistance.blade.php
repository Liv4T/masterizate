@extends('layouts.app')

@section('content')
<menu-docente></menu-docente>
<assistance-component :user="{{Auth::user()}}"></assistance-component>
<div class="container">

    <div class="row justify-content-center">
      <div class="card-body"> @if (session('status'))
        <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
      </div>
    </div>
    </div>
</div>
@endsection
