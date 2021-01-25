<template>
      <div class="row">
            <div class="col-12 col-md-12">
                <div class="row">
                    <div class="col-12 col-md-12">
                        <div class="class_container_header">
                            <span>Contenido de la clase:</span>
                            <button class="btn btn-link" @click="GoReturnPage()">Regresar</button>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-12 class_content_title">
                        <span>{{course.name}}</span>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-md-12">
                        <div class="class_container" v-for="(content,k_content) in course.content" v-bind:key="k_content">
                            <span>{{content.content_type}}:{{content.description}}</span>
                        </div>
                    </div>
                </div>
                 <div class="row">
                    <div class="col-12 col-md-12">
                        <div class="class_container" v-for="(activity,k_activity) in course.activities" v-bind:key="k_activity">
                            <span>ACTIVIDAD:{{activity.name}} </span>
                            <span>{{activity.score}}/5</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
</template>
<script>
export default {
    props: ['id_area','id_classroom','id_student','id_module','id_class'],
    data() {
        return {
            classs:[],
            current_class:{},
            course:{}
        }
    },
    mounted() {
        this.classs = [];
        this.getClassContent();
    },
    methods: {
        getClassContent()
        {
            return new Promise((resolve,reject)=>{
                 axios
                    .get(`/api/teacher/class/${this.id_class}/student/${this.id_student}`)
                    .then(response => {
                        this.course = response.data;
                        resolve();
                    },e=>reject(e));
            })
        },
        classSelectEvent(_class){
            this.current_class=_class;

            location.href=`/docente/area/${this.id_area}/curso/${this.id_classroom}/estudiante/${this.id_student}/modulo/${this.id_module}/clase/${this.current_class.id}`;
        },
        GoReturnPage(){
             window.history.back();
        }
    }
}
</script>
<style scoped>

.class_container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    border:2px solid #ffc039;
    border-radius:4px;
    margin-top:10px;
    transition: background 0.8s;
    font-weight: 600;
    font-family: "Century Gothic";
    color:#000;
}
.class_container:hover{
      box-shadow: 0 0 11px rgba(33,33,33,.2);
      cursor: default;
      background: #ffc039 radial-gradient(circle, transparent 1%, white 1%) center/15000%;
      color:#000;
}
.class_container:active {
  background-color: #ffc039;
  background-size: 100%;
  text-decoration: none;
  transition: background 0s;
   color:white;
}
.class_container-active{
     background-color: #ffc039;
     color:#000;
}
.class_notify{
    font-weight: 700;
    color:#278080;
    background: #edffff;
}
.class_container_info{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.class_container_score{
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
}
.class_container_header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.class_content_title{
    width: 100%;
    padding: 20px;
    font-size: 1.5em;
    font-weight: 600;
    background-color:#f5f5f5 ;
    margin-bottom: 10px;
    border-radius: 8px;
    color:#278080;
}
.class_content_container{
    width: 100%;
    padding: 8px;
}
</style>
