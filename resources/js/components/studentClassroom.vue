<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">{{ name_classroom }}</h3>
          <div class="card-body">
           <table>
                <tr v-for="(student,t) in students" :key="t">
                    <td class="table-text">{{ t + 1 }}</td>
                    <td><img v-bind:src="student.picture" alt="" width="32px" height="16px"></td>
                    <td class="table-text">{{ student.name + " " + student.last_name }}</td>
                    <td>
                        <a :href="'/student/'+ student.id" class="btn btn-warning btn-radius">Notas</a>
                    </td>
                    <td style="padding-left: 2px;">
                        <a :href="'/student/'+ student.id" class="btn btn-warning btn-radius">Hoja de vida</a>
                    </td>
                    <td style="padding-left: 2px;">
                        <a :href="'/student/'+ student.id" class="btn btn-orange btn-radius">Competencias Blandas</a>
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
  props: ["id_classroom", "name_classroom"],
  data() {
    return {
      students: [],
      id_area: "",
    };
  },
  mounted() {
    var url = "/getStudentByClassroom/" + this.id_classroom;
    axios.get(url).then((response) => {
      this.students = response.data;
    });
  },
  methods: {
    botones(classroom) {
      var urlsl =
        window.location.origin +
        "/students/" +
        classroom;
      axios.get(urlsl).then((response) => {
        this.anual = response.data;
        if (this.anual.quaterly.length > 0) {
          this.general = true;
        } else {
          this.general = false;
        }
      });
      
    },
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
.table-text{
    font-size: 16px;
    text-align: left;
}
.btn-radius{
    border-radius: 20px;
}
.btn-orange{
    background-color: #faa424;
    font-weight: 600;
    border-color: #faa424;
    color: #ffffff;
}
.btn-orange:hover{
    background-color: #ffc039;
    border-color: #ffc039;
    text-decoration: none;
    color: #ffffff;
}
</style>
