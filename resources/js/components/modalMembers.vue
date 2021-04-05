<template>
    <div class="modal fade bd-example-modal-lg" id="memberModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{chat}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <ul v-for="(member, key) in members" :key="key" class="list-group">
                        <li class="list-group-item"><strong>{{member.name}}</strong></li>
                        <li class="list-group-item"><strong>{{member.rol}}</strong></li>
                    </ul>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['chat','members'],
    data(){
        return{
        
        }
    },
}
</script>