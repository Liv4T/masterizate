<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card-header text-center fondo">
                    <h4>Codigos Vinculador</h4>
                </div>
                <button type="button" class="btn btn-primary mt-2 mb-2" data-toggle="modal" data-target="#code">
                    Vincular Codigo
                </button>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Nombre Tutor</th>
                            <th>Codigo</th>
                        </tr>
                    </thead>
                    <tbody v-for="(code, key) in codes" :key="key">
                        <tr>
                            <td>{{code.name}}</td>
                            <td>{{code.description}}</td>
                            <td>
                                <button class="btn btn-primary" v-on:click="edit(code)">Editar</button>
                                <button class="btn btn-danger" v-on:click="dropCode(code.id)">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                                    
                <div class="modal fade" id="code" tabindex="-1" role="dialog" aria-labelledby="codeLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="codeLabel">Codigo a Vincular</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="code">Codigo</label>
                                    <input type="text" class="form-control" name="code" v-model="code">
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-primary" v-on:click="consultCode">Consultar Codigo</button>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                <button type="button" class="btn btn-primary" v-on:click="saveCodes">Guardar</button>
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
        data(){
            return{
                code:""
            }
        },
        mounted(){
            this.getCodes();
        },
        methods:{
            getCodes(){
                axios.get('vinculationsTutor').then((response)=>{
                    this.codes = response.data
                })
            },
        }
    }
</script>

