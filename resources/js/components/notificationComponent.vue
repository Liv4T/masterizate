<template>
    <div>
        <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
            <i style="color:#ffc039" class="fas fa-bell"></i> <span id="span-counter" class="badge badge-light">0</span> <span class="caret"></span>
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a v-for="(event, k_event) in events" v-bind:key="k_event" class="dropdown-item" :href="event.hangout">[{{event.area}} {{event.classroom}}] {{event.name}}</a>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      events: [],
    };
  },
  created() {},
  mounted() {
        axios.get('/api/event/today').then((response) => {
            this.events=response.data;
            let spanCounter=document.getElementById('span-counter');
            spanCounter.innerHTML=this.events.length;
        });
  },
  methods: {

  },
};
</script>
<style>
</style>
