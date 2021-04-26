<template>
    <!-- Modal -->
    <div class="modal fade" id="EditModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edición de Observación</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h3>Información del Estudiante</h3>
                    <div class="row">
                        <div class="col-6">
                            <label for="name">Nombre</label>
                            <multiselect v-model="studentToSave" :options="studentsOptions" :multiple="false"
                                :close-on-select="false" :clear-on-select="false" :preserve-search="true"
                                placeholder="Seleccione una o varias" label="text" track-by="id"
                                :preselect-first="false">
                                <template slot="selection" slot-scope="{ values, isOpen }"><span
                                        class="multiselect__single"
                                        required
                                        v-if="values.length &amp;&amp; !isOpen">{{ values.length }} opciones
                                        selecionadas</span></template>
                            </multiselect>
                        </div>
                        <div class="col-6">
                            <label for="date_birth">Fecha de Nacimiento</label>
                            <input id="date_birth" class="form-control" type="date" v-model="newStudentEdit.date_birth" required/>
                        </div>
                        <div class="col-6">
                            <label for="ageEst">Edad</label>
                            <input id="ageEst" class="form-control" type="number" v-model="newStudentEdit.age" required/>
                        </div>
                        <div class="col-6">
                            <label for="sizeEst">Talla</label>
                            <input id="sizeEst" class="form-control" type="text" v-model="newStudentEdit.size" required/>
                        </div>
                        <div class="col-6">
                            <label for="weight_Est">Peso</label>
                            <input id="weight_Est" class="form-control" type="text" v-model="newStudentEdit.weight" required/>
                        </div>
                        <div class="col-6">
                            <label for="identification_Est">Identificación</label>
                            <input id="identification_Est" class="form-control" type="text" v-model="newStudentEdit.identification" required/>
                        </div>
                    </div>
                    <h3 class="mt-5">Información de los padres</h3>
                    <div class="row">
                        <div class="col-6">
                            <label for="fatherName">Nombre del Padre</label>
                            <multiselect v-model="fatherToSave" :options="parentsOptions" :multiple="false"
                                :close-on-select="false" :clear-on-select="false" :preserve-search="true"
                                placeholder="Seleccione una o varias" label="text" track-by="id"
                                :preselect-first="false">
                                <template slot="selection" slot-scope="{ values, isOpen }"><span
                                        class="multiselect__single"
                                        v-if="values.length &amp;&amp; !isOpen">{{ values.length }} opciones
                                        selecionadas</span></template>
                            </multiselect>
                        </div>
                        <div class="col-6">
                            <label for="office_Father">Profesión u Oficio</label>
                            <input id="office_Father" class="form-control" type="text" v-model="newStudentEdit.office_father" />
                        </div>
                        <div class="col-6">
                            <label for="motherName">Nombre de la Madre</label>
                            <multiselect v-model="motherToSave" :options="parentsOptions" :multiple="false"
                                :close-on-select="false" :clear-on-select="false" :preserve-search="true"
                                placeholder="Seleccione una o varias" label="text" track-by="id"
                                :preselect-first="false">
                                <template slot="selection" slot-scope="{ values, isOpen }"><span
                                        class="multiselect__single"
                                        v-if="values.length &amp;&amp; !isOpen">{{ values.length }} opciones
                                        selecionadas</span></template>
                            </multiselect>
                        </div>
                        <div class="col-6">
                            <label for="office_Mother">Profesión u Oficio</label>
                            <input id="office_Mother" class="form-control" type="text" v-model="newStudentEdit.office_mother" >
                        </div>
                    </div>
                    <h3 class="mt-5">Información General</h3>
                    <div class="row">
                        <div class="col-6">
                            <label for="address_general">Dirección</label>
                            <input id="address_general" class="form-control" type="text" v-model="newStudentEdit.address" required/>
                        </div>
                        <div class="col-6">
                            <label for="phone_general">Telefono</label>
                            <input id="phone_general" class="form-control" type="text" v-model="newStudentEdit.phone" required/>
                        </div>
                        <div class="col-6 mt-3">    
                            <label for="Repitente">Repitente</label>
                            <input type="checkbox" class="ml-2" id="Repitent" v-model="newStudentEdit.repitent" required>
                        </div>
                    </div>
                    <h3 class="mt-2">Anotación de la Observación</h3>
                    <div class="row">
                        <div class="col">
                            <label for="Observer_est">Observaciones</label>
                            <textarea id="Observer_est" class="form-control" v-model="newStudentEdit.observation" required/>
                            </div>
                        </div>            
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" v-on:click="saveObservation()">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
    import Multiselect from "vue-multiselect";
    Vue.component("multiselect", Multiselect);
    export default {
        props:['user','studentsEdit','dataObserver'],
        data(){
            return {
                newStudentEdit:{},
                studentsOptions:[],
                studentToSave:[],
                parentsOptions:[],
                fatherToSave:[],
                motherToSave:[],
                repitent:true,
                parents:[],
                students:[],
                areas:[],
                current_area:{}
            }
        },
        watch: { 
            studentsEdit: function(newVal, oldVal) { // watch it
                if(newVal !== oldVal){
                    this.newStudentEdit = newVal;
                    console.log(newVal);
                    this.showDataParents();
                    this.showDataStudents();
                }
            }
        },
        components: {
            Multiselect,
        },
        mounted(){
            this.getData();
            this.showDataParents();
            this.showDataStudents();
        },
        methods:{
            getData(){
                this.getParents();
                if(this.user.type_user === 2){
                    axios.get('/GetArearByUser').then(response => {
                        this.areas = response.data;

                        if(this.areas.length>0)
                        {
                            this.current_area=this.areas[0];
                            this.getStudents();
                        }
                    });
                }else if(this.user.type_user === 8){
                    this.getStudents();
                }
            },
            getParents(){
                axios.get('/getParents').then((response)=>{
                    this.parents = response.data;
                    this.parents.forEach(e => {   
                        this.parentsOptions.push({
                            id:e.id,
                            id_parent: e.id,
                            text: `${e.name}`
                        });
                    });
                }).catch((error)=>{
                    console.log(error);
                })
            },

            getStudents(){
                this.students = [];
                if(this.user.type_user === 2){
                    axios.get(`/api/teacher/area/${this.current_area.id}/classroom/${this.current_area.id_classroom}/student`).then(response => {
                        this.students = response.data;
                        this.students.forEach(e => {   
                            this.studentsOptions.push({
                                id: e.user_id,
                                id_student:e.user_id,
                                text: `${e.user_name}`
                            });
                        });
                    });
                }
                
                else if(this.user.type_user === 8){
                    if(this.user.new_coord_area === 'Primaria'){
                        axios.get(`getStudentsPrimary`).then(response => {
                            this.students = response.data;
                            
                            this.students.forEach(e => {   
                                this.studentsOptions.push({
                                    id: e.user_id,
                                    id_student:e.user_id,
                                    text: `${e.name+' '+e.last_name}___Grado ${e.grade}`
                                });
                            });
                        });
                    }else if(this.user.new_coord_area === 'Secundaria'){
                        axios.get(`getStudentsSecundary`).then(response => {
                            this.students = response.data;
                            
                            this.students.forEach(e => {   
                                this.studentsOptions.push({
                                    id: e.user_id,
                                    id_student:e.user_id,
                                    text: `${e.name+' '+e.last_name}___Grado ${e.grade}`
                                });
                            });
                        });
                    }else if(this.user.new_coord_area === 'General'){
                        axios.get(`getAllStudents`).then(response => {
                            this.students = response.data;
                            
                            this.students.forEach(e => {   
                                this.studentsOptions.push({
                                    id: e.user_id,
                                    id_student:e.user_id,
                                    text: `${e.name+' '+e.last_name}___Grado ${e.grade}`
                                });
                            });
                        });
                    }
                }
            },
            showDataParents(){
                this.parents.forEach(e => {
                    if(e.name === this.newStudentEdit.mother_name){
                        this.motherToSave= {
                            id: e.id,
                            id_parent: e.id,
                            text: `${e.name}`
                        };
                    }

                    if(e.name === this.newStudentEdit.father_name){
                        this.fatherToSave= {
                            id: e.id,
                            id_parent: e.id,
                            text: `${e.name}`
                        };
                    }
                });
            },

            showDataStudents(){
                this.students.forEach(e => { 
                    if(this.user.type_user === 2){
                        console.log("id de usuario",e)
                        if(e.user_id === this.newStudentEdit.id_student){ 
                            this.studentToSave= {
                                id: e.user_id,
                                id_student: e.user_id,
                                text: `${e.user_name}`,
                            };
                        }
                    }else if(this.user.type_user === 8){
                        if(e.user_id === this.newStudentEdit.id_student){ 
                            this.studentToSave= {
                                id: e.user_id,
                                id_student:e.user_id,
                                text: `${e.name+' '+e.last_name}___Grado ${e.grade}`
                            };
                        }
                    }
                });
            },
            saveObservation(){
                const data = {
                    'name_student': this.studentToSave.text,
                    'id_student': this.studentToSave.id_student,
                    'age':this.newStudentEdit.age,
                    'date_birth': this.newStudentEdit.date_birth,
                    'size': this.newStudentEdit.size,
                    'weight': this.newStudentEdit.weight,
                    'identification': this.newStudentEdit.identification,
                    'father_name': this.fatherToSave.text,
                    'office_father': this.newStudentEdit.office_father,
                    'mother_name': this.motherToSave.text,
                    'office_mother': this.newStudentEdit.office_mother,
                    'address': this.newStudentEdit.address,
                    'phone': this.newStudentEdit.phone,
                    'repitent': this.newStudentEdit.repitent,
                    'observation': this.newStudentEdit.observation
                }
                axios.put(`/observer/${this.newStudentEdit.id}`,data).then((response)=>{
                    this.getMenu();
                }).catch((error)=>{
                    toastr.error("Diligencia los campos requeridos")
                })
            },
            getMenu() {
                window.location = "/observer";
            },
        }
    }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
