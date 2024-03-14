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
      <script src="https://kit.fontawesome.com/a72f7eba65.js" crossorigin="anonymous"></script>
      <script src="https://unpkg.com/vue-i18n@8"></script>
    <!--<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" />-->
    <link href="https://unpkg.com/@coreui/coreui@2.1.16/dist/css/coreui.min.css" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" />
    <link href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" rel="stylesheet" />
    <link href="https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap4.min.css" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/css/select2.min.css" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/css/bootstrap-datetimepicker.min.css" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.5.1/min/dropzone.min.css" rel="stylesheet" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/solid.css"
      integrity="sha384-ioUrHig76ITq4aEJ67dHzTvqjsAP/7IzgwE7lgJcg2r7BRNGYSK0LwSmROzYtgzs"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/brands.css"
      integrity="sha384-i2PyM6FMpVnxjRPi0KW/xIS7hkeSznkllv+Hx/MtYDaHA5VcF0yL3KVlvzp8bWjQ"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/fontawesome.css"
      integrity="sha384-sri+NftO+0hcisDKgr287Y/1LVnInHJ1l+XC7+FOabmTTIK0HnE2ID+xxvJ21c5J"
      crossorigin="anonymous"
    />

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

    <!-- Begin emoji-picker Stylesheets -->
    <link href="//onesignal.github.io/emoji-picker/lib/css/emoji.css" rel="stylesheet">
   <!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
 fbq('init', '982962035622248');
fbq('track', 'PageView');
</script>
<noscript>
 <img height="1" width="1"
src="https://www.facebook.com/tr?id=982962035622248&ev=PageView
&noscript=1"/>
</noscript>
<!-- End Facebook Pixel Code -->
<meta name="facebook-domain-verification" content="td191lrmnf24bufy5aogmpe5svo0pl" />

  </head>
  <body class="color-body">

    <div id="app">
        <!-- Google Tag Manager (noscript) -->
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5LM3568"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
       <nav class="navbar fixed-top navbar-expand-md navbar-light navbar-laravel">
                <a href=""><i class="fab fa-facebook icon-large"></i></a>
                <a href=""><i class="fab fa-instagram icon-large"></i></a>
                <a href=""><i class="far fa-envelope icon-large"></i></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre style="color: white; font-weight:700;">
                                Alianzas<span class="caret"></span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/canada">Canadá Idiomas</a>
                                <a class="dropdown-item" href="/canadaHigh">Canadá High School</a>
                                <a class="dropdown-item" href="/theaterLanding">Requisitos Teatro</a>
                            </div>
                        </li>
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav mr-sm-6 justify-content-start">
                        <!-- Authentication Links -->
                            @guest
                            <li class="nav-item">
                                <a class="btn-nav" href="{{ route('loginNew') }}">{{ __('INICIAR SESIÓN') }}</a>
                            </li>
                            @if (Route::has('registerNew'))
                            <li class="nav-item">
                                <a class="btn-nav2" href="{{ route('tutorRegisterNew') }}">{{ __('REGÍSTRATE') }}</a>
                            </li>
                            @endif
                            @else
                            <li class="nav-item dropdown">
                               <notification-component></notification-component>
                            </li>
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="/inicio">Ir a clase</a>
                                    <a class="dropdown-item" href="/changePassword">Cambiar Contraseña</a>
                                    <a class="dropdown-item" href="/manual">Ayuda</a>
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
        </nav>
        <a href="https://wa.me/573165268709?text=Me%20gustaría%20saber%20más%20de%20masterizate" class="whatsapp" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
        <main id="content">
            @yield('content')

        </main>
    </div>
            @yield('scripts')
  </body>
</html>
<style>
.color-body{
    background-color: rgba(2, 106, 106, 0.86);
}
.navbar{
    position: -webkit-sticky;
    position: sticky;
    top: 0;
}

.navbar a {
  float: left;
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;

}
.navbar-brand{
    max-height: 80px;
}
.navbar-brand img{
    width:200px;
}
.navbar-brand>div{
    background-color:white;
    max-width: 100%;
    border-radius:5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
}
.py-3{
    margin-top:5px;
}
.navbar-laravel{
    background-color: rgb(2, 4, 79);

}
.btn-nav{
    color: white !important;
    background-color: black;
    border-radius: 10px;
    line-height: 0.6;
    text-decoration: none !important;
    font-size: 13px !important;
}
.btn-nav2{
    color: white !important;
    background-color: none;
    border-radius: 10px;
    line-height: 0.6;
    font-size: 13px !important;
}
.icon-large{
    font-size: 17px;
}
.whatsapp {
  position:fixed;
  width:60px;
  height:60px;
  bottom:40px;
  right:40px;
  background-color:#25d366;
  color:#FFF;
  border-radius:50px;
  text-align:center;
  font-size:30px;
  z-index:100;
}
.whatsapp a{
    color: white;
}
.whatsapp-icon {
  margin-top:13px;
}
@media only screen and (max-width: 400px) {
    .navbar-brand img{
        width:150px;
    }
}
</style>
<script>
    document.getElementById('content').onscroll = function() {
        console.log("scrolling");
    };
</script>
   @if(isset($usersChart))
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js" charset="utf-8"></script>
{!! $usersChart->script() !!}
@endif
