<template>
    <div class="modal fade bd-example-modal-lg" id="editModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Actualización de Miembros de Gobierno Escolar</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label>Selecciona forma de inserción de Gobierno Escolar</label>
                        <select class="form-control" name="changeSave" v-model="memberEdit.modeInsert" id="membersGovernment">
                            <option value="1">Insertar Imagen</option>
                            <option value="2">Crear Miembros de Gobierno Escolar</option>
                        </select>
                    </div>
                    <div  v-show="memberEdit.modeInsert == '2'">
                        <div class="form-group">
                            <label>Nombre</label>
                            <multiselect v-model="nameOptions" :options="myOptions" :multiple="false"
                                :close-on-select="false" :clear-on-select="false" :preserve-search="true"
                                placeholder="Seleccione una o varias" label="text" track-by="id"
                                :preselect-first="true">
                                    <template slot="selection" slot-scope="{ values, isOpen }"><span
                                        class="multiselect__single"
                                        v-if="values.length &amp;&amp; !isOpen">{{ values.length }} opciones
                                            selecionadas</span>
                                    </template>
                            </multiselect>
                        </div>

                        <div class="form-group">
                            <label>Posición</label>
                            <input class="form-control" type="text" v-model="memberEdit.position"/>
                        </div>

                        <div class="form-group">
                            <label>Descripción</label>
                            <input class="form-control" type="text" v-model="memberEdit.description"/>
                        </div>
                        
                        <div class="form-group">
                            <label>Orden en listado</label>
                            <input class="form-control" type="text" v-model="memberEdit.order"/>
                        </div>
                    </div>
                    <div v-show="memberEdit.modeInsert == '1'">
                        <label for="imageGovernment">Actualiza la Imagen Organigrama Del Gobierno Escolar</label>
                        <input type="file" class="form-control-file" v-on:change="getImage" id="imageGovernment" required>
                    </div>
                </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" v-on:click="updateMembers()">Save changes</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBUwPOBHWgSv10yWDO0VX_UCCOfHZ3jKYE",
    authDomain: "liv4t-skool.firebaseapp.com",
    databaseURL: "https://liv4t-skool.firebaseio.com",
    projectId: "liv4t-skool",
    storageBucket: "liv4t-skool.appspot.com",
    messagingSenderId: "346718353628",
    appId: "1:346718353628:web:abc0666c41b66fa472dc19",
    measurementId: "G-7L14TG5RRZ"
};
// Initialize Firebase
if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}else {
   firebase.app(); // if already initialized, use that one
}
firebase.analytics();
import Multiselect from "vue-multiselect";
Vue.component("multiselect", Multiselect);
export default {
    props:['memberEdit','getMembers'],
    data(){
        return{
            nameOptions:{},
            myOptions:[],
            imageData:[],
        }
    },
    watch: { 
        memberEdit: function(newMember, oldMember) {
            if(newMember !== oldMember){
                this.memberEdit = newMember;
                this.getUsers();
            }
        }
    },
    components: {
        Multiselect
    },
    methods:{
        getImage(image){
            var files = image.target.files || image.dataTransfer.files;
            if (!files.length){
                return;
            }
            this.imageData = files[0]
        },
        updateMembers(){
            if(this.memberEdit.modeInsert == '2'){
                axios.put(`/members/${this.memberEdit.id}`,{
                    member: this.nameOptions.text,
                    position: this.memberEdit.position,
                    description: this.memberEdit.description,
                    order: this.memberEdit.order,
                    user_id: this.nameOptions.id,
                    image: this.nameOptions.image,
                    modeInsert: this.memberEdit.modeInsert
                }).then((response)=>{
                    toastr.success(response.data);
                    $('#editModal').modal("hide"); 
                    this.getMembers();                   
                }).catch(error => {
                    toastr.danger(error)
                    console.log(error)
                })
            }else if(this.memberEdit.modeInsert == '1'){
                const storageRef=firebase.storage().ref(`images/schoolGovernment/${this.imageData.name}`).put(this.imageData);
                
                storageRef.on(`images/schoolGovernment/`,snapshot=>{
                    this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
                }, error=>{console.log(error.message)},
                    ()=>{this.uploadValue=100;
                        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                            axios.put(`/members/${this.memberEdit.id}`,{
                                imageSchoolGovernment: url,
                                modeInsert: this.memberEdit.modeInsert
                            }).then((response)=>{
                                this.imageData = []
                                toastr.success(response.data);                                
                                $('#editModal').modal("hide"); 
                                this.getMembers();                               
                            })
                        });
                    }
                );
            }
        },
        getUsers(){
            axios.get('getUsers').then(response => {
                response.data.forEach(e => {
                    if(this.memberEdit.user_id === e.id){
                        this.nameOptions = {
                            id: e.id,
                            user_id: e.id,
                            text: `${e.name}`+` ${e.last_name}`,
                            image: e.picture
                        };
                    }
                    this.myOptions.push({
                        id: e.id,
                        user_id: e.id,
                        text: `${e.name}`+` ${e.last_name}`,
                        image: e.picture
                    });
                });
            })
        }
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>