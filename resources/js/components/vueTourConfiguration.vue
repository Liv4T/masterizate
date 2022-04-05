<template>
    <v-tour name="myTour" :steps="steps">
        <template slot-scope="tour">
            <transition name="fade">
            <v-step
                v-if="tour.steps[tour.currentStep]"
                :key="tour.currentStep"
                :step="tour.steps[tour.currentStep]"
                :previous-step="tour.previousStep"
                :next-step="tour.nextStep"
                :stop="tour.stop"
                :skip="tour.skip"
                :is-first="tour.isFirst"
                :is-last="tour.isLast"
                :labels="tour.labels"
            >
                <template v-if="tour.isLast">
                <div slot="actions">
                    <button @click="tour.previousStep" class="v-step__button">Anterior</button>
                    <button @click="disableTour" class="v-step__button">Finalizar</button>
                </div>
                </template>
                <template v-else>
                    <div slot="actions">
                        <button @click="tour.previousStep" class="v-step__button">Anterior</button>
                        <button @click="tour.nextStep" class="v-step__button">Siguiente</button>
                    </div>
                </template>
            </v-step>
            </transition>
        </template>
    </v-tour>
</template>
<script>
export default {
    props:['step','condition'],
    data(){
        return {
            steps:this.step,
            errors:[],
        }
    },

    mounted() {
        console.log(this.steps);
        this.enableTour();
    },
    methods:{
        enableTour(){
            var url = "/enableTour/"+this.condition;
            axios.get(url).then(response => {
                if(response.data){
                    this.$tours['myTour'].start();
                }
            }).catch((error) => {
                this.errors = error.response.data;
            });
        },
        disableTour(){
            var url = "/disableTour/"+this.condition;
            axios.put(url).then(response => {
                this.errors = [];
                this.$tours['myTour'].stop();
            }).catch((error) => {
                console.log(error);
                this.errors = error.response.data;

            });
        }
    }
}

</script>
