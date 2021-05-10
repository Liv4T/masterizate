<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card-header text-center fondo">
                    <h4>Codigos</h4>
                </div>
                <button type="button" class="btn btn-primary mt-2 mb-2" data-toggle="modal" data-target="#code">
                    Crear Codigo
                </button>
                <div class="card">                    
                    <div class="card-body">
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
                                                    <th>Acción</th>
                                                </tr>
                                            </thead>
                                            <tbody v-for="(code, key) in codes" :key="key">
                                                <tr>
                                                    <td>{{code.name}}</td>
                                                    <td>{{code.description}}</td>
                                                    <td>{{code.code}}</td>
                                                    <td>{{code.date}}</td>
                                                    <td>
                                                        <button class="btn btn-primary" v-on:click="edit(code)">Editar</button>
                                                        <button class="btn btn-danger" v-on:click="dropCode(code.id)">Eliminar</button>
                                                    </td>
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
        </div>

        <div class="modal fade" id="code" tabindex="-1" role="dialog" aria-labelledby="codeLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="codeLabel">Codigo a Guardar</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="name">Nombre</label>
                            <input type="text" class="form-control" name="name" v-model="name">
                        </div>

                        <div class="form-group">
                            <label for="description">Descripción</label>
                            <textarea name="description" id="description" class="form-control" v-model="description"></textarea>
                        </div>

                        <div class="form-group">
                            <label for="code">Codigo</label>
                            <input type="code" class="form-control" name="code" v-model="code">
                        </div>

                        <div class="form-group">
                            <label for="course">Curso</label>
                            <multiselect v-model="course" :options="coursesOptions" :multiple="false"
                                :close-on-select="false" :clear-on-select="false" :preserve-search="true"
                                placeholder="Seleccione una" label="text" track-by="id"
                                :preselect-first="false">
                                <template slot="selection" slot-scope="{ values, isOpen }"><span
                                        class="multiselect__single"
                                        v-if="values.length &amp;&amp; !isOpen">{{ values.length }} opciones
                                        selecionadas</span></template>
                            </multiselect>
                        </div>

                        <div class="form-group">
                            <label for="dateCode">Fecha inicio Reunion</label>
                            <input type="datetime-local" class="form-control" name="dateCode" v-model="date">
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
</template>
<script>
    import Multiselect from "vue-multiselect";
    Vue.component("multiselect", Multiselect);
    export default {
        data(){
            return{
                codes:[],
                id_to_update:"",
                name:"",
                description:"",
                code:"",
                course:{},
                coursesOptions:[],
                date:""
            }
        },
        components: {
            Multiselect
        },
        mounted(){
            this.getCodes();
            this.getCourses();
        },
        methods:{
            getCodes(){
                axios.get('codes').then((response)=>{
                    this.groupData(response.data)
                })
            },

            getCourses(){
                axios.get('/GetArearByUser').then(response => {
                    let courses = response.data;

                    courses.forEach(element => {
                        this.coursesOptions.push({
                            id: element.id,
                            id_class: element.id,
                            id_classroom: element.id_classroom,
                            text: element.text
                        })
                    });
                });
            },

            groupData(data){
                const result = _.chain(data).groupBy("text").value();
                this.codes = result
            },

            dropCode(id){
                if(window.confirm("Seguro que desea eliminar este dato?")){
                    axios.delete(`codes/${id}`).then((response)=>{
                        toastr.info(response.data);
                        this.getCodes();
                    }).catch((error)=>{
                        toastr.info("Upps ha ocurrido algo, intenta de nuevo mas tarde");
                        console.log(error)
                    })
                }
            },

            edit(data){
                console.log(data);
                this.id_to_update = data.id;
                this.name = data.name;
                this.description = data.description;
                this.code = data.code;
                this.course = {
                    id: data.id_class,
                    id_class: data.id_class,
                    id_classroom: data.id_classroom,
                    text: data.text,
                }
                this.date = data.date;
                $("#code").modal("show");
            },

            cleanForm(){
                this.id_to_update = "";
                this.name = "";
                this.description = "";
                this.code = "";
                this.course ={};
                this.date = "";
            },

            saveCodes(){
                if(this.id_to_update != ""){
                    axios.put(`codes/${this.id_to_update}`,{
                        name: this.name,
                        description: this.description,
                        code: this.code,
                        id_class: this.course.id_class,
                        id_classroom: this.course.id_classroom,
                        text: this.course.text,
                        date: this.date,
                    }).then((response)=>{
                        toastr.success(response.data);
                        this.getCodes();
                        this.cleanForm()
                        $("#code").modal("hide");
                    }).catch((error)=>{
                        toastr.info("Upps ha ocurrido algo, intenta de nuevo mas tarde");
                        console.log(error)
                    })
                }else{                    
                    axios.post('codes',{
                        name: this.name,
                        description: this.description,
                        code: this.code,
                        id_class: this.course.id_class,
                        id_classroom: this.course.id_classroom,
                        text: this.course.text,
                        date: this.date,
                    }).then((response)=>{
                        toastr.success(response.data);
                        this.getCodes();
                        this.cleanForm()
                        $("#code").modal("hide");
                    }).catch((error)=>{
                        toastr.info("Upps ha ocurrido algo, intenta de nuevo mas tarde");
                        console.log(error)
                    })
                }
            }
        }
    }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

