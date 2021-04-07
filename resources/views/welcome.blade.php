@extends('layouts.app')

@section('content')
      @include('menu')
    @if (Auth::user()->isTeacher()||Auth::user()->isPsychology()||Auth::user()->isTutor())
        <inicio-component></inicio-component>
    @endif
  <div class="back">
      @if (session('status'))
      <div class="alert alert-success">
           {{ session('status') }}
      </div>
      @endif

<div class="back">
          <div class="row ">
      <div class="col-md-6">
        <div class="card">
           <div class = " card-header fondo ">Dibujar</div>
            <div class = "card-body">
                <draw-c></draw-c>
            </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
             <div class = "card-header fondo">Redactar</div>
            <div class = "card-body">
                <blog-component></blog-component>
            </div>
        </div>
     </div>
</div>



      </div>

</div>
@endsection
