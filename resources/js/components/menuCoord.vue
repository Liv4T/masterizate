<template>
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="left">
                    <ul>
                        <a href="/perfil_d">
                            <li class="item-menu">
                                <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MI-PERFIL.png?alt=media&token=317fc013-8cce-448f-9af9-54e2981274d0" alt/>
                                    <span class="menu">Mi perfil</span>
                            </li>
                        </a>
                        <a href="/list/proceedings/general">
                            <li class="item-menu">
                                <img
                                    width="35px"
                                     src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/HORARIO_narnja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                                    alt
                                />
                                <span class="menu">Actas Generales</span>
                            </li>
                        </a>
                        <a href="/calendar">
                            <li class="item-menu">
                                <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/HORARIO_narnja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad" alt/>
                                <span class="menu">Calendario</span>
                            </li>
                        </a>
                        <div class="dropdown1">
                            <a>
                                <li class="item-menu">
                                    <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ANUNCIOS_naranja.png?alt=media&token=539c1428-c480-43bf-a132-73be35386940" alt/>
                                    <span class="menu">
                                        Comunicaciones&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                    <div class="dropdown1-content">
                                        <a href="/mensajes">
                                            <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MENSAJES_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad" alt/>
                                            Mensajes
                                        </a>
                                        <a href="/calendar">
                                            <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ANUNCIOS_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad" alt/>
                                            Calendario
                                        </a>
                                        <a href="/questions">
                                            <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/FOROS_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad" alt />
                                            Foro
                                        </a>
                                        <a href="/chat">
                                            <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/FOROS_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad" alt/>
                                            Chat
                                        </a>
                                        <a href="/chatGobernment">
                                            <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/FOROS_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad" alt />
                                            Chat Estamentos
                                        </a>
                                        <a href="/mensajes">
                                            <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/sicologia_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad" alt/>
                                            Psicología
                                        </a>
                                    </div>
                                </li>
                            </a>
                        </div>
                        <div class="dropdown">
                            <a>
                                <li class="item-menu">
                                    <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ANUNCIOS_naranja.png?alt=media&token=539c1428-c480-43bf-a132-73be35386940" alt/>
                                    <span class="menu">
                                        Académico&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                    <div class="dropdown-content">
                                        <a href="/materiasCoord">
                                            <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ACTIVIDADES_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad" alt />
                                            Materias&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </a>
                                        <a href="/claseCoord">
                                            <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ACTIVIDADES_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad" alt />
                                            Clases&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </a>
                                        <a href="/utils">
                                            <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ACTIVIDADES_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad" alt />
                                            Útiles&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </a>
                                        <a href="/pedagogic">
                                            <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ACTIVIDADES_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad" alt />
                                            Salidas Pedagógicas&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </a>
                                        <a href="/permissionPedagogic">
                                            <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ACTIVIDADES_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad" alt />
                                            Permisos Salidas&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </a>
                                    </div>
                                </li>
                            </a>
                        </div>
                        <a href="/board">
                            <li class="item-menu">
                                <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/NOTAS_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad" alt/>
                                <span class="menu">Pizarra</span>
                            </li>
                        </a>
                        <a href="/observer">
                            <li class="item-menu">
                                <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MIS-CURSOS.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad" alt/>
                                <span class="menu">Observador</span>
                            </li>
                        </a>
                        <a href="/manual">
                            <li class="item-menu">
                                <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MANUAL-DE-USUARIO_naranja.png?alt=media&token=bd2488fb-e121-432d-afd2-f223fcc0f29e" alt/>
                                <span class="menu">Manual de usuario</span>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    logout: function () {
      axios
        .post("logout")
        .then((response) => {
          if (response.status === 302 || 401) {
            window.location.href = "/login";
          } else {
            // throw error and go to catch block
          }
        })
        .catch((error) => {});
    },
  },
};
</script>

<style>
.left {
  width: 225px;
  height: auto;
  background: #f5f5f5;
  white-space: nowrap;
  transition: width 0.5s;
  position: absolute;
  z-index: 1;
}
.left ul {
  padding: 0;
  list-style-type: none;
  text-align: left;
}
.left li {
  width: auto;
  height: 60px;
  line-height: 50px;
  padding-left: 18px;
}
.left li:hover {
  background: #278080;
  color: white;
}

.left .item-menu {
  height: 50px;
  overflow: hidden;
  color: black;
}
.left a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
span.menu {
  padding-left: 17px;
}
.t_search {
  color: rgb(200, 200, 200);
  height: 35px;
  margin-left: 15px;
  width: 190px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f5f5f5;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background: #278080;
  color: white;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown1 {
  position: relative;
}

.dropdown1-content {
  display: none;
  position: absolute;
  background-color: #f5f5f5;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown1-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown1-content a:hover {
  background: #278080;
  color: white;
}

.dropdown1:hover .dropdown1-content {
  display: block;
}
.dropdown2 {
  position: relative;
}

.dropdown2-content {
  display: none;
  position: absolute;
  background-color: #f5f5f5;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown2-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown2-content a:hover {
  background: #278080;
  color: white;
}

.dropdown2:hover .dropdown2-content {
  display: block;
}
</style>
