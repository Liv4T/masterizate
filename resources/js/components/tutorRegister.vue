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
                                            <input type="id_number" class="form-control" id="id_number" v-model="id_model">
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
                                            <input type="file" class="form-control-file" id="picture" @change="previewFiles">
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
                                <div class="text-center">
                                    <h4>Datos Profesionales</h4>
                                </div>
                                <div class="row row-cols-2 shadow p-3 mb-5 bg-body rounded">
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="education_information">Información de Educación</label>
                                            <textarea class="form-control" id="education_information" rows="3" v-model="education_information" />
                                        </div>
                                    </div>
                                    
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="certification">Certificado de Educacion</label>
                                            <input type="file" class="form-control-file" id="certification" @change="previewFiles">
                                        </div>  
                                    </div> 
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="experience_information">Información de Experiencia</label>
                                            <textarea class="form-control" id="experience_information" rows="3" v-model="experience_information" />
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="form-group">
                                            <label for="recommendation">Recomendación</label>
                                            <input type="file" class="form-control-file" id="recommendation" @change="previewFiles">
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <h4>Busqueda en plataforma</h4>
                                </div>
                                <div class="row row-cols-1 shadow p-3 mb-5 bg-body rounded">
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="class_offer">Clase Ofrecida</label>
                                            <input type="text" class="form-control" id="class_offer" v-model="class_offer">
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="form-group">
                                            <label for="key_words">Palabras Clave</label>
                                            <input type="text" class="form-control" id="key_words" v-model="key_words">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-primary">Registrarme</button>                                                       
                        </form>
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
                name:"",
                last_name:"",
                email:"",
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
                class_offer:"",
                key_words:""
            }
        },
        methods:{
            addData(){

            },
            files(event){
                console.log(event)
            }
        }
    }
</script>

