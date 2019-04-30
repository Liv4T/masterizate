@extends('layouts.app')

@section('content')
  <div class="container">
      @if (session('status'))
      <div class="alert alert-success">
           {{ session('status') }}
      </div>
      @endif
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
              <div class = " card-header ">Chat Room</div>
              <div class="panel panel-info chat-room">
                  <div class = "card-body">
                      <chat-log :messages="messages" :user="user"></chat-log>
                  </div>
              <div class="panel-footer">
                  <chat-composer v-on:messagesent="addMessage" v-on:loadmessage="getMessages"></chat-composer>
              </div>
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
  </div>  
</div>
@endsection
