<template>
    <div>
        <!-- Modal de creación de evento se puede separar -->
        <div class="modal fade" id="createE">
            <div class="modal-lg modal-dialog">
                <div class="modal-content">
                    <form class="needs-validation" v-on:submit.prevent="createEvent" novalidate>
                        <div class="modal-header">
                            <h4>Crear evento</h4>
                            <button type="button" class="close" data-dismiss="modal">
                                <span>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group row justify-content-center">
                                <div class="col-md-6">
                                    <label for="name">Evento concurrente</label>
                                    <select class="form-control" v-model="typeEvent" @change="cambio">
                                        <option :value="options.id" v-for="(options, key) in concurrent" :key="key">
                                        {{ options.type }}
                                        </option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label v-bind:style="{ display: display }">Dia de la semana</label>
                                    <select class="form-control" name="dia" v-model="diaSemana" v-bind:style="{ display: display }">
                                        <option :value="options.id" v-for="(options, key) in dias" :key="key">
                                        {{ options.dia }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row justify-content-center">
                                <div class="col-md-6">
                                    <label for="name">Nombre del evento</label>
                                    <input type="text" name="name" class="form-control" v-model="nameEvent" />
                                    <div class="invalid-feedback">Please fill out this field</div>
                                </div>
                                <div class="col-md-6">
                                    <label for="name">Materia</label>
                                    <multiselect v-model="materia" :options="myOptions" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Seleccione una o varias" label="text" track-by="id" :preselect-first="true">
                                        <template slot="selection" slot-scope="{ values, isOpen }"
                                        ><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} opciones selecionadas</span></template
                                        >
                                    </multiselect>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-6">
                                    <label for="name">Desde</label>
                                    <datetime :format="formatDate" v-model="desde"></datetime>
                                    <div class="invalid-feedback">Please fill out this field</div>
                                </div>
                                    <div class="col-md-6">
                                    <label for="name">Hasta</label>
                                    <datetime :format="formatDate" v-model="hasta"></datetime>
                                    <div class="invalid-feedback"></div>
                                </div>
                                <div class="col-md-6">
                                    <strong for="name">Enlace de Meet</strong>
                                    <input type="text" name="name" class="form-control" v-model="nameMeet" />
                                    <div class="invalid-feedback">Please fill out this field</div>
                                </div>
                                <div class="col-md-6" style="display: none;">
                                    <strong for="name">id ultimo</strong>
                                    <input type="text" name="id_padre" class="form-control" v-model="lastId" />
                                    <div class="invalid-feedback">Please fill out this field</div>
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
        <!-- Modal creación de evento de padres -->
        <div class="modal fade" id="createE">
            <div class="modal-lg modal-dialog">
                <div class="modal-content">
                    <form class="needs-validation" v-on:submit.prevent="createEvent" novalidate>
                        <div class="modal-header">
                            <h4>Crear evento</h4>
                            <button type="button" class="close" data-dismiss="modal">
                                <span>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group row justify-content-center">
                                <div class="col-md-6">
                                    <label for="name">Evento concurrente</label>
                                    <select class="form-control" v-model="typeEvent">
                                        <option :value="options.id" v-for="(options, key) in concurrent" :key="key">
                                            {{ options.type }}
                                        </option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label style="display: none;" id="labeldia">Dia de la semana</label>
                                    <select class="form-control" name="dia" v-model="diaSemana" style="display:none">
                                        <option :value="options.id" v-for="(options, key) in dias" :key="key">
                                            {{ options.dia }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row justify-content-center">
                                <div class="col-md-6">
                                    <label for="name">Nombre del evento</label>
                                    <input type="text" name="name" class="form-control" v-model="nameEvent" />
                                    <div class="invalid-feedback">Please fill out this field</div>
                                </div>
                                <div class="col-md-6">
                                    <label for="name">Materia</label>
                                    <multiselect v-model="materia" :options="myOptions ? myOptions : []" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Seleccione una o varias" label="text" track-by="id" :preselect-first="true">
                                        <template slot="selection" slot-scope="{ values, isOpen }">
                                            <span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} opciones selecionadas</span>
                                        </template>
                                    </multiselect>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-6">
                                    <label for="name">Desde</label>
                                    <datetime format="YYYY-MM-DD H:i:s" v-model="desde"></datetime>
                                    <div class="invalid-feedback">Please fill out this field</div>
                                </div>
                                <div class="col-md-6">
                                    <label for="name">Hasta</label>
                                    <datetime format="YYYY-MM-DD H:i:s" v-model="hasta"></datetime>
                                    <div class="invalid-feedback"></div>
                                </div>
                                <div class="col-md-6">
                                    <strong for="name">Enlace de Meet</strong>
                                    <input type="text" name="name" class="form-control" v-model="nameMeet" />
                                    <div class="invalid-feedback">Please fill out this field</div>
                                </div>
                            </div>
                                <div class="modal-footer">
                                    <input type="submit" class="btn btn-warning" value="Guardar" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-6">
                        <strong for="name">Enlace de Meet</strong>
                        <input type="text" name="name" class="form-control" v-model="meetUp" />
                        <div class="invalid-feedback">Por favor ingresa la fecha</div>
                    </div>
                    <div class="col-md-6" style="display: none;">
                        <strong for="name">id ultimo</strong>
                        <input type="text" name="id_padre" class="form-control" v-model="id_padreUp" />
                    <div class="invalid-feedback">Please fill out this field</div>
                </div>
            </div>
            <div class="modal-footer">
                <input type="submit" class="btn btn-warning" value="Guardar" />
            </div>
        </div>
    </div>
