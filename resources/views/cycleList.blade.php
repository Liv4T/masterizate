@extends('layouts.app')

@section('content')
  @include('menu')
    <cycle-list :id_area="'{{ $id_area }}'" :id_classroom="'{{ $id_classroom }}'" :id_teacher="'{{Auth::user()->type_user}}'"></cycle-list>
<div class="container">
    <div class="row justify-content-center">
      <div class="card-body"> @if (session('status'))
        <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
      </div>
    </div>
    </div>
</div>
@endsection