<template>
    
</template>
<script>
export default {
    data() {
        return{
            clases:[],
            activsToCalificate:[]
        }
    },

    watch(){

    },

    methods:{
        getData(){
            axios.get(``).then((response)=>{
                console.log(response.data)
            })
        },

        getActivitiesToCalificate(){
            axios.get(``).then((response)=>{
                console.log(response.data)
            })
        }
    }
}
</script>