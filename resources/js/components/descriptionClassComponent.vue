<template>
  <div class="background1">
    <div class="card text-center">
      <h3 class="card-header">Cursos</h3>
      <div class="card-body">
        <table align="center">
          <tr>
            <td>
              <label for>Class1</label>
            </td>
            <td>
              <div class="ec-stars-wrapper">
                <a href="#" data-value="1" title="Votar con 1 estrellas">&#9733;</a>
                <a href="#" data-value="2" title="Votar con 2 estrellas">&#9733;</a>
                <a href="#" data-value="3" title="Votar con 3 estrellas">&#9733;</a>
                <a href="#" data-value="4" title="Votar con 4 estrellas">&#9733;</a>
                <a href="#" data-value="5" title="Votar con 5 estrellas">&#9733;</a>
              </div>
            </td>
            <td>
              <figure class="figure">
                <img
                  src="http://localhost/Life4teach_project/resources/js/assets/img/avatar.png"
                  class="figure-img img-fluid rounded"
                  alt="A generic square placeholder image with rounded corners in a figure."
                  height="100px"
                  width="100px"
                >
                <figcaption class="figure-caption" href="#">
                  <a href="/resume">Nombre del Tutor</a>
                </figcaption>
              </figure>
            </td>
          </tr>
        </table>
        <div class="form-group row">
          <div class="col">
            <label for="description">Intensidad horaria tutoria virtual</label>
            <input type="text" name="ihourt" v-model="newDescription" class="form-control" disabled>
            <div class="invalid-feedback">Please fill out this field</div>
          </div>
          <div class="col-md-6">
            <label for="subject">Intensidad horaria acompañamiento</label>
            <input type="text" name="subject" class="form-control" v-model="newSubject" disabled>
            <div class="invalid-feedback">Please fill out this field</div>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-md-6">
            <label for="subject">Intensidad horaria trabajo autónomo</label>
            <input type="text" name="subject" class="form-control" v-model="newSubject" disabled>
            <div class="invalid-feedback">Please fill out this field</div>
          </div>
          <div class="col">
            <label for>Metodología</label>
            <input
              type="text"
              name="subject"
              class="form-control"
              v-model="newSubject"
              placeholder="Virtual"
              disabled
            >
          </div>
        </div>
        <div class="form-group mx-auto">
          <div align="center">
            <strong>Bienvenida</strong>
          </div>
          <textarea
            name="welcome"
            class="form-control"
            v-model="newFromW"
            placeholder="Es un texto redactado de manera cordial, cálida, precisa y breve cumpliendo como objetivo dar la bienvenida al curso e invitar al estudiante a su recorrido y cumplimiento de los objetivos propuestos."
            disabled
          ></textarea>
          <div class="invalid-feedback">Please fill out this field</div>
        </div>
        <div class="form-group mx-auto">
          <div align="center">
            <strong>Intencion educativa</strong>
          </div>
          <textarea
            name="intentioned"
            class="form-control"
            v-model="newFromW"
            placeholder="Se refiere al espacio en el cual se da a conocer el proposito y objetivos del curso; debe ser escrita mediante un texto corto."
            disabled
          ></textarea>
          <div class="invalid-feedback">Please fill out this field</div>
        </div>
        <div class="form-group mx-auto">
          <div align="center">
            <strong>Competencias</strong>
          </div>
          <textarea
            name="competences"
            class="form-control"
            v-model="newfg"
            placeholder="Competencias conceptuales, procedimentales y actitudinales."
            disabled
          ></textarea>
          <div class="invalid-feedback">Please fill out this field</div>
        </div>
        <div class="form-group mx-auto">
          <div align="center">
            <strong>Mapa tematico</strong>
          </div>
          <textarea
            name="map"
            class="form-control"
            v-model="newFr"
            placeholder="Consiste en una representacion grafica, clara, precisa y sintetica de los temas que componen el modulo de aprendizaje."
            disabled
          ></textarea>
          <div class="invalid-feedback">Please fill out this field</div>
        </div>
        <div class="form-group mx-auto">
          <div align="center">
            <strong>Unidades</strong>
          </div>
          <div class="form-group row">
            <div class="col">
              <a href="/unit">
                Unidad 1
                <br>Nombre de la unidad
              </a>
            </div>
            <div class="col">
              <a href="/unit">
                Unidad 2
                <br>Nombre de la unidad
              </a>
            </div>
            <div class="col">
              <a href="/unit">
                Unidad 3
                <br>Nombre de la unidad
              </a>
            </div>
          </div>
        </div>

        <div class="form-group mx-auto">
          <div align="center">
            <strong>Metodologia general del curso</strong>
          </div>
          <textarea
            name="metodology"
            class="form-control"
            v-model="newFro"
            placeholder="Debe contener la descripcion de la metodologia, las estrategias de aprendizaje, herramientas de interaccion y explicacion de acceso a los mismos y las reglas de convivencia virtual del curso."
            disabled
          ></textarea>
          <div class="invalid-feedback">Please fill out this field</div>
        </div>
        <!--<div class="form-group mx-auto">
          <div align="center">
            <strong>Objetos de Aprendizaje</strong>
          </div>
          <textarea
            name="objects"
            class="form-control"
            v-model="newFrom"
            placeholder="Contenido tematico por unidad."
            disabled
          ></textarea>
          <div class="invalid-feedback">Please fill out this field</div>
        </div>-->
        <div class="modal-footer">
          <a href="/payments" class="btn btn-primary float-right">Comprar</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.ec-stars-wrapper {
  /* Espacio entre los inline-block (los hijos, los `a`) 
	   http://ksesocss.blogspot.com/2012/03/display-inline-block-y-sus-empeno-en.html */
  font-size: 0;
  /* Podríamos quitarlo, 
		pero de esta manera (siempre que no le demos padding), 
		sólo aplicará la regla .ec-stars-wrapper:hover a cuando
		también se esté haciendo hover a alguna estrella */
  display: inline-block;
}
.ec-stars-wrapper a {
  text-decoration: none;
  display: inline-block;
  /* Volver a dar tamaño al texto */
  font-size: 32px;
  font-size: 2rem;

  color: #888;
}

.ec-stars-wrapper:hover a {
  color: rgb(255, 214, 32);
}
/*
 * El selector de hijo, es necesario para aumentar la especifidad
 */
.ec-stars-wrapper > a:hover ~ a {
  color: #888;
}
table,
th,
td {
  border-collapse: collapse;
}
th,
td {
  padding: 20px;
}
</style>

