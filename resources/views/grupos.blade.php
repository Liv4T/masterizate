@extends('layouts.app')

@section('content')
 {{-- <examp></examp> --}}
       @include('menu')
    @if (Auth::user()->isTeacher()||Auth::user()->isPsychology()||Auth::user()->isTutor())
        <inicio-component></inicio-component>
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
    <inicio-component></inicio-component>
 @endif
 @if (Auth::user()->type_user == '6')
    <menu-school></menu-school>
 @endif
 <div class="back">
<div class="container" style="background-image:url('uploads/Fondo_chat.jpg');">
    <div class="row">
        <div class="col-sm-6">
            <create-group :initial-users="{{ $users }}"></create-group>
                 <div class="caja">
                     <img
                        src="https://firebasestorage.googleapis.com/v0/b/bd-img.appspot.com/o/CHAT.png?alt=media&token=bfa70c69-9e53-46b7-a337-e64c67058147"
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
