<template>
    <div class="back">
        <div class="row">
            <div class="col-md-11 mx-auto">
                <div class="card text-center">
                    <h3 class="card-header fondo">Seguimientos</h3>

                    <div class="card-body">
                        <table class="table table-responsive-xl table-hover table-striped center">
                            <thead>
                                <tr>
                                    <th>Acción</th>
                                    <th>Estudiante</th>
                                    <th>Recomendación</th>
                                    <th>Fecha</th>
                                </tr>
                            </thead>
                            <tbody v-for="(data,t) in data" :key="t">
                                <tr>
                                    <td>{{ data.action}}</td>
                                    <td>{{ data.student}}</td>
                                    <td>{{ data.recomendation}}</td>
                                    <td>{{ data.date}}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="modal-footer">
                            <input type="submit" class="btn btn-warning" value="Guardar" />
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
                data:[{
                    id: 1,
                    action:"Reprovación de materia matematicas",
                    student: "Alfredo",
                    recomendation: "Mejora del aprendiz en materia De matematicas",
                    date: "01/03/2021"
                }]
            }
        }
    }
</script>