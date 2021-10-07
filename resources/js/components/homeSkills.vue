<template>
  <div>
    <div>
      <nav class="navbar navbar-expand-md navbar-light">
        <ul class="navbar-nav mr-sm-6 justify-content-start flex-nav">
          <li class="margin-logo">
            <img class="" thumbnail fluid src="../assets/img/logo-skills.png" alt="4" />
          </li>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContentMenu" aria-controls="navbarContentMenu" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarContentMenu">
            <ul class="navbar-nav ml-auto" >
              <li class="nav-pad">
                <a class="color-nav" href="#programas">Programas</a>
              </li>
              <li class="nav-pad">
                <a class="color-nav" href="#queEs">Qué es</a>
              </li>
              <li class="nav-pad">
                <a class="color-nav" href="#contactanos">Contáctanos</a>
              </li>
              <li class="nav-pad">
                <a class="color-nav btn btn-skills" href="#contactanos">Accede a tu clase</a>
              </li>
            </ul>
          </div>
        </ul>
      </nav>
    </div>
    <div class="desktop">
      <div class="col" style="padding: 0; margin: 0">
        <a href="#"><img class="fondo1" src="../assets/img/s1.png" alt="unete"></a>
      </div>
      <div class="col" style="padding: 0; margin: 0" id="queEs">
        <a href="#"><img class="fondo1" src="../assets/img/s2.png" alt="unete"></a>
      </div>
      <div class="col" style="padding-bottom: 20px; margin: 0" id="contactanos">
        <a href="https://wa.me/573204547116?text=Me%20gustaría%20saber%20más%20de%20los%20planes" target="_blank"><img class="fondo1" src="../assets/img/s3.png" alt="unete"></a>
      </div>
      <div class="col" style="padding: 0; margin: 0" id="programas">
        <a href="#"><img class="fondo1" src="../assets/img/s4.png" alt="unete"></a>
      </div>
      <div class="col" style="padding: 0; margin: 0">
        <a href="#"><img class="fondo1" src="../assets/img/s5.png" alt="unete"></a>
      </div>
      <div class="col" style="padding: 0; margin: 0">
        <a href="#contactanos"><img class="fondo1" src="../assets/img/plans.png" alt="unete"></a>
        <a href="/tutorRegister"><img class="boton-plan-docente" src="../assets/img/plans.1.png"></a>
        <a href="javascript:void(0)" @click="showModal('PLAN_MENSUAL')"><img class="boton-plan-mensual" src="../assets/img/plans.2.png"></a>
        <a href="javascript:void(0)" @click="showModal('PLAN_ANUAL')"><img class="boton-plan-anual" src="../assets/img/plans.3.png"></a>
      </div>
      <div class="col" style="padding: 0; margin: 0">
        <a href="#"><img class="fondo1" src="../assets/img/s6.png" alt="unete" /></a>
      </div>
    </div>
    <div class="phone">
      <div class="col" style="padding: 0; margin: 0">
        <a href="#"><img class="fondo1" src="../assets/img/s1.png" alt="unete" /></a>
      </div>
      <div class="col" style="padding: 0; margin: 0">
        <a href="#"><img class="fondo1" src="../assets/img/c2.png" alt="unete" /></a>
      </div>
      <div class="col" style="padding-bottom: 20px; margin: 0">
        <a href="https://wa.me/573204547116?text=Me%20gustaría%20saber%20más%20de%20los%20planes" class="whatsapp" target="_blank"><i class="fa fa-whatsapp whatsapp-icon"></i><img class="fondo1" src="../assets/img/c3.png" alt="unete" /></a>
      </div>
      <div class="col" style="padding: 0; margin: 0">
        <a href="#"><img class="fondo1" src="../assets/img/c4.png" alt="unete" /></a>
      </div>
      <div class="col" style="padding: 0; margin: 0">
        <a href="#"><img class="fondo1" src="../assets/img/c6.png" alt="unete" /></a>
      </div>
      <div class="col" style="padding: 0; margin: 0">
        <a href="#"><img class="fondo1" src="../assets/img/planc.png" alt="unete" /></a>
      </div>
      <div class="col" style="padding: 0; margin: 0">
        <a href="#"><img class="fondo1" src="../assets/img/s6.png" alt="unete" /></a>
      </div>
    </div>

    <div class="row centrado fondo-gris-form">
      <div class="col-lg-6">
        <div class="text-center margin-b">
          <label class="text-inscribete">INSCRÍBETE</label>
          <p class="line-yellow-form2"></p>
        </div>
        <div class="text-center margin-b">
          <label class="text-correo">inscripciones@liv4t.com</label>
        </div>
        <div class="text-center margin-b">
          <a href="https://www.facebook.com/liv4tskool" target="_blank"><i class="fab fa-facebook" style="font-size: 50px; color: black"></i></a>
          <a href="https://www.instagram.com/liv4tskool/?hl=es-la" target="_blank"><i class="fab fa-instagram" style="font-size: 50px; color: black"></i></a>
        </div>
      </div>
      <div class="col-lg-6">
        <form v-on:submit.prevent="createSignUp">
          <div class="form-group">
            <input type="text" class="form-control" name="name" id="name" v-model="name" placeholder="Nombre Completo" required />
          </div>
          <div class="form-group">
            <input type="email" class="form-control" name="email" id="email" v-model="email" placeholder="Correo Electrónico" required />
          </div>
          <div class="form-group">
            <input type="text" class="form-control" name="phone" id="phone" v-model="phone" placeholder="Teléfono" required />
          </div>
          <div class="form-group" style="margin-bottom: 0">
            <textarea type="textarea" class="form-control" name="message" id="message" v-model="message" placeholder="Mensaje" size="lg" rows="8" required></textarea>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" required />
            <label class="form-check-label text-terms" for="gridCheck"> Acepto Políticas de datos y términos y condiciones </label>
          </div>
          <div>
            <button type="submit" class="btn btn-skills text-center btn-form">Enviar</button>
          </div>
        </form>
      </div>
    </div>
    <div class="text-center">
      <div>
        <label class="margin-b text-recibe">Recibe todas las novedades de nuestra comunidad</label>
      </div>
      <div>
        <form v-on:submit.prevent="suscribe">
          <div class="row centrado2">
            <div class="col-lg-8">
              <input type="text" class="form-control margin-b" v-model="email_novedades" placeholder="Ingresa tu e-mail" />
            </div>
            <div class="col-lg-3" style="text-align: left">
              <button type="submit" class="btn btn-skills btn-form2">INGRESAR</button>
            </div>
            <div class="form-check margin-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" required />
              <label class="form-check-label text-terms" for="gridCheck"> Acepto Políticas de datos y términos y condiciones </label>
            </div>
          </div>
        </form>
      </div>
    </div>
    <footer class="footer-skills">
      <div class="">
        <div class="col footer-col">
          <p>Únete a nuestra comunidad</p>
        </div>
        <div class="col footer-col2">Segerencias</div>
        <div class="col footer-col2">Contactanos</div>
      </div>
    </footer>
    <div class="modal fade" id="modalCode" data-backdrop="static" data-keyboard="false">
      <div class="modal-lg modal-dialog" style="max-width: 965px;">
          <div class="modal-content fondo-modal">
            <div class="row">
              <div class="col-lg-12"> 
                  <img class="img-logo" thumbnail fluid src="images/logo-skills.png" width="225px"></img>
              </div>
            </div>
            <div class="row fondo-gris-form centrado">
              <div class="col-lg-12">
                <label for="">Ingrese el código de la materia a pagar</label>
              </div>
              <div class="col-lg-6">
                  <input class="form-control" type="text" v-model="code" placeholder="Código de la materia">
              </div>
            </div>
            <div class="modal-footer">
              <a href="javascript:void(0)" class="btn btn-primary" @click="validateCode()">Ir a pagar</a>
            </div>
          </div>
      </div>
    </div>
    <div>
      <a href="https://wa.me/573204547116?text=Me%20gustaría%20saber%20más%20de%20los%20planes" class="whatsapp" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
    </div>
  </div>
