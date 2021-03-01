<template>
    <div class="back">
        <div class="row">
            <div class="col-md-11 mx-auto">
                <div class="card text-center">
                    <h3 class="card-header fondo">Historial</h3>

                    <div class="card-body">
                        <table class="table table-responsive-xl table-hover table-striped center">
                            <thead>
                                <tr>
                                    <th>Acción</th>
                                    <th>Fecha</th>
                                </tr>
                            </thead>
                            <tbody v-for="(data,t) in data" :key="t">
                                <tr>
                                    <td>{{ data.action}}</td>
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
                    action:"Eliminación de evento",
                    date: "01/03/2021"
                }]
            }
        }
    }
</script>
