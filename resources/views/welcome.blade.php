@extends('layouts.app')

@section('content')

  <div class="container">
      @if (session('status'))
      <div class="alert alert-success">
           {{ session('status') }}
      </div>
      @endif
      
    <div class="row ">
      <div class="col-md-6">
        <div class="card">
            <div class = " card-header ">Board</div>
            <div class = "card-body">
                <blog-component></blog-component>
            </div>
        </div>
      </div>  
      <div class="col-md-6">
        <div class="card">
            <div class = " card-header ">Drawing Board</div>
            <div class = "card-body">
                <draw-c></draw-c>
            </div>
        </div>
     </div> 
     </div> 
</div>
@endsection
