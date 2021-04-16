<template>
  <div class="back row justify-content-center">
    <div class="col-sm-10">
      <div class="card text-center">
        <div class="card-body">
          <div class="row">
            <div class="col-12">
              <div class="row">
                <div class="col-9 padding-top-20">
                  <div class="row">
                    <div class="col-12 text-left">
                      <h3>{{person.name}} {{person.last_name}}</h3>
                    </div>
                  </div>
                  <div class="row margin-top-20">
                    <div class="col-12" v-html="person.profile.EXPECTATIVE">
                    </div>
                  </div>
                </div>
                <div class="col-3">
                  <div class="image_container">
                      <div class="effect_image"></div>
                     <img v-if="person.picture" class="profile_image" :src="person.picture" alt="profile" />

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="card-background">
                <div class="row">
                  <div class="col-6 line-right">
                    <div class="header_info">
                      <img class="icon" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/TAREAS_naranja.png?alt=media&token=0ffb3c21-349a-4615-b57c-50dac3db8285" alt="icon" />
                      <h5>Educación</h5>
                    </div>
                    <div class="content_info" v-html="person.profile.EDUCATION">
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="header_info">
                      <img class="icon" src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/MIS-CURSOS.png?alt=media&token=47515df0-5b95-48b4-bb08-10257108169b" alt="icon" />
                      <h5>Experiencia como educador</h5>
                    </div>
                    <div class="content_info" v-html="person.profile.EXPERIENCE">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import moment from "moment";
  moment.tz.setDefault("America/Bogota");
  moment.locale("es");

  import datetime from "vuejs-datetimepicker";

  export default {
    data() {
      return {
        person: {profile:{}},
        loading: false,
      };
    },
    props: ["tutor_id"],
    components: {
      datetime,
    },
    mounted() {
      this.getInformation();
    },
    methods: {
      getInformation() {
        axios.get(`/api/tutor/${this.tutor_id}/profile`).then((response) => {
          this.person = response.data;
        });
      },

    },
    filters: {
      formatDate: (value) => {
        if (value) {
          return moment(String(value)).format("DD MMMM YYYY hh:mm a");
        }
      },
    },
  };
</script>
<style>
  h3 {
    font-weight: 800;
  }
  h5 {
    font-weight: 700;
  }
  .image_container {
    height: 220px;
    text-align: left;
    padding-bottom: 10px;
    position: relative;
  }
  .effect_image{
      position: absolute;
      left: 10px;
      bottom: 0px;
      background-color: #ffc039;
      width: 160px;
      height: 215px;
  }
  .profile_image {
    max-height: 210px;
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .perspective-content {
    font-weight: 600;
    font-size: 1.2em;
  }
  .card-background {
    background-color: #f4f4f4;
    margin-top: 20px;
    padding: 15px;
  }
  .margin-top-20 {
    margin-top: 20px;
  }
  .header_info {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .header_info .icon {
    width: 40px;
    height: 50px;
    margin-right: 10px;
  }
  .content_info {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    text-align: justify;
    padding:5px;
  }
  .line-right {
    border-right: 1px solid #e2e2e2;
  }
  .padding-top-20{padding-top: 20px;}
</style>
