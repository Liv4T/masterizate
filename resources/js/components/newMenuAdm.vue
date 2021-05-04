<template class="text-center"> 
    <div >
        <a href="/perfil_d" class="btn btn-sm btn-secondary">
            Mi Perfil
        </a>
        <div class="dropdown">
            <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="admin" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Administrativo
            </button>
            <div class="dropdown-menu" aria-labelledby="admin">
                <a class="dropdown-item" href="instituciones_adm">Crear Instituciones</a>
                <a class="dropdown-item" href="general_adm">Crear Salones</a>
                <!-- Pendiente creación de Perfiles -->
                <a class="dropdown-item" href="#">Crear Perfiles</a>
                <a class="dropdown-item" href="/salon_adm">Crear Usuarios</a>
                <a class="dropdown-item" href="/admin/configuracion">Parametros de Notas</a>
            </div>
        </div>

        <div class="dropdown">
            <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="comunication" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Comunicaciones
            </button>
            <div class="dropdown-menu" aria-labelledby="comunication">
                <a class="dropdown-item" href="/mensajes">Mensajes</a>
                <a class="dropdown-item" href="/calendar">Calendario</a>
                <a class="dropdown-item" href="/questions">Foro</a>
                <a class="dropdown-item" href="/chat">Chat</a>
                <!-- Pendiente Modulo de Universidades -->
                <a class="dropdown-item" href="#">Universidades</a>
            </div>
        </div>

        <div class="dropdown">
            <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="academic" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Académico
            </button>
            <div class="dropdown-menu" aria-labelledby="academic">
                <a class="dropdown-item" href="/planificacion">Planificación General</a>
                <a class="dropdown-item" href="/docente/clases">Ciclos Y Clases</a>
                <a class="dropdown-item" href="/deleteClassAndCicles">Permisos Eliminar Ciclos</a>
                <a class="dropdown-item" href="/notas_d">Notas</a>
                <a class="dropdown-item" href="/utils">Utiles</a>
                <a class="dropdown-item" href="/pedagogic">Salidas Pedagogicas</a>
                <!-- Modulo Informes pendiente por aclaración -->
                <a class="dropdown-item" href="#">Informes</a>
            </div>
        </div>

        <a href="/foods" class="btn btn-sm btn-secondary">Alimentación</a>
        <a href="/pedagogic" class="btn btn-sm btn-secondary">Transporte</a>

        <div class="btn-group dropdown">
            <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Enfermeria
            </button>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="/nursing">Estudiantes</a>
            </div>
        </div>

        <div class="dropdown">
            <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="formation" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Formación
            </button>
            <div class="dropdown-menu" aria-labelledby="formation">
                <a class="dropdown-item" href="/mensajes">Psicologia</a>
                <!-- Modulo de Casos pendiente por aclaración -->
                <a class="dropdown-item" href="#">Casos</a>
                <a class="dropdown-item" href="permissionPedagogic">Permisos</a>
                <!-- Modulo de proyectos Transversales pendientes por aclaración -->
                <a class="dropdown-item" href="#">Proyectos Transversales</a>
                <a class="dropdown-item" href="/observer">Observador del Alumno</a>
            </div>
        </div>

        <div class="dropdown">
            <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="electives" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Electivas
            </button>
            <div class="dropdown-menu" aria-labelledby="electives">
                <a class="dropdown-item" href="/teacher/lectives/planning">Administrar Electivas</a>
                <a class="dropdown-item" href="/teacher/lectives/courses">Clases Electivas</a>
            </div>
        </div>

        <div class="dropdown">
            <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="electives" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Gobierno Escolar
            </button>
            <div class="dropdown-menu" aria-labelledby="electives">
                <a class="dropdown-item" href="/chat">Chat</a>
                <a class="dropdown-item" href="/governmentMembers">Quienes lo Conforman</a>
                <a class="dropdown-item" href="/legislation">Legislación</a>
                <!-- Modulo de actas y circulares pendiente -->
                <a class="dropdown-item" href="#">Actas y Circulares</a>
            </div>
        </div>

        
            <a href="#">
                <button class="btn btn-sm btn-secondary">
                    Exalumnos
                </button>
            </a>
        
                        
        
            <a href="">
                <button class="btn btn-sm btn-secondary">
                    Mis Reportes
                </button>
            </a>

        
            <a href="../../uploads/Terminos _Condiciones_liv4t.pdf">
                <button class="btn btn-sm btn-secondary">
                    Terminos y Condiciones
                </button>
            </a>
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
