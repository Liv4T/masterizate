<template>
  <auto-responsive>
    <div class="background2">
      <div class="row">
        <div class="col-md-11 mx-auto">
          <div class="custom-card text-center">
            <h3 class="card-header">Curso Especializado-Unidad</h3>
            <form class="needs-validation" novalidate>
              <div class="card-body">
                <div class="form-group row">
                  <div class="col">
                    <strong>Cantidad de unidades</strong>
                    <br />
                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input
                        class="custom-control-input"
                        type="checkbox"
                        id="gridCheck1"
                        v-model="newRegional"
                      />
                      <label class="custom-control-label" for="gridCheck1">3</label>
                    </div>
                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input
                        class="custom-control-input"
                        type="checkbox"
                        id="gridCheck2"
                        v-model="newWorld"
                      />
                      <label class="custom-control-label" for="gridCheck2">4</label>
                    </div>
                  </div>
                </div>
                <div id="hidden_fields1">
                  <div class="form-group mx-auto col-md-6">
                    <strong>Nombre de la unidad (1)</strong>
                    <input type="text" name="name" class="form-control" v-model="newName1" required />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>

                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Presentación de la unidad</strong>
                    </div>
                    <textarea
                      name="welcome"
                      class="form-control"
                      v-model="newPresentation"
                      placeholder=" Se refiere al espacio en el cual se da a conocer el proposito de la unidad; debe ser escrita mediante un texto corto."
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Conocimientos, habilidades y requisitos para el desarrollo de la unidad</strong>
                    </div>
                    <textarea
                      name="welcome"
                      class="form-control"
                      v-model="newHability"
                      placeholder="Se presentan los conocimientos previos al aprendizaje que corresponden al desarrollo de la unidad"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div align="center">
                    <strong>Competencias (Especificas y transversales)</strong>
                  </div>
                  <div class="form-group row">
                    <div class="col">
                      <label for="name">Competencias Especificas</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CE 1."
                        v-model="newCE1"
                        required
                      />
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CE 2."
                        v-model="newCE2"
                        required
                      />
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CE 3."
                        v-model="newCE3"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="name">Competencias transversales</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CT 1."
                        v-model="newCT1"
                        required
                      />
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CT 2."
                        v-model="newCT2"
                        required
                      />
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CT 3."
                        v-model="newCT3"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div align="center">
                    <strong>Resultados de Aprendizaje / Criterio de evaluación</strong>
                  </div>
                  <div class="form-group mx-auto">
                    <table style="width:100%">
                      <tr>
                        <th rowspan="3">
                          <textarea
                            name="welcome"
                            class="form-control"
                            placeholder="RA 1."
                            v-model="newRA1"
                            required
                          ></textarea>
                        </th>
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
                  <div class="form-group mx-auto">
                    <table style="width:100%">
                      <tr>
                        <th rowspan="3">
                          <textarea
                            name="welcome"
                            class="form-control"
                            placeholder="RA 2."
                            v-model="newRA2"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newCE21"
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
                            placeholder="CE 2."
                            v-model="newCE22"
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
                            v-model="newCE23"
                            required
                          />
                        </td>
                      </tr>
                    </table>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <table style="width:100%">
                      <tr>
                        <th rowspan="3">
                          <textarea
                            name="welcome"
                            class="form-control"
                            placeholder="RA 3."
                            v-model="newRA3"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newCE31"
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
                            placeholder="CE 2."
                            v-model="newCE32"
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
                            v-model="newCE33"
                            required
                          />
                        </td>
                      </tr>
                    </table>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <table style="width:100%">
                      <tr>
                        <th rowspan="3">
                          <textarea
                            name="welcome"
                            class="form-control"
                            placeholder="RA 4."
                            v-model="newRA4"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newCE41"
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
                            placeholder="CE 2."
                            v-model="newCE42"
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
                            v-model="newCE43"
                            required
                          />
                        </td>
                      </tr>
                    </table>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Aprenda preguntandose preguntas</strong>
                    </div>
                    <textarea
                      name="welcome"
                      class="form-control"
                      v-model="newQuestion"
                      placeholder="En este espacio se hace una invitacion al estudiante para que este realice preguntas que el desearia que resolviera con el tema o programa a cursar."
                      required
                    ></textarea>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Aprenda alistándose</strong>
                    </div>
                    <textarea
                      name="intentioned"
                      class="form-control"
                      v-model="newReady"
                      placeholder="Redacte un problema, caso, entre otros que le sirvan al estudiante como reflexion y diagnostico de sus competencias actuales y le motivaran en su proceso de formacion."
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div align="center">
                    <strong>Aprenda de las fuentes</strong>
                  </div>
                  <div class="form-group row mx-auto" v-for="(input,k) in inputs" :key="k">
                    <div class="col-md-6">
                      <label for="name">Tema</label>
                      <span>
                        <a
                          href="#"
                          class="badge badge-danger"
                          @click.prevent="remove(k)"
                          v-show="k || ( !k && inputs.length > 1)"
                        >-</a>
                        <a
                          href="#"
                          class="badge badge-primary"
                          @click.prevent="add(k)"
                          v-show="k == inputs.length-1"
                        >+</a>
                      </span>
                      <div>
                        <input
                          type="text"
                          name="objetive1"
                          class="form-control"
                          v-model="Topic"
                          placeholder="Nombre del Tema"
                          required
                        />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <label for="name">Contenido</label>
                      <textarea
                        name="competences"
                        class="form-control"
                        v-model="newContent"
                        placeholder="Es la explicacion o sintesis de la tematica a abordar en la unidad de estudio."
                        required
                      ></textarea>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row" v-for="(input,k) in inputs1" :key="k">
                    <div class="col-md-6">
                      <label for="name">Master class (MC)</label>
                      <span>
                        <a
                          href="#"
                          class="badge badge-danger"
                          @click.prevent="remove1(k)"
                          v-show="k || ( !k && inputs1.length > 1)"
                        >-</a>
                        <a
                          href="#"
                          class="badge badge-primary"
                          @click.prevent="add1(k)"
                          v-show="k == inputs1.length-1"
                        >+</a>
                      </span>
                      <div>
                        <input
                          type="text"
                          name="objetive"
                          class="form-control"
                          v-model="newObjetive1"
                          placeholder="Nombre de la clase"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label for="name">Video MC</label>
                      <input
                        type="file"
                        name="picture"
                        class="form-control"
                        accept="image/*"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6" v-for="(input,k) in inputs2" :key="k">
                      <label for="name">Video de apoyo</label>
                      <span>
                        <a
                          href="#"
                          class="badge badge-danger"
                          @click.prevent="remove2(k)"
                          v-show="k || ( !k && inputs2.length > 1)"
                        >-</a>
                        <a
                          href="#"
                          class="badge badge-primary"
                          @click.prevent="add2(k)"
                          v-show="k == inputs2.length-1"
                        >+</a>
                      </span>
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="newObjetive"
                        placeholder="Nombre del Video"
                        required
                      />
                      <input
                        type="file"
                        name="picture2"
                        class="form-control"
                        accept="image/*"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="name">Bibliografia complementaria</label>
                      <textarea
                        name="competences"
                        class="form-control"
                        v-model="newBibliography"
                        placeholder="Competencias conceptuales, procedimentales y actitudinales"
                        required
                      ></textarea>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Aprenda haciendo</strong>
                    </div>
                    <textarea
                      name="doing"
                      class="form-control"
                      v-model="newDoing"
                      placeholder="Los logros se conciben como las metas a alcanzar al culminar el curso."
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Aprenda poniéndose retos</strong>
                    </div>
                    <textarea
                      name="map"
                      class="form-control"
                      v-model="newChallenge"
                      placeholder="Consiste en una representacion grafica, clara, precisa y sintetica de los temas que componen el modulo de aprendizaje"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Aprenda proyectándose</strong>
                    </div>
                    <textarea
                      name="metodology"
                      class="form-control"
                      v-model="newProjecting"
                      placeholder="Debe contener la descripcion de la metodologia, las estrategias de aprendizaje, herramientas de interaccion y explicacion de acceso a los mismos y las reglas de convivencia virtual del curso"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>

                  <div class="form-group mx-auto col-md-6">
                    <strong>Nombre de la unidad (2)</strong>
                    <input type="text" name="name" class="form-control" v-model="newName2" required />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Presentación de la unidad</strong>
                    </div>
                    <textarea
                      name="welcome"
                      class="form-control"
                      v-model="newFromW"
                      placeholder=" Se refiere al espacio en el cual se da a conocer el proposito de la unidad; debe ser escrita mediante un texto corto."
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Conocimientos, habilidades y requisitos para el desarrollo de la unidad</strong>
                    </div>
                    <textarea
                      name="welcome"
                      class="form-control"
                      v-model="newConocimientos"
                      placeholder="Se presentan los conocimientos previos al aprendizaje que corresponden al desarrollo de la unidad"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div align="center">
                    <strong>Competencias (Especificas y transversales)</strong>
                  </div>
                  <div class="form-group row">
                    <div class="col">
                      <label for="name">Competencias Especificas</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CE 1."
                        v-model="newCEU1"
                        required
                      />
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CE 2."
                        v-model="newCEU2"
                        required
                      />
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CE 3."
                        v-model="newCEU3"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="name">Competencias transversales</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CT 1."
                        v-model="newCT1"
                        required
                      />
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CT 2."
                        v-model="newCT2"
                        required
                      />
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CT 3."
                        v-model="newCT3"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div align="center">
                    <strong>Resultados de Aprendizaje / Criterio de evaluación</strong>
                  </div>
                  <div class="form-group mx-auto">
                    <table style="width:100%">
                      <tr>
                        <th rowspan="3">
                          <textarea
                            name="welcome"
                            class="form-control"
                            placeholder="RA 1."
                            v-model="newRAU1"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newCER1"
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
                            placeholder="CE 2."
                            v-model="newCER2"
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
                            v-model="newCER3"
                            required
                          />
                        </td>
                      </tr>
                    </table>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <table style="width:100%">
                      <tr>
                        <th rowspan="3">
                          <textarea
                            name="welcome"
                            class="form-control"
                            placeholder="RA 2."
                            v-model="newRAU2"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newCEU21"
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
                            placeholder="CE 2."
                            v-model="newCEU22"
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
                            v-model="newCEU23"
                            required
                          />
                        </td>
                      </tr>
                    </table>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <table style="width:100%">
                      <tr>
                        <th rowspan="3">
                          <textarea
                            name="welcome"
                            class="form-control"
                            placeholder="RA 3."
                            v-model="newRAU3"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newCER31"
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
                            placeholder="CE 2."
                            v-model="newCER32"
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
                            v-model="newCER33"
                            required
                          />
                        </td>
                      </tr>
                    </table>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <table style="width:100%">
                      <tr>
                        <th rowspan="3">
                          <textarea
                            name="welcome"
                            class="form-control"
                            placeholder="RA 4."
                            v-model="newRAU4"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newCER41"
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
                            placeholder="CE 2."
                            v-model="newCER42"
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
                            v-model="newCER43"
                            required
                          />
                        </td>
                      </tr>
                    </table>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Aprenda preguntandose preguntas</strong>
                    </div>
                    <textarea
                      name="welcome"
                      class="form-control"
                      v-model="newFromW"
                      placeholder="En este espacio se hace una invitacion al estudiante para que este realice preguntas que el desearia que resolviera con el tema o programa a cursar."
                      required
                    ></textarea>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Aprenda alistándose</strong>
                    </div>
                    <textarea
                      name="intentioned"
                      class="form-control"
                      v-model="newAlis"
                      placeholder="Redacte un problema, caso, entre otros que le sirvan al estudiante como reflexion y diagnostico de sus competencias actuales y le motivaran en su proceso de formacion."
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div align="center">
                    <strong>Aprenda de las fuentes</strong>
                  </div>
                  <div class="form-group row mx-auto" v-for="(input,k) in inputs3" :key="k">
                    <div class="col-md-6">
                      <label for="name">Tema</label>
                      <span>
                        <a
                          href="#"
                          class="badge badge-danger"
                          @click.prevent="remove3(k)"
                          v-show="k || ( !k && inputs3.length > 1)"
                        >-</a>
                        <a
                          href="#"
                          class="badge badge-primary"
                          @click.prevent="add3(k)"
                          v-show="k == inputs3.length-1"
                        >+</a>
                      </span>
                      <div>
                        <input
                          type="text"
                          name="objetive1"
                          class="form-control"
                          v-model="Topic"
                          placeholder="Nombre del Tema"
                          required
                        />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <label for="name">Contenido</label>
                      <textarea
                        name="competences"
                        class="form-control"
                        v-model="newContent"
                        placeholder="Es la explicacion o sintesis de la tematica a abordar en la unidad de estudio."
                        required
                      ></textarea>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row" v-for="(input,k) in inputs4" :key="k">
                    <div class="col-md-6">
                      <label for="name">Master class (MC)</label>
                      <span>
                        <a
                          href="#"
                          class="badge badge-danger"
                          @click.prevent="remove4(k)"
                          v-show="k || ( !k && inputs4.length > 1)"
                        >-</a>
                        <a
                          href="#"
                          class="badge badge-primary"
                          @click.prevent="add4(k)"
                          v-show="k == inputs4.length-1"
                        >+</a>
                      </span>
                      <div>
                        <input
                          type="text"
                          name="objetive"
                          class="form-control"
                          v-model="newObjetive1"
                          placeholder="Nombre de la clase"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label for="name">Video MC</label>
                      <input
                        type="file"
                        name="picture"
                        class="form-control"
                        accept="image/*"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6" v-for="(input,k) in inputs5" :key="k">
                      <label for="name">Video de apoyo</label>
                      <span>
                        <a
                          href="#"
                          class="badge badge-danger"
                          @click.prevent="remove5(k)"
                          v-show="k || ( !k && inputs5.length > 1)"
                        >-</a>
                        <a
                          href="#"
                          class="badge badge-primary"
                          @click.prevent="add5(k)"
                          v-show="k == inputs5.length-1"
                        >+</a>
                      </span>
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="newObjetive"
                        placeholder="Nombre del Video"
                        required
                      />
                      <input
                        type="file"
                        name="picture2"
                        class="form-control"
                        accept="image/*"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="name">Bibliografia complementaria</label>
                      <textarea
                        name="competences"
                        class="form-control"
                        v-model="newBibliography2"
                        placeholder="Competencias conceptuales, procedimentales y actitudinales"
                        required
                      ></textarea>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Aprenda haciendo</strong>
                    </div>
                    <textarea
                      name="doing"
                      class="form-control"
                      v-model="newDoing2"
                      placeholder="Los logros se conciben como las metas a alcanzar al culminar el curso."
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Aprenda poniéndose retos</strong>
                    </div>
                    <textarea
                      name="map"
                      class="form-control"
                      v-model="newChallenge2"
                      placeholder="Consiste en una representacion grafica, clara, precisa y sintetica de los temas que componen el modulo de aprendizaje"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Aprenda proyectándose</strong>
                    </div>
                    <textarea
                      name="metodology"
                      class="form-control"
                      v-model="newProjecting2"
                      placeholder="Debe contener la descripcion de la metodologia, las estrategias de aprendizaje, herramientas de interaccion y explicacion de acceso a los mismos y las reglas de convivencia virtual del curso"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto col-md-6">
                    <strong>Nombre de la unidad (3)</strong>
                    <input type="text" name="name" class="form-control" v-model="newName3" required />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Presentación de la unidad</strong>
                    </div>
                    <textarea
                      name="welcome"
                      class="form-control"
                      v-model="newPresentation3"
                      placeholder=" Se refiere al espacio en el cual se da a conocer el proposito de la unidad; debe ser escrita mediante un texto corto."
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Conocimientos, habilidades y requisitos para el desarrollo de la unidad</strong>
                    </div>
                    <textarea
                      name="welcome"
                      class="form-control"
                      v-model="newHability3"
                      placeholder="Se presentan los conocimientos previos al aprendizaje que corresponden al desarrollo de la unidad"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div align="center">
                    <strong>Competencias (Especificas y transversales)</strong>
                  </div>
                  <div class="form-group row">
                    <div class="col">
                      <label for="name">Competencias Especificas</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CE 1."
                        v-model="newCE31"
                        required
                      />
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CE 2."
                        v-model="newCE32"
                        required
                      />
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CE 3."
                        v-model="newCE33"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="name">Competencias transversales</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CT 1."
                        v-model="newCT31"
                        required
                      />
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CT 2."
                        v-model="newCT32"
                        required
                      />
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CT 3."
                        v-model="newCT33"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div align="center">
                    <strong>Resultados de Aprendizaje / Criterio de evaluación</strong>
                  </div>
                  <div class="form-group mx-auto">
                    <table style="width:100%">
                      <tr>
                        <th rowspan="3">
                          <textarea
                            name="welcome"
                            class="form-control"
                            placeholder="RA 1."
                            v-model="newRAU31"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newCER31"
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
                            placeholder="CE 2."
                            v-model="newCER32"
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
                            v-model="newCER33"
                            required
                          />
                        </td>
                      </tr>
                    </table>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <table style="width:100%">
                      <tr>
                        <th rowspan="3">
                          <textarea
                            name="welcome"
                            class="form-control"
                            placeholder="RA 2."
                            v-model="newRAU32"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newCER321"
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
                            placeholder="CE 2."
                            v-model="newCER322"
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
                            v-model="newCER323"
                            required
                          />
                        </td>
                      </tr>
                    </table>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <table style="width:100%">
                      <tr>
                        <th rowspan="3">
                          <textarea
                            name="welcome"
                            class="form-control"
                            placeholder="RA 3."
                            v-model="newRAU3"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newCER331"
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
                            placeholder="CE 2."
                            v-model="newCER332"
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
                            v-model="newCER333"
                            required
                          />
                        </td>
                      </tr>
                    </table>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <table style="width:100%">
                      <tr>
                        <th rowspan="3">
                          <textarea
                            name="welcome"
                            class="form-control"
                            placeholder="RA 4."
                            v-model="newRAU4"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newCER341"
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
                            placeholder="CE 2."
                            v-model="newCER342"
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
                            v-model="newCER343"
                            required
                          />
                        </td>
                      </tr>
                    </table>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Aprenda preguntandose preguntas</strong>
                    </div>
                    <textarea
                      name="welcome"
                      class="form-control"
                      v-model="newQuestion3"
                      placeholder="En este espacio se hace una invitacion al estudiante para que este realice preguntas que el desearia que resolviera con el tema o programa a cursar."
                      required
                    ></textarea>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Aprenda alistándose</strong>
                    </div>
                    <textarea
                      name="intentioned"
                      class="form-control"
                      v-model="newReady3"
                      placeholder="Redacte un problema, caso, entre otros que le sirvan al estudiante como reflexion y diagnostico de sus competencias actuales y le motivaran en su proceso de formacion."
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div align="center">
                    <strong>Aprenda de las fuentes</strong>
                  </div>
                  <div class="form-group row mx-auto" v-for="(input,k) in inputs6" :key="k">
                    <div class="col-md-6">
                      <label for="name">Tema</label>
                      <span>
                        <a
                          href="#"
                          class="badge badge-danger"
                          @click.prevent="remove6(k)"
                          v-show="k || ( !k && inputs6.length > 1)"
                        >-</a>
                        <a
                          href="#"
                          class="badge badge-primary"
                          @click.prevent="add6(k)"
                          v-show="k == inputs6.length-1"
                        >+</a>
                      </span>
                      <div>
                        <input
                          type="text"
                          name="objetive1"
                          class="form-control"
                          v-model="Topic"
                          placeholder="Nombre del Tema"
                          required
                        />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <label for="name">Contenido</label>
                      <textarea
                        name="competences"
                        class="form-control"
                        v-model="newContent"
                        placeholder="Es la explicacion o sintesis de la tematica a abordar en la unidad de estudio."
                        required
                      ></textarea>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row" v-for="(input,k) in inputs7" :key="k">
                    <div class="col-md-6">
                      <label for="name">Master class (MC)</label>
                      <span>
                        <a
                          href="#"
                          class="badge badge-danger"
                          @click.prevent="remove7(k)"
                          v-show="k || ( !k && inputs7.length > 1)"
                        >-</a>
                        <a
                          href="#"
                          class="badge badge-primary"
                          @click.prevent="add7(k)"
                          v-show="k == inputs7.length-1"
                        >+</a>
                      </span>
                      <div>
                        <input
                          type="text"
                          name="objetive"
                          class="form-control"
                          v-model="newObjetive1"
                          placeholder="Nombre de la clase"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label for="name">Video MC</label>
                      <input
                        type="file"
                        name="picture"
                        class="form-control"
                        accept="image/*"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6" v-for="(input,k) in inputs8" :key="k">
                      <label for="name">Video de apoyo</label>
                      <span>
                        <a
                          href="#"
                          class="badge badge-danger"
                          @click.prevent="remove8(k)"
                          v-show="k || ( !k && inputs8.length > 1)"
                        >-</a>
                        <a
                          href="#"
                          class="badge badge-primary"
                          @click.prevent="add8(k)"
                          v-show="k == inputs8.length-1"
                        >+</a>
                      </span>
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="newObjetive"
                        placeholder="Nombre del Video"
                        required
                      />
                      <input
                        type="file"
                        name="picture2"
                        class="form-control"
                        accept="image/*"
                        required
                      />
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="name">Bibliografia complementaria</label>
                      <textarea
                        name="competences"
                        class="form-control"
                        v-model="newBibliography3"
                        placeholder="Competencias conceptuales, procedimentales y actitudinales"
                        required
                      ></textarea>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Aprenda haciendo</strong>
                    </div>
                    <textarea
                      name="doing"
                      class="form-control"
                      v-model="newDoing3"
                      placeholder="Los logros se conciben como las metas a alcanzar al culminar el curso."
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Aprenda poniéndose retos</strong>
                    </div>
                    <textarea
                      name="map"
                      class="form-control"
                      v-model="newChallenge3"
                      placeholder="Consiste en una representacion grafica, clara, precisa y sintetica de los temas que componen el modulo de aprendizaje"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto">
                    <div align="center">
                      <strong>Aprenda proyectándose</strong>
                    </div>
                    <textarea
                      name="metodology"
                      class="form-control"
                      v-model="newProjecting3"
                      placeholder="Debe contener la descripcion de la metodologia, las estrategias de aprendizaje, herramientas de interaccion y explicacion de acceso a los mismos y las reglas de convivencia virtual del curso"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="modal-footer">
                    <a href="/freeUnit" class="btn btn-primary float-right">Guardar</a>
                  </div>
                </div>
              </div>
              <!------------------------------------------------------------------------------------------------------------------->
              <div id="hidden_fields2">
                <div class="form-group mx-auto col-md-6">
                  <strong>Nombre de la unidad (1)</strong>
                  <input type="text" name="name" class="form-control" v-model="newName41" required />
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Presentación de la unidad</strong>
                  </div>
                  <textarea
                    name="welcome"
                    class="form-control"
                    v-model="newPresentation41"
                    placeholder=" Se refiere al espacio en el cual se da a conocer el proposito de la unidad; debe ser escrita mediante un texto corto."
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Conocimientos, habilidades y requisitos para el desarrollo de la unidad</strong>
                  </div>
                  <textarea
                    name="welcome"
                    class="form-control"
                    v-model="newHability41"
                    placeholder="Se presentan los conocimientos previos al aprendizaje que corresponden al desarrollo de la unidad"
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div align="center">
                  <strong>Competencias (Especificas y transversales)</strong>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <label for="name">Competencias Especificas</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CE 1."
                      v-model="newCE41"
                      required
                    />
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CE 2."
                      v-model="newCE42"
                      required
                    />
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CE 3."
                      v-model="newCE43"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col">
                    <label for="name">Competencias transversales</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CT 1."
                      v-model="newCT41"
                      required
                    />
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CT 2."
                      v-model="newCT42"
                      required
                    />
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CT 3."
                      v-model="newCT43"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div align="center">
                  <strong>Resultados de Aprendizaje / Criterio de evaluación</strong>
                </div>
                <div class="form-group mx-auto">
                  <table style="width:100%">
                    <tr>
                      <th rowspan="3">
                        <textarea
                          name="welcome"
                          class="form-control"
                          placeholder="RA 1."
                          v-model="newRA41"
                          required
                        ></textarea>
                      </th>
                      <td>
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          placeholder="CE 1."
                          v-model="newCER411"
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
                          placeholder="CE 2."
                          v-model="newCER412"
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
                          v-model="newCER413"
                          required
                        />
                      </td>
                    </tr>
                  </table>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <table style="width:100%">
                    <tr>
                      <th rowspan="3">
                        <textarea
                          name="welcome"
                          class="form-control"
                          placeholder="RA 2."
                          v-model="newRA42"
                          required
                        ></textarea>
                      </th>
                      <td>
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          placeholder="CE 1."
                          v-model="newCER421"
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
                          placeholder="CE 2."
                          v-model="newCER422"
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
                          v-model="newCER423"
                          required
                        />
                      </td>
                    </tr>
                  </table>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <table style="width:100%">
                    <tr>
                      <th rowspan="3">
                        <textarea
                          name="welcome"
                          class="form-control"
                          placeholder="RA 3."
                          v-model="newRAU43"
                          required
                        ></textarea>
                      </th>
                      <td>
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          placeholder="CE 1."
                          v-model="newCER431"
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
                          placeholder="CE 2."
                          v-model="newCER432"
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
                          v-model="newCER433"
                          required
                        />
                      </td>
                    </tr>
                  </table>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <table style="width:100%">
                    <tr>
                      <th rowspan="3">
                        <textarea
                          name="welcome"
                          class="form-control"
                          placeholder="RA 4."
                          v-model="newRAU44"
                          required
                        ></textarea>
                      </th>
                      <td>
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          placeholder="CE 1."
                          v-model="newCER441"
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
                          placeholder="CE 2."
                          v-model="newCER442"
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
                          v-model="newCER443"
                          required
                        />
                      </td>
                    </tr>
                  </table>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Aprenda preguntandose preguntas</strong>
                  </div>
                  <textarea
                    name="welcome"
                    class="form-control"
                    v-model="newQuestion41"
                    placeholder="En este espacio se hace una invitacion al estudiante para que este realice preguntas que el desearia que resolviera con el tema o programa a cursar."
                    required
                  ></textarea>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Aprenda alistándose</strong>
                  </div>
                  <textarea
                    name="intentioned"
                    class="form-control"
                    v-model="newReady41"
                    placeholder="Redacte un problema, caso, entre otros que le sirvan al estudiante como reflexion y diagnostico de sus competencias actuales y le motivaran en su proceso de formacion."
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div align="center">
                  <strong>Aprenda de las fuentes</strong>
                </div>
                <div class="form-group row mx-auto" v-for="(input,k) in inputs9" :key="k">
                  <div class="col-md-6">
                    <label for="name">Tema</label>
                    <span>
                      <a
                        href="#"
                        class="badge badge-danger"
                        @click.prevent="remove9(k)"
                        v-show="k || ( !k && inputs9.length > 1)"
                      >-</a>
                      <a
                        href="#"
                        class="badge badge-primary"
                        @click.prevent="add9(k)"
                        v-show="k == inputs9.length-1"
                      >+</a>
                    </span>
                    <div>
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="Topic"
                        placeholder="Nombre del Tema"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="name">Contenido</label>
                    <textarea
                      name="competences"
                      class="form-control"
                      v-model="newContent"
                      placeholder="Es la explicacion o sintesis de la tematica a abordar en la unidad de estudio."
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group row" v-for="(input,k) in inputs10" :key="k">
                  <div class="col-md-6">
                    <label for="name">Master class (MC)</label>
                    <span>
                      <a
                        href="#"
                        class="badge badge-danger"
                        @click.prevent="remove10(k)"
                        v-show="k || ( !k && inputs10.length > 1)"
                      >-</a>
                      <a
                        href="#"
                        class="badge badge-primary"
                        @click.prevent="add10(k)"
                        v-show="k == inputs10.length-1"
                      >+</a>
                    </span>
                    <div>
                      <input
                        type="text"
                        name="objetive"
                        class="form-control"
                        v-model="newObjetive1"
                        placeholder="Nombre de la clase"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="name">Video MC</label>
                    <input
                      type="file"
                      name="picture"
                      class="form-control"
                      accept="image/*"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group row mx-auto">
                  <div class="col-md-6" v-for="(input,k) in inputs11" :key="k">
                    <label for="name">Video de apoyo</label>
                    <span>
                      <a
                        href="#"
                        class="badge badge-danger"
                        @click.prevent="remove11(k)"
                        v-show="k || ( !k && inputs11.length > 1)"
                      >-</a>
                      <a
                        href="#"
                        class="badge badge-primary"
                        @click.prevent="add11(k)"
                        v-show="k == inputs11.length-1"
                      >+</a>
                    </span>
                    <input
                      type="text"
                      name="objetive1"
                      class="form-control"
                      v-model="newObjetive"
                      placeholder="Nombre del Video"
                      required
                    />
                    <input
                      type="file"
                      name="picture2"
                      class="form-control"
                      accept="image/*"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col">
                    <label for="name">Bibliografia complementaria</label>
                    <textarea
                      name="competences"
                      class="form-control"
                      v-model="newBibliography41"
                      placeholder="Competencias conceptuales, procedimentales y actitudinales"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Aprenda haciendo</strong>
                  </div>
                  <textarea
                    name="doing"
                    class="form-control"
                    v-model="newDoing41"
                    placeholder="Los logros se conciben como las metas a alcanzar al culminar el curso."
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Aprenda poniéndose retos</strong>
                  </div>
                  <textarea
                    name="map"
                    class="form-control"
                    v-model="newChallenge41"
                    placeholder="Consiste en una representacion grafica, clara, precisa y sintetica de los temas que componen el modulo de aprendizaje"
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Aprenda proyectándose</strong>
                  </div>
                  <textarea
                    name="metodology"
                    class="form-control"
                    v-model="newProjecting41"
                    placeholder="Debe contener la descripcion de la metodologia, las estrategias de aprendizaje, herramientas de interaccion y explicacion de acceso a los mismos y las reglas de convivencia virtual del curso"
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto col-md-6">
                  <strong>Nombre de la unidad (2)</strong>
                  <input type="text" name="name" class="form-control" v-model="newName42" required />
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Presentación de la unidad</strong>
                  </div>
                  <textarea
                    name="welcome"
                    class="form-control"
                    v-model="newPresentation42"
                    placeholder=" Se refiere al espacio en el cual se da a conocer el proposito de la unidad; debe ser escrita mediante un texto corto."
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Conocimientos, habilidades y requisitos para el desarrollo de la unidad</strong>
                  </div>
                  <textarea
                    name="welcome"
                    class="form-control"
                    v-model="newHability42"
                    placeholder="Se presentan los conocimientos previos al aprendizaje que corresponden al desarrollo de la unidad"
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div align="center">
                  <strong>Competencias (Especificas y transversales)</strong>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <label for="name">Competencias Especificas</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CE 1."
                      v-model="newCEU421"
                      required
                    />
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CE 2."
                      v-model="newCEU422"
                      required
                    />
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CE 3."
                      v-model="newCEU423"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col">
                    <label for="name">Competencias transversales</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CT 1."
                      v-model="newCT421"
                      required
                    />
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CT 2."
                      v-model="newCT422"
                      required
                    />
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CT 3."
                      v-model="newCT423"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div align="center">
                  <strong>Resultados de Aprendizaje / Criterio de evaluación</strong>
                </div>
                <div class="form-group mx-auto">
                  <table style="width:100%">
                    <tr>
                      <th rowspan="3">
                        <textarea
                          name="welcome"
                          class="form-control"
                          placeholder="RA 1."
                          v-model="newRAU4211"
                          required
                        ></textarea>
                      </th>
                      <td>
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          placeholder="CE 1."
                          v-model="newCER4211"
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
                          placeholder="CE 2."
                          v-model="newCER4212"
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
                          v-model="newCER4213"
                          required
                        />
                      </td>
                    </tr>
                  </table>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <table style="width:100%">
                    <tr>
                      <th rowspan="3">
                        <textarea
                          name="welcome"
                          class="form-control"
                          placeholder="RA 2."
                          v-model="newRAU422"
                          required
                        ></textarea>
                      </th>
                      <td>
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          placeholder="CE 1."
                          v-model="newCER4221"
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
                          placeholder="CE 2."
                          v-model="newCER4222"
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
                          v-model="newCER4223"
                          required
                        />
                      </td>
                    </tr>
                  </table>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <table style="width:100%">
                    <tr>
                      <th rowspan="3">
                        <textarea
                          name="welcome"
                          class="form-control"
                          placeholder="RA 3."
                          v-model="newRAU423"
                          required
                        ></textarea>
                      </th>
                      <td>
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          placeholder="CE 1."
                          v-model="newCER4231"
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
                          placeholder="CE 2."
                          v-model="newCER4232"
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
                          v-model="newCER4233"
                          required
                        />
                      </td>
                    </tr>
                  </table>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <table style="width:100%">
                    <tr>
                      <th rowspan="3">
                        <textarea
                          name="welcome"
                          class="form-control"
                          placeholder="RA 4."
                          v-model="newRAU4244"
                          required
                        ></textarea>
                      </th>
                      <td>
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          placeholder="CE 1."
                          v-model="newCEU4241"
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
                          placeholder="CE 2."
                          v-model="newCEU4242"
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
                          v-model="newCE4243"
                          required
                        />
                      </td>
                    </tr>
                  </table>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Aprenda preguntandose preguntas</strong>
                  </div>
                  <textarea
                    name="welcome"
                    class="form-control"
                    v-model="newQuestion42"
                    placeholder="En este espacio se hace una invitacion al estudiante para que este realice preguntas que el desearia que resolviera con el tema o programa a cursar."
                    required
                  ></textarea>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Aprenda alistándose</strong>
                  </div>
                  <textarea
                    name="intentioned"
                    class="form-control"
                    v-model="newReady42"
                    placeholder="Redacte un problema, caso, entre otros que le sirvan al estudiante como reflexion y diagnostico de sus competencias actuales y le motivaran en su proceso de formacion."
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div align="center">
                  <strong>Aprenda de las fuentes</strong>
                </div>
                <div class="form-group row mx-auto" v-for="(input,k) in inputs12" :key="k">
                  <div class="col-md-6">
                    <label for="name">Tema</label>
                    <span>
                      <a
                        href="#"
                        class="badge badge-danger"
                        @click.prevent="remove12(k)"
                        v-show="k || ( !k && inputs12.length > 1)"
                      >-</a>
                      <a
                        href="#"
                        class="badge badge-primary"
                        @click.prevent="add12(k)"
                        v-show="k == inputs12.length-1"
                      >+</a>
                    </span>
                    <div>
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="Topic"
                        placeholder="Nombre del Tema"
                        required
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <label for="name">Contenido</label>
                    <textarea
                      name="competences"
                      class="form-control"
                      v-model="newContent"
                      placeholder="Es la explicacion o sintesis de la tematica a abordar en la unidad de estudio."
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group row" v-for="(input,k) in inputs13" :key="k">
                  <div class="col-md-6">
                    <label for="name">Master class (MC)</label>
                    <span>
                      <a
                        href="#"
                        class="badge badge-danger"
                        @click.prevent="remove13(k)"
                        v-show="k || ( !k && inputs13.length > 1)"
                      >-</a>
                      <a
                        href="#"
                        class="badge badge-primary"
                        @click.prevent="add13(k)"
                        v-show="k == inputs13.length-1"
                      >+</a>
                    </span>
                    <div>
                      <input
                        type="text"
                        name="objetive"
                        class="form-control"
                        v-model="newObjetive1"
                        placeholder="Nombre de la clase"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="name">Video MC</label>
                    <input
                      type="file"
                      name="picture"
                      class="form-control"
                      accept="image/*"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group row mx-auto">
                  <div class="col-md-6" v-for="(input,k) in inputs14" :key="k">
                    <label for="name">Video de apoyo</label>
                    <span>
                      <a
                        href="#"
                        class="badge badge-danger"
                        @click.prevent="remove14(k)"
                        v-show="k || ( !k && inputs14.length > 1)"
                      >-</a>
                      <a
                        href="#"
                        class="badge badge-primary"
                        @click.prevent="add14(k)"
                        v-show="k == inputs14.length-1"
                      >+</a>
                    </span>
                    <input
                      type="text"
                      name="objetive1"
                      class="form-control"
                      v-model="newObjetive"
                      placeholder="Nombre del Video"
                      required
                    />
                    <input
                      type="file"
                      name="picture2"
                      class="form-control"
                      accept="image/*"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col">
                    <label for="name">Bibliografia complementaria</label>
                    <textarea
                      name="competences"
                      class="form-control"
                      v-model="newBibliography42"
                      placeholder="Competencias conceptuales, procedimentales y actitudinales"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Aprenda haciendo</strong>
                  </div>
                  <textarea
                    name="doing"
                    class="form-control"
                    v-model="newDoing42"
                    placeholder="Los logros se conciben como las metas a alcanzar al culminar el curso."
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Aprenda poniéndose retos</strong>
                  </div>
                  <textarea
                    name="map"
                    class="form-control"
                    v-model="newChallenge42"
                    placeholder="Consiste en una representacion grafica, clara, precisa y sintetica de los temas que componen el modulo de aprendizaje"
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Aprenda proyectándose</strong>
                  </div>
                  <textarea
                    name="metodology"
                    class="form-control"
                    v-model="newProjecting42"
                    placeholder="Debe contener la descripcion de la metodologia, las estrategias de aprendizaje, herramientas de interaccion y explicacion de acceso a los mismos y las reglas de convivencia virtual del curso"
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto col-md-6">
                  <strong>Nombre de la unidad (3)</strong>
                  <input type="text" name="name" class="form-control" v-model="newName43" required />
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Presentación de la unidad</strong>
                  </div>
                  <textarea
                    name="welcome"
                    class="form-control"
                    v-model="newPresentation43"
                    placeholder=" Se refiere al espacio en el cual se da a conocer el proposito de la unidad; debe ser escrita mediante un texto corto."
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Conocimientos, habilidades y requisitos para el desarrollo de la unidad</strong>
                  </div>
                  <textarea
                    name="welcome"
                    class="form-control"
                    v-model="newHability43"
                    placeholder="Se presentan los conocimientos previos al aprendizaje que corresponden al desarrollo de la unidad"
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div align="center">
                  <strong>Competencias (Especificas y transversales)</strong>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <label for="name">Competencias Especificas</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CE 1."
                      v-model="newCEU431"
                      required
                    />
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CE 2."
                      v-model="newCEU432"
                      required
                    />
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CE 3."
                      v-model="newCEU433"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col">
                    <label for="name">Competencias transversales</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CT 1."
                      v-model="newCTU431"
                      required
                    />
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CT 2."
                      v-model="newCTU432"
                      required
                    />
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CT 3."
                      v-model="newCTU433"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div align="center">
                  <strong>Resultados de Aprendizaje / Criterio de evaluación</strong>
                </div>
                <div class="form-group mx-auto">
                  <table style="width:100%">
                    <tr>
                      <th rowspan="3">
                        <textarea
                          name="welcome"
                          class="form-control"
                          placeholder="RA 1."
                          v-model="newRAU431"
                          required
                        ></textarea>
                      </th>
                      <td>
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          placeholder="CE 1."
                          v-model="newCER431"
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
                          placeholder="CE 2."
                          v-model="newCER432"
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
                          v-model="newCER433"
                          required
                        />
                      </td>
                    </tr>
                  </table>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <table style="width:100%">
                    <tr>
                      <th rowspan="3">
                        <textarea
                          name="welcome"
                          class="form-control"
                          placeholder="RA 2."
                          v-model="newRAU432"
                          required
                        ></textarea>
                      </th>
                      <td>
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          placeholder="CE 1."
                          v-model="newCER4321"
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
                          placeholder="CE 2."
                          v-model="newCER4322"
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
                          v-model="newCER433"
                          required
                        />
                      </td>
                    </tr>
                  </table>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <table style="width:100%">
                    <tr>
                      <th rowspan="3">
                        <textarea
                          name="welcome"
                          class="form-control"
                          placeholder="RA 3."
                          v-model="newRAU433"
                          required
                        ></textarea>
                      </th>
                      <td>
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          placeholder="CE 1."
                          v-model="newCER4331"
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
                          placeholder="CE 2."
                          v-model="newCER4332"
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
                          v-model="newCER4333"
                          required
                        />
                      </td>
                    </tr>
                  </table>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <table style="width:100%">
                    <tr>
                      <th rowspan="3">
                        <textarea
                          name="welcome"
                          class="form-control"
                          placeholder="RA 4."
                          v-model="newRAU444"
                          required
                        ></textarea>
                      </th>
                      <td>
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          placeholder="CE 1."
                          v-model="newCER4441"
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
                          placeholder="CE 2."
                          v-model="newCER4442"
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
                          v-model="newCER4443"
                          required
                        />
                      </td>
                    </tr>
                  </table>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Aprenda preguntandose preguntas</strong>
                  </div>
                  <textarea
                    name="welcome"
                    class="form-control"
                    v-model="newQuestion43"
                    placeholder="En este espacio se hace una invitacion al estudiante para que este realice preguntas que el desearia que resolviera con el tema o programa a cursar."
                    required
                  ></textarea>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Aprenda alistándose</strong>
                  </div>
                  <textarea
                    name="intentioned"
                    class="form-control"
                    v-model="newReady43"
                    placeholder="Redacte un problema, caso, entre otros que le sirvan al estudiante como reflexion y diagnostico de sus competencias actuales y le motivaran en su proceso de formacion."
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div align="center">
                  <strong>Aprenda de las fuentes</strong>
                </div>
                <div class="form-group row mx-auto" v-for="(input,k) in inputs15" :key="k">
                  <div class="col-md-6">
                    <label for="name">Tema</label>
                    <span>
                      <a
                        href="#"
                        class="badge badge-danger"
                        @click.prevent="remove15(k)"
                        v-show="k || ( !k && inputs15.length > 1)"
                      >-</a>
                      <a
                        href="#"
                        class="badge badge-primary"
                        @click.prevent="add15(k)"
                        v-show="k == inputs15.length-1"
                      >+</a>
                    </span>
                    <div>
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="Topic"
                        placeholder="Nombre del Tema"
                        required
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <label for="name">Contenido</label>
                    <textarea
                      name="competences"
                      class="form-control"
                      v-model="newContent"
                      placeholder="Es la explicacion o sintesis de la tematica a abordar en la unidad de estudio."
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group row" v-for="(input,k) in inputs16" :key="k">
                  <div class="col-md-6">
                    <label for="name">Master class (MC)</label>
                    <span>
                      <a
                        href="#"
                        class="badge badge-danger"
                        @click.prevent="remove16(k)"
                        v-show="k || ( !k && inputs16.length > 1)"
                      >-</a>
                      <a
                        href="#"
                        class="badge badge-primary"
                        @click.prevent="add16(k)"
                        v-show="k == inputs16.length-1"
                      >+</a>
                    </span>
                    <div>
                      <input
                        type="text"
                        name="objetive"
                        class="form-control"
                        v-model="newObjetive1"
                        placeholder="Nombre de la clase"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="name">Video MC</label>
                    <input
                      type="file"
                      name="picture"
                      class="form-control"
                      accept="image/*"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group row mx-auto">
                  <div class="col-md-6" v-for="(input,k) in inputs17" :key="k">
                    <label for="name">Video de apoyo</label>
                    <span>
                      <a
                        href="#"
                        class="badge badge-danger"
                        @click.prevent="remove17(k)"
                        v-show="k || ( !k && inputs17.length > 1)"
                      >-</a>
                      <a
                        href="#"
                        class="badge badge-primary"
                        @click.prevent="add17(k)"
                        v-show="k == inputs17.length-1"
                      >+</a>
                    </span>
                    <input
                      type="text"
                      name="objetive1"
                      class="form-control"
                      v-model="newObjetive"
                      placeholder="Nombre del Video"
                      required
                    />
                    <input
                      type="file"
                      name="picture2"
                      class="form-control"
                      accept="image/*"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col">
                    <label for="name">Bibliografia complementaria</label>
                    <textarea
                      name="competences"
                      class="form-control"
                      v-model="newBibliography43"
                      placeholder="Competencias conceptuales, procedimentales y actitudinales"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Aprenda haciendo</strong>
                  </div>
                  <textarea
                    name="doing"
                    class="form-control"
                    v-model="newDoing43"
                    placeholder="Los logros se conciben como las metas a alcanzar al culminar el curso."
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Aprenda poniéndose retos</strong>
                  </div>
                  <textarea
                    name="map"
                    class="form-control"
                    v-model="newChallenge43"
                    placeholder="Consiste en una representacion grafica, clara, precisa y sintetica de los temas que componen el modulo de aprendizaje"
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Aprenda proyectándose</strong>
                  </div>
                  <textarea
                    name="metodology"
                    class="form-control"
                    v-model="newProjecting43"
                    placeholder="Debe contener la descripcion de la metodologia, las estrategias de aprendizaje, herramientas de interaccion y explicacion de acceso a los mismos y las reglas de convivencia virtual del curso"
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto col-md-6">
                  <strong>Nombre de la unidad (4)</strong>
                  <input type="text" name="name" class="form-control" v-model="newName44" required />
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Presentación de la unidad</strong>
                  </div>
                  <textarea
                    name="welcome"
                    class="form-control"
                    v-model="newPresentation44"
                    placeholder=" Se refiere al espacio en el cual se da a conocer el proposito de la unidad; debe ser escrita mediante un texto corto."
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Conocimientos, habilidades y requisitos para el desarrollo de la unidad</strong>
                  </div>
                  <textarea
                    name="welcome"
                    class="form-control"
                    v-model="newHability44"
                    placeholder="Se presentan los conocimientos previos al aprendizaje que corresponden al desarrollo de la unidad"
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div align="center">
                  <strong>Competencias (Especificas y transversales)</strong>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <label for="name">Competencias Especificas</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CE 1."
                      v-model="newCEU441"
                      required
                    />
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CE 2."
                      v-model="newCEU442"
                      required
                    />
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CE 3."
                      v-model="newCEU443"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col">
                    <label for="name">Competencias transversales</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CT 1."
                      v-model="newVTU441"
                      required
                    />
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CT 2."
                      v-model="newCTU442"
                      required
                    />
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="CT 3."
                      v-model="newCTU443"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div align="center">
                  <strong>Resultados de Aprendizaje / Criterio de evaluación</strong>
                </div>
                <div class="form-group mx-auto">
                  <table style="width:100%">
                    <tr>
                      <th rowspan="3">
                        <textarea
                          name="welcome"
                          class="form-control"
                          placeholder="RA 1."
                          v-model="newRAU441"
                          required
                        ></textarea>
                      </th>
                      <td>
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          placeholder="CE 1."
                          v-model="newCER4411"
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
                          placeholder="CE 2."
                          v-model="newCER4412"
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
                          v-model="newCER4413"
                          required
                        />
                      </td>
                    </tr>
                  </table>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <table style="width:100%">
                    <tr>
                      <th rowspan="3">
                        <textarea
                          name="welcome"
                          class="form-control"
                          placeholder="RA 2."
                          v-model="newRAU442"
                          required
                        ></textarea>
                      </th>
                      <td>
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          placeholder="CE 1."
                          v-model="newCER4421"
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
                          placeholder="CE 2."
                          v-model="newCER4422"
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
                          v-model="newCER4423"
                          required
                        />
                      </td>
                    </tr>
                  </table>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <table style="width:100%">
                    <tr>
                      <th rowspan="3">
                        <textarea
                          name="welcome"
                          class="form-control"
                          placeholder="RA 3."
                          v-model="newRAU443"
                          required
                        ></textarea>
                      </th>
                      <td>
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          placeholder="CE 1."
                          v-model="newCER4431"
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
                          placeholder="CE 2."
                          v-model="newCER4432"
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
                          v-model="newCER4433"
                          required
                        />
                      </td>
                    </tr>
                  </table>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <table style="width:100%">
                    <tr>
                      <th rowspan="3">
                        <textarea
                          name="welcome"
                          class="form-control"
                          placeholder="RA 4."
                          v-model="newRAU444"
                          required
                        ></textarea>
                      </th>
                      <td>
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          placeholder="CE 1."
                          v-model="newCER4441"
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
                          placeholder="CE 2."
                          v-model="newCER4442"
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
                          v-model="newCER4443"
                          required
                        />
                      </td>
                    </tr>
                  </table>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Aprenda preguntandose preguntas</strong>
                  </div>
                  <textarea
                    name="welcome"
                    class="form-control"
                    v-model="newQuestion44"
                    placeholder="En este espacio se hace una invitacion al estudiante para que este realice preguntas que el desearia que resolviera con el tema o programa a cursar."
                    required
                  ></textarea>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Aprenda alistándose</strong>
                  </div>
                  <textarea
                    name="intentioned"
                    class="form-control"
                    v-model="newReady44"
                    placeholder="Redacte un problema, caso, entre otros que le sirvan al estudiante como reflexion y diagnostico de sus competencias actuales y le motivaran en su proceso de formacion."
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div align="center">
                  <strong>Aprenda de las fuentes</strong>
                </div>
                <div class="form-group row mx-auto" v-for="(input,k) in inputs18" :key="k">
                  <div class="col-md-6">
                    <label for="name">Tema</label>
                    <span>
                      <a
                        href="#"
                        class="badge badge-danger"
                        @click.prevent="remove18(k)"
                        v-show="k || ( !k && inputs18.length > 1)"
                      >-</a>
                      <a
                        href="#"
                        class="badge badge-primary"
                        @click.prevent="add18(k)"
                        v-show="k == inputs18.length-1"
                      >+</a>
                    </span>
                    <div>
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="Topic"
                        placeholder="Nombre del Tema"
                        required
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <label for="name">Contenido</label>
                    <textarea
                      name="competences"
                      class="form-control"
                      v-model="newContent"
                      placeholder="Es la explicacion o sintesis de la tematica a abordar en la unidad de estudio."
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group row" v-for="(input,k) in inputs19" :key="k">
                  <div class="col-md-6">
                    <label for="name">Master class (MC)</label>
                    <span>
                      <a
                        href="#"
                        class="badge badge-danger"
                        @click.prevent="remove19(k)"
                        v-show="k || ( !k && inputs19.length > 1)"
                      >-</a>
                      <a
                        href="#"
                        class="badge badge-primary"
                        @click.prevent="add19(k)"
                        v-show="k == inputs19.length-1"
                      >+</a>
                    </span>
                    <div>
                      <input
                        type="text"
                        name="objetive"
                        class="form-control"
                        v-model="newObjetive1"
                        placeholder="Nombre de la clase"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="name">Video MC</label>
                    <input
                      type="file"
                      name="picture"
                      class="form-control"
                      accept="image/*"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group row mx-auto">
                  <div class="col-md-6" v-for="(input,k) in inputs20" :key="k">
                    <label for="name">Video de apoyo</label>
                    <span>
                      <a
                        href="#"
                        class="badge badge-danger"
                        @click.prevent="remove20(k)"
                        v-show="k || ( !k && inputs20.length > 1)"
                      >-</a>
                      <a
                        href="#"
                        class="badge badge-primary"
                        @click.prevent="add20(k)"
                        v-show="k == inputs20.length-1"
                      >+</a>
                    </span>
                    <input
                      type="text"
                      name="objetive1"
                      class="form-control"
                      v-model="newObjetive"
                      placeholder="Nombre del Video"
                      required
                    />
                    <input
                      type="file"
                      name="picture2"
                      class="form-control"
                      accept="image/*"
                      required
                    />
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="col">
                    <label for="name">Bibliografia complementaria</label>
                    <textarea
                      name="competences"
                      class="form-control"
                      v-model="newBibliography44"
                      placeholder="Competencias conceptuales, procedimentales y actitudinales"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Aprenda haciendo</strong>
                  </div>
                  <textarea
                    name="doing"
                    class="form-control"
                    v-model="newDoing44"
                    placeholder="Los logros se conciben como las metas a alcanzar al culminar el curso."
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Aprenda poniéndose retos</strong>
                  </div>
                  <textarea
                    name="map"
                    class="form-control"
                    v-model="newChallenge44"
                    placeholder="Consiste en una representacion grafica, clara, precisa y sintetica de los temas que componen el modulo de aprendizaje"
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="form-group mx-auto">
                  <div align="center">
                    <strong>Aprenda proyectándose</strong>
                  </div>
                  <textarea
                    name="metodology"
                    class="form-control"
                    v-model="newProjecting44"
                    placeholder="Debe contener la descripcion de la metodologia, las estrategias de aprendizaje, herramientas de interaccion y explicacion de acceso a los mismos y las reglas de convivencia virtual del curso"
                    required
                  ></textarea>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                <div class="modal-footer">
                  <a href="/freeUnit" class="btn btn-primary float-right">Guardar</a>
                </div>
              </div>
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
      inputs2: [
        {
          name: ""
        }
      ],
      inputs3: [
        {
          name: ""
        }
      ],
      inputs4: [
        {
          name: ""
        }
      ],
      inputs5: [
        {
          name: ""
        }
      ],
      inputs6: [
        {
          name: ""
        }
      ],
      inputs7: [
        {
          name: ""
        }
      ],
      inputs8: [
        {
          name: ""
        }
      ],
      inputs9: [
        {
          name: ""
        }
      ],
      inputs10: [
        {
          name: ""
        }
      ],
      inputs11: [
        {
          name: ""
        }
      ],
      inputs12: [
        {
          name: ""
        }
      ],
      inputs13: [
        {
          name: ""
        }
      ],
      inputs14: [
        {
          name: ""
        }
      ],
      inputs15: [
        {
          name: ""
        }
      ],
      inputs16: [
        {
          name: ""
        }
      ],
      inputs17: [
        {
          name: ""
        }
      ],
      inputs18: [
        {
          name: ""
        }
      ],
      inputs19: [
        {
          name: ""
        }
      ],
      inputs20: [
        {
          name: ""
        }
      ],
      Uoptions: ["3", "4"],
      subcategories: [],
      TypeUsers: [],
      classes: [],
      newType: "",
      newName: "",
      newId_subcategories: "",
      newId_category: "",
      newId_course: "",
      newPresentation: "",
      newHability: "",
      newCompetences_E1: "",
      newCompetences_E2: "",
      newCompetences_E3: "",
      newCompetences_T1: "",
      newCompetences_T2: "",
      newCompetences_T3: "",
      newResult_1: "",
      newResult_2: "",
      newResult_3: "",
      newResult_4: "",
      newCompeR11: "",
      newCompeR12: "",
      newCompeR13: "",
      newCompeR21: "",
      newCompeR22: "",
      newCompeR23: "",
      newCompeR31: "",
      newCompeR32: "",
      newCompeR33: "",
      newCompeR41: "",
      newCompeR42: "",
      newCompeR43: "",
      newQuestion: "",
      newReady: "",
      newContent: "",
      newMaster: "",
      newVideo: "",
      newBibliography: "",
      newDoing: "",
      newChallenge: "",
      newProjecting: "",
      newTopiic: "",
      fillC: {
        id: "",
        name: "",
        description: "",
        id_user: "",
        id_category: "",
        id_subcategory: "",
        type: "",
        id_course: "",
        presentation: "",
        hability: "",
        competences_e1: "",
        competences_e2: "",
        competences_e3: "",
        competences_t1: "",
        competences_t2: "",
        competences_t3: "",
        result1: "",
        result2: "",
        result3: "",
        result4: "",
        comper11: "",
        comper12: "",
        comper13: "",
        comper21: "",
        comper22: "",
        comper23: "",
        comper31: "",
        comper32: "",
        comper33: "",
        comper41: "",
        comper42: "",
        comper43: "",
        question: "",
        ready: "",
        content: "",
        master: "",
        video: "",
        bibliography: "",
        doing: "",
        challenge: "",
        projecting: "",
        topic: ""
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
    add2(index) {
      this.inputs2.push({ name: "" });
    },
    remove2(index) {
      this.inputs2.splice(index, 1);
    },
    add3(index) {
      this.inputs3.push({ name: "" });
    },
    remove3(index) {
      this.inputs3.splice(index, 1);
    },
    add4(index) {
      this.inputs4.push({ name: "" });
    },
    remove4(index) {
      this.inputs4.splice(index, 1);
    },
    add5(index) {
      this.inputs5.push({ name: "" });
    },
    remove5(index) {
      this.inputs5.splice(index, 1);
    },
    add6(index) {
      this.inputs6.push({ name: "" });
    },
    remove6(index) {
      this.inputs6.splice(index, 1);
    },
    add7(index) {
      this.inputs7.push({ name: "" });
    },
    remove7(index) {
      this.inputs7.splice(index, 1);
    },
    add8(index) {
      this.inputs8.push({ name: "" });
    },
    remove8(index) {
      this.inputs8.splice(index, 1);
    },
    add9(index) {
      this.inputs9.push({ name: "" });
    },
    remove9(index) {
      this.inputs9.splice(index, 1);
    },
    add10(index) {
      this.inputs10.push({ name: "" });
    },
    remove10(index) {
      this.inputs10.splice(index, 1);
    },
    add11(index) {
      this.inputs11.push({ name: "" });
    },
    remove11(index) {
      this.inputs11.splice(index, 1);
    },
    add12(index) {
      this.inputs12.push({ name: "" });
    },
    remove12(index) {
      this.inputs12.splice(index, 1);
    },
    add13(index) {
      this.inputs13.push({ name: "" });
    },
    remove13(index) {
      this.inputs13.splice(index, 1);
    },
    add14(index) {
      this.inputs14.push({ name: "" });
    },
    remove14(index) {
      this.inputs14.splice(index, 1);
    },
    remove15(index) {
      this.inputs15.splice(index, 1);
    },
    add15(index) {
      this.inputs15.push({ name: "" });
    },
    remove16(index) {
      this.inputs16.splice(index, 1);
    },
    add16(index) {
      this.inputs16.push({ name: "" });
    },
    remove17(index) {
      this.inputs17.splice(index, 1);
    },
    add17(index) {
      this.inputs17.push({ name: "" });
    },
    remove18(index) {
      this.inputs18.splice(index, 1);
    },
    add18(index) {
      this.inputs18.push({ name: "" });
    },
    remove19(index) {
      this.inputs19.splice(index, 1);
    },
    add19(index) {
      this.inputs19.push({ name: "" });
    },
    remove20(index) {
      this.inputs20.splice(index, 1);
    },
    add20(index) {
      this.inputs20.push({ name: "" });
    },
    editClasses(clas) {
      this.fillC.id = clas.id;
      this.fillC.description = clas.description;
      this.fillC.name = clas.name;
      this.fillC.id_user = clas.id_user;
      this.fillC.id_category = clas.id_category;
      this.fillC.id_subcategory = clas.id_subcategory;
      this.fillC.subject = clas.subject;
      this.fillC.objetive = clas.objetive;
      this.fillC.fromW = clas.fromW;
      this.fillC.toW = clas.toW;
      this.fillC.fromH = clas.fromH;
      this.fillC.toH = clas.toH;
      this.fillC.quiz = clas.quiz;
      this.fillC.indicator = clas.indicator;
      this.fillC.percent = clas.percent;
      this.fillC.local = clas.local;
      this.fillC.regional = clas.regional;
      this.fillC.world = clas.world;
      $("#edit").modal("show");
    },
    updateClasses(id) {
      var url = "classes/" + id;
      axios
        .put(url, this.fillC)
        .then(response => {
          this.getClasses();
          (this.fillC = {
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
          }),
            (this.errors = []);
          $("#edit").modal("hide");
          toastr.success("Class successfully edited");
        })
        .catch(error => {
          this.errors = error.response.data;
        });
    },
    deleteClasses(clas) {
      var url = "classes/" + clas.id;
      axios.delete(url).then(response => {
        // eliminar
        this.getClasses(); //lista
        toastr.success("Successfully removed"); //mensaje
      });
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
.background1 {
  background: url(http://localhost/Life4teach_project/resources/js/assets/img/Fondo5.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
}
.vue-form-wizard.md .wizard-icon-circle {
  border-color: #e9ecef;
}
</style>