<template>
    <div>
        <div v-if="id_student === ''" class="col-sm-12">
            <div class="card text-center">
               <div class="card-header fondo">
                 <h4>Mis estudiantes</h4>
               </div>
            </div>
            <div class="card-body">

                <div>
                    <!--
                        <div class="row">
                            <div class="col-12 col-md-12 align-self-end">
                                <div class="percent-calification-base">
                                        <span>Porcentaje base de calificación:</span>
                                        <div class="percent-calification-save">
                                            <div class="input-group">
                                                <input type="number" class="form-control" v-model="current_area.calification_base">
                                                <div class="input-group-append">
                                                    <span class="input-group-text" >%</span>
                                                </div>
                                            </div>
                                            <button class="btn btn-primary" @click="saveCalificationCourse()">Aplicar</button>
                                        </div>
                                </div>
                            </div>
                        </div>
                    -->
                    <div class="students_container">
                        <table class="table table-hover center">
                            <thead>
                                <tr>
                                    <th class="text-center">Estudiante</th>
                                    <th class="text-center">Progreso</th>
                                    <th class="text-center">Calificación</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody v-if="students.length>0">
                                <tr v-for="(student,k_student) in students" v-bind:key="k_student">
                                    <td class="student_info">
                                        <div class="student_name">
                                            <img v-if="student.user_picture" :src="student.user_picture" alt="icon photo" style="width:25px">
                                            {{student.user_lastname}} {{student.user_name}}
                                        </div>
                                        <small class="student_notify" v-if="student.pending_calification>0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                                                <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                                                <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                                            </svg>
                                            Actividades pendientes de calificación
                                        </small>
                                    </td>
                                    <td>
                                        {{student.progress}} %
                                    </td>
                                    <td>
                                        {{student.score > -1? `${student.score}/${student.score_base}`:''}}
                                    </td>
                                    <td>
                                        <a class="btn btn-primary" v-on:click="getStudentId(student.user_id)">VER</a>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-if="students.length==0">
                                <tr>
                                    <td colspan="4">Cargando...</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <teacher-student  :id_area="areaId" :id_classroom="classroomId" :id_student="id_student" :cleanData="cleanData"></teacher-student>
        </div>
    </div>
</template>
<script>
export default {
    props: ["idArea","idClassroom"],
    data() {
        return {
            students:[],
            areas:[],
            current_area:{},
            areaId:"",
            classroomId:"",
            id_student:""
        }
    },
    mounted() {
        
        this.areaId = this.idArea;
        this.classroomId = this.idClassroom;
        
        this.areas = [];
        axios.get('/GetArearByUser').then(response => {
            this.areas = response.data;

            if(this.areas.length>0)
            {
                this.current_area=this.areas[0];                
            }
        });

        this.getStudents();
    },
    watch:{
        idArea(newVal, oldVal){
            if(newVal != oldVal){                
               this.areaId = newVal;
               this.getStudents();
            }
        },

        idClassroom(newVal, oldVal){
            if(newVal != oldVal){                
                this.classroomId = newVal;
                this.getStudents();
            }
        }
    },
    methods: {
        getStudents()
        {
            this.students = [];
            axios.get(`/api/teacher/area/${this.areaId}/classroom/${this.classroomId}/student`).then(response => {
                this.students = response.data;
            });
        },
        saveCalificationCourse(){
            console.log(this.current_area.calification_base);
             axios.put(`/api/teacher/area/${this.areaId}/classroom/${this.classroomId}/calification`,{percent_calification:this.current_area.calification_base}).then(response => {
                   toastr.success("Calificación actualizada correctamente");
                   this.getStudents();
            });
        },
        getStudentId(userId){
            this.id_student = userId;
        },
        cleanData(){
            this.id_student = ""
        }
    }
}
</script>
<style scoped>
.align-self-end{
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.percent-calification-base{
    margin-bottom: 20px;
}
.percent-calification-save{
     display: flex;
    justify-content: flex-start;
}
.percent-calification-save input{
    max-width: 80px;
}
.percent-calification-save>button{
    margin-left: 20px;
}
.area_container{
    display: flex;
    padding: 10px;
    border:2px solid #fff1d2;
    border-radius:4px;
    margin-top:10px;
    transition: background 0.8s;
    font-weight: 600;
    font-family: "Century Gothic";
    color:#000;
}
.area_container:hover{
      box-shadow: 0 0 11px rgba(33,33,33,.2);
      cursor: default;
      background: #ffc039 radial-gradient(circle, transparent 1%, white 1%) center/15000%;
      color:#000;
}
.area_container:active {
  background-color: #ffc039;
  background-size: 100%;
  text-decoration: none;
  transition: background 0s;
   color:white;
}
.area_container-active{
     background-color: #ffc039;
     color:#000;
}
.student_info{
    display: flex;
    flex-direction: column;
}
.student_name{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
.student_name>img{
    margin-right: 8px;
}
.student_notify{
    background: #edffff;
    padding: 3px;
    color:#278080;
}
</style>
