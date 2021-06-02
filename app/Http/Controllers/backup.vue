<template>
    <div style="padding-left: 109px; padding-right: 109px;">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-12">
                <div class="card">
                    <div class="card-header fondo">
                        <h2>Registro de Tutor</h2>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="container">
                                <div class="text-center">
                                    <h4>Datos de Usuario</h4>
                                </div>
                                <div class="row shadow p-3 mb-5 bg-body rounded">
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="email">Email</label>
                                            <input type="email" class="form-control" id="email" v-model="email">
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="form-group">
                                            <label for="email">Nombre de Usuario</label>
                                            <input type="email" class="form-control" id="email" v-model="user_name">
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="form-group">
                                            <label for="password">Contraseña</label>
                                            <input type="password" class="form-control" id="password" v-model="password">
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <h4>Datos Personales</h4>
                                </div>
                                <div class="row row-cols-3 shadow p-3 mb-5 bg-body rounded">
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="name">Nombre</label>
                                            <input type="name" class="form-control" id="name" v-model="name">
                                        </div>
                                    </div>
                                    
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="last_name">Apellido</label>
                                            <input type="last_name" class="form-control" id="last_name" v-model="last_name">
                                        </div>
                                    </div>
                                    
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="id_number">Identificación</label>
                                            <input type="id_number" class="form-control" id="id_number" v-model="id_number">
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="form-group">
                                            <label for="country">Pais</label>
                                            <input type="text" class="form-control" id="country" v-model="country">
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="form-group">
                                            <label for="city">Ciudad</label>
                                            <input type="text" class="form-control" id="city" v-model="city">
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="form-group">
                                            <label for="address">Dirección</label>
                                            <input type="text" class="form-control" id="address" v-model="address">
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="form-group">
                                            <label for="phone">Telefono</label>
                                            <input type="number" class="form-control" id="phone" v-model="phone">
                                        </div>
                                    </div>
                                    
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="picture">Foto</label>
                                            <input type="file" name="picture" class="form-control-file" id="picture" @change="previewFiles">
                                        </div>
                                    </div>                            

                                    <div class="col">
                                        <div class="form-group">
                                            <label for="description">Descripción</label>
                                            <textarea class="form-control" id="description" rows="3" v-model="description"/>
                                        </div>
                                    </div>

                                    <div class="col mt-5">
                                        <div class="form-group">
                                            <label for="twitter_profile">Perfil de Twitter</label>
                                            <input type="text" class="form-control" id="twitter_profile" v-model="twitter_profile">
                                        </div>
                                    </div>

                                    <div class="col mt-5">
                                        <div class="form-group">
                                            <label for="facebook_profile">Perfil de Facebook</label>
                                            <input type="text" class="form-control" id="facebook_profile" v-model="facebook_profile">
                                        </div>
                                    </div>

                                    <div class="col mt-5">
                                        <div class="form-group">
                                            <label for="instagram_profile">Perfil de Instagram</label>
                                            <input type="text" class="form-control" id="instagram_profile" v-model="instagram_profile">
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="form-group">
                                            <label for="linkedin_profile">Perfil de Linkedin</label>
                                            <input type="text" class="form-control" id="linkedin_profile" v-model="linkedin_profile">
                                        </div>
                                    </div>
                                </div> 
                                <div class="row">
                                    <div class="col-12">
                                        <div class="card-background">
                                            <div class="row">
                                                <div class="col-12 col-sm-6">
                                                <div class="header_info">
                                                    <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/TAREAS_naranja.png?alt=media&token=0ffb3c21-349a-4615-b57c-50dac3db8285" alt="icon" />
                                                    <h5>Educación</h5>
                                                </div>
                                                <div>
                                                    <div v-for="(item, k_item) in section_education" v-bind:key="k_item">
                                                        <div class="form-group text-left" v-if="k_item > 0">
                                                            <button class="btn btn-secondary letra-boldfont" v-on:click.prevent="()=>RemoveEducation(k_item)">-</button>
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" class="form-control letra-boldfont" name="title" placeholder="Titulo" v-model="section_education[k_item].titulo" />
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" class="form-control letra-boldfont" name="university" placeholder="Universidad" v-model="section_education[k_item].universidad" />
                                                        </div>
                                                        <div class="form-group text-left">
                                                            <label for="gradeDate"><small>Fecha grado:</small></label>
                                                            <input type="date" class="form-control letra-boldfont" name="gradeDate" id="gradeDate" placeholder="Fecha grado" v-model="section_education[k_item].fechagrado" />
                                                        </div>
                                                        <div class="form-group">
                                                            <textarea class="form-control letra-boldfont" rows="4" name="description" placeholder="Descripción" v-model="section_education[k_item].descripcion"></textarea>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button class="btn btn-primary letra-poppins" v-on:click.prevent="()=>AddEducation()">Agregar otra educación</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-6">
                                                <div class="header_info">
                                                    <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MIS-CURSOS.png?alt=media&token=47515df0-5b95-48b4-bb08-10257108169b" alt="icon" />
                                                    <h5>Experiencia como educador</h5>
                                                </div>
                                                <div>
                                                    <div v-for="(item, k_item) in section_experience" v-bind:key="k_item">
                                                        <div class="form-group text-left" v-if="k_item > 0">
                                                            <button class="btn btn-secondary letra-boldfont" v-on:click.prevent="()=>RemoveExperience(k_item)">-</button>
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" class="form-control letra-boldfont" id="institucion" placeholder="Institución" v-model="section_experience[k_item].institucion" />
                                                        </div>
                                                        <div class="form-group">
                                                            <div class="row">
                                                                <div class="col-6 text-left">
                                                                    <label for="gradeDate"><small>Fecha inicio:</small></label>
                                                                    <input type="date" class="form-control letra-boldfont" name="initialDate" id="initialDate" placeholder="Fecha inicio" v-model="section_experience[k_item].fechainicio" />
                                                                </div>
                                                                <div class="col-6 text-left">
                                                                    <label for="endDate"><small>Fecha de finalización:</small></label>
                                                                    <input type="date" class="form-control letra-boldfont" name="endDate" id="endDate" placeholder="Fecha fin" v-model="section_experience[k_item].fechafin" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <div class="row">
                                                                <div class="col-6 col-sm-4" v-for="(assignature, k_assignature) in section_experience[k_item].materias" v-bind:key="k_assignature">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control letra-boldfont" placeholder="Materia" aria-label="Materia" v-model="section_experience[k_item].materias[k_assignature]" />
                                                                        <div class="input-group-append" v-if="k_assignature > 0">
                                                                            <button class="btn btn-outline-secondary letra-boldfont" type="button" v-on:click.prevent="()=>RemoveAssignature(k_item, k_assignature)">-</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-6 col-sm-4 text-center">
                                                                    <button class="btn btn-primary letra-boldfont" v-on:click.prevent="()=>AddAssignature(k_item)">+</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <textarea class="form-control letra-boldfont" rows="4" placeholder="Descripción del cargo" v-model="section_experience[k_item].descripcion"></textarea>
                                                        </div>
                                                        <div class="form-group">
                                                            <div class="row">
                                                                <div class="col-6">
                                                                    <a v-if="section_experience[k_item].documento_certificacion" :href="section_experience[k_item].documento_certificacion" target="_blank" class="btn btn-primary btn-block letra-poppins">Certificación cargada</a>
                                                                    <div class="custom-file">
                                                                    <input type="file" class="custom-file-input" id="documentCertifyFile" @change="uploadDocumentExperienceFile($event, person.id, 'documento_certificacion',k_item)" />
                                                                    <label class="custom-file-label letra-boldfont" for="documentCertifyFile">Cargar certificación</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-6 text-center">
                                                                    <a v-if="section_experience[k_item].documento_recomendacion" :href="section_experience[k_item].documento_recomendacion" target="_blank" class="btn btn-primary btn-block letra-poppins">Recomendación cargada</a>
                                                                    <div class="custom-file">
                                                                        <input type="file" class="custom-file-input" id="documentRecommendationFile" @change="uploadDocumentExperienceFile($event, person.id, 'documento_recomendacion',k_item)" />
                                                                        <label class="custom-file-label letra-boldfont" for="documentRecommendationFile">Cargar recomendación</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button class="btn btn-primary letra-poppins" v-on:click.prevent="()=>AddExperience()">Agregar otra experiencia</button>
                                                    </div>
                                                </div>
                                                </div>
                                                <div class="col-12 col-sm-6">
                                                <div class="header_info">
                                                    <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MIS-CURSOS.png?alt=media&token=47515df0-5b95-48b4-bb08-10257108169b" alt="icon" />
                                                    <h5>Clases a ofrecer</h5>
                                                </div>
                                                <div>
                                                    <section v-for="(classs, k_class) in classes" v-bind:key="k_class">
                                                    <div class="form-group text-left" v-if="k_class > 0">
                                                        <button class="btn btn-secondary letra-boldfont" v-on:click.prevent="()=>RemoveClasses(k_class)">-</button>
                                                    </div>
                                                    <div class="form-group">
                                                        <select class="form-control letra-boldfont" name="type" v-model="classs.type" v-for="(area, key) in areas" :key="key">
                                                            <option :value="area.id">{{area.name}}</option>                                                            
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <textarea class="form-control letra-boldfont" rows="4" placeholder="Descripción" v-model="classs.description"></textarea>
                                                    </div>
                                                    </section>
                                                    <div>
                                                    <button class="btn btn-primary letra-poppins" v-on:click.prevent="()=>AddClasses()">Agregar otra clase</button>
                                                    </div>
                                                </div>
                                                </div>
                                                <div class="col-12 col-sm-6">
                                                    <div class="header_info">
                                                        <img width="35px" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MIS-CURSOS.png?alt=media&token=47515df0-5b95-48b4-bb08-10257108169b" alt="icon" />
                                                        <h5>Palabras clave</h5>
                                                    </div>
                                                    <div>
                                                        <div class="form-group">
                                                            <div class="row">
                                                                <div class="col-6 col-sm-4" v-for="(word, k_word) in keywords" v-bind:key="k_word">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control letra-boldfont" placeholder="Palabra" aria-label="Materia" v-model="keywords[k_word]" />
                                                                        <div class="input-group-append" v-if="k_word > 0">
                                                                            <button class="btn btn-outline-secondary letra-boldfont" type="button" v-on:click.prevent="()=>RemoveKeyWord(k_word)">-</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-6 col-sm-4 text-center">
                                                                    <button class="btn btn-primary letra-boldfont" v-on:click.prevent="()=>AddKeyWord()">+</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                        </form>
                        <button type="submit" class="btn btn-primary" v-on:click.prevent="()=>addData">Registrarme</button>
                    </div>
                </div>                
            </div>
        </div>
    </div>
