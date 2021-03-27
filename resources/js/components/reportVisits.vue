<template>
    <div class="back">
        <div class="row justify-content-center">
            <div id="crud" class="col-sm-10">
                <div class="card text-center">
                    <h3 class="card-header fondo">Reporte de Psicología</h3>
                    <div class="card-body">
                    <table>
                        <tr>
                            <th>Salón</th>
                            <th>Motivo</th>
                            <th>Persona Involucrada</th>
                            <th>Persona que reporta</th>
                            <th>Grado</th>
                            <th>Descripción</th>
                        </tr>
                        <tr v-for="(report,t) in reports" :key="t">
                            <td>{{ report.classroom }}</td>
                            <td>{{ report.reason }}</td>
                            <td>{{ report.person_inv }}</td>
                            <td>{{ report.person_report }}</td>
                            <td>{{ report.grade }}</td>
                            <td>{{ report.description }}</td>
                        </tr>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["id_student"],
    data(){
        return{
            reports: [],
        };
    },
    mounted() {
        var url="/getReportStudent/" + this.id_student;
        axios.get(url).then((response) => {
            this.reports = response.data;
        });
    },
}
</script>