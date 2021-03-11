<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card">
                    <div class="card-header">
                        Reportes
                    </div>
                    <div class="card-body">
                        <div id="accordion">
                            <div class="card">
                                <div class="card-header" id="headingOne">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne">
                                            Docentes
                                        </button>
                                    </h5>
                                </div>

                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                                    data-parent="#accordion">
                                    <div class="card-body">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Reporte de Notas</th>
                                                    <th>Reporte de Planeación</th>
                                                    <th>Reporte de Exámenes</th>
                                                    <th>Reporte de Recuperación</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th><button class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Notas</button></th>
                                                    <th><button class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Planeación</button></th>
                                                    <th><button class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Exámenes</button></th>
                                                    <th><button class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Recuperación</button></th>
                                                    <th>
                                                        <button class="btn btn-info btn-xs">Show</button>
                                                        <button class="btn btn-success btn-xs">Edit</button>
                                                        <button class="btn btn-danger btn-xs">Delete</button>
                                                    </th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingTwo">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link collapsed" data-toggle="collapse"
                                            data-target="#collapseTwo" aria-expanded="false"
                                            aria-controls="collapseTwo">
                                            Cursos
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                                    data-parent="#accordion">
                                    <div class="card-body">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Reporte de Notas</th>
                                                    <th>Reporte de Planeación</th>
                                                    <th>Reporte de Exámenes</th>
                                                    <th>Reporte de Recuperación</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th><button class="btn btn-primary">Notas</button></th>
                                                    <th><button class="btn btn-primary">Planeación</button></th>
                                                    <th><button class="btn btn-primary">Exámenes</button></th>
                                                    <th><button class="btn btn-primary">Recuperación</button></th>
                                                    <th>
                                                        <button class="btn btn-info btn-xs">Show</button>
                                                        <button class="btn btn-success btn-xs">Edit</button>
                                                        <button class="btn btn-danger btn-xs">Delete</button>
                                                    </th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingThree">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link collapsed" data-toggle="collapse"
                                            data-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">
                                            Materias
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                                    data-parent="#accordion">
                                    <div class="card-body">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Reporte de Notas</th>
                                                    <th>Reporte de Planeación</th>
                                                    <th>Reporte de Exámenes</th>
                                                    <th>Reporte de Recuperación</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th><button class="btn btn-primary">Notas</button></th>
                                                    <th><button class="btn btn-primary">Planeación</button></th>
                                                    <th><button class="btn btn-primary">Exámenes</button></th>
                                                    <th><button class="btn btn-primary">Recuperación</button></th>
                                                    <th>
                                                        <button class="btn btn-info btn-xs">Show</button>
                                                        <button class="btn btn-success btn-xs">Edit</button>
                                                        <button class="btn btn-danger btn-xs">Delete</button>
                                                    </th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingThree">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link collapsed" data-toggle="collapse"
                                            data-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">
                                            Estudiantes
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                                    data-parent="#accordion">
                                    <div class="card-body">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Reporte de Notas</th>
                                                    <th>Reporte de Planeación</th>
                                                    <th>Reporte de Exámenes</th>
                                                    <th>Reporte de Recuperación</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th><button class="btn btn-primary">Notas</button></th>
                                                    <th><button class="btn btn-primary">Planeación</button></th>
                                                    <th><button class="btn btn-primary">Exámenes</button></th>
                                                    <th><button class="btn btn-primary">Recuperación</button></th>
                                                    <th>
                                                        <button class="btn btn-info btn-xs">Show</button>
                                                        <button class="btn btn-success btn-xs">Edit</button>
                                                        <button class="btn btn-danger btn-xs">Delete</button>
                                                    </th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <modal-school-component></modal-school-component>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
    }

</script>
