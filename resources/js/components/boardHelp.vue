<template>
<div>
    <div class="row max-top">
        <div style="margin-left:auto">
            <a class="btn" @click="toggle">
                <i class="fa fa-question-circle" style="font-size:35px; color:#278080;"></i>
            </a>
        </div>
    </div>
    <Drawer @close="toggle" align="right" :maskClosable="true" :zIndex="1003" :closeable="true" class="max-top">
        <div v-if="open">
            <div class="row">
                <div class="col-md-12">
                    <h1>Pizarra</h1>
                    <p>En esta pizarra pueden crear figuras, descargalas como imagen y compartir con la clase o utilizar el editor de texto para crear archivos de word y subirlas a la clase.</p>
                    <img src="../assets/img/board_blank.png" alt="select_area" width="350px" height="350px" style="margin-bottom:10px">
                    <p>También puede ser usada para clases virtuales por videoconferencia y dibujar o escribir algo puntual a los estudiantes.</p>
                    <img src="../assets/img/board.png" alt="create_aula" width="350px" height="350px" style="margin-bottom:10px">
                </div>
            </div>
        </div>
    </Drawer>
</div>
</template>
<script>
import Drawer from "vue-simple-drawer";
export default {
    data(){
        return{
            open: false,
        }
    },
    components: {
        Drawer
    },
    methods: {
        toggle() {
            this.open = !this.open;
        },
    }
}
</script>
<style>
/* .vue-simple-drawer.right {
    right: 0;
    top: 140px;
    bottom: 0;
} */
.max-top>div.vue-simple-drawer.right{
    top:140px !important;
}
</style>
