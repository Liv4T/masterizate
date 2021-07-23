<template>
<div class="back">
    <div class="row justify-content-center">
        <div id="crud" class="col-sm-12">
            <ul style="margin: 70px 150px 0 150px;">
                <a href="#" v-for="(cycle,t) in cycles" :key="t">
                    <li class="item-cycle text-center">
                        <span class="menu-cycle">Ciclo {{ cycle.nombre }}</span>
                    </li>
                </a>
            </ul>
        </div>
    </div>
</div>
</template>
<script>
export default {
    props:["id_area","id_classroom, id_teacher"],
    data() {
        return {
            cycles:[],
        };
    },
    mounted(){
        this.getData();
    },
    methods: {
        getData(){
            //var url="/cycle/teacher/"+id_classroom+"/"+id_area+"/"+id_teacher;
            var url="/getTrimestres";
            axios.get(url).then((response) =>{
                this.cycles=response.data;
            });
        }
    },
};
</script>
<style>
.item-cycle {
    height: 50px;
    overflow: hidden;
    color: white;
    background: #00cbcec1;
    margin: 8px;
    line-height: 50px;
    margin-bottom: 2rem;
    border-radius: 10px;
}
.menu-cycle{
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 28px;
}
</style>