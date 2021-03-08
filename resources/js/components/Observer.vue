<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div id="accordion">
                    <div class="card" v-for="(data, id) in data" :key="id">
                        <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                                <button class="btn btn-link" data-toggle="collapse" :data-target="'#uno'+data.id"
                                    aria-expanded="true" :aria-controls="data.id | addPrhase">
                                    {{data.course}}
                                </button>
                            </h5>
                        </div>

                        <div :id="data.id | addPrhase" class="collapse show" aria-labelledby="headingOne"
                            data-parent="#accordion">
                            <div class="card-body">
                                {{data.user_creator}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                data:[
                    {
                        id:1,
                        course: 1001,
                        student:[{
                            name:'name',
                            observer:'observer'
                        },{
                            name:'name2',
                            observer:'observer'
                        }],
                        user_creator:'docente'
                    },{
                        id:2,
                        course: 1002,
                        student:[{
                            name:'name',
                            observer:'observer'
                        }],
                        user_creator:'docente'
                    }
                ],
                students: [],
                parents: [],
                observers: []
            }
        },
        mounted() {
            this.getData();
        },
        filters: {
            addPrhase: function (value) {
                console.log(value)
                return "uno"+value
            }
        },
        methods: {
            getData() {
                axios.get('/dataUsers').then((response) => {
                    const $data = response.data;
                    this.students = $data[2];
                    this.parents = $data[1];
                    this.observers = $data[0];
                }).catch((error) => {
                    console.log(error)
                })
            }
        }
    }

</script>