</template>
<script>
import Vue from "vue";

export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      email_novedades: "",
      message: "",
      validate: null,
      plan_type: "",
    };
  },
  computed: {},
  methods: {
    getHome() {
      window.location = "/";
    },
    suscribe() {
      var url = "suscribe";
      axios
        .post(url, { email: this.email_novedades })
        .then((response) => {
          this.getHome();
          toastr.success("Contacto Guardado con Exito");
        })
        .catch((error) => {});
    },
    validateCode(){
      var url = "/validateCode/"+this.code;
      axios.get(url).then(
         (response) => {
            this.validate = response.data;

            if(this.validate === 0){
              location.href=`/compra/plan/${this.plan_type}/${this.code}/resumen`;
            }else{
              toastr.error("Código invalido, por favor ingrese un código valido");
            }
        });
    },
    showModal(plan_type){
      this.plan_type=plan_type;
      $("#modalCode").modal("show");
    },
    createSignUp() {
      var url = "createSignUp";
      axios
        .post(url, {
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message,
        })
        .then((response) => {
          this.getHome();
          toastr.success("Contacto Guardado con Exito");
        })
        .catch((error) => {});
    },
  },
};
</script>
<style>
.footer-skills {
  bottom: 0;
  width: 100%;
  position: absolute;
  height: 200px;
  padding-top: 20px;
  background-color: rgb(2, 4, 79);
  margin: -300px auto;
}
.btn-skills {
  background-color: #ed533a;
  border-color: #ed533a;

  color: white !important;
}
.back-modal{
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin-right: 20px;
  border: 2px solid rgb(201, 188, 188);
}
.logo-liv4t-old {
  height: 200px !important;
  margin-left: 180px;
}
.margin-logo {
  margin-right: 150px !important;
}
.color-nav {
  color: black;
  font-size: 24px !important;
  text-decoration: none !important;
  font-family: Nunito;
}
.nav-pad {
  padding-top: 20px;
}
.fondo1 {
  background-repeat: no-repeat;
  height: 600px;
  z-index: 1;
}
.fondo2 {
  background-image: url("../assets/img/home2.1.png");
  background-repeat: no-repeat;
  height: 600px;
}
.boton-plan-docente{
    background-repeat: no-repeat;
    position: absolute;
    height: 400px !important;
    z-index: 2;
    left: 545px;
    top: -100px;
}
.boton-plan-mensual{
    background-repeat: no-repeat;
    position: absolute;
    height: 400px !important;
    z-index: 2;
    left: 400px;
    top: 450px;
}
.boton-plan-anual{
    background-repeat: no-repeat;
    position: absolute;
    height: 400px !important;
    z-index: 2;
    left: 750px;
    top: 450px;
}
.logo-fondo2 {
  background-image: url("../assets/img/home4.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 230px;
}
.img-dim {
  background-repeat: no-repeat;
  height: 240px !important;
  background-size: 100% 100%;
  width: 100%;
  margin-left: 20px;
  position: relative;
  margin-top: 20px;
  margin-bottom: 1rem;
  z-index: -1;
}
.text-img-dim {
  font-size: 78px;
  margin-left: 20px;
  position: relative;
  margin-left: 80px;
  margin-bottom: 1rem;
  top: -150px;
  font-family: "Nunito";
}
.img-pos {
  background-image: url("../assets/img/home18.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  height: 520px;
  top: 105px;
  left: -190px;
  max-width: 950px;
  width: 950px;
}
.text-img-pos {
  top: 150px;
  position: absolute;
  padding: 70px 100px 70px 120px;
  font-size: 28px;
  text-align: justify;
  font-family: Nunito;
  line-height: 30px;
  font-weight: 400;
}
.fondo3 {
  background-image: url("../assets/img/home7.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
}
.text-fondo3 {
  font-weight: 900;
  font-size: 26px;
  font-family: Nunito;
  margin-left: 20px;
  margin-bottom: 1.5rem;
}
.fondo4 {
  background-image: url("../assets/img/home8.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 680px;
}
.img-virtualiza {
  height: 110px !important;
}
.img-docente {
  height: 90px !important;
}
.text-virtualiza {
  color: black;
  font-size: 30px !important;
  text-decoration: none !important;
  font-family: Nunito;
}
.img-roles {
  height: 250px;
}
.text-roles {
  color: black;
  font-size: 20px !important;
  text-decoration: none !important;
  font-family: Nunito;
}
.text-porque {
  color: black;
  font-size: 24px !important;
  text-decoration: none !important;
  font-family: Nunito;
  line-height: 25px;
  text-align: justify;
  padding: 10px 10px 10px 30px;
}
.fondo5 {
  background-image: url("../assets/img/home13.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 680px;
  margin-bottom: 3rem;
}
.centrado {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  padding: 50px;
}
.centrado2 {
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  padding: 20px 20px 20px 70px;
}
.container-top {
  padding-top: 100px;
}
.line-yellow-form {
  border-bottom: 7px solid rgb(248, 207, 26);
  max-width: 380px;
  padding: 0;
  margin: 2px auto 0 auto !important;
}
.line-yellow-form2 {
  border-bottom: 4px solid rgb(248, 207, 26);
  max-width: 300px;
  padding: 0;
  margin: 2px auto 0 auto !important;
}
.fondo-gris-form {
  background-color: #dddddd;
  border-radius: 30px;
  margin-bottom: 4rem;
  border: 2px solid black;
}
.form-tittle-text {
  font-size: 56px;
  font-weight: 900;
  font-family: Nunito;
}
.margin-b {
  margin-bottom: 2rem;
}
.margin-estudiante {
  margin-bottom: 4rem;
}
.btn-form {
  left: 35%;
  font-size: 40px;
  width: 60%;
  padding: 0;
  margin: 0;
  border: 0;
  letter-spacing: 0.11em;
  border-radius: 15px;
  font-family: Nunito;
}
.text-terms {
  color: #7e7e7e !important;
  margin-bottom: 1rem;
  font-size: 16px;
  font-family: Nunito;
}
.btn-form2 {
  font-size: 25px;
  padding: 0px 8px 0px 8px !important;
  letter-spacing: 0.11em;
  border-radius: 10px;
  height: 35px;
  font-family: Nunito;
}
.fondo6 {
  background-image: url("../assets/img/home33.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 392px;
  margin-bottom: 3rem;
}
.position-junio {
  padding-left: 440px;
}
.position-a {
  position: absolute;
  top: -50px;
}
.margin-role {
  margin-top: 65px;
}
.fondo7 {
  background-image: url("../assets/img/home30.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 370px;
  margin-bottom: 3rem;
}
.text-inscribete {
  font-size: 48px;
  font-family: Nunito;
}
.text-correo {
  font-size: 36px;
  font-family: Nunito;
}
.text-recibe {
  font-size: 48px;
  font-weight: 900;
  font-family: Nunito;
}
.margin-check {
  margin-left: 25px;
}
.pincel {
  display: none;
}
.avion {
  display: none;
}
.escuadra {
  display: none;
}
.phone {
  display: none;
}
.whatsapp {
  position:fixed;
  width:60px;
  height:60px;
  bottom:40px;
  right:40px;
  background-color:#25d366;
  color:#FFF;
  border-radius:50px;
  text-align:center;
  font-size:30px;
  z-index:100;
}
.whatsapp a{
    color: white;
}

.whatsapp-icon {
  margin-top:13px;
}
@media (max-width: 600px) {
  .logo-liv4t {
    height: 100px;
    width: 120px;
    position: relative;
  }
  .desktop {
    display: none;
  }
  .phone {
    display: block;
  }
  .navbar a {
    padding: 14px 4px !important;
  }
  .color-nav {
    font-size: 14px !important;
  }
  .flex-nav {
    flex-direction: row !important;
  }
  .margin-logo {
    margin-right: 0 !important;
  }
  .fondo1 {
    background-repeat: no-repeat;
    height: 240px;
    background-size: 100% 100%;
    width: 100%;
    position: relative;
    margin-top: 20px;
    margin-bottom: 1rem;
  }
  .fondo2 {
    background-image: url("../assets/img/home2.png");
    background-repeat: no-repeat;
    height: 315px;
    background-size: 100% 100%;
    width: 100%;
    position: relative;
    margin-bottom: 4rem;
  }
  .img-dim {
    width: 200px;
    height: 150px !important;
    float: right;
    position: relative;
  }
  .esquina {
    margin-top: -300px;
    margin-left: 35px;
    z-index: -1;
  }
  .img-pos {
    background-image: url("../assets/img/home18.png");
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    height: 210px;
    top: 85px;
    left: 20px;
    width: 350px;
  }
  .text-img-dim {
    font-size: 52px;
    margin-left: 20px;
    position: relative;
    margin-left: 185px;
    margin-bottom: 1rem;
    top: -100px;
    font-family: "Nunito";
  }
  .text-img-pos {
    top: -15px;
    position: absolute;
    padding: 80px 36px 0px 45px;
    font-size: 12px;
    text-align: justify;
    font-family: Nunito;
    line-height: 16px;
    font-weight: 400;
  }
  .logo-liv4t-old {
    height: 70px !important;
    margin-left: 45px;
    top: -65px;
    position: absolute;
  }
  .fondo3 {
    background-image: url("../assets/img/home21.png");
    background-repeat: no-repeat;
    height: 220px;
    background-size: 100% 100%;
    width: 100%;
    position: relative;
    margin-top: 55px;
  }
  .text-fondo3 {
    font-weight: 900;
    font-size: 14px;
    font-family: Nunito;
    margin-left: 0px;
    padding-top: 7px;
    margin-bottom: -2.5rem;
  }
  .fondo4 {
    background-repeat: no-repeat;
    background-size: 100%;
    height: 200px;
  }
  .container-top {
    padding-top: 0;
    margin-left: -22px !important;
    padding-left: 0;
  }
  .text-virtualiza {
    font-size: 12px !important;
    margin-left: -5px;
  }
  .img-virtualiza {
    height: 40px !important;
  }
  .img-roles {
    height: 150px;
    margin-left: -25px;
  }
  .fondo5 {
    background-image: url("../assets/img/home13.png");
    background-repeat: no-repeat;
    height: 240px;
    background-size: 100% 100%;
    width: 100%;
    position: relative;
    margin-top: 0;
    margin-bottom: 3rem;
  }
  .fondo6 {
    background-image: url("../assets/img/home33.png");
    background-repeat: no-repeat;
    height: 280px;
    background-size: 100% 100%;
    width: 100%;
    margin-left: 20px;
    position: relative;
    margin-top: 20px;
    margin-bottom: 1rem;
  }
  .position-junio {
    padding-left: 160px;
  }
  .div-junio {
    margin-top: -20px;
    font-size: 12px;
  }
  .margin-role {
    margin-top: 20px;
  }
  .text-roles {
    font-size: 11px !important;
  }
  .position-a {
    height: 90px !important;
  }
  .img-docente {
    height: 40px !important;
  }
  .margin-estudiante {
    margin-bottom: 1rem;
  }
  .fondo7 {
    background-size: 100% 100%;
    margin-bottom: 0;
  }
  .text-porque {
    font-size: 14px !important;
    line-height: 18px;
    padding: 0px 25px 0px 30px;
  }
  .form-tittle-text {
    font-size: 30px;
  }
  .line-yellow-form {
    border-bottom: 5px solid rgb(248, 207, 26);
    max-width: 280px;
  }
  .text-inscribete {
    font-size: 28px;
    font-family: Nunito;
  }
  .text-correo {
    font-size: 22px;
    font-family: Nunito;
  }
  .centrado {
    margin-left: auto;
    margin-right: auto;
    width: 85%;
    padding: 30px;
  }
  .btn-form {
    font-size: 22px;
  }
  .text-recibe {
    font-size: 28px;
    font-weight: 900;
    font-family: Nunito;
  }
  .margin-b {
    margin-bottom: 0.5rem;
  }
  .line-yellow-form2 {
    max-width: 145px;
  }
  .centrado2 {
    padding: 10px 10px 10px 10px;
  }
  .text-terms {
    font-size: 11px;
  }
  .btn-form2 {
    font-size: 16px;
    height: 26px;
  }
  .margin-check {
    margin-left: 25px;
    margin-bottom: 120px;
  }
  .pincel {
    height: 55px !important;
    margin-left: 180px;
    top: -50px;
    position: absolute;
    display: block;
  }
  .avion {
    height: 90px !important;
    margin-left: 220px;
    top: -38px;
    position: absolute;
    display: block;
  }
  .escuadra {
    height: 90px !important;
    margin-left: 220px;
    top: 20px;
    position: absolute;
    display: block;
  }
  .btn-skills {
    background-color: #ed533a;
    border-color: #ed533a;

    color: white !important;
  }
}
</style>
