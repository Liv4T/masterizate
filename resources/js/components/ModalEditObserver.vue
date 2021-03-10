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
                            <label for="dateBirth">Fecha de Nacimiento</label>
                            <input id="dateBirth" class="form-control" type="date" v-model="studentsEdit.date_birth" required/>
                        </div>
                        <div class="col-6">
                            <label for="age">Edad</label>
                            <input id="age" class="form-control" type="number" v-model="studentsEdit.age" required/>
                        </div>
                        <div class="col-6">
                            <label for="size">Talla</label>
                            <input id="size" class="form-control" type="text" v-model="studentsEdit.size" required/>
                        </div>
                        <div class="col-6">
                            <label for="weight">Peso</label>
                            <input id="weight" class="form-control" type="text" v-model="studentsEdit.weight" required/>
                        </div>
                        <div class="col-6">
                            <label for="identification">Identificación</label>
                            <input id="identification" class="form-control" type="text" v-model="studentsEdit.identification" required/>
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
                            <label for="officeFather">Profesión u Oficio</label>
                            <input id="officeFather" class="form-control" type="text" v-model="studentsEdit.office_father" />
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
                            <label for="officeMother">Profesión u Oficio</label>
                            <input id="officeMother" class="form-control" type="text" v-model="studentsEdit.office_mother" >
                        </div>
                    </div>
                    <h3 class="mt-5">Información General</h3>
                    <div class="row">
                        <div class="col-6">
                            <label for="address">Dirección</label>
                            <input id="address" class="form-control" type="text" v-model="studentsEdit.address" required/>
                        </div>
                        <div class="col-6">
                            <label for="phone">Telefono</label>
                            <input id="phone" class="form-control" type="text" v-model="studentsEdit.phone" required/>
                        </div>
                        <div class="col-6 mt-3">
                            <label for="Repitente">Repitente</label>
                            <input type="checkbox" class="ml-2" id="Repitent" v-model="studentsEdit.repitent" required/>
                        </div>
                    </div>
                    <h3 class="mt-2">Anotación de la Observación</h3>
                    <div class="row">
                        <div class="col">
                            <label for="Observer">Observaciones</label>
                            <textarea id="Observer" class="form-control" v-model="studentsEdit.observation" required/>
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
        props:['students','parents','studentsEdit'],
        data(){
            return {
                studentsOptions:[],
                studentToSave:[],
                parentsOptions:[],
                fatherToSave:[],
                motherToSave:[]
            }
        },
        watch: { 
            studentsEdit: function(newVal, oldVal) { // watch it
                this.showDataParentsAndStudents();
            }
        },
        components: {
            Multiselect,
        },
        mounted(){
            this.getParentsStudentsData();
        },
        methods:{
            getParentsStudentsData(){
                let dataStudent = this.students[0];
    
                if(dataStudent){
                    dataStudent.forEach(e => {
                        this.studentsOptions.push({
                            id: e.user_id,
                            id_student: e.user_id,
                            text: `${e.user_name}`,
                        });
                    });
                }

                this.parents.forEach(e => {
                    this.parentsOptions.push({
                        id: e.id,
                        id_parent: e.id,
                        text: `${e.name}`
                    });
                });

                console.log(this.parents)
            },
            showDataParentsAndStudents(){
                this.parents.forEach(e => {
                    if(e.name === this.studentsEdit.mother_name){
                        this.motherToSave.push({
                            id: e.id,
                            id_parent: e.id,
                            text: `${e.name}`
                        });
                    }

                    if(e.name === this.studentsEdit.father_name){
                        this.fatherToSave.push({
                            id: e.id,
                            id_parent: e.id,
                            text: `${e.name}`
                        });
                    }
                });

                if(this.students[0]){
                    this.students[0].forEach(e => { 
                        if(e.user_id === this.studentsEdit.id_student){ 
                            this.studentToSave.push({
                                id: e.user_id,
                                id_student: e.user_id,
                                text: `${e.user_name}`,
                            });                
                        }
                });
                }
            },
            saveObservation(){
                console.log(this.motherToSave)
                // const data = {
                //     'name_student': this.studentToSave.text,
                //     'id_student': this.studentToSave.id_student,
                //     'age':this.age,
                //     'date_birth': this.dateBirth,
                //     'size': this.size,
                //     'weight': this.weight,
                //     'identification': this.identification,
                //     'father_name': this.fatherToSave.text,
                //     'office_father': this.officeFather,
                //     'mother_name': this.motherToSave.text,
                //     'office_mother': this.officeMother,
                //     'user_creator': this.user.name,
                //     'address': this.address,
                //     'phone': this.phone,
                //     'repitent': this.repitent === true ? true : false,
                //     'observation': this.observer
                // }
                // axios.post('/observer',data).then((response)=>{
                //     toastr.success("Datos Guardados")
                //     $("#EditModal").modal("hide");
                // }).catch((error)=>{
                //     toastr.error("Diligencia los campos requeridos")
                // })
            }
        }
    }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
