@extends('layouts.app')

@section('content')
@include('menu')
<lectives-teacher-module :id_weekly_plan="{{ $id_weekly_plan }}" :weekly_plan_name="{{ $weekly_plan_name }}" :backPage="{{ $backPage }}" :id_lective_planification="{{ $id_lective_planification }}"></lectives-teacher-module>
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
