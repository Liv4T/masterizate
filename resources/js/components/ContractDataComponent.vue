<template>
  <div class="back">
    <div class="row justify-content-center margin-top-20">
      <div class="col-md-10">
        <div class="card fondo-tuvet">
          <div class="row">
            <div class="col-md-12 text-center">
              <h4>Contrato</h4>
              <h6>Por favor ingrese todos los datos para generar el contrato.</h6>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-10 col-md-10">
              <form onSubmit="return false;">
                <div class="row">
                  <div class="form-group col-md-4">
                    <label><small class="label-required">*</small>Nombre Completo</label>
                    <input type="text" class="form-control" v-model="name" />
                  </div>
                  <!-- <div class="form-group col-md-4">
                    <label><small class="label-required">*</small>Tipo de documento</label>
                    <select2 :options="myOptions" v-model="type" required class="form-control"></select2>
                  </div> -->
                  <div class="form-group col-md-4">
                    <label><small class="label-required">*</small>Número de identificación</label>
                    <input type="text" class="form-control" v-model="idnumber" />
                  </div>
                </div>
                <div class="row">
                  <div class="form-group content-button col-md-12">
                    <button v-if="!events.register_loading" class="btn btn-Azul" @click="RegisterEvent()" :disabled="!RegisterValidForm()">Generar contrato</button>
                    <button v-if="events.register_loading" class="btn btn-primary" :disabled="true">Generando...</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [],
  data() {
    return {
      date: "",
      name: "",
      type: "Cedula de ciudadania",
      idnumber: "",

      events: {
        register_loading: false,
      },
    };
  },
  mounted() {},
  methods: {
    RegisterEvent() {
      this.events.register_loading = true;
      axios
        .post("/contract", {
          name: this.name,
          type: this.type,
          id_number: this.idnumber,
        })
        .then((response) => {
          toastr.success("Generando contrato");
          this.getInicio();
        })
        .catch((error) => {
          toastr.info(error);
        });
    },
    RegisterValidForm() {
      return this.type && this.name && this.idnumber;
    },
    getInicio() {
      window.location = "/contractView";
    },
  },
};
</script>
<style>
* {
  font-family: "Montserrat";
}
.fondo-tuvet {
  background-image: url("/uploads/home/fondo-huellitas.png");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
}
h4 {
  margin-top: 20px;
}
.border-bottom-1 {
  border-bottom: 1px solid #818181;
}
form {
  margin-top: 20px;
  padding: 10px;
}
.form-check-label {
  width: 90%;
}
</style>
