<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">{{ name_classroom }}</h3>
          <div class="card-body">
            <form class="needs-validation" v-on:submit.prevent="createReport" novalidate>
                <div class="card-header card-color" v-for="(studentN,j) in students" :key="j">
                    <div class="row">
                        <div class="col-md-1">
                            <img v-bind:src="studentN.picture" alt="picture">
                        </div>
                        <div class="col-md-8" style="padding-top: 7px;">
                            <h4 style="text-align: left;">{{studentN.name + studentN.last_name}}</h4>
                        </div>
                         <div class="col-md-3">
                            <button class="btn btn-warning" v-on:click.prevent="createE()">Agregar motivo</button>
                        </div>
                    </div>
                </div>
                <div class="body" v-for="(student,t) in count" :key="t">
                    <div class="form-group row justify-content-center">
                        <div class="col-md-6">
                            <label for="name">Motivo de la consulta</label>
                            <select class="form-control" name="reason" v-model="reasonCon[t]">
                                <option :value="options.id" v-for="(options, key) in reasons"
                                    :key="key">
                                    {{
                                        options.name
                                    }}
                                </option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label>Persona involucrada</label>
                            <input type="text" name="personaInv" class="form-control" v-model="personInv[t]" />
                            <div class="invalid-feedback">Please fill out this field</div>
                        </div>
                    </div>
                    <div class="form-group row justify-content-center">
                        <div class="col-md-6">
                            <label for="name">Persona que reporta</label>
                            <input type="text" name="personaReporto" class="form-control" v-model="personReport[t]" />
                            <div class="invalid-feedback">Please fill out this field</div>
                        </div>
                        <div class="col-md-6">
                            <label for="name">Grado</label>
                            <input type="text" name="grade" class="form-control" v-model="grade[t]" />
                            <div class="invalid-feedback">Please fill out this field</div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-6">
                            <label for="name">Descripción</label>
                            <input type="text" name="descripcion" class="form-control" v-model="description[t]" />
                            <div class="invalid-feedback">Please fill out this field</div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <input type="boton" class="btn btn-warning buttom-plus" value="+" @click="agregarPlus"/>
                    <input type="submit" class="btn btn-warning" value="Guardar" />
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <modal-create-reason-component v-bind:id_student="id_student" v-bind:name_classroom="name_classroom" v-bind:id_classroom="id_classroom">
        </modal-create-reason-component>
  </div>
</template>
<script>
export default {
  props: ["id_student", "name_classroom", "id_classroom"],
  data() {
    return {
        students: [],
        reason: [],
        reasons: [],
        count: [{count: true,}],
        grade: [],
        description: [],
        personReport: [],
        personInv: [],
        reasonCon: [], 
    };
  },
  mounted() {
      var urlS= "/api/student/classroom/" + this.id_student;
      axios.get(urlS).then((response) => {
        this.students = response.data;
    });

    var urlR="/getReason";
    axios.get(urlR).then((response) => {
        this.reasons = response.data;
    });
  },
  methods: {
    createE(){
        $("#CreateE").modal("show");
    },
    agregarPlus(){
        this.count.push({
            count: true,
        });
    },
    getMenu(){
        window.location = "/student/" + this.id_classroom + "/" + this.name_classroom;
    },
    createReport(){
        var url = "/createReportP";
        for(let i = 0; i < this.count.length; i++){
            axios.post(url, {
                student_id: this.id_student,
                reason: this.reasonCon[i],
                student: this.personInv[i],
                person: this.personReport[i],
                grade: this.grade[i],
                description: this.description[i],
                id_classroom: this.id_classroom,

            }).then((response) => {
            toastr.success("Reporte creado exitosamente");
            this.getMenu();
            
            })
            .catch((error) => {});
        }
    },    
  },
};

</script>
<style>
    .card-color{
        background-color: white !important;
        margin-bottom: 15px;
    }
    .buttom-plus{
        width: 45px;
        height: 45px;
        margin: 5px;
        padding: 10px;
        -webkit-border-radius: 50px;
        -moz-border-radius: 50px;
        border-radius: 50px;
        font-size: 24px;
        line-height: 32px;
    }
</style>