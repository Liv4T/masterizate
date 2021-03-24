<template>
  <div class="template-container">
    <content-loader v-if="header_loading"></content-loader>
    <div class="row" v-if="!header_loading">
        <div class="col-sm-12">
            <h4>Encabezado de página</h4>
            <editor-component :content="template_header" @updateText="SetTemplateHeaderEvent($event)"></editor-component>
        </div>
        <div class="col-sm-12">
           <button class="btn btn-primary" @click="updateTemplateHeader()">Guardar Encabezado</button>
        </div>
    </div>
    <content-loader v-if="footer_loading"></content-loader>
    <div class="row" v-if="!footer_loading">
        <div class="col-sm-12">
            <h4>Pie de página</h4>
            <editor-component :content="template_footer" @updateText="SetTemplateFooterEvent($event)"></editor-component>
        </div>
         <div class="col-sm-12">
           <button class="btn btn-primary" @click="updateTemplateFooter()">Guardar Pie de Página</button>
        </div>
    </div>

     <div class="row">
          <div class="col-sm-12">
             <div class="parameter" v-if="!loading">
            <span class="parameter-label">Plantilla</span>
            <div>
                <input type="text" class="form-control" v-model="template_path" />
            </div>
            <button class="btn btn-primary" @click="updateTemplatePath()">Guardar</button>
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
        template_header: "",
        template_footer: "",
        template_path:"",
        header_loading:false,
        footer_loading:false,
        loading:false
      };
    },
    mounted() {
        this.getTemplateHeader();
        this.getTemplateFooter();
        this.getTemplatePath();
    },
    methods: {
      getTemplateHeader() {
        this.header_loading = true;
        axios.get("/api/admin/configuration/property/TEMPLATE_NOTESHEET_HEADER").then(
          (response) => {
            if (response.data && response.data.content) {
              this.template_header = response.data.content;
            }

            this.header_loading = false;
          },
          (error) => {
            console.error(error);
            this.header_loading = false;
          }
        );
      },
      getTemplateFooter() {
        this.footer_loading = true;
        axios.get("/api/admin/configuration/property/TEMPLATE_NOTESHEET_FOOTER").then(
          (response) => {
            if (response.data && response.data.content) {
              this.template_footer = response.data.content;
            }

            this.footer_loading = false;
          },
          (error) => {
            console.error(error);
            this.footer_loading = false;
          }
        );
      },
      getTemplatePath() {
        this.loading = true;
        axios.get("/api/admin/configuration/property/TEMPLATE_NOTESHEET_PATH").then(
          (response) => {
            if (response.data && response.data.content) {
              this.template_path = response.data.content;
            }

            this.loading = false;
          },
          (error) => {
            console.error(error);
            this.loading = false;
          }
        );
      },
      updateTemplateHeader() {
        return new Promise((resolve, reject) => {
          this.header_loading = true;
          axios.put("/api/admin/configuration/property/TEMPLATE_NOTESHEET_HEADER", { value: this.template_header }).then(
            (response) => {
              console.log(response);
              if (response.status == 200) {
                toastr.success("Header actualizado correctamente");

              }
              this.header_loading = false;
               resolve();
            },
            (error) => {
              console.error(error);
              this.header_loading = false;
              reject(error);
            }
          );
        });
      },
       updateTemplateFooter() {
        return new Promise((resolve, reject) => {
          this.footer_loading = true;
          axios.put("/api/admin/configuration/property/TEMPLATE_NOTESHEET_FOOTER", { value: this.template_footer }).then(
            (response) => {
              console.log(response);
              if (response.status == 200) {
                toastr.success("Footer actualizado correctamente");

              }
              this.footer_loading = false;
               resolve();
            },
            (error) => {
              console.error(error);
              this.footer_loading = false;
              reject(error);
            }
          );
        });
      },
      updateTemplatePath() {
        return new Promise((resolve, reject) => {
          this.loading = true;
          axios.put("/api/admin/configuration/property/TEMPLATE_NOTESHEET_PATH", { value: this.template_path }).then(
            (response) => {
              console.log(response);
              if (response.status == 200) {
                toastr.success("Plantilla actualizado correctamente");

              }
              this.loading = false;
               resolve();
            },
            (error) => {
              console.error(error);
              this.loading = false;
              reject(error);
            }
          );
        });
      },
      SetTemplateHeaderEvent(content)
      {
          this.template_header=content;
      },
      SetTemplateFooterEvent(content)
      {
          this.template_footer=content;
      }

    },
  };
</script>
<style scoped>
  .template-container {
    padding: 10px;
  }
  .template-creator {
    width: 100%;
  }
  h4{font-size: 1.1em;font-weight: 600;margin: 10px;}
</style>
