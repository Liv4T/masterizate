@extends('errors::illustrated-layout')

@section('code', '429')
@section('title', __('Too Many Requests'))

@section('image')
    <div style="background-image: url({{ asset('/svg/403.svg') }});" class="absolute pin bg-cover bg-no-repeat md:bg-left lg:bg-center">
    </div>
@endsection

@section('message', __('Lo sentimos, está haciendo demasiadas peticiones a nuestros servidores.'))
