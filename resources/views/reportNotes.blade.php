@extends('layouts.app')

@section('content')
@if (Auth::user()->type_user == '5')
    <menu-psychology></menu-psychology>
    <inicio-component></inicio-component>
@endif
<report-notes-component :id_student="{{ $id_student }}"></report-notes-component>
<div class="container">
    <div class="row justify-content-center">
        <div class="card-body"> @if (session('status'))
            <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
        </div>
    </div>
</div>
</div>
@endsection