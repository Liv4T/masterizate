@extends('layouts.app')

@section('content')    
    @if (Auth::user()->isTeacher()||Auth::user()->isPsychology()||Auth::user()->isTutor())
    <menu-docente></menu-docente>
    @endif
    @if (Auth::user()->type_user == '5')
        <menu-psychology></menu-psychology>
    @endif
    @if (Auth::user()->type_user == '4')
        <menu-padres></menu-padres>
    @endif
    @if(Auth::user()->type_user == '3' || Auth::user()->type_user == '1')
        <a href="/inicio" class="btn btn-primary">Volver</a>
    @endif
    <div class="back">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="card">
                    <div class="card-header fondo questions-header">
                        <div class="d-flex align-items-center">
                            Foro<span style="margin-left: 2px;" class="badge badge-danger">{{count($allQues)}}</span>
                            <div class="ml-auto">
                                @include('includes.success')
                                @include('includes.error')
                            </div>

                            <div class="ml-auto">
                                <a style="color:white;" href="{{route('createQuestion')}}" class="btn btn-sm btn-outline-secondary"><i class="fa fa-question"></i> Preguntas</a>
                            </div>
                        </div>
                    </div>

                    <div class="card-body questions-body">
                        @forelse($allQues as $que)
                            <div class="media">
                                <div class="media-body">
                                    <div class="d-flex align-items-center">
                                        <h3 class="mt-0"> <a class="etiqueta" href="{{route('showQuestion', $que->id)}}" target="_blank">{{$que->title}}</a> <span class="badge badge-secondary"><i style="color: white;" class="fa fa-clock"></i> {{$que->created_at->diffForHumans()}}</span> </h3>
                                        <div class="ml-auto">
                                             <div class="d-flex flex-column counters">
                                    {{-- <div class="votes" style="color:#3498db;">
                                        <strong><i class="fa fa-thumbs-up"></i> {{$que->votes_count}}</strong> {{Str::plural('vote', $que->votes_count)}}
                                    </div> --}}
                                    <div class="status {{($que->answer_count?($que->bestAnswer?'answered-accepted':'answered'):'unanswered')}}" style="color:#278080;">
                                        <strong><i class="fa fa-reply"></i> {{$que->answer_count}}</strong> {{\Illuminate\Support\Str::plural('respuestas', $que->answer_count)}}
                                    </div>
                                    <br>
                                    <div class="views" style="color: #278080;">
                                        <i class="fa fa-eye"></i> {{$que->views}}
                                    </div>
                                </div>
{{--                                            if user is logged in the edit/delete will be shown--}}
                                            @if(Auth::user())
                                                @if(Auth::user()->id == $que->user_id)
                                                    <a href="{{route('editQuestion', $que->id)}}" class="btn btn-warning btn-sm"><i class="fa fa-edit"></i> Editar</a>
                                                @endif
                                                @if(Auth::user()->id == $que->user_id)
                                                        <form class="d-inline" action="{{route('deleteQuestion',$que->id)}}" method="post">
                                                            {{-- @method('delete') --}}
                                                            @csrf
                                                            <button onclick="confirm('Esta seguro que desea eliminar?')" type="submit" class="btn btn-danger btn-sm"><i class="fas fa-trash"></i> Borrar</button>
                                                        </form>
                                                @endif
                                                @endif

                                        </div>
                                    </div>
                                    <p class="lead">
                                        Creado por:
                                        <a class="etiqueta" >{{$que->user['name']}}</a>
                                        <small class="text-muted">{{$que->created_at->diffForHumans()}}</small>
                                    </p>
                                    Descripci??n:
                                    {{\Illuminate\Support\Str::limit($que->body, 250)}}
                                </div>
                            </div>
                            <hr>
                        @empty
{{--                            if there is no any question in db the following will be showed up--}}
                            <div class="alert alert-warning">
                                <strong>no question is available</strong>
                            </div>
                            @endforelse
                            <div class="mx-auto">
                                {{$allQues->links()}}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
