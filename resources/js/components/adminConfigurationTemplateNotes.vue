<template>
  <div class="template-container">
    <content-loader v-if="loading"></content-loader>
    <div class="row" v-if="!loading">
        <div class="col-sm-12">
            <h4>Encabezado de página</h4>
            <editor-component :content="template_header"></editor-component>
        </div>
    </div>
    <div class="row" v-if="!loading">
        <div class="col-sm-12">
            <h4>Pie de página</h4>
            <editor-component :content="template_footer"></editor-component>
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
        loading:false
      };
    },
    mounted() {

    },
    methods: {
      getTemplateNote() {
        this.loading = true;
        axios.get("/api/admin/configuration/property/TEMPLATE_NOTES").then(
          (response) => {
            if (response.data && response.data.content) {
              this.template_url = response.data.content;

              const split_url = response.data.content.split("/");

              this.template_name = split_url[split_url.length - 1];
            }

            this.loading = false;
          },
          (error) => {
            console.error(error);
            this.loading = false;
          }
        );
      },
      updateTemplateNote() {
        return new Promise((resolve, reject) => {
          this.loading = true;
          axios.put("/api/admin/configuration/property/TEMPLATE_NOTES", { value: this.template_url }).then(
            (response) => {
              console.log(response);
              if (response.status == 200) {
                toastr.success("Plantilla actualizada correctamente");

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
      onFileChange(file) {
        this.loading = true;

        let files = file.target.files || file.dataTransfer.files;
        let data = new FormData();
        if (files.length > 0) {
          this.progress_upload = 10;
          console.log("evento");

          let file = files[0];
          let _fileNameSplit = file.name.split(".");

          // if uploaded file is valid with validation rules
          let file_extension = _fileNameSplit[_fileNameSplit.length - 1];
          let file_name = file.name.replace(`.${file_extension}`, "");
          this.progress_upload = 20;

          data.append("file", files[0]);
          data.append("name", file_name);
          data.append("count", `-template`);

          axios
            .post("/fileDocument", data)
            .then((response) => {
               this.template_url = `${window.location.origin}/uploads/clases/${file_name.split(" ").join("_")}-template.${file_extension}`;
              //this.template_name = file_name.split(" ").join("_").file_extension;
              this.updateTemplateNote().then(()=>{
                  this.getTemplateNote();
                    this.progress_upload = 100;
              });

            })
            .catch((err) => {
              console.error(err);
              this.loading = false;
            });
        } else {
          this.loading = false;
        }
      },
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
