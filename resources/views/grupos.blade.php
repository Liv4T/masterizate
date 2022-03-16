@extends('layouts.app')

@section('content')
 {{-- <examp></examp> --}}
       @include('menu')
    @if (Auth::user()->isTeacher()||Auth::user()->isPsychology()||Auth::user()->isTutor())

  @endif
  @if (Auth::user()->type_user == '3')
    <menu-lateral></menu-lateral>
 @endif
  @if (Auth::user()->type_user == '1')
  <!-- Se visualiza doble el menu en el componente de chat -->
  <!-- <menu-adm-component></menu-adm-component> -->
    <!-- <menu-adm></menu-adm> -->
 @endif
 @if (Auth::user()->type_user == '4')
    <menu-padres></menu-padres>
 @endif
 @if (Auth::user()->type_user == '5')
    <menu-psychology></menu-psychology>

 @endif
 @if (Auth::user()->type_user == '6')
    <menu-school></menu-school>
 @endif
 <div class="back">
<div class="container" style="background-image:url('uploads/Fondo_chat.jpg');">
    <div class="row">
        <div class="col-sm-6">
            <create-group :initial-users="{{ $users }}" :user="{{Auth::user()}}"></create-group>
                 <div class="caja">
                     <img
                        src="../images/logo-skills.png"resources
                        width="500px"
                        class="img-fluid"
                        alt=""
                    />
                 </div>

        </div>
        <div class="col-sm-6">
            <groups :initial-groups="{{ $groups }}" :user="{{ $user }}"></groups>
        </div>
    </div>
</div>
 </div>

@endsection