</template>

<script>
    import datetime from "vuejs-datetimepicker";
    import moment from "moment";

    moment.tz.setDefault("America/Bogota");
    moment.locale("es");
    export default {
        props:["concurrent","dias","myOptions","getMenu"],
        data() {
            return {
                arrayDaysEvent: [],
                typeEvent:'',
                diaSemana:'',
                nameEvent:'',
                materia: [],
                desde: '',
                hasta: '',
                nameMeet:'',
                lastId: '',
                formatDate: "",
                display: "none",
                meetUp: "",
                id_padreUp: "",
            };
        },
        components: {
            datetime,
        },
        filters: {
            formatDate: (value) => {
                if (value) {
                    return moment(String(value)).format("DD MMMM YYYY hh:mm a");
                }
            },
        },
        mounted() {
        
        },
        methods: {
            createEvent() {
                var url = "createEvent";
                this.concurrentDays();
                if (this.typeEvent == 0) {
                    if (this.materia.length >= 1) {
                        for (let i = 0; i < this.materia.length; i++) {
                        axios
                            .post(url, {
                            //Cursos generales
                            name: this.nameEvent,
                            startDateTime: this.desde,
                            endDateTime: this.hasta,
                            id_area: this.materia[i].id,
                            id_classroom: this.materia[i].id_classroom,
                            url: this.nameMeet,
                            id_padre: null,
                            })
                            .then((response) => {
                            toastr.success("Nuevo evento creado exitosamente");
                            this.getMenu();
                            })
                            .catch((error) => {});
                        }
                    }
                } else if (this.typeEvent == 1 || this.typeEvent == 2) {
                    if (this.materia.length >= 1 && this.arrayDaysEvent.length >= 1) {
                        for (let i = 0; i < this.materia.length; i++) {
                            for (let j = 0; j < this.arrayDaysEvent.length; j++) {
                                axios
                                .post(url, {
                                    //Cursos generales
                                    name: this.nameEvent,
                                    startDateTime: this.arrayDaysEvent[j] + " " + this.desde,
                                    endDateTime: this.arrayDaysEvent[j] + " " + this.hasta,
                                    id_area: this.materia[i].id,
                                    id_classroom: this.materia[i].id_classroom,
                                    url: this.nameMeet,
                                    id_padre: this.lastId + 1,
                                })
                                .then((response) => {
                                    toastr.success("Nuevo evento creado exitosamente");
                                    this.getMenu();
                                })
                                .catch((error) => {});
                            }
                        }
                    }
                } else if (this.typeEvent == 3) {
                    if (this.materia.length >= 1 && this.arrayDaysEvent.length >= 1) {
                        for (let i = 0; i < this.materia.length; i++) {
                        for (let j = 0; j < this.arrayDaysEvent.length; j++) {
                            axios
                            .post(url, {
                                //Cursos generales
                                name: this.nameEvent,
                                startDateTime: this.arrayDaysEvent[j],
                                endDateTime: this.arrayDaysEventMes[j],
                                id_area: this.materia[i].id,
                                id_classroom: this.materia[i].id_classroom,
                                url: this.nameMeet,
                                id_padre: this.lastId + 1,
                            })
                            .then((response) => {
                                toastr.success("Nuevo evento creado exitosamente");
                                this.getMenu();
                            })
                            .catch((error) => {});
                        }
                        }
                    }
                }
            },
            cambio() {
                if (this.typeEvent == 2) {
                    this.display = "block";
                    this.formatDate = "H:i:s";
                    this.last_insert();
                } else if (this.typeEvent == 3) {
                    this.display = "none";
                    this.formatDate = "YYYY-MM-DD H:i:s";
                    this.last_insert();
                } else if (this.typeEvent == 1) {
                    this.display = "none";
                    this.formatDate = "H:i:s";
                    this.last_insert();
                } else if (this.typeEvent == 0) {
                    this.display = "none";
                    this.formatDate = "YYYY-MM-DD H:i:s";
                }
            },
            concurrentDays() {
                if (this.typeEvent == 1) {
                    //Crear eventos de lunes a viernes y omitimos los dias que ya pasaron de la semana
                    var date2 = new Date();
                    if (date2.getDay() == 6) {
                        date2.setDate(date2.getDate() + 2);
                    }
                    if (date2.getDay() == 0) {
                        date2.setDate(date2.getDate() + 1);
                    }
                    var dayOfWeek = date2.getDay();
                    this.arrayDaysEvent = [];
                    for (var i = 0; i < 5; i++) {
                        if (i - dayOfWeek != -1) {
                            var days = i - dayOfWeek + 1;
                            var newDate = new Date(date2.getTime() + days * 24 * 60 * 60 * 1000);
                            newDate = moment(String(newDate)).format("YYYY-MM-DD");
                            if (i + 1 >= dayOfWeek) {
                                this.arrayDaysEvent.push(newDate);
                            }
                        } else {
                            var date3 = moment(String(date2)).format("YYYY-MM-DD");
                            this.arrayDaysEvent.push(date3);
                        }
                    }
                }
                if (this.typeEvent == 2) {
                    //Crear eventos un dia especifico de la semana

                    this.arrayDaysEvent = [];
                    var hoy = new Date();
                    var hasta = new Date();
                    hasta.setDate(hasta.getDate() + 365);

                    while (moment(hoy).isSameOrBefore(hasta)) {
                        if (this.diaSemana == hoy.getDay()) {
                            this.arrayDaysEvent.push(moment(hoy).format("YYYY-MM-DD"));
                        }

                        hoy.setDate(hoy.getDate() + 1);
                    }
                    //console.log(this.arrayDaysEvent);
                }
                if (this.typeEvent == 3) {
                    //Crear evento una vez por mes
                    this.arrayDaysEvent = [];
                    this.arrayDaysEventMes = [];
                    var desde = new Date(this.desde);
                    var hasta = new Date(this.desde);
                    var desde2 = new Date(this.hasta);
                    var hasta2 = new Date(this.hasta);
                    hasta.setDate(hasta.getDate() + 365);
                    hasta2.setDate(hasta2.getDate() + 365);
                    var dia = desde.getDate(desde);
                    var dia2 = desde2.getDate(desde2);
                    
                    while (moment(desde).isSameOrBefore(hasta)) {
                        var dayMonth = desde.getDate(desde);
                        if (dayMonth == dia) {
                            this.arrayDaysEvent.push(moment(desde).format("YYYY-MM-DD H:mm:ss"));
                        }

                        desde.setDate(desde.getDate() + 1);
                    }
                    while (moment(desde2).isSameOrBefore(hasta2)) {
                        var dayMonth = desde2.getDate(desde2);
                        if (dayMonth == dia2) {
                        this.arrayDaysEventMes.push(moment(desde2).format("YYYY-MM-DD H:mm:ss"));
                        }

                        desde2.setDate(desde2.getDate() + 1);
                    }
                    console.log(this.arrayDaysEventMes);
                }
                if (this.typeEvent == 0) {
                this.arrayDaysEvent = [];
                this.formatDate = "YYYY-MM-DD H:i:s";
                }
            },
            last_insert() {
                var urlId = "lastId";
                axios.get(urlId).then((response) => {
                    this.lastId = response.data;
                });
            },
        },
    };
</script>
<style>
  .back-calendar {
    padding-left: 290px;
  }

  .class-event {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px;
  }

  .class-event-info {
    font-size: 1.2em;
    font-weight: 600;
    max-width: 280px;
    text-align: left;
  }

  .class-event-date {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .class-event-date > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
  }

  .class-event-date > div > small {
    font-size: 0.8em;
  }

  .class-event-date > div > span {
    font-size: 1em;
  }

  .class-event-footer {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .class-event-action {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 10px;
  }

  .class-event-action button {
    margin-right: 5px;
  }

  .justify-content {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }

  .dot {
    height: 8px;
    width: 8px;
    border-radius: 50%;
    display: inline-block;
  }

  .dot_blue {
    background-color: #3788d8;
  }

  .dot_red {
    background-color: #d8374d;
  }
  .padding-10 {
    padding: 10px;
  }
</style>
