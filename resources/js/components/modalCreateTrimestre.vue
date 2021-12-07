<template>
<div class="modal fade" id="CreateT">
    <div class="modal-lg modal-dialog">
        <div class="modal-content">
            <form class="needs-validation" v-on:submit.prevent="createTrimestre" novalidate>
                <div class="modal-header">
                    <h4>Crear Período</h4>
                    <button type="button" class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group row">
                        <div class="col-md-6">
                            <label for="name">Nombre del Período</label>
                            <input type="text" name="trimestre" class="form-control" v-model="trimestre" />
                            <div class="invalid-feedback">Please fill out this field</div>
                        </div>
                        <div class="col-md-6">
                            <label for="institution">Institución</label>
                            <select class="form-control" name="institution" v-model="institution">
                                <option :value="insti.id" v-for="(insti, key) in institutions" :key="key">
                                    {{ insti.name }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="row" v-for="(input1, k) in inputs1" :key="k">
                        <div class="col-md-6">
                            <label for="name">Periodos</label>
                            <span>
                                <a
                                href="#"
                                class="badge badge-danger"
                                @click.prevent="remove1(k)"
                                v-show="k || (!k && inputs1.length > 1)"
                                >-</a>
                                <a
                                href="#"
                                class="badge badge-primary"
                                @click.prevent="add1(k)"
                                v-show="k == inputs1.length - 1"
                                >+</a>
                            </span>
                            <input
                                type="text"
                                name="objetive1"
                                class="form-control"
                                v-model="input1.name"
                                required
                            />
                        </div>
                        <div class="col-md-6">
                            <label for="name">Desde</label>
                            <input
                                type="date"
                                name="objetive1"
                                class="form-control"
                                v-model="input1.date_from"
                                required
                            />
                            </div>
                            <div class="col-md-6">
                            <label for="name">Hasta</label>
                            <input
                                type="date"
                                name="objetive1"
                                class="form-control"
                                v-model="input1.date_to"
                                required
                            />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <input type="submit" class="btn btn-warning" value="Guardar" />
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</template>
<script>
export default {
    props:['getData'],
    data(){
        return {
            trimestre: "",
            institution: "",
            institutions: [],
            period: [],
            inputs1: [
                {
                    name: "",
                    date_from: "",
                    date_to: "",
                },
            ],
        };
    },
    mounted(){
        this.getInstitutions();
    },
   methods: {
        getInstitutions(){
            var urlr = "getInstitution";
            axios.get(urlr).then((response) => {
                this.institutions = response.data;
            });
        },
        add1(index) {
            this.inputs1.push({
                name: "",
            });
        },
        remove1(index) {
            this.inputs1.splice(index, 1);
        },
        cleanForm(){
            this.trimestre="";
            this.institution= "";
            this.period= [];
            this.inputs1= [
                {
                    name: "",
                    date_from: "",
                    date_to: "",
                },
            ];
        },
        createTrimestre(){
           var url="/createTrimestre";
           if (this.inputs1.length >= 1) {
                for (let i = 0; i < this.inputs1.length; i++) {
                    this.period.push(this.inputs1[i]);
                 }
           }
           axios.post(url, {
                nombre: this.trimestre,
                periods: this.period,
                institution_id: this.institution,

            }).then((response) => {
                toastr.success("Trimestre creado exitosamente");
                this.getData();
                this.cleanForm();
                $("#CreateT").modal("hide");
            })
            .catch((error) => {});
       },
   },
};
</script>
