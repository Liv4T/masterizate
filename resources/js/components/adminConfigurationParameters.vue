<template>

    <div class="parameters-container">
        <content-loader v-if="loading" viewBox="0 0 300 200"></content-loader>
        <div class="parameter" v-if="!loading">
            <span class="parameter-label">Calificación base</span>
            <div>
                <input type="number" class="form-control" v-model="base_calification" />
            </div>
            <button class="btn btn-primary" @click="updateBaseCalification()">Aplicar</button>
        </div>
    </div>
</template>
<script>
export default {
    props: [],
    data() {
      return {
          loading:false,
          base_calification:0
      };
    },
    mounted() {
        //get calification
        this.getBaseCalification();
    },
    methods: {
        getBaseCalification(){
            this.loading=true;
            axios.get('/api/admin/configuration/property/CALIFICATION_BASE').then((response) => {
                   if(response.data)
                   {
                       this.base_calification=response.data.content;
                   }

                   this.loading=false;
                }, (error) => {
                    console.error(error)
                     this.loading=false;
                });
        },
        updateBaseCalification(){
             this.loading=true;
            axios.put('/api/admin/configuration/property/CALIFICATION_BASE',{value:this.base_calification}).then((response) => {
                console.log(response);
                   if(response.status==200)
                   {
                        toastr.success("Calificación actualizada correctamente");
                   }
                    this.loading=false;
                }, (error) => {
                    console.error(error)
                     this.loading=false;
                });
        },
    },
}
</script>
<style scoped>
.parameters-container{padding: 10px;}
.parameter{display: flex;justify-content: space-between;flex-direction: row;align-items: center;}
.parameter-label{width: 150px;font-weight: 700;font-size: 1.0em;}
</style>
