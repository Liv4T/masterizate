<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card-header text-center fondo mb-2">
                    <h4>Estudiantes Vinculados con Codigo</h4>
                </div>
                <div id="accordion">
                    <div class="card" v-for="(codes, key) in codes" :key="key">
                        <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                                <button class="btn btn-link" data-toggle="collapse" :data-target="`#collapseOne${key}`" aria-expanded="true" :aria-controls="`collapseOne${key}`">
                                    {{key}}
                                </button>
                            </h5>
                        </div>

                        <div :id="`collapseOne${key}`" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body">
                                <table class="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>Nombre Estudiante</th>
                                            <th>Codigo</th>
                                        </tr>
                                    </thead>
                                    <tbody v-for="(codes, key) in codes" :key="key">
                                        <tr>
                                            <td>{{codes.name_student}}</td>
                                            <td>{{codes.code_vinculated}}</td>
                                        </tr>
                                    </tbody>
                                </table>                
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import _ from 'lodash'; 
    export default {
        props:['user'],
        data(){
            return{
                codes:[],
            }
        },
        mounted(){
            this.getCodes();
        },
        methods:{
            getCodes(){
                axios.get('getVinculationsTutor').then((response)=>{                    
                    let codes = response.data;   
                    let data = [];             
                    codes.forEach((element)=>{
                        axios.get(`api/tutor/${element.id_student}/profile`).then((response)=>{
                            data.push({
                                id: element.id,
                                code_vinculated: element.code_vinculated,
                                name_student: response.data.name+' '+response.data.last_name  
                            })
                            this.groupData(data);
                        })
                    })
                    
                })
            },
            groupData(data){
                const result = _.chain(data).groupBy("code_vinculated").value();
                this.codes= result
            },
        }
    }
</script>

