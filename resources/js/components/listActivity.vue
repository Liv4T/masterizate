<template>
  <auto-responsive>
    <div class="background2">
      <div class="row">
        <div class="col-md-11 mx-auto">
          <div class="custom-card text-center">
            <h3 class="card-header">Actividad</h3>
            <form class="needs-validation" novalidate>
                <form-wizard title subtitle>
              <tab-content>
              <div class="card-body">
                <div class="form-group row">
                  <div class="col-md-6">
                    <strong>Nombre del curso</strong>
                    <select2 :options="myOptions" v-model="metodology" required></select2>
                  </div>
                  <div class="col-md-6">
                    <strong>Unidad</strong>
                    <select2 :options="myOptions" v-model="metodology" required></select2>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-6">
                    <strong>Temas</strong>
                    <select2 :options="myOptions" v-model="metodology" required></select2>
                  </div>
                  <div class="col-md-6">
                    <strong>Tipo de Actividad</strong>
                    <select2 :options="myActivities" v-model="newActivity" required></select2>
                  </div>
                </div>
                <!-----------Actividades---------------------------------------------------------------------------->
                <div
                  v-show="newActivity=='Foro'||newActivity=='Chat'||newActivity=='Cuestionario V-F'||newActivity=='Cuestionario 4 opciones'||newActivity=='Mapa conceptual'||newActivity=='Ensayo'||newActivity=='Estudio de Caso'||newActivity=='Ejercicios'"
                >
                  <div class="form-group row mx-auto">
                    <div class="col" align="center">
                      <strong>Duracion estimada en plataforma</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newPlataform"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col" align="center">
                      <strong>Duracion estimada trabajo autonomo</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newWork"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Contextualizacion del tema</strong>
                      <a
                        tabindex="0"
                        class="badge badge-info"
                        role="button"
                        data-toggle="popover"
                        data-trigger="focus"
                        title="Contextualizacion del tema"
                        data-content="Redactar la contextualización del tema a la que se va a referir la actividad planteada"
                      >
                        <i class="fas fa-question"></i>
                      </a>
                    </div>
                    <textarea name="welcome" class="form-control" v-model="newTema" required></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Actividad</strong>
                      <a
                        tabindex="0"
                        class="badge badge-info"
                        role="button"
                        data-toggle="popover"
                        data-trigger="focus"
                        title="Actividad"
                        data-content="Describir de forma clara y sencilla la actividad que debe realizar de acuerdo con el tema y el propósito a evaluar. (referir cuales son los recursos con los que cuenta el estudiante, Ej. Videos, lecturas, vClass y otros)"
                      >
                        <i class="fas fa-question"></i>
                      </a>
                    </div>
                    <textarea name="welcome" class="form-control" v-model="newDescription" required></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div align="center">
                    <strong>Recursos necesarios para la actividad</strong>
                  </div>
                  <div class="form-group row">
                    <div class="col">
                      <label for="name">Tipo de recursos</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="TR 1."
                        v-model="newTR1"
                        required
                      />
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="TR 2."
                        v-model="newTR2"
                        required
                      />
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="TR 3."
                        v-model="newTR3"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="name">Origen del recurso</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="OR 1."
                        v-model="newOR1"
                        required
                      />
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="OR 2."
                        v-model="newOR2"
                        required
                      />
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="OR 3."
                        v-model="newOR3"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Entregables</strong>
                      <a
                        tabindex="0"
                        class="badge badge-info"
                        role="button"
                        data-toggle="popover"
                        data-trigger="focus"
                        title="Entregables"
                        data-content="Describir de forma clara y sencilla los entregables que debe enviar el estudiante al tutor de acuerdo con el tema y el propósito a evaluar."
                      >
                        <i class="fas fa-question"></i>
                      </a>
                    </div>
                    <textarea name="welcome" class="form-control" v-model="newFromW" required></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div align="center">
                    <strong>Criterios de evaluacion / Evidencias asociadas (desempeño, producto y conocimiento)</strong>
                  </div>
                  <div class="form-group mx-auto">
                    <table style="width:100%">
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newCE1"
                            required
                          />
                        </td>
                        <th rowspan="3">
                          <textarea
                            name="welcome"
                            class="form-control"
                            placeholder="EA 1."
                            v-model="newEA1"
                            required
                          ></textarea>
                        </th>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="newCE2"
                            required
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="newCE3"
                            required
                          />
                        </td>
                      </tr>
                    </table>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="modal-footer">
                    <a href="/activity" class="btn btn-primary float-right">Guardar</a>
                  </div>
                </div>
              </div>
              </tab-content>
              <tab-content title="Planeación didáctica">
                  <div class="form-group row mx-auto">
                                    <div class="col-md-6">
                                        <strong>Tiempo de trabajo</strong>
                                        <input
                                            type="text"
                                            name="timeWork"
                                            class="form-control"
                                            v-model="newTimeWork"
                                            disabled
                                        />
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <strong>Actividad</strong>
                                        <input
                                            type="text"
                                            name="activity"
                                            class="form-control"
                                            v-model="newActivity"
                                            disabled
                                        />
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col">
                                        <strong>Momento de Evaluacion</strong>
                                    </div>
                                    <div class="col">
                                        <strong>Evidencia</strong>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-3">
                                        <label for="fromW">Desde</label>
                                        <input
                                            type="date"
                                            name="fromW"
                                            class="form-control"
                                            v-model="newFromW"
                                            required
                                        />
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <label for="toW">Hasta</label>
                                        <input
                                            type="date"
                                            name="toW"
                                            class="form-control"
                                            v-model="newToW"
                                            required
                                        />
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <label for>Evidencia</label>
                                        <input
                                            type="text"
                                            name="activity"
                                            class="form-control"
                                            v-model="newEvidence"
                                            required
                                        />
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <label for>Envío</label>
                                        <input
                                            type="text"
                                            name="activity"
                                            class="form-control"
                                            v-model="newSend"
                                            required
                                        />
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row mx-auto">
                                    <div class="col" align="center">
                                        <strong
                                            >Actor interviniente en la
                                            evaluación</strong
                                        >
                                        <input
                                            type="text"
                                            name="name"
                                            class="form-control"
                                            v-model="newActor"
                                            required
                                        />
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="col" align="center">
                                        <strong
                                            >Fecha de retroalimentación</strong
                                        >
                                        <input
                                            type="date"
                                            name="name"
                                            class="form-control"
                                            v-model="newRetro"
                                            required
                                        />
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <a
                                        href="/sincro"
                                        class="btn btn-primary float-right"
                                        >Guardar</a
                                    >
                                </div>
              </tab-content>
               <tab-content title="Encuentros sincronicos">
                   <div class="form-group row">
                  <div class="col">
                    <strong>Cantidad de encuentros sincronicos</strong>
                    <br />
                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input
                        class="custom-control-input"
                        type="checkbox"
                        id="gridCheck1"
                        v-model="newRegional"
                      />
                      <label class="custom-control-label" for="gridCheck1">1</label>
                    </div>
                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input
                        class="custom-control-input"
                        type="checkbox"
                        id="gridCheck2"
                        v-model="newWorld"
                      />
                      <label class="custom-control-label" for="gridCheck2">2</label>
                    </div>
                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input
                        class="custom-control-input"
                        type="checkbox"
                        id="gridCheck3"
                        v-model="newWor"
                      />
                      <label class="custom-control-label" for="gridCheck3">3</label>
                    </div>
                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input
                        class="custom-control-input"
                        type="checkbox"
                        id="gridCheck4"
                        v-model="newW"
                      />
                      <label class="custom-control-label" for="gridCheck4">4</label>
                    </div>
                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input
                        class="custom-control-input"
                        type="checkbox"
                        id="gridCheck5"
                        v-model="newWo"
                      />
                      <label class="custom-control-label" for="gridCheck5">5</label>
                    </div>
                  </div>
                </div>
                <div id="hidden_fields1">
                  <strong>Primer encuentro</strong>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <strong>Nombre del encuentro sincronico</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <strong>Temas que se abarcan</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newTopics"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="fromW">Fecha</label>
                      <input
                        type="date"
                        name="fromW"
                        class="form-control"
                        v-model="newDate"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for="toW">Hora inicio</label>
                      <input type="date" name="toW" class="form-control" v-model="newHFrom" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for>Hora final</label>
                      <select2 :options="myOptions" v-model="newToH" required></select2>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                </div>
                <div id="hidden_fields2">
                  <strong>Primer encuentro</strong>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <strong>Nombre del encuentro sincronico</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <strong>Temas que se abarcan</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newTopic"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="fromW">Fecha</label>
                      <input
                        type="date"
                        name="fromW"
                        class="form-control"
                        v-model="newDate"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for="toW">Hora inicio</label>
                      <input type="date" name="toW" class="form-control" v-model="newToH" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for>Hora final</label>
                      <select2 :options="myOptions" v-model="newFromH" required></select2>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <strong>Segundo encuentro</strong>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <strong>Nombre del encuentro sincronico</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <strong>Temas que se abarcan</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newTopic"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="fromW">Fecha</label>
                      <input
                        type="date"
                        name="fromW"
                        class="form-control"
                        v-model="newDate"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for="toW">Hora inicio</label>
                      <input type="date" name="toW" class="form-control" v-model="newFromH" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for>Hora final</label>
                      <select2 :options="myOptions" v-model="newToH" required></select2>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                </div>
                <div id="hidden_fields3">
                  <strong>Primer encuentro</strong>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <strong>Nombre del encuentro sincronico</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <strong>Temas que se abarcan</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newTopic"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="fromW">Fecha</label>
                      <input
                        type="date"
                        name="fromW"
                        class="form-control"
                        v-model="newDate"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for="toW">Hora inicio</label>
                      <input type="date" name="toW" class="form-control" v-model="newFromH" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for>Hora final</label>
                      <select2 :options="myOptions" v-model="newToH" required></select2>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <strong>Segundo encuentro</strong>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <strong>Nombre del encuentro sincronico</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <strong>Temas que se abarcan</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newTopic"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="fromW">Fecha</label>
                      <input
                        type="date"
                        name="fromW"
                        class="form-control"
                        v-model="newDate"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for="toW">Hora inicio</label>
                      <input type="date" name="toW" class="form-control" v-model="newFromH" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for>Hora final</label>
                      <select2 :options="myOptions" v-model="newToH" required></select2>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <strong>Tercero encuentro</strong>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <strong>Nombre del encuentro sincronico</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <strong>Temas que se abarcan</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newTopic"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="fromW">Fecha</label>
                      <input
                        type="date"
                        name="fromW"
                        class="form-control"
                        v-model="newDate"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for="toW">Hora inicio</label>
                      <input type="date" name="toW" class="form-control" v-model="newToH" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for>Hora final</label>
                      <select2 :options="myOptions" v-model="newFromH" required></select2>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                </div>
                <div id="hidden_fields4">
                  <strong>Primer encuentro</strong>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <strong>Nombre del encuentro sincronico</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <strong>Temas que se abarcan</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newTopic"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="fromW">Fecha</label>
                      <input
                        type="date"
                        name="fromW"
                        class="form-control"
                        v-model="newDate"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for="toW">Hora inicio</label>
                      <input type="date" name="toW" class="form-control" v-model="newFromH" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for>Hora final</label>
                      <select2 :options="myOptions" v-model="newToH" required></select2>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <strong>Segundo encuentro</strong>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <strong>Nombre del encuentro sincronico</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <strong>Temas que se abarcan</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newTopic"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="Date">Fecha</label>
                      <input
                        type="date"
                        name="Date"
                        class="form-control"
                        v-model="nesDate"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for="toW">Hora inicio</label>
                      <input type="date" name="toW" class="form-control" v-model="newToH" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for>Hora final</label>
                      <select2 :options="myOptions" v-model="newFromH" required></select2>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <strong>Tercero encuentro</strong>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <strong>Nombre del encuentro sincronico</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <strong>Temas que se abarcan</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newTopic"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="Date">Fecha</label>
                      <input
                        type="date"
                        name="Date"
                        class="form-control"
                        v-model="newDate"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for="toW">Hora inicio</label>
                      <input type="date" name="toW" class="form-control" v-model="newFromH" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for>Hora final</label>
                      <select2 :options="myOptions" v-model="newToH" required></select2>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <strong>Cuarto encuentro</strong>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <strong>Nombre del encuentro sincronico</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <strong>Temas que se abarcan</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newTopic"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="Date">Fecha</label>
                      <input
                        type="date"
                        name="Date"
                        class="form-control"
                        v-model="newDate"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for="toW">Hora inicio</label>
                      <input type="date" name="toW" class="form-control" v-model="newToH" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for>Hora final</label>
                      <select2 :options="myOptions" v-model="newFromH" required></select2>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                </div>
                <div id="hidden_fields5">
                  <strong>Primer encuentro</strong>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <strong>Nombre del encuentro sincronico</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <strong>Temas que se abarcan</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newTopic"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="Date">Fecha</label>
                      <input
                        type="date"
                        name="Date"
                        class="form-control"
                        v-model="newDate"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for="toW">Hora inicio</label>
                      <input type="date" name="toW" class="form-control" v-model="newToH" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for>Hora final</label>
                      <select2 :options="myOptions" v-model="newFromH" required></select2>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <strong>Segundo encuentro</strong>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <strong>Nombre del encuentro sincronico</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <strong>Temas que se abarcan</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newTopic"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="Date">Fecha</label>
                      <input
                        type="date"
                        name="Date"
                        class="form-control"
                        v-model="newDate"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for="toW">Hora inicio</label>
                      <input type="date" name="toW" class="form-control" v-model="newToW" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for>Hora final</label>
                      <select2 :options="myOptions" v-model="newFromH" required></select2>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <strong>Tercero encuentro</strong>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <strong>Nombre del encuentro sincronico</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <strong>Temas que se abarcan</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newTopic"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="Date">Fecha</label>
                      <input
                        type="date"
                        name="Date"
                        class="form-control"
                        v-model="newDate"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for="toW">Hora inicio</label>
                      <input type="date" name="toW" class="form-control" v-model="newToW" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for>Hora final</label>
                      <select2 :options="myOptions" v-model="newFromH" required></select2>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <strong>Cuarto encuentro</strong>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <strong>Nombre del encuentro sincronico</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <strong>Temas que se abarcan</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newTopic"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="Date">Fecha</label>
                      <input
                        type="date"
                        name="Date"
                        class="form-control"
                        v-model="newDate"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for="toW">Hora inicio</label>
                      <input type="date" name="toW" class="form-control" v-model="newToW" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for>Hora final</label>
                      <select2 :options="myOptions" v-model="newFromH" required></select2>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <strong>Quinto encuentro</strong>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <strong>Nombre del encuentro sincronico</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newName"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6">
                      <strong>Temas que se abarcan</strong>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="newTopic"
                        disabled
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="Date">Fecha</label>
                      <input
                        type="date"
                        name="Date"
                        class="form-control"
                        v-model="newDate"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for="toW">Hora inicio</label>
                      <input type="date" name="toW" class="form-control" v-model="newToW" required />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-3">
                      <label for>Hora final</label>
                      <select2 :options="myOptions" v-model="newFromH" required></select2>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <a href="/freeUnit" class="btn btn-primary float-right">Guardar</a>
                </div>
                    </tab-content>
                </form-wizard>
            </form>
          </div>
        </div>
      </div>
    </div>
  </auto-responsive>
