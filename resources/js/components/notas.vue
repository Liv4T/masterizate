<template>
    <div class="row justify-content-center">
        <div id="crud" class="col-sm-12">
            <div class="card text-center">
                <h3 class="card-header fondo">{{ $t('lang.grades.score') }}</h3>

                <div class="card-body">
                    <div class="row">
                        <div :class=" `${current_student.progress ? 'col-12 col-md-4 student_info' : 'col-12 col-md-12 student_info'}`">
                            <img v-if="current_student.picture" :src="current_student.picture" alt="photo" style="width:70px" />
                            <h4>{{ current_student.last_name }} {{ current_student.name }}</h4>
                            <div>
                                <small>{{ $t('lang.general.email') }}:</small>
                                <span>{{ current_student.email }}</span>
                            </div>                            
                        </div>
                        <div class="col-12 col-md-8" v-if="current_student.progress">
                            <div class="course_info">
                                <h5>{{ current_student.area_name }} {{ current_student.classroom_name }}</h5>
                                <div class="course_resume">
                                    <div class="course_resume_item">
                                        <span>{{ current_student.progress }}%</span>
                                        <small>{{ $t('lang.general.progress') }}</small>
                                    </div>
                                    <div class="course_resume_item">
                                        <span>{{ current_student.score > 0 ? current_student.score : "-" }} / {{ current_student.score_base }}</span>
                                        <small>{{ $t('lang.general.average') }}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <table class="table table-responsive-xl table-hover table-striped center">
                        <thead>
                            <tr>
                                <th>{{ $t('lang.general.activity') }}</th>
                                <th>{{ $t('lang.general.progress') }}</th>
                                <th>{{ $t('lang.grades.score') }}</th>
                            </tr>
                        </thead>
                        <tbody v-for="(_module,key) in modules" :key="key">
                            <tr>
                                <td>{{ _module.driving_question}}</td>

                                <td v-if="_module.score>-1">{{ _module.progress}} %</td>
                                <td v-else>-</td>
                            
                                <td v-if="_module.score>-1">{{ _module.score}} / 5</td>
                                <td v-else>-</td>
                            </tr>
                        </tbody>
                    </table>                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["idArea","idClassroom","user","nameArea","id_lective_planification"],
    data() {
        return {
            current_student:{},
            modules:[]
        };
    },
    mounted(){
        this.getData();
    },
    watch:{
        nameArea(old_value, new_value){
            if(old_value != new_value){
                this.getData();
            }
        }
    },
    methods: {
        getData(){
            this.current_student = {};
            this.modules = [];
            if(this.idArea === "" && this.idClassroom === ""){
                axios.get(`getNotesStudents`).then((response)=>{
                    let data = response.data;

                    data.forEach((e)=>{
                        this.modules.push({
                            driving_question: e.activity_name,
                            progress: e.calification > 0 ? '100' : 0,
                            score: e.calification
                        });

                        this.current_student = {
                            picture: e.user_picture,
                            name: e.user_name,
                            last_name: e.user_last_name,
                            email: e.user_email
                        }
                    })                    
                                
                })
            }else{
                axios.get(`/api/teacher/area/${this.idArea}/classroom/${this.idClassroom}/student/${this.user.id}`).then((response)=>{
                    this.current_student = response.data;
                });

                axios.get(`/api/teacher/area/${this.idArea}/classroom/${this.idClassroom}/student/${this.user.id}/module`).then((response)=>{
                    this.modules = response.data;                 
                });
            }
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
</style>
