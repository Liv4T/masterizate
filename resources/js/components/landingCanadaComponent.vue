<template>
    <div>
        <div class="desktop">
            <div class="row img-canada">
                <a href=""><img src="../assets/img/landing-canada-idiomas.png" alt="Estuia_canada"></a>
            </div>
        </div>
        <div class="phone">
            <div class="img-canada">
                <a href=""><img src="../assets/img/landing-canada-idiomas-phone.png" alt="Estuia_canada"></a>
            </div>
        </div>
        <div>
            <a href="https://wa.me/573160256058?text=Me%20gustaría%aprender%20Ingles%20o%20Frances%20en%20Canadá" class="whatsapp" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
      </div>
    </div>
</template>
<style>
.boton-conoce-mas{
    position: absolute;
    z-index: 2;
    left: 1000px;
    top: 700px;
}
.btn-conoce-mas{
    background:#f93636;
    height: 60px;
    width: 190px;
    font-size: 25px;
    color: white;
}
.phone {
    display: none;
}
@media (max-width: 600px) {
    .boton-conoce-mas{
        position: absolute;
        z-index: 2;
        left: 30px;
        top: 480px;
    }
    .btn-conoce-mas{
        background:#f93636;
        height: 30px;
        width: 90px;
        font-size: 9px;
    }
    .phone {
        display: block;
    }
    .desktop {
        display: none;
    }
}
</style>
