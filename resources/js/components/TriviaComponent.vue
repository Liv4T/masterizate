<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col">
                <div class="card text-center">
                    <h3 class="card-header">Trivia</h3>
                    <div class="card-body">
                        <parallax-container
                            class="horizontal-card centered-card"
                            id="conviertete"
                        >
                            <parallax-element
                                class="background-image"
                                :parallaxStrength="10"
                            >
                                <img src="../assets/img/PORTADAweb.jpg" />
                            </parallax-element>
                            <div class="inparallax">
                                <div align="center">
                                    <h5>ahora vamos a ver que tanto sabes?</h5>
                                    <a href="/register" class="btn btn-warning"
                                        >JUGAR</a
                                    >
                                </div>
                            </div>
                        </parallax-container>
                        <b-container class="p-4 bg-light">
                            <b-row class="text-center">
                                Descarga nuestra aplicación
                                <b-col>
                                    <img
                                        thumbnail
                                        fluid
                                        src="../assets/img/googleplay.png"
                                        width="200px"
                                        alt="Image 1"
                                    />
                                </b-col>
                            </b-row>
                        </b-container>
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
.tachado {
    text-decoration: line-through;
}
.fa-chevron-right {
    display: block;
    padding-bottom: 10px;
}
.card-footer {
    background-color: red;
}
a {
    color: white;
    font-family: "Century Gothic";
}

.inparallax {
    position: absolute;
    top: 50%;
    left: 40%;
    color: white;
    font-family: "Century Gothic";
    font-weight: bold;
}
</style>
