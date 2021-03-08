@extends('layouts.app')

@section('content')
@if (Auth::user()->type_user == '2')
    <menu-docente></menu-docente>
    <observer-component></observer-component>
@endif
@if (Auth::user()->type_user == '4')
    <menu-padres></menu-padres>
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
