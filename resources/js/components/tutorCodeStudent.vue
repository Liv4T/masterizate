<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card-header text-center fondo mb-2">
                    <h4>Codigos</h4>
                </div>
                <div id="accordion" v-for="(codes, key) in codes" :key="key">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                                <button class="btn btn-link" data-toggle="collapse" :data-target="`#collapseOne${key.replace(/ /g, '')}`" aria-expanded="true" :aria-controls="`collapseOne${key.replace(/ /g, '')}`">
                                    {{key}}
                                </button>
                            </h5>
                        </div>

                        <div :id="`collapseOne${key.replace(/ /g, '')}`" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body">
                                <table class="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Descripción</th>
                                            <th>Codigo</th>
                                            <th>Fecha</th>                    
                                        </tr>
                                    </thead>
                                    <tbody v-for="(code, key) in codes" :key="key">
                                        <tr>
                                            <td>{{code.name}}</td>
                                            <td>{{code.description}}</td>
                                            <td>{{code.code}}</td>
                                            <td>{{code.date}}</td>
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
                axios.get('codes').then((response)=>{
                    let codes = response.data;
                    codes.forEach(element => {
                        axios.get(`getClassroomStudent/${this.user.id}`).then((response)=>{
                            let classroom = response.data;
                            classroom.forEach(el=>{
                                if(element.id_classroom === el.id_classroom){
                                    this.groupData(element)
                                }
                            })
                        })
                    });
                })
            },

            groupData(data){
                let codes = [];
                codes.push(data)
                const result = _.chain(codes).groupBy("text").value();
                this.codes = result
            },
        }
    }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

