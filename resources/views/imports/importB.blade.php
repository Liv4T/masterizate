@extends('layouts.app')

@section('content')
<menu-adm-component></menu-adm-component>
<!-- <menu-adm></menu-adm> -->
<importar-adm></importar-adm>
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
