<template>
  <auto-responsive>
    <div class="background1">
      <div class="row">
        <div class="col-md-11 mx-auto">
          <div class="card text-center">
            <h3 class="card-header">Curso Especializado-Unidad</h3>
            <form class="needs-validation" novalidate>
              <div class="card-body">
                <div class="form-group row">
                  <div class="col">
                    <strong>Cantidad de unidades</strong>
                    <br>
                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input
                        class="custom-control-input"
                        type="checkbox"
                        id="gridCheck1"
                        v-model="newRegional"
                      >
                      <label class="custom-control-label" for="gridCheck1">3</label>
                    </div>
                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input
                        class="custom-control-input"
                        type="checkbox"
                        id="gridCheck2"
                        v-model="newWorld"
                      >
                      <label class="custom-control-label" for="gridCheck2">4</label>
                    </div>
                  </div>
                </div>
                <div id="hidden_fields1">
                  <div class="form-group mx-auto col-md-6">
                    <strong>Nombre de la unidad (1)</strong>
                    <input type="text" name="name" class="form-control" v-model="newName" required>
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
                      v-model="newFromW"
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
                        v-model="newName"
                        required
                      >
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CE 2."
                        v-model="newName"
                        required
                      >
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CE 3."
                        v-model="newName"
                        required
                      >
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="name">Competencias transversales</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CT 1."
                        v-model="newName"
                        required
                      >
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CT 2."
                        v-model="newName"
                        required
                      >
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CT 3."
                        v-model="newName"
                        required
                      >
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
                            v-model="newFromW"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="newName"
                            required
                          >
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
                            v-model="newFromW"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="newName"
                            required
                          >
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
                            v-model="newFromW"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="newName"
                            required
                          >
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
                            v-model="newFromW"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="newName"
                            required
                          >
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
                      v-model="newFromW"
                      placeholder="Redacte un problema, caso, entre otros que le sirvan al estudiante como reflexion y diagnostico de sus competencias actuales y le motivaran en su proceso de formacion."
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div align="center">
                    <strong>Aprenda de las fuentes</strong>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <label for="name">Contenido de la unidad</label>
                      <textarea
                        name="competences"
                        class="form-control"
                        v-model="newfg"
                        placeholder="Es la explicacion o sintesis de la tematica a abordar en la unidad de estudio."
                        required
                      ></textarea>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6" v-for="(input,k) in inputs1" :key="k">
                      <label for="name">Master class</label>
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
                        >
                        <input
                          type="file"
                          name="picture"
                          class="form-control"
                          accept="image/*"
                          required
                        >
                        <div class="invalid-feedback">Please fill out this field</div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6" v-for="(input,k) in inputs" :key="k">
                      <label for="name">Video de apoyo</label>
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
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="newObjetive"
                        placeholder="Nombre del Video"
                        required
                      >
                      <input
                        type="file"
                        name="picture2"
                        class="form-control"
                        accept="image/*"
                        required
                      >
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="name">Bibliografia complementaria</label>
                      <textarea
                        name="competences"
                        class="form-control"
                        v-model="newfg"
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
                      name="gold"
                      class="form-control"
                      v-model="newF"
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
                      v-model="newFr"
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
                      v-model="newFro"
                      placeholder="Debe contener la descripcion de la metodologia, las estrategias de aprendizaje, herramientas de interaccion y explicacion de acceso a los mismos y las reglas de convivencia virtual del curso"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto col-md-6">
                    <strong>Nombre de la unidad (2)</strong>
                    <input type="text" name="name" class="form-control" v-model="newName" required>
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
                      v-model="newFromW"
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
                        v-model="newName"
                        required
                      >
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CE 2."
                        v-model="newName"
                        required
                      >
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CE 3."
                        v-model="newName"
                        required
                      >
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="name">Competencias transversales</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CT 1."
                        v-model="newName"
                        required
                      >
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CT 2."
                        v-model="newName"
                        required
                      >
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CT 3."
                        v-model="newName"
                        required
                      >
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
                            v-model="newFromW"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="newName"
                            required
                          >
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
                            v-model="newFromW"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="newName"
                            required
                          >
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
                            v-model="newFromW"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="newName"
                            required
                          >
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
                            v-model="newFromW"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="newName"
                            required
                          >
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
                      v-model="newFromW"
                      placeholder="Redacte un problema, caso, entre otros que le sirvan al estudiante como reflexion y diagnostico de sus competencias actuales y le motivaran en su proceso de formacion."
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div align="center">
                    <strong>Aprenda de las fuentes</strong>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <label for="name">Contenido de la unidad</label>
                      <textarea
                        name="competences"
                        class="form-control"
                        v-model="newfg"
                        placeholder="Es la explicacion o sintesis de la tematica a abordar en la unidad de estudio."
                        required
                      ></textarea>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6" v-for="(input,k) in inputs1" :key="k">
                      <label for="name">Master class</label>
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
                        >
                        <input
                          type="file"
                          name="picture"
                          class="form-control"
                          accept="image/*"
                          required
                        >
                        <div class="invalid-feedback">Please fill out this field</div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6" v-for="(input,k) in inputs" :key="k">
                      <label for="name">Video de apoyo</label>
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
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="newObjetive"
                        placeholder="Nombre del Video"
                        required
                      >
                      <input
                        type="file"
                        name="picture2"
                        class="form-control"
                        accept="image/*"
                        required
                      >
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="name">Bibliografia complementaria</label>
                      <textarea
                        name="competences"
                        class="form-control"
                        v-model="newfg"
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
                      name="gold"
                      class="form-control"
                      v-model="newF"
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
                      v-model="newFr"
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
                      v-model="newFro"
                      placeholder="Debe contener la descripcion de la metodologia, las estrategias de aprendizaje, herramientas de interaccion y explicacion de acceso a los mismos y las reglas de convivencia virtual del curso"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto col-md-6">
                    <strong>Nombre de la unidad (3)</strong>
                    <input type="text" name="name" class="form-control" v-model="newName" required>
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
                      v-model="newFromW"
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
                        v-model="newName"
                        required
                      >
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CE 2."
                        v-model="newName"
                        required
                      >
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CE 3."
                        v-model="newName"
                        required
                      >
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="name">Competencias transversales</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CT 1."
                        v-model="newName"
                        required
                      >
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CT 2."
                        v-model="newName"
                        required
                      >
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CT 3."
                        v-model="newName"
                        required
                      >
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
                            v-model="newFromW"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="newName"
                            required
                          >
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
                            v-model="newFromW"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="newName"
                            required
                          >
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
                            v-model="newFromW"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="newName"
                            required
                          >
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
                            v-model="newFromW"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="newName"
                            required
                          >
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
                      v-model="newFromW"
                      placeholder="Redacte un problema, caso, entre otros que le sirvan al estudiante como reflexion y diagnostico de sus competencias actuales y le motivaran en su proceso de formacion."
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div align="center">
                    <strong>Aprenda de las fuentes</strong>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <label for="name">Contenido de la unidad</label>
                      <textarea
                        name="competences"
                        class="form-control"
                        v-model="newfg"
                        placeholder="Es la explicacion o sintesis de la tematica a abordar en la unidad de estudio."
                        required
                      ></textarea>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6" v-for="(input,k) in inputs1" :key="k">
                      <label for="name">Master class</label>
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
                        >
                        <input
                          type="file"
                          name="picture"
                          class="form-control"
                          accept="image/*"
                          required
                        >
                        <div class="invalid-feedback">Please fill out this field</div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6" v-for="(input,k) in inputs" :key="k">
                      <label for="name">Video de apoyo</label>
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
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="newObjetive"
                        placeholder="Nombre del Video"
                        required
                      >
                      <input
                        type="file"
                        name="picture2"
                        class="form-control"
                        accept="image/*"
                        required
                      >
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="name">Bibliografia complementaria</label>
                      <textarea
                        name="competences"
                        class="form-control"
                        v-model="newfg"
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
                      name="gold"
                      class="form-control"
                      v-model="newF"
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
                      v-model="newFr"
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
                      v-model="newFro"
                      placeholder="Debe contener la descripcion de la metodologia, las estrategias de aprendizaje, herramientas de interaccion y explicacion de acceso a los mismos y las reglas de convivencia virtual del curso"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="modal-footer">
                    <a href="/freeUnit" class="btn btn-primary float-right">Guardar</a>
                  </div>
                </div>
                <!------------------------------------------------------------------------------------------------------------------->
                <div id="hidden_fields2">
                  <div class="form-group mx-auto col-md-6">
                    <strong>Nombre de la unidad (1)</strong>
                    <input type="text" name="name" class="form-control" v-model="newName" required>
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
                      v-model="newFromW"
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
                        v-model="newName"
                        required
                      >
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CE 2."
                        v-model="newName"
                        required
                      >
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CE 3."
                        v-model="newName"
                        required
                      >
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="name">Competencias transversales</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CT 1."
                        v-model="newName"
                        required
                      >
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CT 2."
                        v-model="newName"
                        required
                      >
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CT 3."
                        v-model="newName"
                        required
                      >
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
                            v-model="newFromW"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="newName"
                            required
                          >
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
                            v-model="newFromW"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="newName"
                            required
                          >
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
                            v-model="newFromW"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="newName"
                            required
                          >
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
                            v-model="newFromW"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="newName"
                            required
                          >
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
                      v-model="newFromW"
                      placeholder="Redacte un problema, caso, entre otros que le sirvan al estudiante como reflexion y diagnostico de sus competencias actuales y le motivaran en su proceso de formacion."
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div align="center">
                    <strong>Aprenda de las fuentes</strong>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <label for="name">Contenido de la unidad</label>
                      <textarea
                        name="competences"
                        class="form-control"
                        v-model="newfg"
                        placeholder="Es la explicacion o sintesis de la tematica a abordar en la unidad de estudio."
                        required
                      ></textarea>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6" v-for="(input,k) in inputs1" :key="k">
                      <label for="name">Master class</label>
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
                        >
                        <input
                          type="file"
                          name="picture"
                          class="form-control"
                          accept="image/*"
                          required
                        >
                        <div class="invalid-feedback">Please fill out this field</div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6" v-for="(input,k) in inputs" :key="k">
                      <label for="name">Video de apoyo</label>
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
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="newObjetive"
                        placeholder="Nombre del Video"
                        required
                      >
                      <input
                        type="file"
                        name="picture2"
                        class="form-control"
                        accept="image/*"
                        required
                      >
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="name">Bibliografia complementaria</label>
                      <textarea
                        name="competences"
                        class="form-control"
                        v-model="newfg"
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
                      name="gold"
                      class="form-control"
                      v-model="newF"
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
                      v-model="newFr"
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
                      v-model="newFro"
                      placeholder="Debe contener la descripcion de la metodologia, las estrategias de aprendizaje, herramientas de interaccion y explicacion de acceso a los mismos y las reglas de convivencia virtual del curso"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto col-md-6">
                    <strong>Nombre de la unidad (2)</strong>
                    <input type="text" name="name" class="form-control" v-model="newName" required>
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
                      v-model="newFromW"
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
                        v-model="newName"
                        required
                      >
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CE 2."
                        v-model="newName"
                        required
                      >
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CE 3."
                        v-model="newName"
                        required
                      >
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="name">Competencias transversales</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CT 1."
                        v-model="newName"
                        required
                      >
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CT 2."
                        v-model="newName"
                        required
                      >
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CT 3."
                        v-model="newName"
                        required
                      >
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
                            v-model="newFromW"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="newName"
                            required
                          >
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
                            v-model="newFromW"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="newName"
                            required
                          >
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
                            v-model="newFromW"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="newName"
                            required
                          >
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
                            v-model="newFromW"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="newName"
                            required
                          >
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
                      v-model="newFromW"
                      placeholder="Redacte un problema, caso, entre otros que le sirvan al estudiante como reflexion y diagnostico de sus competencias actuales y le motivaran en su proceso de formacion."
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div align="center">
                    <strong>Aprenda de las fuentes</strong>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <label for="name">Contenido de la unidad</label>
                      <textarea
                        name="competences"
                        class="form-control"
                        v-model="newfg"
                        placeholder="Es la explicacion o sintesis de la tematica a abordar en la unidad de estudio."
                        required
                      ></textarea>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6" v-for="(input,k) in inputs1" :key="k">
                      <label for="name">Master class</label>
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
                        >
                        <input
                          type="file"
                          name="picture"
                          class="form-control"
                          accept="image/*"
                          required
                        >
                        <div class="invalid-feedback">Please fill out this field</div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6" v-for="(input,k) in inputs" :key="k">
                      <label for="name">Video de apoyo</label>
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
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="newObjetive"
                        placeholder="Nombre del Video"
                        required
                      >
                      <input
                        type="file"
                        name="picture2"
                        class="form-control"
                        accept="image/*"
                        required
                      >
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="name">Bibliografia complementaria</label>
                      <textarea
                        name="competences"
                        class="form-control"
                        v-model="newfg"
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
                      name="gold"
                      class="form-control"
                      v-model="newF"
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
                      v-model="newFr"
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
                      v-model="newFro"
                      placeholder="Debe contener la descripcion de la metodologia, las estrategias de aprendizaje, herramientas de interaccion y explicacion de acceso a los mismos y las reglas de convivencia virtual del curso"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto col-md-6">
                    <strong>Nombre de la unidad (3)</strong>
                    <input type="text" name="name" class="form-control" v-model="newName" required>
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
                      v-model="newFromW"
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
                        v-model="newName"
                        required
                      >
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CE 2."
                        v-model="newName"
                        required
                      >
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CE 3."
                        v-model="newName"
                        required
                      >
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="name">Competencias transversales</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CT 1."
                        v-model="newName"
                        required
                      >
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CT 2."
                        v-model="newName"
                        required
                      >
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CT 3."
                        v-model="newName"
                        required
                      >
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
                            v-model="newFromW"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="newName"
                            required
                          >
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
                            v-model="newFromW"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="newName"
                            required
                          >
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
                            v-model="newFromW"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="newName"
                            required
                          >
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
                            v-model="newFromW"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="newName"
                            required
                          >
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
                      v-model="newFromW"
                      placeholder="Redacte un problema, caso, entre otros que le sirvan al estudiante como reflexion y diagnostico de sus competencias actuales y le motivaran en su proceso de formacion."
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div align="center">
                    <strong>Aprenda de las fuentes</strong>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <label for="name">Contenido de la unidad</label>
                      <textarea
                        name="competences"
                        class="form-control"
                        v-model="newfg"
                        placeholder="Es la explicacion o sintesis de la tematica a abordar en la unidad de estudio."
                        required
                      ></textarea>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6" v-for="(input,k) in inputs1" :key="k">
                      <label for="name">Master class</label>
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
                        >
                        <input
                          type="file"
                          name="picture"
                          class="form-control"
                          accept="image/*"
                          required
                        >
                        <div class="invalid-feedback">Please fill out this field</div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6" v-for="(input,k) in inputs" :key="k">
                      <label for="name">Video de apoyo</label>
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
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="newObjetive"
                        placeholder="Nombre del Video"
                        required
                      >
                      <input
                        type="file"
                        name="picture2"
                        class="form-control"
                        accept="image/*"
                        required
                      >
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="name">Bibliografia complementaria</label>
                      <textarea
                        name="competences"
                        class="form-control"
                        v-model="newfg"
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
                      name="gold"
                      class="form-control"
                      v-model="newF"
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
                      v-model="newFr"
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
                      v-model="newFro"
                      placeholder="Debe contener la descripcion de la metodologia, las estrategias de aprendizaje, herramientas de interaccion y explicacion de acceso a los mismos y las reglas de convivencia virtual del curso"
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div class="form-group mx-auto col-md-6">
                    <strong>Nombre de la unidad (4)</strong>
                    <input type="text" name="name" class="form-control" v-model="newName" required>
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
                      v-model="newFromW"
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
                        v-model="newName"
                        required
                      >
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CE 2."
                        v-model="newName"
                        required
                      >
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CE 3."
                        v-model="newName"
                        required
                      >
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="name">Competencias transversales</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CT 1."
                        v-model="newName"
                        required
                      >
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CT 2."
                        v-model="newName"
                        required
                      >
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="CT 3."
                        v-model="newName"
                        required
                      >
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
                            v-model="newFromW"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="newName"
                            required
                          >
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
                            v-model="newFromW"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="newName"
                            required
                          >
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
                            v-model="newFromW"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="newName"
                            required
                          >
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
                            v-model="newFromW"
                            required
                          ></textarea>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 1."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 2."
                            v-model="newName"
                            required
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="CE 3."
                            v-model="newName"
                            required
                          >
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
                      v-model="newFromW"
                      placeholder="Redacte un problema, caso, entre otros que le sirvan al estudiante como reflexion y diagnostico de sus competencias actuales y le motivaran en su proceso de formacion."
                      required
                    ></textarea>
                    <div class="invalid-feedback">Please fill out this field</div>
                  </div>
                  <div align="center">
                    <strong>Aprenda de las fuentes</strong>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6">
                      <label for="name">Contenido de la unidad</label>
                      <textarea
                        name="competences"
                        class="form-control"
                        v-model="newfg"
                        placeholder="Es la explicacion o sintesis de la tematica a abordar en la unidad de estudio."
                        required
                      ></textarea>
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col-md-6" v-for="(input,k) in inputs1" :key="k">
                      <label for="name">Master class</label>
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
                        >
                        <input
                          type="file"
                          name="picture"
                          class="form-control"
                          accept="image/*"
                          required
                        >
                        <div class="invalid-feedback">Please fill out this field</div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mx-auto">
                    <div class="col-md-6" v-for="(input,k) in inputs" :key="k">
                      <label for="name">Video de apoyo</label>
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
                      <input
                        type="text"
                        name="objetive1"
                        class="form-control"
                        v-model="newObjetive"
                        placeholder="Nombre del Video"
                        required
                      >
                      <input
                        type="file"
                        name="picture2"
                        class="form-control"
                        accept="image/*"
                        required
                      >
                      <div class="invalid-feedback">Please fill out this field</div>
                    </div>
                    <div class="col">
                      <label for="name">Bibliografia complementaria</label>
                      <textarea
                        name="competences"
                        class="form-control"
                        v-model="newfg"
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
                      name="gold"
                      class="form-control"
                      v-model="newF"
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
                      v-model="newFr"
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
                      v-model="newFro"
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
      Uoptions: ["3", "4"],
      subcategories: [],
      TypeUsers: [],
      classes: [],
      myOptions: ["On-Line", "Virtual"],
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
  background: url(http://localhost/Life4teach_project/resources/js/assets/img/Fondo1.jpg);
  background-attachment: fixed;
}
</style>