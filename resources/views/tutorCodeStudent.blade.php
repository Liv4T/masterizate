@extends('layouts.app')
@section('content')
    <menu-tutor></menu-tutor>
    <tutor-code-student :user="{{Auth::user()}}"></tutor-code-student>
    <footers></footers>
    <div class="container">
      <!--<app-vue></app-vue>-->
        <div class="row justify-content-center">
          <div class="card-body"> @if (session('status'))
            <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
          </div>
        </div>
        </div>
    </div>
@endsection
