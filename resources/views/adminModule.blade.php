@extends('layouts.app')

@section('content')
@include('menu')

<admin-module :id_module="{{ $id_module }}"></admin-module>
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
