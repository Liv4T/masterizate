<template>
  <div class="caja">
    <div class="panel panel-primary">
      <h4 class="panel-heading">Grupos</h4>
      <div>
        <form>
          <div class="form-group">
            <input class="form-control" type="text" v-model="nombre" placeholder="Nombre del grupo" />
          </div>
          <div class="form-group">
            <button class="btn btn-primary" v-on:click.prevent="()=>changeConsult(2)">Estudiante</button>
            <button class="btn btn-primary" v-on:click.prevent="()=>changeConsult(1)">Docentes</button>
          </div>
          <div v-show="docente == true">
            <label for>Docentes</label>
            <students-course :getIdUser="getIdUser" :findStudentOrTeacher="findStudentOrTeacher"></students-course>    
          </div>
          <br />
          <div v-show="estudiante == true">
            <label for>Estudiantes</label>
            <students-course :getIdUser="getIdUser" :findStudentOrTeacher="findStudentOrTeacher"></students-course>
          </div>
        </form>
      </div>
      <div class="panel-footer text-center">
        <button  type="submit" @click.prevent="createGroup" class="btn btn-info">Crear grupo</button>
      </div>
    </div>
  </div>
</template>

<script>
import StudentsCourse from './studentsCourse.vue';
export default {
  props: ["initialUsers"],

  data() {
    return {
      nombre: "",
      estudiante: false,
      docente: false,
      findStudentOrTeacher:"",
      users: []
    };
  },

  components: {
    StudentsCourse
  },

  methods: {
    getIdUser(data){
      if(data){
        this.users.push(data.user_id)
        toastr.success(`Estudiante ${data.user_name} Seleccionado`);
      }
    },
    changeConsult(val){
      if(val == 1){
        this.docente = true; 
        this.findStudentOrTeacher = 2;
        this.estudiante = false;
      }else{
        this.docente = false; 
        this.estudiante = true;
        this.findStudentOrTeacher = 1;
      }
    },
    createGroup() {
      axios
        .post("/groups", { name: this.nombre, users: this.users })
        .then(response => {
          this.name = "";
          this.users = [];
          Bus.$emit("groupCreated", response.data);
        });
    }
  }
};
</script>
<style>
.panel-footer {
  padding: 10px 15px;
  background-color: #e8e5e5;
  border-top: 1px solid #e8e5e5;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.caja {
  padding-left: 35px;
}
</style>
