<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card-header fondo text-center mb-3">
                    <h4>Permisos de Salidas Pedagogicas</h4>
                </div>
                <div id="accordion">
                    <div class="card" v-for="(perm,key) in permissions" :key="key">
                        <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                                <button class="btn btn-link" data-toggle="collapse" :data-target="`#collapse${key.trim().replace(/\s/g,'')}`" aria-expanded="true" :aria-controls="`collapse${key.trim().replace(/\s/g,'')}`">
                                    {{key}}
                                </button>
                            </h5>
                        </div>

                        <div :id="`collapse${key.trim().replace(/\s/g,'')}`" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body">
                                <table class="table table-responsive-xl table-hover table-striped center">
                                    <thead>
                                        <tr>
                                            <th>Actividad Pedagogica</th>
                                            <th>Estudiante</th>
                                            <th>Acudiente</th>
                                            <th>Telefono Acudiente</th>
                                            <th>Permiso</th>
                                        </tr>
                                    </thead>
                                    <tbody v-for="(pedag, key) in perm" :key="key">
                                        <tr>
                                            <td>{{pedag.pedagogical_activity}}</td>
                                            <td>{{pedag.student_name+' '+pedag.student_last_name}}</td>
                                            <td>{{pedag.parent_name+' '+pedag.parent_last_name}}</td>
                                            <td>{{pedag.parent_phone}}</td>
                                            <td>{{pedag.permission === '1' ? 'Autorizado': 'Sin Autorización'}}</td>
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
        data() {
            return {
                permissions:[]
            }
        },
        mounted() {
            this.getPedagogics();
        },
        
        methods: {
            getPedagogics() {  
                axios.get('permissionPedagogics').then((response)=>{
                    let result = _.chain(response.data).groupBy("pedagogical_activity").value();
                    console.log(result);
                    this.permissions = result;
                })
            },
        }
    }

</script>
