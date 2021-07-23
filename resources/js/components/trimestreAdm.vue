<template>
  <div class="back">
    <div class="row justify-content-center">
      <div id="crud" class="col-sm-10">
        <div class="card text-center">
          <h3 class="card-header fondo">Trimestre</h3>
          <div class="card-body">
            <div class="col-md-3">
                <button class="btn btn-warning" v-on:click.prevent="createT()">Crear</button>
            </div>

            <br />
            <br />
            <table class="table table-responsive-xl table-hover table-striped center">
              <tbody v-for="trimestre in trimestres">
                <tr data-toggle="collapse" data-target="#accordion" class="clickable">
                  <td>{{ trimestre.nombre }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <modal-create-trimestre></modal-create-trimestre>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            trimestres: [],
        };
    },
   mounted(){
    this.getData();
   },
   methods: {
    createT(){
        $("#CreateT").modal("show");
    },
    getData(){
        var url="/getTrimestres";
        axios.get(url).then((response) => {
            this.trimestres = response.data;
        });
    },
   }, 
}
</script>