</template>
<script>
(function() {
  "use strict";
  window.addEventListener(
    "load",
    function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener(
          "submit",
          function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
$(function() {
  // Get the form fields and hidden div
  var checkbox = $("#gridCheck1");
  var checkbox1 = $("#gridCheck2");

  var hidden = $("#hidden_fields1");
  var hidden1 = $("#hidden_fields2");

  hidden.hide();
  hidden1.hide();

  checkbox.change(function() {
    if (checkbox.is(":checked")) {
      // Show the hidden fields.

      hidden.show();
    } else {
      hidden.hide();
      checkbox1.show();
    }
  });
  checkbox1.change(function() {
    if (checkbox.is(":checked")) {
      // Show the hidden fields.
      checkbox.disabled = false;
      hidden.show();
    } else {
      hidden.hide();
      checkbox.show();
    }
  });
});
import AutoResponsive from "autoresponsive-vue";

Vue.use(AutoResponsive);

export default {
  data() {
    return {
      inputs: [
        {
          name: ""
        }
      ],
      inputs1: [
        {
          name: ""
        }
      ],
      newPlataform:"",

      Uoptions: ["3", "4"],
      subcategories: [],
      TypeUsers: [],
      classes: [],
      myOptions: ["On-Line", "Virtual"],
      myActivities: [
        "Foro",
        "Chat",
        "Cuestionario V-F",
        "Cuestionario 4 opciones",
        "Mapa conceptual",
        "Ensayo",
        "Estudio de Caso",
        "Ejercicios"
      ],
      newDescription: "",
      newName: "",
      newId_subcategories: "",
      newSubject: "",
      newObjetive: "",
      newFromW: "",
      newToW: "",
      newFromH: "",
      newToH: "",
      newQuiz: "",
      newIndicator: "",
      newPercent: "",
      newLocal: "",
      newRegional: "",
      newContry: "",
      newWorld: "",
      newId_user: "",
      newActivity: "",
      fillC: {
        id: "",
        name: "",
        description: "",
        id_user: "",
        id_category: "",
        id_subcategory: "",
        subject: "",
        objetive: "",
        fromW: "",
        toW: "",
        fromH: "",
        toH: "",
        quiz: "",
        indicator: "",
        percent: "",
        local: "",
        regional: "",
        world: ""
      },
      errors: []
    };
  },
  mounted() {
    var urlsel = "GetCategories";
    axios.get(urlsel).then(response => {
      this.categories = response.data;
    });
    var urlsel = "GetTypeU";
    axios.get(urlsel).then(response => {
      this.TypeUsers = response.data;
    });
    console.log("Component mounted.");
  },
  methods: {
    add(index) {
      this.inputs.push({ name: "" });
    },
    remove(index) {
      this.inputs.splice(index, 1);
    },
    add1(index) {
      this.inputs1.push({ name: "" });
    },
    remove1(index) {
      this.inputs1.splice(index, 1);
    },
    createClasses() {
      var url = "classes";
      this.newId_user = 36;
      axios
        .post(url, {
          id_user: this.newId_user,
          description: this.newDescription,
          name: this.newName,
          id_category: this.Category,
          id_subcategory: this.newId_subcategories,
          subject: this.newSubject,
          objetive: this.newObjetive,
          fromW: this.newFromW,
          toW: this.newToW,
          fromH: this.newFromH,
          toH: this.newToH,
          quiz: this.newQuiz,
          indicator: this.newIndicator,
          percent: this.newPercent,
          local: this.newLocal,
          regional: this.newRegional,
          world: this.newWorld
        })
        .then(response => {
          this.getClasses();
          this.newDescription = "";
          this.newId_user = "";
          this.newName = "";
          this.newId_subcategories = "";
          this.newSubject = "";
          this.newObjetive = "";
          this.newToW = "";
          this.newFromW = "";
          this.newFormH = "";
          this.newToH = "";
          this.newQuiz = "";
          this.newIndicator = "";
          this.newPercent = "";
          this.newLocal = "";
          this.newRegional = "";
          this.newContry = "";
          this.newWorld = "";
          this.errors = [];
          $("#create").modal("hide");
          toastr.success("New class created successfully");
        })
        .catch(error => {
          this.errors = error.response.data;
        });
    },
    getSubcategories() {
      var urlse = "GetSubcategories/" + this.Category;
      axios.get(urlse).then(response => {
        this.subcategories = response.data;
      });
    }
  }
};
</script>
<style>
.background2 {
  background: url(../assets/img/Fondo5.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
}
</style>