@extends('layouts.appHomeSkills')

@section('content')
<home-events></home-events>

<div class="container">

    <div class="row justify-content-center">
      <div> @if (session('status'))
        <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
      </div>
    </div>
    </div>
</div>
@endsection
