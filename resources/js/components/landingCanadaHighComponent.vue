<template>
    <div>
        <div class="desktop">
            <div class="row img-canada">
                <a href=""><img src="../assets/img/landing-canada-high.png" alt="Estuia_canada"></a>
            </div>
            <div class="boton-conoce-mas" style="padding: 0; margin: 0">
                <a href="https://wa.me/57317575606?text=Me%20gustaría%20saber%20más%20sobre%20Canada" class="btn btn-conoce-mas" target="_blank">Conoce más</a>
            </div>
        </div>
        <div class="phone">
            <div class="img-canada">
                <a href=""><img src="../assets/img/landing-canada-high-phone.png" alt="Estuia_canada"></a>
            </div>
        </div>
        <div>
            <a href="https://wa.me/573160256058?text=Me%20gustaría%20saber%20más%20sobre%20Canadá" class="whatsapp" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
      </div>
    </div>
</template>
<style>
.boton-conoce-mas{
    position: absolute;
    z-index: 2;
    left: 1000px;
    top: 650px;
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
    .boton-conoce-mas{
        position: absolute;
        z-index: 2;
        left: 10px;
        top: 370px;
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
