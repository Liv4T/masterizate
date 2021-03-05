<template>
    <div class="responsive">    
        <div class="">
            <div class="col landing-img form-group section1">
            <a class="landing-brand text-center">
                <div>
                    <img thumbnail fluid src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/LOGO_LIV4T_SKOOL.png?alt=media&token=e0a74c90-0f0d-4932-863a-827b5f87ed0c"  alt="4"></img>
                    <p for="">Diviértete aprendiendo</p>
                </div>
            </a>
        </div>
        <div class="col text-sect2 text-center fondo-azul fondo-transparente" style="padding-top: 10px;">
            <p>Todo el colegio en una</p>
            <p>sola plataforma</p> 
            <p class="line-yellow"></p>
        </div>
        </div>
        <div class="align-items-center section2 fondo1">
             <div class="col-md-8 text-sect1">
                <label><b>Liv4T Skool</b> es una plataforma de gestión de contenido de aprendizaje (LCMS) que apoya los procesos administrativos y pedagógicos, y que permite flexibilizar, conexión remota y seguimiento.</label>
                <label>Diseñada por profesores y administradores escolares</label>
            </div>
        </div>
        <div class="centrado fondo-azul-form shadow-form">
            <form class="center-elements-form" v-on:submit.prevent="createContact">
                <div class="text-center">
                    <label class="text-form">RECIBE 1 MES GRATIS <br> DE PRUEBA </label>
                    <label class="text-form2">DILIGENCIANDO EL FORMULARIO</label>
                    <p class="line-yellow-form"></p>
                    <br>
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
        <div class="fondo2">
            <div class="col img-section4 text-center" style="padding:20px 0 0 20px;">
                <div class="col landing-img form-group">
                    <a class="landing-brand2" style="text-align: left;">
                        <div>
                            <img thumbnail fluid src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/LOGO_LIV4T_SKOOL.png?alt=media&token=e0a74c90-0f0d-4932-863a-827b5f87ed0c"  alt="4"></img>
                            <p>Diviértete aprendiendo</p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="margin-elements">
                <div class="content-text">
                    <label>Podrás crear y entregar el material de las clases desde Liv4T Skool</label>
                </div>
                <div class="content-text">
                    <label>Las evaluaciones, los talleres y las clases serán más didacticas y sencillas de hacer con Liv4T</label>
                </div>
                <div class="content-text">
                    <label>La información e interacción con docentes, estudiantes, padres y administrativos en una sola plataforma.</label>
                </div>
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
.fondo1 {
    background-image: url("../assets/img/LANDING7.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 900px;
}
.text-sect2 p{
    color: white;
    font-weight: 700;
    font-size: 36px;
    margin-top: 15px;
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
    margin-bottom: 4rem;
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
    border-radius: 15px;
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
.fondo-azul{
    background-color: rgb(21, 185, 185);
    height: 110px;
}
.line-yellow{
    border-bottom: 4px solid rgb(248, 207, 26);
    max-width: 230px;
    padding: 0;
    margin: -4px auto 0 auto !important;
}
.line-yellow-form{
    border-bottom: 5px solid rgb(248, 207, 26);
    max-width: 280px;
    padding: 0;
    margin: -4px auto 0 auto !important;
}
.fondo2 {
    background-image: url("../assets/img/LANDING8.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 700px;
}
.landing-brand2 img{
    width:400px;
    text-align: left;
}
.landing-brand2 p{
    margin-left: 50px; 
    font-size:30px;
}
.content-text{
    width: 70%;
    background-color: #ffc107;
    border-radius: 7px;
    margin-bottom: 1rem;
    font-size: 24px;
    padding: 8px;
}
.margin-elements{
    margin-top: 200px;
}
.text-sect1{
    padding: 50% 60px 10px 70px; 
    font-size:20px; 
    line-height: 140%; 
    text-align: justify;
}

@media (max-width: 600px) {
    .btn-form{
        left: 23%;
        position: absolute;
        font-size: 32px;
        width: 55%;
        padding: 0;
        margin: 0;
        border: 0;
        border-radius: 12px;
        margin-top: 13px; 
    }
    .phone-form{
        color: #615f5f !important; 
        margin-bottom:1rem;
        font-size: 24px;
        font-weight: 700;
    }
    .centrado {
        margin-left: auto;
        margin-right: auto;
        display: table;
        width: 75%;
        padding: 50px;
        margin-top: 20px;
    }
    .fondo2 {
        background-image: url("../assets/img/Responsive1-05.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-size: 100% 100%;
        height: 600px;
    }
    .fondo1 {
        background-image: url("../assets/img/Responsive2-06.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-size: 100% 100%;
        height: 340px;
    }
    .content-text{
        width: 80%;
        background-color: #ffc107;
        border-radius: 7px;
        margin-bottom: 1rem;
        font-size: 18px;
        padding: 8px;
    }
    .text-sect1{
        padding: 35% 140px 10px 20px;
        font-size: 13px;
        line-height: 140%;
        text-align: justify;
    }
    .text-sect2 p{
        font-size: 28px;
    }
    .line-yellow{
        max-width: 190px;
    }
    .landing-brand2 img{
        width:200px;
    }
    .landing-brand2 p{
        margin-left: 10px; 
        font-size:18px;
    }
    .text-form {
        font-size: 20px;
        line-height: 100%;
        font-weight: 700;
    }
    .text-form2 {
        font-size: 12px;
    }
    .line-yellow-form{
        border-bottom: 5px solid rgb(248, 207, 26);
        max-width: 185px;
        padding: 0;
        margin: -4px auto 0 auto !important;
    }
    
  }
</style>
