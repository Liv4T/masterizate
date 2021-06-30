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
            <button class="btn btn-primary mt-2" v-on:click.prevent="()=>activeAdmin()">Administradores</button>
            <button class="btn btn-primary mt-2" v-on:click.prevent="()=>changeConsult(1)">Docentes</button>
            <button class="btn btn-primary mt-2" v-on:click.prevent="()=>changeConsult(2)">Estudiante</button>
            <button class="btn btn-primary mt-2" v-on:click.prevent="()=>activeParents()">Padres</button>
            <button class="btn btn-primary mt-2" v-on:click.prevent="()=>activeTutors()">Tutores</button>
            <button class="btn btn-primary mt-2" v-on:click.prevent="()=>activeGoverment()">Gobierno Escolar</button>
            <button class="btn btn-primary mt-2" v-on:click.prevent="()=>activeNursing()">Enfermería</button>
            <button class="btn btn-primary mt-2" v-on:click.prevent="()=>activeCoordinator()">Coordinadores</button>
            <button class="btn btn-primary mt-2" v-on:click.prevent="()=>activePsicologiest()">Psicología</button>
          </div>
          <div v-show="docente == true">
            <label for>Docentes</label>
            <students-course :getIdUser="getIdUser" :findStudentOrTeacher="findStudentOrTeacher"></students-course>    
          </div>
          <div v-show="showAdm == true || showP == true || showT == true || showG == true || showN == true || showC == true || showPs == true">
            <label>{{showAdm == true ? 
              'Administradores'
              : 
              showP == true ?
              'Padres'
              :
              showT == true ?
              'Tutores'
              :
              showG == true ?
              'Gobierno Escolar'
              :
              showN == true ?
              'Enfermeria'
              :
              showC == true ?
              'Coordinadores'
              :
              showPs == true ?
              'Psicologia'
              :
              ''
            }}</label>
            <br/>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody v-for="(user, key) in data" :key="key">
                <tr>
                  <td>{{user.name}}</td>
                  <td>{{user.last_name}}</td>
                  <td><button type="button" class="btn btn-primary" v-on:click="()=>getIdUser(student)">Seleccionar</button></td>
                </tr>
              </tbody>
            </table>
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
      showAdm: false,
      showP: false,
      showT: false,
      showG: false,
      showN: false,
      showC: false,
      showPs: false,
      findStudentOrTeacher:"",
      users: [],
      data: [],
      admin:[],
      parents:[],
      tutors:[],
      government:[],
      nursing:[],
      psicology:[],
      coordinator:[]
    };
  },

  components: {
    StudentsCourse
  },

  mounted(){
    this.getAdmins();
    this.getParents();
    this.getTutors();
    this.getGovenrments();
    this.getNursings();
    this.getPsicologist();
    this.getCoordinators();
  },


  methods: {
    getAdmins(){
      axios.get('/getAdministrators').then((response)=>{
        this.admin = response.data;
      })
    },
    getParents(){
      axios.get('/getParents').then((response)=>{
        this.parents = response.data;
      })
    },
    getTutors(){
      axios.get('/getTutor').then((response)=>{
        this.tutors = response.data;
      })
    },
    getGovenrments(){
      axios.get('/getSchoolGovernment').then((response)=>{
        this.government = response.data;
      })
    },
    getNursings(){
      axios.get('/getNurse').then((response)=>{
        this.nursing = response.data;
      })
    },
    getPsicologist(){
      axios.get('/getPsicologist').then((response)=>{
        this.psicology = response.data;
      })
    },
    getCoordinators(){
      axios.get('/getCoordinador').then((response)=>{
        this.coordinator = response.data;
      })
    },
    activeParents(){
      if(this.showP === false){
        this.showP = true;
        this.data = this.parents;
        this.showAdm= false;
        this.showT= false;
        this.showG= false;
        this.showN= false;
        this.showC = false;
        this.showPs = false;
      }else{
        this.showP = false;
        this.showAdm= false;
        this.showT= false;
        this.showG= false;
        this.showN= false;
        this.showC = false;
        this.showPs = false;
      }
    },
    activeTutors(){
      if(this.showT === false){
        this.data = this.tutors;
        this.showT = true;
        this.showP = false;
        this.showAdm= false;
        this.showG= false;
        this.showN= false;
        this.showC = false;
        this.showPs = false;
      }else{
        this.showT = false;
        this.showP = true;
        this.showAdm= false;
        this.showG= false;
        this.showN= false;
        this.showC = false;
        this.showPs = false;
      }
    },
    activeGoverment(){
      if(this.showG === false){
        this.data = this.government
        this.showG = true;
        this.showP = false;
        this.showT = false;
        this.showAdm= false;
        this.showN= false;
        this.showC = false;
        this.showPs = false;
      }else{
        this.showG = false;
        this.showP = false;
        this.showT = false;
        this.showAdm= false;
        this.showN= false;
        this.showC = false;
        this.showPs = false;
      }
    },
    activeNursing(){
      if(this.showN === false){
        this.showN = true;
        this.data = this.nursing;
        this.showG = false;
        this.showP = false;
        this.showT = false;
        this.showAdm= false;
        this.showC = false;
        this.showPs = false;
      }else{
        this.showN = false;
        this.showG = false;
        this.showP = false;
        this.showT = false;
        this.showAdm= false;
        this.showC = false;
        this.showPs = false;
      }
    },
    activeCoordinator(){
      if(this.showC === false){
        this.showN = false;
        this.data = this.coordinator;
        this.showG = false;
        this.showP = false;
        this.showT = false;
        this.showAdm= false;
        this.showC = true;
        this.showPs = false;
      }else{
        this.showN = false;
        this.showG = false;
        this.showP = false;
        this.showT = false;
        this.showAdm= false;
        this.showC = false;
        this.showPs = false;
      }
    },
    activePsicologiest(){
      if(this.showPs === false){
        this.showN = false;
        this.data = this.psicology;
        this.showG = false;
        this.showP = false;
        this.showT = false;
        this.showAdm= false;
        this.showC = false;
        this.showPs = true;
      }else{
        this.showN = false;
        this.showG = false;
        this.showP = false;
        this.showT = false;
        this.showAdm= false;
        this.showC = false;
        this.showPs = false;
      }
    },
    activeAdmin(){
      if(this.showAdm === false){
        this.showAdm = true;
        this.data = this.admin;
        this.docente = false;
        this.estudiante = false;
        this.showN = false;
        this.showG = false;
        this.showP = false;
        this.showT = false;
        this.showC = false;
        this.showPs = false;
      }else{
        this.showAdm = false;
        this.docente = false;
        this.estudiante = false;
        this.showN = false;
        this.showG = false;
        this.showP = false;
        this.showT = false;
        this.showC = false;
        this.showPs = false;
      }
      
    },
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
        this.showAdm = false;
        this.estudiante = false;
        this.showN = false;
        this.showG = false;
        this.showP = false;
        this.showT = false;
        this.showAdm= false;
        this.showC = false;
        this.showPs = false;
        
      }else{
        this.docente = false; 
        this.estudiante = true;
        this.showAdm = false;
        this.docente = false;
        this.showN = false;
        this.showG = false;
        this.showP = false;
        this.showT = false;
        this.showAdm= false;
        this.showC = false;
        this.showPs = false;
        this.findStudentOrTeacher = 1;
      }
    },
    createGroup() {
      console.log({ name: this.nombre, users: this.users })
      // axios
      //   .post("/groups", { name: this.nombre, users: this.users })
      //   .then(response => {
      //     this.name = "";
      //     this.users = [];
      //     Bus.$emit("groupCreated", response.data);
      //   });
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
