@extends('layouts.app')

@section('content')
    @if(Auth::user()->isAdmin())
      <menu-adm-component></menu-adm-component>
    @endif

    @if(Auth::user()->isNurse() || Auth::user()->isSchoolGovernment())
        <menu-school></menu-school>
    @endif
<legislation-component :user="{{Auth::user()}}"></legislation-component>
<div class="container">
    <div class="row justify-content-center">
        <div class="card-body"> @if (session('status'))
            <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
        </div>
    </div>
</div>
</div>
@endsection
