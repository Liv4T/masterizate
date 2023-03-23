<template>
  <div class="back">
    <div class="row justify-content-center margin-top-20">
      <div class="col-md-10">
        <div class="card">
          <div class="row">
            <div class="col-md-12 text-center">
              <h4>Contrato</h4>
              <h6>Para continuar revise el contrato</h6>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-10 col-md-10">
              <form onSubmit="return false;">
                <div align="center">
                  <iframe :src="pdf" width="100%" frameborder="0" class="text-center"></iframe>
                  <br />
                  <h5 class="margin-top-20">De acuerdo con todo lo anterior, EL CONTRATISTA declara que hizo lectura del contrato</h5>
                  <div class="row justify-content-center radiobt">
                    <input type="radio" id="si" name="answer" value="1" v-model="answer" required />
                    <h5 class="mgr">Si</h5>

                    <input type="radio" id="no" name="answer" value="0" v-model="answer" />
                    <h5>No</h5>
                  </div>
                  <h5 class="margin-top-20">
                    Conoce las obligaciones y tarifas que de este se desprenden, conociendo esto, EL CONTRATISTA acepta los términos del contrato, acepta el valor de las comisiones acordadas y de los posibles costos adicionales que pueda incurrir por el uso de la plataforma.
                  </h5>
                  <div class="row justify-content-center radiobt">
                    <input type="radio" id="si" name="answer1" value="1" v-model="answer1" required />
                    <h5 class="mgr">Si</h5>
                    <input type="radio" id="no" name="answer1" value="0" v-model="answer1" />
                    <h5>No</h5>
                  </div>
                </div>

                <div class="row">
                  <div class="form-group content-button col-md-12">
                    <button v-if="!events.register_loading" class="btn btn-Azul" @click="RegisterEvent()" :disabled="!RegisterValidForm()">Acepto</button>
                    <button v-if="events.register_loading" class="btn btn-primary" :disabled="true">Cargando...</button>
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
      type: "",
      idnumber: "",
      answer: "",
      answer1: "",
      pdf: "",
      contract: [],
      myOptions: ["Cedula de Ciudadania", "Cedula de extranjeria"],

      events: {
        register_loading: false,
      },
    };
  },
  mounted() {
    var urlr = "getContract";
    axios.get(urlr).then((response) => {
      this.contract = response.data;
      console.log(this.contract);
      this.pdf = this.contract.url;
      console.log(this.pdf);
    });
  },
  methods: {
    RegisterEvent() {
      this.events.register_loading = true;
      axios
        .put("/updateContract", {
          read_terms: this.answer,
          agree: this.answer1,
        })
        .then((response) => {
          toastr.success("Contracto guardado exitosamente");
          this.getInicio();
        })
        .catch((error) => {
          toastr.info(error);
        });
    },
    RegisterValidForm() {
      return this.answer == 1 && this.answer1 == 1;
    },
    getInicio() {
      window.location = "/calendar";
    },
  },
};
</script>
<style>
* {
  font-family: "Montserrat";
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
.mgr {
  margin-right: 25px;
}
.radiobt {
  align-items: baseline;
}
iframe:not(.md-image){
    height:500px !important;
}
</style>