</template>
<script>
    import firebase from '../../../connectionDbFirebase';
    export default {
        data(){
            return{
                name:"",
                last_name:"",
                email:"",
                user_name:"",
                id_number:"",
                password:"",
                country:"",
                city:"",
                address:"",
                phone:"",
                description:"",
                twitter_profile:"",
                facebook_profile:"",
                instagram_profile:"",
                linkedin_profile:"",
                education_information:"",
                certification:"",
                experience_information:"",
                recommendation:"",
                picture:"",
                areas:[],
                class_offer:"",
                key_words:"",
                section_education:[],
                section_experience:[],
                classes:[],
                keywords:[],
                person: { profile: { EDUCACION: [], EXPERIENCIA: [], PAIS: "" } },
            }
        },
        mounted(){
            this.getArea();
        },
        methods:{
            getArea(){
                axios.get('/getArea').then((response)=>{
                    this.areas = response.data;
                })
            },
            addData(){
                axios.post('tutorRegister',{
                    name: this.name,
                    last_name: this.last_name,
                    description: this.description,
                    id_number: this.id_number,
                    document: this.id_number,
                    picture: this.picture,
                    address: this.address,
                    phone: this.phone,
                    twitter_profile: this.twitter_profile,
                    facebook_profile: this.facebook_profile,
                    instagram_profile: this.instagram_profile,
                    linkedin_profile: this.linkedin_profile,
                    country: this.country,
                    city: this.city,
                    education_information: this.education_information,
                    experience_education: this.experience_information,
                    certification: this.certification,
                    recommendation: this.recommendation,
                    class_offer: this.class_offer,
                    key_words: this.key_words,

                    email: this.email,
                    user_name: this.user_name,
                    password: this.password,
                }).then((response)=>{
                    console.log(response.data);
                    window.location = '/inicio';
                }).catch((error)=>{
                    toastr.info('Ha ocurrido un error, intenta de nuevo mas tarde');
                    console.log(error)
                })
            },
            previewFiles(event){
                const files = event.target.files[0]
                const storageRef=firebase.storage().ref(`images/tutorProfile/${this.name+'-'+this.last_name}`).put(files);
                
                
                storageRef.on(`images/tutorProfile/${this.name+' '+this.last_name}`,()=>
                    {
                        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                            this[event.target.name] = url;
                        });
                    }
                );
            },
            AddEducation() {
            this.section_education.push({
                    titulo: "",
                    universidad: "",
                    fechagrado: "",
                    descripcion: "",
                });
            },
            
            RemoveEducation(k) {
                this.section_education.splice(k, 1);
            },
            AddExperience() {
                this.section_experience.push({
                    institucion: "",
                    fechainicio: "",
                    fechafin: "",
                    materias: [""],
                    descripcion: "",
                });
            },
            RemoveExperience(k) {
                this.section_experience.splice(k, 1);
            },
            AddAssignature(k_item) {
                this.section_experience[k_item].materias.push("");
            },
            RemoveAssignature(k_item, k_assignature) {
                this.section_experience[k_item].materias.splice(k_assignature, 1);
            },
            AddClasses() {
                this.classes.push({
                    type: "colegio",
                    description: "",
                    area: {},
                });
            },
            RemoveClasses(k_item) {
                this.classes.splice(k_item, 1);
            },
            AddKeyWord() {
                this.keywords.push("");
            },
            RemoveKeyWord(index) {
                this.keywords.splice(index, 1);
            },
        }
    }
</script>

