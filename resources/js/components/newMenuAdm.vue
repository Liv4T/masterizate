<template> 
    <div class="mb-3 text-center">
        <a href="/perfil_d" class="btn btn-sm btn-secondary">
            Mi Perfil
        </a>
        <div class="dropdown">
            <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="admin" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Administrativo
            </button>
            <div class="dropdown-menu" aria-labelledby="admin">
                <a class="dropdown-item" href="instituciones_adm">Crear Instituciones</a>
                <a class="dropdown-item" href="trimestre_adm">Crear Trimestre</a>
                <a class="dropdown-item" href="general_adm">Crear Salones</a>
                <!-- Pendiente creación de Perfiles -->
                <a class="dropdown-item" href="#">Crear Perfiles</a>
                <a class="dropdown-item" href="/piar">Estudiantes PIAR</a>
                <a class="dropdown-item" href="/salon_adm">Crear Usuarios</a>
                <a class="dropdown-item" href="/admin/configuracion">Parametros de Notas</a>
                <a class="dropdown-item" href="/nursing">Enfermería</a>
                <a class="dropdown-item" href="/foods">Alimentación</a>
                <a class="dropdown-item" href="/pedagogic">Transporte</a>
                <a class="dropdown-item" href="/reportAdmin">Reporte Actividades y Planificación Anual</a>
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
                <a class="dropdown-item" href="/utils">Útiles</a>
                <a class="dropdown-item" href="/pedagogic">Salidas Pedagógicas</a>
                <a class="dropdown-item" href="/teacher/lectives/planning">Administrar Electivas</a>
                <a class="dropdown-item" href="/teacher/lectives/courses">Clases Electivas</a>
                <a class="dropdown-item" href="/motiveAssistants">Creación de Motivos de Asistencia</a>            
                <a class="dropdown-item" href="/quarters">Creación de Trimestres</a>
                <a class="dropdown-item" href="#">Exalumnos</a>
                <!-- Modulo de Informes Pendiente por aclaración -->
                <a class="dropdown-item" href="#">Informes</a>
            </div>
        </div>

        <div class="dropdown">
            <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="formation" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Formación
            </button>
            <div class="dropdown-menu" aria-labelledby="formation">
                <a class="dropdown-item" href="/mensajes">Psicología</a>
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
                Gobierno Escolar
            </button>
            <div class="dropdown-menu" aria-labelledby="electives">
                <a class="dropdown-item" href="/chat">Chat</a>
                <a class="dropdown-item" href="/governmentMembers">Quiénes lo Conforman</a>
                <a class="dropdown-item" href="/legislation">Legislación</a>
                <!-- Modulo de actas y circulares pendiente -->
                <a class="dropdown-item" href="#">Actas y Circulares</a>
            </div>
        </div>
        
        <a href="/reportes">
            <button class="btn btn-sm btn-secondary">
                Mis Reportes
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
