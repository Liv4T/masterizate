<template>
    <div class="card text-center">
        <div v-if="showLectives === false">
            <h3 class="card-header fondo">Mis clases</h3>
            <div class="card-body" v-if="clasId === ''">                        
                <div class="card">                                
                    <table class="table table-responsive-xl table-hover table-striped center">
                        <thead>
                            <tr>
                                <th>Ciclo de aprendizaje</th>
                                <th>Acción</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody v-for="(clas, k) in clases" :key="k" >
                            <tr>
                                <td>{{ clas.text }}</td>
                                <td>
                                    <a class="btn btn-primary" v-on:click="btnShow(clas.id)">Ir a Ciclo</a>
                                </td>
                                <td>
                                    <div class="check" v-if="clas.progress==100">
                                        <svg                                                            
                                            width="2em"
                                            height="2em"
                                            viewBox="0 0 16 16"
                                            class="bi bi-check-circle-fill"
                                            fill="#28a745"
                                            xmlns="http://www.w3.org/2000/svg"
                                                        
                                        >
                                            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
                                        </svg>
                                        <p class="text-success" >Completado</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>                                
                </div>
            </div>
            <div v-else>
                <student-module :clasId="clasId" :cleanClasId="cleanClasId" :moduleId="idModule"></student-module>
            </div>
        </div>
        <div v-else>
            <lectives-student-courses :id_lective_planification="id_lective_planification"></lectives-student-courses>
        </div>
    </div>
</template>
<script>
export default {
    props:['nameArea','id_lective_planification','idClass', 'moduleId'],
    data() {
        return {
            clases: [],
            showLectives: false,
            descripcion: "",
            logro: "",
            fechaE: "",
            fechaR: "",
            id_act: "",
            errors: [],
            fillS: [],
            clasId: "",
            idModule:""
        };
    },    
    mounted() {
        this.clasId= this.idClass;
        this.idModule = this.moduleId;
        this.getData();
    },
    watch:{
        nameArea(old_value, new_value){
            if(old_value != new_value){
                this.clasId="";
                this.idModule="";
                this.getData();
            }
        },

        idClass(newValue, oldValue){
            
            if(newValue != oldValue){
                this.clasId = newValue
            }
        },

        moduleId(newValue, oldValue){
            if(newValue !== oldValue){
                this.idModule = this.moduleId;
            }
        }
    },
    methods: {
        getData(){
            axios.get("/GetArearByUser").then((response) => {
                this.clases=[]
                let areas = response.data.filter(e=>e.text === this.nameArea)
                if(areas.length > 0){
                    this.showLectives = false
                    areas.forEach((e)=>{
                        this.botones(e.id,e.id_classroom);
                    })
                }else{
                    this.showLectives = true
                }
                
            }).catch(e=>{
                toastr.info("No se encuentran clases Relacionadas")
                console.log(e);
            });
            // console.log("Component mounted.");
        },
        botones(area_id,classroom_id) {
            var urlsel = "/viewGetWeek/" + area_id + "/" + classroom_id;
            axios.get(urlsel).then((response) => {
                this.clases = response.data;
            });
        },
        btnShow(clasId){
            this.clasId = clasId;
        },
        cleanClasId(){
            this.clasId = "";
            this.idModule = "";
        }
    },
};
</script>
<style>
.check{
    margin-left: 8px;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
p{ 
    margin: 0 0 0 8px;
    font-size: 16px;
}
</style>
