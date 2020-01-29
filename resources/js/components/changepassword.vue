<template>
    <div class="row justify-content-center">
        <div class="col-sm-10">
            <div class="card text-center">
                <h3 class="card-header">Cambiar contraseña</h3>
                <div class="card-body">
                    <div class="form-group row justify-content-center">
                        <div class="col-md-6">
                            <label for="name">Nombre de Usuario</label>
                            <input
                                type="text"
                                name="user_name"
                                class="form-control"
                                maxlength="20"
                                v-model="newUserName"
                                required
                            />
                            <div class=" invalid-feedback ">
                                Please fill out this field, the user name may
                                not be greater than 20 characters.
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col">
                            <label for="name">Contraseña</label>
                            <input
                                type="password"
                                id="password1"
                                class="form-control"
                                v-model="newPassword"
                                required
                            />
                        </div>
                        <div class="col">
                            <label for="name">Confirmar contraseña</label>
                            <input
                                type="password"
                                id="password2"
                                class="form-control"
                                required
                            />
                            <p class="alertaPass" id="validate-status"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
$(document).ready(function() {
    $("#password2").keyup(validate);
});

function validate() {
    var password1 = $("#password1").val();
    var password2 = $("#password2").val();

    if (password1 == password2) {
        $("#validate-status").text("");
    } else {
        $("#validate-status").text("La contraseña no coincide");
    }
}

export default {
    data: function() {
        return {};
    },

    methods: {}
};
</script>
<style>
.alertaPass {
    color: red;
}
</style>
