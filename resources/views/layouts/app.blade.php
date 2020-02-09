<!DOCTYPE html>
  <html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <!-- CSRF Token -->
      <meta name="csrf-token" content="{{ csrf_token() }}">

      <title>{{ config('app.name', 'Live4teach') }}</title>

      <!-- Scripts -->
      <script src="{{ asset('js/app.js') }}" defer></script>

      <!-- Fonts -->
      <link rel="dns-prefetch" href="//fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">

      <!-- Styles -->
      <link href="{{ asset('css/app.css') }}" rel="stylesheet">
      <link href="{{ asset('css/design.css') }}" rel="stylesheet">
      <script>
      window.Forum = <?php echo json_encode([
            'auth' => Auth::check(),
            'user_id' => Auth::check() ? Auth::user()->id : -1,
            'role' => Config::get('type_user')
        ]); ?>
      </script>
  </head>
  <body>
      
    <div id="app">
        <nav class="navbar bg-warning">
            <a class="mx-auto" href="/ccourse">Oferta del mes:Adquiere tu curso de marketing digital por $150.000</a>  
        </nav>
        <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    {{ config('Life4teach') }}
                    <b-img thumbnail fluid src="{{asset('images/LOGO-L4T-web.png')}}" rounded="circle" width="75" height="75" alt="4"></b-img>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                            <a class="nav-link" href="/plan">
                                <i class="fas fa-shopping-cart"></i>
                            </a>
                        </li>
                   
                     <!-- Menu Administrador -->
                    @if (Auth::check())
                        @if (Auth::user()->type_user == '1')
                        <li class="nav-item">
                            <a class="nav-link" href="/user">
                                Usuarios
                            </a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="/category">
                                Categorias
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/type">Tipos</a>
                        </li>
                       
                        <li class="nav-item">
                            <a class="nav-link" href="/class">Curso</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/resume">Hoja de Vida</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/vactivity">Actividad</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/evaluation">Evaluación</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/consult">Consultas</a>
                        </li>
                    </ul>
                    @endif
                    <!-- Menu Tutor -->
                     @if (Auth::user()->type_user == '2')
                        <li class="nav-item">
                            <a class="nav-link" href="/resume">Hoja de Vida</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/class">Mis cursos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/vactivity">Mis actividades</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/calification">Mis calificaciones</a>
                            <!-- Listado de calificaciones-->
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#">Conferencias</a>
                        </li>   
                         <li class="nav-item">
                            <a class="nav-link" href="/consult">Consultas</a>
                        </li>
                     @endif
                      <!-- Menu Estudiante -->
                     @if (Auth::user()->type_user == '3')
                        <li class="nav-item">
                            <a class="nav-link" href="/courseSt">Cursos disponbles</a>
                        </li>
                        <!-- En modificacion el aula virtual con el webinar y las actividades-->
                        <li class="nav-item">
                            <a class="nav-link" href="/mycourses">Mis cursos</a>
                        </li>     
                        <li class="nav-item">
                            <a class="nav-link" href="/calificationSt">Mis Calificaciones</a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link" href="/#">Conferencias</a>
                        </li>                                         
                     @endif
                @endif
                <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                    <!-- Authentication Links -->
                        <li class="form-inline">
                            <input class="form-control" type="search" placeholder="Buscar" aria-label="Search">
                            <button class="btn btn-danger" type="submit">Buscar</button>
                        </li>
                        @guest
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                        </li>
                        @if (Route::has('register'))
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                        </li>
                        @endif
                        @else
                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                {{ Auth::user()->name }} <span class="caret"></span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="/miPerfil">Mi Perfil</a>
                                 <a class="dropdown-item" href="/changePassword">Cambiar Contraseña</a>
                                <a class="dropdown-item" href="{{ route('logout') }}"
                                   onclick="event.preventDefault();
                                                 document.getElementById('logout-form').submit();">
                                    {{ __('Logout') }}
                                </a>
                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    @csrf
                                </form>
                            </div>
                        </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>
        <main class="py-4">
            @yield('content')
        </main>
    </div>
  </body>
</html>
<style>
.navbar{
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
}

.navbar a {
  float: left;
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
</style>