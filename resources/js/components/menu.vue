<template>
    
    <div>
        <button class="btn btn-sm btn-secondary">
            Mi Perfil
        </button>
        <div class="dropdown">
            <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="admin" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Administrativo
            </button>
            <div class="dropdown-menu" aria-labelledby="admin">
                <a class="dropdown-item" href="#">Crear Instituciones</a>
                <a class="dropdown-item" href="#">Crear Salones</a>
                <a class="dropdown-item" href="#">Crear Perfiles</a>
                <a class="dropdown-item" href="#">Crear Usuarios</a>
                <a class="dropdown-item" href="#">Parametros de Notas</a>
            </div>
        </div>

        <div class="dropdown">
            <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="comunication" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Comunicaciones
            </button>
            <div class="dropdown-menu" aria-labelledby="comunication">
                <a class="dropdown-item" href="#">Mensajes</a>
                <a class="dropdown-item" href="#">Calendario</a>
                <a class="dropdown-item" href="#">Foro</a>
                <a class="dropdown-item" href="#">Chat</a>
                <a class="dropdown-item" href="#">Universidades</a>
            </div>
        </div>

        <div class="dropdown">
            <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="academic" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Académico
            </button>
            <div class="dropdown-menu" aria-labelledby="academic">
                <a class="dropdown-item" href="#">Planificación General</a>
                <a class="dropdown-item" href="#">Ciclos Y Clases</a>
                <a class="dropdown-item" href="#">Permisos Eliminar Ciclos</a>
                <a class="dropdown-item" href="#">Notas</a>
                <a class="dropdown-item" href="#">Utiles</a>
                <a class="dropdown-item" href="#">Salidas Pedagogicas</a>
                <a class="dropdown-item" href="#">Informes</a>
            </div>
        </div>

        <button class="btn btn-sm btn-secondary">Alimentación</button>
        <button class="btn btn-sm btn-secondary">Transporte</button>

        <div class="btn-group dropdown">
            <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Enfermeria
            </button>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Estudiantes</a>
            </div>
        </div>

        <div class="dropdown">
            <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="formation" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Formación
            </button>
            <div class="dropdown-menu" aria-labelledby="formation">
                <a class="dropdown-item" href="#">Psicologia</a>
                <a class="dropdown-item" href="#">Casos</a>
                <a class="dropdown-item" href="#">Permisos</a>
                <a class="dropdown-item" href="#">Proyectos Transversales</a>
                <a class="dropdown-item" href="#">Observador del Alumno</a>
            </div>
        </div>

        <div class="dropdown">
            <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="electives" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Electivas
            </button>
            <div class="dropdown-menu" aria-labelledby="electives">
                <a class="dropdown-item" href="#">Administrar Electivas</a>
                <a class="dropdown-item" href="#">Clases Electivas</a>
            </div>
        </div>

        <div class="dropdown">
            <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="electives" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Gobierno Escolar
            </button>
            <div class="dropdown-menu" aria-labelledby="electives">
                <a class="dropdown-item" href="#">Chat</a>
                <a class="dropdown-item" href="#">Quienes lo Conforman</a>
                <a class="dropdown-item" href="#">Legislación</a>
                <a class="dropdown-item" href="#">Actas y Circulares</a>
            </div>
        </div>

        <button class="btn btn-sm btn-secondary">Exalumnos</button>
                        
        <button class="btn btn-sm btn-secondary">Mis Reportes</button>

        <button class="btn btn-sm btn-secondary">Terminos y Condiciones</button>
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
