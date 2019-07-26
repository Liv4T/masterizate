<template>
  <div class="background1">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card text-center">
            <h3 class="card-header">Cursos</h3>
            <div class="card-body">
              <table align="center" class="different">
                <tr>
                  <td>
                    <label for>
                      Nombre del curso
                      <br>Descripción
                    </label>
                  </td>
                  <td>
                    <h6>Precio</h6>
                  </td>
                </tr>
              </table>
              <div class="modal-footer">
                <a href="/" class="btn btn-primary float-right">+</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center">
            <h3 class="card-header">Resumen</h3>
            <div class="card-body">
              <table align="center" class="different">
                <tr>
                  <td>
                    <label for>Subtotal</label>
                    <br>
                    <a href="#">Codigo Promocional</a>
                  </td>
                  <td class="dif">$subtotal</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>$total</td>
                </tr>
              </table>
              <div class="modal-footer">
                <a href="/" class="btn btn-success float-right">Completar pago</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br>
      <div class="form-group">
        <div class="card">
          <h3 class="card-header text-center">Método de Pago</h3>
          <div class="card-body">
            <table with="100%" class="different">
              <tbody>
                <tr>
                  <th class="dif">
                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input
                        class="custom-control-input"
                        type="checkbox"
                        id="gridCheck1"
                        v-model="newRegional"
                      >
                      <label class="custom-control-label" for="gridCheck1">Tarjeta de credito</label>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th class="dif">
                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input
                        class="custom-control-input"
                        type="checkbox"
                        id="gridCheck2"
                        v-model="newRegional"
                      >
                      <label class="custom-control-label" for="gridCheck2">Tarjeta de debito</label>
                    </div>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
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
table.different,
th.dif,
td.dif {
  border-collapse: collapse;
  border-bottom: 1px solid #ddd;
  width: -webkit-fill-available;
  padding: 20px;
}
</style>

