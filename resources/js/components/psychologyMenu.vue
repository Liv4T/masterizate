<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">Psicología</h3>
          <div class="card-body">
            <table>
                <tr>
                    <td>
                        <img
                            width="35px"
                            src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/ANUNCIOS_naranja.png?alt=media&token=539c1428-c480-43bf-a132-73be35386940"
                            alt
                            />
                    </td>
                    <td>
                    <a class="text-table" href="#">Comunicados</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img
                            width="35px"
                            src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MENSAJES_naranja.png?alt=media&token=93ec6b97-e5a6-4eca-891e-b63bf2a352ad"
                            alt
                            />
                    </td>
                    <td>
                    <a class="text-table" href="#">Mensajes</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img
                            width="35px"
                            src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MANUAL-DE-USUARIO_naranja.png?alt=media&token=bd2488fb-e121-432d-afd2-f223fcc0f29e"
                            alt
                            />
                    </td>
                    <td>
                    <a class="text-table" href="#">Seguimientos</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img
                            width="35px"
                            src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MANUAL-DE-USUARIO_naranja.png?alt=media&token=bd2488fb-e121-432d-afd2-f223fcc0f29e"
                            alt
                            />
                    </td>
                    <td>
                    <a class="text-table" href="#">Historial</a>
                    </td>
                </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
$(".collapse").on("show.bs.collapse", function () {
  $(".collapse.in").collapse("hide");
});

export default {
  data() {
    return {
    };
  },
  mounted() {
    
  },
  methods: {

  },
};
</script>
<style>
.collapse-row.collapsed + tr {
  display: none;
}
.btn.skool {
  background-color: #c1e9eb;
  color: white;
}
.text-table{
    text-decoration: none;
    color: #278080 !important;
    font-size: 20px;
    align-items: left;
}
</style>
