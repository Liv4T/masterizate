@extends('layouts.app')

@section('content')
@include('menu')
@if (Auth::user()->isTeacher())
      <inicio-component></inicio-component>
@endif
<admin-courses></admin-courses>
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
