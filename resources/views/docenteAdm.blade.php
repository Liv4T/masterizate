@extends('layouts.app')

@section('content')
<menu-adm></menu-adm>
<docente-adm></docente-adm>
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