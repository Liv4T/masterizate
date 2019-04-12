@extends('layouts.app')

@section('content')
  <div class="container">
    <div class="row ">
      <div class="col-md-7">
        <div class="card">
            <div class = " card-header ">Board</div>
            <div class = "card-body">
        <blog-component></blog-component>
        </div>
        </div>
      </div>
      
      <div class = " col-md-5 col-md-offset-2 ">
        <div class="card">
          <div class = " card-header ">Chatroom</div>
          <div class = "card-body">
            <chat-log :messages="messages"></chat-log>
            <chat-composer v-on:messagesent="addMessage"></chat-composer>
          </div>
        </div>
      </div>
    </div>  
    
        <div class="row ">
          <div class="col-md-7">
            <div class="card">
                <div class = " card-header ">Drawing Board</div>
                <div class = "card-body">
                    <draw-c></draw-c>
            </div>
            </div>
          </div>
      <div class="card-body"> @if (session('status'))
        <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
      </div>
    </div>  
  </div>
@endsection
