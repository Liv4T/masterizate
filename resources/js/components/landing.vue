<template>
    <div class="responsive">    
        <div class="landing-img form-group section1">
            <a class="landing-brand text-center">
                <div>
                    <img thumbnail fluid src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/LOGO_LIV4T_SKOOL.png?alt=media&token=e0a74c90-0f0d-4932-863a-827b5f87ed0c"  alt="4"></img>
                    <p for="">Diviértete aprendiendo</p>
                </div>
            </a>
        </div>
        <div class="align-items-center section2 fondo-amarillo">
            <div class="col text-sect2 text-center" style="padding-top: 10px;">
                <p>Todo el colegio en una</p>
                <p>sola plataforma</p>
            </div>
            <div class="col" style="padding:20px 0 0 20px;">
                <a class="landing-sect2">
                    <div>
                        <img thumbnail fluid src="../assets/img/LANDING1.png"></img>  
                    </div>
                </a>
            </div>
        </div>
        <div class="row section3 fondo-transparente">
            <div class="col-md-5" style="padding: 40px 40px 10px 70px; font-size:20px; line-height: 140%;">
                <label><b>Liv4T Skool</b> es una plataforma <br> Sistema de gestión de contenido de <br> aprendizaje (LCMS) que apoya los procesos <br> administrativos y pedagógicos, y que <br> permite flexibilizar, conexión remota y seguimiento.</label>
                <label>Diseñada por profesores y administradores escolares</label>
            </div>
            <div class="col-md-7" style="padding:20px 0 0 20px;">
                <a class="landing-sect3">
                    <div>
                        <img thumbnail fluid src="../assets/img/LANDING2.png"></img>  
                    </div>
                </a>
            </div>
        </div>
        <div class="centrado fondo-azul-form shadow-form">
            <form class="center-elements-form" v-on:submit.prevent="createContact">
                <div class="text-center">
                    <label class="text-form">RECIBE 1 MES GRATIS <br> DE PRUEBA </label>
                    <label class="text-form2">DILIGENCIANDO EL FORMULARIO</label>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" name="name" id="name" v-model="name" placeholder="Nombre Completo" required>
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" name="email" id="email" v-model="email" placeholder="Correo Electrónico" required>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" name="phone" id="phone" v-model="phone" placeholder="Teléfono" required>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" name="school" id="school" v-model="school" placeholder="Institución Educativa" required>
                </div>
                <div class="form-group" style="margin-bottom:0;">
                    <input type="text" class="form-control" name="city" id="city" v-model="city" placeholder="Cuidad" required>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" required>
                    <label class="form-check-label text-terms" for="gridCheck">
                        Acepto Políticas de datos y términos y condiciones
                    </label>
                </div>
                <div class="text-center">
                    <p class="phone-form">1 800 8106429</p>
                    <p class="phone-form">(1) 8932828</p>
                </div>
                <div>
                    <button type="submit" class="btn btn-primary text-center btn-form">Inscríbete</button>
                </div>
            </form>
        </div>
        <div class="centrado2">
            <div class="col img-section4 text-center" style="padding:20px 0 0 20px;">
                <a class="landing-sect4">
                    <div>
                        <img thumbnail fluid src="../assets/img/LANDING3.png"></img>  
                    </div>
                    <div class="text-section4">
                        <label>Sabías qué..?</label>
                    </div>
                </a>
            </div>
        </div>
        <div class="centrado3">
            <div>
                <label class="text-sect5">Realizar un auto cuestionario luego de estudiar ayudará a tu cerebro a recuperar la información cuando la necesites.</label>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      school: "",
      city: ""
    };
  },
  mounted() {
      
  },
  methods: {
    getLanding() {
      window.location = "/landing";
    },
    createContact() {
      var url = "createContact";
          axios
            .post(url, {
              //Guardamos los datos del contacto
              name: this.name,
              email: this.email,
              phone: this.phone,
              school: this.school,
              city: this.city
            })
            .then((response) => {
              this.getLanding();
              toastr.success("Contacto Guardado con Exito");
            })
            .catch((error) => {});      
    },
  },
};
</script>
<style>
.section1 {
  width: 100%;
  height: 150px;
}
.landing-img a {
  
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 15px;
  color: #7e7e7e !important;

}
.landing-brand img{
    width:200px;
}
.section2 {
  width: 100%; 
}
.landing-sect2 img{
    width:50%;
    left:10px;
    text-align: left;
}
.fondo-amarillo {
    background-image: url("../assets/img/LANDING5.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
}
.text-sect2 p{
    color: white;
    font-weight: 700;
    font-size: 48px;
    margin-top: 20px;
    margin-bottom: 2rem ;
}
.section3 {
    width: 100%; 
}
.fondo-transparente {
    background-image: url("../assets/img/LANDING6.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
}
.landing-sect3 img{
    width:45%;
    text-align: center;
    z-index:1;
    position: relative;
    top:-150px;
}
.centrado{
    margin-left: auto;
    margin-right: auto;
    display: table;
    width: 45%;
    padding: 50px;
}
.centrado2{
    margin-left: auto;
    margin-right: auto;
    display: table;
    width: 45%;
    padding: 50px 50px 0px 50px;
}
.centrado3{
    margin-left: auto;
    margin-right: auto;
    display: table;
    width: 45%;
    padding: 0 50px 0 50px;
}
.center-elements-form{
    margin-left: auto;
    margin-right: auto;
    display: table;
}
.fondo-azul-form{
    background-color: #b0ebed; 
    border-radius: 20px;
}
.text-form{
    font-size: 32px;  
    line-height: 130%;  
    font-weight: 700;
}
.text-form2{
    font-size: 18px;
}
.btn-form{
    left: 35%;
    position: absolute;
    font-size: 45px;
    width: 30%;
    padding: 0;
    margin: 0;
    border: 0;
    letter-spacing: 0.15em;
    border-radius: 15px
}
.text-terms{
    color: #7e7e7e !important; 
    margin-bottom:1rem;
}
.phone-form{
    color: #615f5f !important; 
    margin-bottom:1rem;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0.1rem;
}
.shadow-form{
    box-shadow: 8px 9px 8px #999;
}
.img-section4{
    position: relative;
    display: inline-block;
}
.text-section4{
    position:absolute;
    top: 80%;
    font-size: 46px;
    font-weight: 900;
    left: 25%;
}
.landing-sect4 img{
    width:100%;
    left:10px;
    text-align: left;
}
.text-sect5{
    font-size:20px; 
    line-height: 120%;
    text-align: center;
}
</style>