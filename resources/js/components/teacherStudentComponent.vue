<template>
  <div class="justify-content-center">
    <div class="col-sm-12">
      <div class="card text-center">
        <div class="card-header fondo">
          <h4>Progreso de estudiante</h4>
        </div>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-12 col-md-4 student_info">
            <img v-if="current_student.picture" :src="current_student.picture" alt="photo" style="width:70px" />
            <h4>{{ current_student.last_name }} {{ current_student.name }}</h4>
            <div>
              <small>Correo:</small>
              <span>{{ current_student.email }}</span>
            </div>
             <a :href="`/api/student/${current_student.id}/calification-report`" target="_blank" class="btn btn-primary">Planilla de notas</a>
          </div>
          <div class="col-12 col-md-8">
            <div class="course_info">
              <h5>{{ current_student.area_name }} {{ current_student.classroom_name }}</h5>
              <div class="course_resume">
                <div class="course_resume_item">
                  <span>{{ current_student.progress }}%</span>
                  <small>Progreso</small>
                </div>
                <div class="course_resume_item">
                  <span>{{ current_student.score > 0 ? current_student.score : "-" }} / {{ current_student.score_base }}</span>
                  <small>Promedio</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="btn btn-link" v-on:click="cleanData" style="margin-left: 90%;">Regresar</button>
        
        <teacher-student-module-select v-if="!id_module" 
          :id_area="id_area" 
          :id_classroom="id_classroom" 
          :id_student="id_student"
        ></teacher-student-module-select>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ["id_area", "id_classroom", "id_student", "id_module", "id_class","cleanData"],
    data() {
      return {
        modules: [],
        current_area: {},
        current_student: {},
        current_module: {},
      };
    },
    mounted() {
      this.modules = [];
      this.getStudentInformation().then(() => {
        this.getModules();
      });
    },
    methods: {
      getStudentInformation() {
        return new Promise((resolve, reject) => {
          axios.get(`/api/teacher/area/${this.id_area}/classroom/${this.id_classroom}/student/${this.id_student}`).then(
            (response) => {
              this.current_student = response.data;
              resolve();
            },
            (e) => reject(e)
          );
        });
      },
      getModules() {
        return new Promise((resolve, reject) => {
          axios.get(`/api/teacher/area/${this.id_area}/classroom/${this.id_classroom}/student/${this.id_student}/module`).then(
            (response) => {
              this.modules = response.data;
              resolve();
            },
            (e) => reject(e)
          );
        });
      },
      executeCleanData(){
        this.cleanData();
      }
    },
  };
</script>
<style scoped>
  .student_info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }
  .student_info > h4 {
    font-weight: 600;
    margin-top: 20px;
  }

  .course_info {
    background: #ffedc5;
    width: 100%;
    border-radius: 5px;
    padding: 15px;
    min-height: 150px;
    text-align: center;
    color: #278080;
  }
  .course_resume {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 30px;
    color: #000;
  }
  .course_resume_item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .course_resume_item > span {
    font-size: 2.5em;
    font-weight: 700;
    margin-bottom: 5px;
  }
  .course_resume_item > small {
    font-size: 0.9em;
  }
  .module_container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    border: 2px solid #ffc039;
    border-radius: 4px;
    margin-top: 10px;
    transition: background 0.8s;
    font-weight: 600;
    font-family: "Century Gothic";
    color: #000;
  }
  .btn-options {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .btn-options .btn {
    width: 100%;
    margin-bottom: 5px;
  }
</style>
