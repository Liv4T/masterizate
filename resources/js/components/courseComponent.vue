<template>
    <div>
        <head>
            <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.8.2/css/solid.css"
                integrity="sha384-ioUrHig76ITq4aEJ67dHzTvqjsAP/7IzgwE7lgJcg2r7BRNGYSK0LwSmROzYtgzs"
                crossorigin="anonymous"
            />
            <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.8.2/css/brands.css"
                integrity="sha384-i2PyM6FMpVnxjRPi0KW/xIS7hkeSznkllv+Hx/MtYDaHA5VcF0yL3KVlvzp8bWjQ"
                crossorigin="anonymous"
            />
            <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.8.2/css/fontawesome.css"
                integrity="sha384-sri+NftO+0hcisDKgr287Y/1LVnInHJ1l+XC7+FOabmTTIK0HnE2ID+xxvJ21c5J"
                crossorigin="anonymous"
            />
        </head>
        <div class="back">
            <div class="row">
                <div class="col-md-11 mx-auto">
                    <div class="custom-card text-center">
                        <h3 class="card-header">Curso Especializado</h3>
                        <form class="needs-validation" novalidate>
                            <form-wizard title subtitle>
                                <tab-content>
                                    <div class="card-body">
                                        <div class="form-group row">
                                            <div class="col">
                                                <label for>Categorias</label>
                                                <select2
                                                    :options="categories"
                                                    v-model="Category"
                                                    @input="getSubcategories"
                                                    required
                                                ></select2>
                                            </div>
                                            <div class="col">
                                                <label for>Subcategorias</label>
                                                <select2
                                                    :options="subcategories"
                                                    v-model="
                                                        newId_subcategories
                                                    "
                                                    required
                                                ></select2>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col">
                                                <label for="name"
                                                    >Nombre del curso</label
                                                >
                                                <input
                                                    type="text"
                                                    name="name"
                                                    class="form-control"
                                                    v-model="newName"
                                                    required
                                                />
                                                <div class="invalid-feedback">
                                                    Please fill out this field
                                                </div>
                                            </div>
                                            <div class="col">
                                                <label for="subject"
                                                    >Intensidad horaria
                                                    acompañamiento
                                                    dirigido</label
                                                >
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    class="form-control"
                                                    v-model="newIntensityAC"
                                                    required
                                                />
                                                <div class="invalid-feedback">
                                                    Please fill out this field
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-md-6">
                                                <label for="subject"
                                                    >Intensidad horaria trabajo
                                                    autónomo</label
                                                >
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    class="form-control"
                                                    v-model="newIntensityTA"
                                                    required
                                                />
                                                <div class="invalid-feedback">
                                                    Please fill out this field
                                                </div>
                                            </div>
                                            <div class="col">
                                                <label for>Metodología</label>
                                                <select2
                                                    :options="myOptions"
                                                    v-model="metodology"
                                                    required
                                                ></select2>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-md-6">
                                                <label for="subject"
                                                    >Precio del curso</label
                                                >
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    class="form-control"
                                                    v-model="newPrice"
                                                    required
                                                />
                                                <div class="invalid-feedback">
                                                    Please fill out this field
                                                </div>
                                            </div>
                                            <!--div class="col">
                      <label for>Cantidad de estudiantes</label>
                      <select2 :options="myOptions" v-model="metodology" required></select2>
                    </div-->
                                        </div>
                                        <div class="form-group mx-auto">
                                            <div align="center">
                                                <strong>Bienvenida</strong>
                                                <a
                                                    tabindex="0"
                                                    class="badge badge-info"
                                                    role="button"
                                                    data-toggle="popover"
                                                    data-trigger="focus"
                                                    title="Bienvenida"
                                                    data-content="Es un texto redactado de manera cordial, cálida, precisa y breve cumpliendo como objetivo dar la bienvenida al curso e invitar al estudiante a su recorrido y cumplimiento de los objetivos propuestos. Parte importante del mismo es hacer explícita la disposición del tutor en colaborar, apoyar y acompañar el proceso educativo."
                                                >
                                                    <i
                                                        class="fas fa-question"
                                                    ></i>
                                                </a>
                                            </div>
                                            <textarea
                                                name="welcome"
                                                class="form-control"
                                                v-model="newWelcome"
                                                required
                                            ></textarea>
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="form-group mx-auto">
                                            <div align="center">
                                                <strong
                                                    >Presentación del
                                                    tutor</strong
                                                >
                                                <a
                                                    tabindex="0"
                                                    class="badge badge-info"
                                                    role="button"
                                                    data-toggle="popover"
                                                    data-trigger="focus"
                                                    title="Presentación del tutor"
                                                    data-content="Se refiere al espacio en el cual se da a conocer los aspectos generales del autor/tutor del curso, trayectoria, experiencia y aspectos relevantes que generen credibilidad y calidad."
                                                >
                                                    <i
                                                        class="fas fa-question"
                                                    ></i>
                                                </a>
                                            </div>
                                            <textarea
                                                name="intentioned"
                                                class="form-control"
                                                v-model="newPresentation"
                                                required
                                            ></textarea>
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="form-group mx-auto">
                                            <div align="center">
                                                <strong
                                                    >Intencion educativa</strong
                                                >
                                                <a
                                                    tabindex="0"
                                                    class="badge badge-info"
                                                    role="button"
                                                    data-toggle="popover"
                                                    data-trigger="focus"
                                                    title="Intencion educativa"
                                                    data-content="Se refiere al espacio en el cual se da a conocer el propósito y objetivos del curso; debe ser escrita mediante un texto corto. La intención educativa describe el plan de formación que ha sido proyectado por el tutor y qué se alcanza satisfactoriamente cuando se haya cumplido en su totalidad, así como su aplicación tanto a la vida profesional como personal."
                                                >
                                                    <i
                                                        class="fas fa-question"
                                                    ></i>
                                                </a>
                                            </div>
                                            <textarea
                                                name="intentioned"
                                                class="form-control"
                                                v-model="newIntention"
                                                required
                                            ></textarea>
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="form-group mx-auto">
                                            <div align="center">
                                                <strong>Competencias</strong>
                                                <a
                                                    tabindex="0"
                                                    class="badge badge-info"
                                                    role="button"
                                                    data-toggle="popover"
                                                    data-trigger="focus"
                                                    title="Competencias"
                                                    data-content="Competencias conceptuales, procedimentales y actitudinales. Redacción: Verbo + Objeto + Condición. Ejemplo: Crear + producciones electrónicas de radio, cine y televisión + para el público en general y específico."
                                                >
                                                    <i
                                                        class="fas fa-question"
                                                    ></i>
                                                </a>
                                            </div>
                                            <textarea
                                                name="competences"
                                                class="form-control"
                                                v-model="newCompetences"
                                                required
                                            ></textarea>
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="form-group mx-auto">
                                            <div align="center">
                                                <strong>Logros</strong>
                                                <a
                                                    tabindex="0"
                                                    class="badge badge-info"
                                                    role="button"
                                                    data-toggle="popover"
                                                    data-trigger="focus"
                                                    title="Logros"
                                                    data-content="Los logros se conciben como las metas a alcanzar al culminar el curso, por ello deben ser  “logrables” y “enseñables-alcanzables”.Redacción: Sujeto (la persona a la que se va a evaluar) + Verbo + Complemento. Ejemplo: El estudiante + clasifica + los números.Redactar el  logro o logros para cada competencia enunciada."
                                                >
                                                    <i
                                                        class="fas fa-question"
                                                    ></i>
                                                </a>
                                            </div>
                                            <textarea
                                                name="achievement"
                                                class="form-control"
                                                v-model="newAchievement"
                                                required
                                            ></textarea>
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="form-group mx-auto">
                                            <div align="center">
                                                <strong
                                                    >Indicadores de
                                                    Logro</strong
                                                >
                                                <a
                                                    tabindex="0"
                                                    class="badge badge-info"
                                                    role="button"
                                                    data-toggle="popover"
                                                    data-trigger="focus"
                                                    title="Indicadores de Logro"
                                                    data-content="Los indicadores deben ser medibles y observables a través de los desempeños y correspondientes con la formulación de cada logro.Redacción: Sujeto + Verbo expresivo + Complemento del verbo expresivo + Verbo pedagógico + Complemento del verbo pedagógico + Contexto de la tarea + Criterio de valoración de la acción.Ejemplo: El estudiante  + elabora + en forma clara y resumida + en un esquema + los hechos que llevaron a la concepción de las expresiones algebraicas + ordenándolos + cronológicamente.Redactar el indicador o indicadores para cada logro enunciado."
                                                >
                                                    <i
                                                        class="fas fa-question"
                                                    ></i>
                                                </a>
                                            </div>
                                            <textarea
                                                name="gold"
                                                class="form-control"
                                                v-model="newIndicatorA"
                                                required
                                            ></textarea>
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="form-group mx-auto">
                                            <div align="center">
                                                <strong>Mapa tematico</strong>
                                                <a
                                                    tabindex="0"
                                                    class="badge badge-info"
                                                    role="button"
                                                    data-toggle="popover"
                                                    data-trigger="focus"
                                                    title="Mapa tematico"
                                                    data-content="Consiste en una representacion grafica, clara, precisa y sintetica de los temas que componen el modulo de aprendizaje."
                                                >
                                                    <i
                                                        class="fas fa-question"
                                                    ></i>
                                                </a>
                                            </div>
                                            <input
                                                type="file"
                                                name="picture2"
                                                class="form-control"
                                                accept="image/*"
                                                required
                                            />
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="form-group mx-auto">
                                            <div align="center">
                                                <strong
                                                    >Metodologia general del
                                                    curso</strong
                                                >
                                                <a
                                                    tabindex="0"
                                                    class="badge badge-info"
                                                    role="button"
                                                    data-toggle="popover"
                                                    data-trigger="focus"
                                                    title="Metodologia general del curso"
                                                    data-content="Debe contener la descripcion de la metodologia, las estrategias de aprendizaje, herramientas de interaccion y explicacion de acceso a los mismos y las reglas de convivencia virtual del curso."
                                                >
                                                    <i
                                                        class="fas fa-question"
                                                    ></i>
                                                </a>
                                            </div>
                                            <textarea
                                                name="metodology"
                                                class="form-control"
                                                v-model="newMethodologyG"
                                                required
                                            ></textarea>
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="form-group mx-auto">
                                            <div align="center">
                                                <strong
                                                    >Video de presentación del
                                                    curso</strong
                                                >
                                                <a
                                                    tabindex="0"
                                                    class="badge badge-info"
                                                    role="button"
                                                    data-toggle="popover"
                                                    data-trigger="focus"
                                                    title="Video Presentación"
                                                    data-content="Video en el cual se da a conocer los aspectos generales del curso"
                                                >
                                                    <i
                                                        class="fas fa-question"
                                                    ></i>
                                                </a>
                                            </div>
                                            <div v-if="!image">
                                                <input
                                                    type="file"
                                                    name="videoCurso"
                                                    class="form-control"
                                                    @change="onFileChange"
                                                />
                                            </div>

                                            <div v-else>
                                                <video controls>
                                                    <source
                                                        :src="image"
                                                        type="video/mp4"
                                                    />
                                                </video>
                                            </div>

                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="form-group mx-auto">
                                            <div align="center">
                                                <strong
                                                    >Descripción de las guías de
                                                    actividades</strong
                                                >
                                                <a
                                                    tabindex="0"
                                                    class="badge badge-info"
                                                    role="button"
                                                    data-toggle="popover"
                                                    data-trigger="focus"
                                                    title="Descripción de las guías de actividades"
                                                    data-content="Descripción general de las actividades que se van a desarrollar en las unidades"
                                                >
                                                    <i
                                                        class="fas fa-question"
                                                    ></i>
                                                </a>
                                            </div>
                                            <textarea
                                                name="objects"
                                                class="form-control"
                                                v-model="newDescription"
                                                required
                                            ></textarea>
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="form-group mx-auto">
                                            <div align="center">
                                                <strong
                                                    >Descripción de los objetos
                                                    de evaluativos</strong
                                                >
                                                <a
                                                    tabindex="0"
                                                    class="badge badge-info"
                                                    role="button"
                                                    data-toggle="popover"
                                                    data-trigger="focus"
                                                    title="Descripción de los objetos de evaluativos"
                                                    data-content="Descripción general de los objetos evaluativos en las actividades planteadas (vClass, Foro, Screen Casts, Webinars) que se van a desarrollar en las unidades"
                                                >
                                                    <i
                                                        class="fas fa-question"
                                                    ></i>
                                                </a>
                                            </div>
                                            <textarea
                                                name="objects"
                                                class="form-control"
                                                v-model="newDescriptionO"
                                                required
                                            ></textarea>
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                    </div>
                                </tab-content>
                                <tab-content title="Unidad 1">
                                    <div class="form-group mx-auto col-md-6">
                                        <strong>Nombre de la unidad (1)</strong>
                                        <input
                                            type="text"
                                            name="name"
                                            class="form-control"
                                            v-model="unit.newName1"
                                            required
                                        />
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <div align="center">
                                            <strong
                                                >Presentación de la
                                                unidad</strong
                                            >
                                            <a
                                                tabindex="0"
                                                class="badge badge-info"
                                                role="button"
                                                data-toggle="popover"
                                                data-trigger="focus"
                                                title="Presentación de la unidad"
                                                data-content="Se refiere al espacio en el cual se da a conocer el propósito de la unidad; debe ser escrita mediante un texto corto. La intención educativa describe el plan de formación que ha sido proyectado por el tutor y qué se alcanza satisfactoriamente cuando se haya cumplido en su totalidad, así como su aplicación tanto a la vida profesional como personal."
                                            >
                                                <i class="fas fa-question"></i>
                                            </a>
                                        </div>
                                        <textarea
                                            name="welcome"
                                            class="form-control"
                                            v-model="unit.newPresentationU1"
                                            required
                                        ></textarea>
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <div align="center">
                                            <strong
                                                >Conocimientos, habilidades y
                                                requisitos para el desarrollo de
                                                la unidad</strong
                                            >
                                            <a
                                                tabindex="0"
                                                class="badge badge-info"
                                                role="button"
                                                data-toggle="popover"
                                                data-trigger="focus"
                                                title="Conocimientos, habilidades y requisitos"
                                                data-content="Se presentan los conocimientos previos al aprendizaje que corresponden al desarrollo de la unidad"
                                            >
                                                <i class="fas fa-question"></i>
                                            </a>
                                        </div>
                                        <textarea
                                            name="welcome"
                                            class="form-control"
                                            v-model="unit.newHability1"
                                            required
                                        ></textarea>
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div align="center">
                                        <strong
                                            >Competencias (Especificas y
                                            transversales)</strong
                                        >
                                    </div>
                                    <div class="form-group row">
                                        <div class="col">
                                            <label for="name"
                                                >Competencias Especificas</label
                                            >
                                            <input
                                                type="text"
                                                name="name"
                                                class="form-control"
                                                placeholder="CE 1."
                                                v-model="
                                                    unit.newCompetences1_E1
                                                "
                                                required
                                            />
                                            <input
                                                type="text"
                                                name="name"
                                                class="form-control"
                                                placeholder="CE 2."
                                                v-model="
                                                    unit.newCompetences1_E2
                                                "
                                                required
                                            />
                                            <input
                                                type="text"
                                                name="name"
                                                class="form-control"
                                                placeholder="CE 3."
                                                v-model="
                                                    unit.newCompetences1_E3
                                                "
                                                required
                                            />
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="col">
                                            <label for="name"
                                                >Competencias
                                                transversales</label
                                            >
                                            <input
                                                type="text"
                                                name="name"
                                                class="form-control"
                                                placeholder="CT 1."
                                                v-model="
                                                    unit.newCompetences1_T1
                                                "
                                                required
                                            />
                                            <input
                                                type="text"
                                                name="name"
                                                class="form-control"
                                                placeholder="CT 2."
                                                v-model="
                                                    unit.newCompetences1_T2
                                                "
                                                required
                                            />
                                            <input
                                                type="text"
                                                name="name"
                                                class="form-control"
                                                placeholder="CT 3."
                                                v-model="
                                                    unit.newCompetences1_T3
                                                "
                                                required
                                            />
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                    </div>
                                    <div align="center">
                                        <strong
                                            >Resultados de Aprendizaje /
                                            Criterio de evaluación</strong
                                        >
                                    </div>
                                    <div class="form-group mx-auto">
                                        <table style="width:100%">
                                            <tr>
                                                <th rowspan="3">
                                                    <textarea
                                                        name="welcome"
                                                        class="form-control"
                                                        placeholder="RA 1."
                                                        v-model="
                                                            unit.newResult1_1
                                                        "
                                                        required
                                                    ></textarea>
                                                </th>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 1."
                                                        v-model="
                                                            unit.newCompe1_R11
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 2."
                                                        v-model="
                                                            unit.newCompe1_R12
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 3."
                                                        v-model="
                                                            unit.newCompe1_R13
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                        </table>

                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <table style="width:100%">
                                            <tr>
                                                <th rowspan="3">
                                                    <textarea
                                                        name="welcome"
                                                        class="form-control"
                                                        placeholder="RA 2."
                                                        v-model="
                                                            unit.newResult1_2
                                                        "
                                                        required
                                                    ></textarea>
                                                </th>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 1."
                                                        v-model="
                                                            unit.newCompe1_R21
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 2."
                                                        v-model="
                                                            unit.newCompe1_R22
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 3."
                                                        v-model="
                                                            unit.newCompe1_R23
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                        </table>

                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <table style="width:100%">
                                            <tr>
                                                <th rowspan="3">
                                                    <textarea
                                                        name="welcome"
                                                        class="form-control"
                                                        placeholder="RA 3."
                                                        v-model="
                                                            unit.newResult1_3
                                                        "
                                                        required
                                                    ></textarea>
                                                </th>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 1."
                                                        v-model="
                                                            unit.newCompe1_R31
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 2."
                                                        v-model="
                                                            unit.newCompe1_R32
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 3."
                                                        v-model="
                                                            unit.newCompe1_R33
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                        </table>

                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <table style="width:100%">
                                            <tr>
                                                <th rowspan="3">
                                                    <textarea
                                                        name="welcome"
                                                        class="form-control"
                                                        placeholder="RA 4."
                                                        v-model="
                                                            unit.newResult1_4
                                                        "
                                                        required
                                                    ></textarea>
                                                </th>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 1."
                                                        v-model="
                                                            unit.newCompe1_R41
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 2."
                                                        v-model="
                                                            unit.newCompe1_R42
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 3."
                                                        v-model="
                                                            unit.newCompe1_R43
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                        </table>

                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <div align="center">
                                            <strong
                                                >Aprenda preguntandose
                                                preguntas</strong
                                            >
                                            <a
                                                tabindex="0"
                                                class="badge badge-info"
                                                role="button"
                                                data-toggle="popover"
                                                data-trigger="focus"
                                                title="Aprenda preguntandose preguntas"
                                                data-content="En este espacio se hace una invitacion al estudiante para que este realice preguntas que el desearia que resolviera con el tema o programa a cursar."
                                            >
                                                <i class="fas fa-question"></i>
                                            </a>
                                        </div>
                                        <textarea
                                            name="welcome"
                                            class="form-control"
                                            v-model="unit.newQuestion1"
                                            required
                                        ></textarea>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <div align="center">
                                            <strong>Aprenda alistándose</strong>
                                            <a
                                                tabindex="0"
                                                class="badge badge-info"
                                                role="button"
                                                data-toggle="popover"
                                                data-trigger="focus"
                                                title="Aprenda alistándose"
                                                data-content="Redacte un problema, caso, entre otros que le sirvan al estudiante como reflexion y diagnostico de sus competencias actuales y le motivaran en su proceso de formacion."
                                            >
                                                <i class="fas fa-question"></i>
                                            </a>
                                        </div>
                                        <textarea
                                            name="intentioned"
                                            class="form-control"
                                            v-model="unit.newReady1"
                                            required
                                        ></textarea>
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div align="center">
                                        <strong>Aprenda de las fuentes</strong>
                                    </div>
                                    <div
                                        class="form-group row mx-auto"
                                        v-for="(input, t) in inputs"
                                        :key="t"
                                    >
                                        <div class="col-md-6">
                                            <label for="name">Tema</label>
                                            <span>
                                                <a
                                                    href="#"
                                                    class="badge badge-danger"
                                                    @click.prevent="remove(t)"
                                                    v-show="
                                                        t ||
                                                            (!t &&
                                                                inputs.length >
                                                                    1)
                                                    "
                                                    >-</a
                                                >
                                                <a
                                                    href="#"
                                                    class="badge badge-primary"
                                                    @click.prevent="add(t)"
                                                    v-show="
                                                        t == inputs.length - 1
                                                    "
                                                    >+</a
                                                >
                                            </span>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="objetive1"
                                                    class="form-control"
                                                    v-model="input.name"
                                                    placeholder="Nombre del Tema"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="name">Contenido</label>
                                            <textarea
                                                name="competences"
                                                class="form-control"
                                                v-model="input.contenido"
                                                placeholder="Es la explicacion o sintesis de la tematica a abordar en la unidad de estudio."
                                                required
                                            ></textarea>
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="form-group row"
                                        v-for="(input1, d) in inputs1"
                                        :key="d"
                                    >
                                        <div class="col-md-6">
                                            <label for="name"
                                                >Master class (MC)</label
                                            >
                                            <span>
                                                <a
                                                    href="#"
                                                    class="badge badge-danger"
                                                    @click.prevent="remove1(d)"
                                                    v-show="
                                                        d ||
                                                            (!d &&
                                                                inputs1.length >
                                                                    1)
                                                    "
                                                    >-</a
                                                >
                                                <a
                                                    href="#"
                                                    class="badge badge-primary"
                                                    @click.prevent="add1(d)"
                                                    v-show="
                                                        d == inputs1.length - 1
                                                    "
                                                    >+</a
                                                >
                                            </span>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="objetive"
                                                    class="form-control"
                                                    v-model="input1.name"
                                                    placeholder="Nombre de la clase"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="name">Video MC</label>
                                            <input
                                                type="file"
                                                name="picture"
                                                class="form-control"
                                                accept="image/*"
                                                v-bind="input1.video"
                                                required
                                            />
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row mx-auto">
                                        <div class="col-md-6">
                                            <label for="name"
                                                >Video de apoyo</label
                                            >
                                            <input
                                                type="text"
                                                name="objetive1"
                                                class="form-control"
                                                v-model="unit.newNameV1"
                                                placeholder="Nombre del Video"
                                                required
                                            />
                                            <input
                                                type="file"
                                                name="picture2"
                                                class="form-control"
                                                accept="image/*"
                                                required
                                            />
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="col">
                                            <label for="name"
                                                >Bibliografia
                                                complementaria</label
                                            >
                                            <textarea
                                                name="competences"
                                                class="form-control"
                                                v-model="unit.newBibliography1"
                                                placeholder="Competencias conceptuales, procedimentales y actitudinales"
                                                required
                                            ></textarea>
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <div align="center">
                                            <strong>Aprenda haciendo</strong>
                                            <a
                                                tabindex="0"
                                                class="badge badge-info"
                                                role="button"
                                                data-toggle="popover"
                                                data-trigger="focus"
                                                title="Aprenda haciendo"
                                                data-content="Aquí se mencionan las actividades de la unidad. NOTA: Es imprescindible en los cursos Especializados, que una actividad de cualquiera de las tres (3) unidades del curso, sea un Ensayo, que esté relacionado con el espacio académico, con una extensión máxima de ocho (8) páginas que incluye la introducción, el desarrollo, las conclusiones y las fuentes bibliográficas con normas APA."
                                            >
                                                <i class="fas fa-question"></i>
                                            </a>
                                        </div>
                                        <textarea
                                            name="doing"
                                            class="form-control"
                                            v-model="unit.newDoing1"
                                            required
                                        ></textarea>
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <div align="center">
                                            <strong
                                                >Aprenda poniéndose
                                                retos</strong
                                            >
                                            <a
                                                tabindex="0"
                                                class="badge badge-info"
                                                role="button"
                                                data-toggle="popover"
                                                data-trigger="focus"
                                                title="Aprenda poniéndose retos"
                                                data-content="Colocar una situación extrema (real o ficticia) en la cual el estudiante proponga soluciones con los conocimientos, habilidades y actitudes adquiridas en el curso."
                                            >
                                                <i class="fas fa-question"></i>
                                            </a>
                                        </div>
                                        <textarea
                                            name="map"
                                            class="form-control"
                                            v-model="unit.newChallenge1"
                                            required
                                        ></textarea>
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <div align="center">
                                            <strong
                                                >Aprenda proyectándose</strong
                                            >
                                            <a
                                                tabindex="0"
                                                class="badge badge-info"
                                                role="button"
                                                data-toggle="popover"
                                                data-trigger="focus"
                                                title="Aprenda proyectándose"
                                                data-content="Redacte una situación problémica que se presenta en una entidad o comunidad relacionada con el tema tratado,  y bajo el esquema de consultor,  el estudiante deberá proponer las soluciones y mejoras a que haya lugar. "
                                            >
                                                <i class="fas fa-question"></i>
                                            </a>
                                        </div>
                                        <textarea
                                            name="metodology"
                                            class="form-control"
                                            v-model="unit.newProjecting1"
                                            required
                                        ></textarea>
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                </tab-content>
                                <tab-content title="Unidad 2">
                                    <div class="form-group mx-auto col-md-6">
                                        <strong>Nombre de la unidad (2)</strong>
                                        <input
                                            type="text"
                                            name="name"
                                            class="form-control"
                                            v-model="unit.newName2"
                                            required
                                        />
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <div align="center">
                                            <strong
                                                >Presentación de la
                                                unidad</strong
                                            >
                                            <a
                                                tabindex="0"
                                                class="badge badge-info"
                                                role="button"
                                                data-toggle="popover"
                                                data-trigger="focus"
                                                title="Presentación de la unidad"
                                                data-content=" Se refiere al espacio en el cual se da a conocer el proposito de la unidad; debe ser escrita mediante un texto corto."
                                            >
                                                <i class="fas fa-question"></i>
                                            </a>
                                        </div>
                                        <textarea
                                            name="welcome"
                                            class="form-control"
                                            v-model="unit.newPresentationU2"
                                            required
                                        ></textarea>
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <div align="center">
                                            <strong
                                                >Conocimientos, habilidades y
                                                requisitos para el desarrollo de
                                                la unidad</strong
                                            >
                                            <a
                                                tabindex="0"
                                                class="badge badge-info"
                                                role="button"
                                                data-toggle="popover"
                                                data-trigger="focus"
                                                title="Conocimientos, habilidades y requisitos"
                                                data-content="Se presentan los conocimientos previos al aprendizaje que corresponden al desarrollo de la unidad"
                                            >
                                                <i class="fas fa-question"></i>
                                            </a>
                                        </div>
                                        <textarea
                                            name="welcome"
                                            class="form-control"
                                            v-model="unit.newHability2"
                                            required
                                        ></textarea>
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div align="center">
                                        <strong
                                            >Competencias (Especificas y
                                            transversales)</strong
                                        >
                                    </div>
                                    <div class="form-group row">
                                        <div class="col">
                                            <label for="name"
                                                >Competencias Especificas</label
                                            >
                                            <input
                                                type="text"
                                                name="name"
                                                class="form-control"
                                                placeholder="CE 1."
                                                v-model="
                                                    unit.newCompetences2_E1
                                                "
                                                required
                                            />
                                            <input
                                                type="text"
                                                name="name"
                                                class="form-control"
                                                placeholder="CE 2."
                                                v-model="
                                                    unit.newCompetences2_E2
                                                "
                                                required
                                            />
                                            <input
                                                type="text"
                                                name="name"
                                                class="form-control"
                                                placeholder="CE 3."
                                                v-model="
                                                    unit.newCompetences2_E3
                                                "
                                                required
                                            />
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="col">
                                            <label for="name"
                                                >Competencias
                                                transversales</label
                                            >
                                            <input
                                                type="text"
                                                name="name"
                                                class="form-control"
                                                placeholder="CT 1."
                                                v-model="
                                                    unit.newCompetences2_T1
                                                "
                                                required
                                            />
                                            <input
                                                type="text"
                                                name="name"
                                                class="form-control"
                                                placeholder="CT 2."
                                                v-model="
                                                    unit.newCompetences2_T2
                                                "
                                                required
                                            />
                                            <input
                                                type="text"
                                                name="name"
                                                class="form-control"
                                                placeholder="CT 3."
                                                v-model="
                                                    unit.newCompetences2_T3
                                                "
                                                required
                                            />
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                    </div>
                                    <div align="center">
                                        <strong
                                            >Resultados de Aprendizaje /
                                            Criterio de evaluación</strong
                                        >
                                    </div>
                                    <div class="form-group mx-auto">
                                        <table style="width:100%">
                                            <tr>
                                                <th rowspan="3">
                                                    <textarea
                                                        name="welcome"
                                                        class="form-control"
                                                        placeholder="RA 1."
                                                        v-model="
                                                            unit.newResult2_1
                                                        "
                                                        required
                                                    ></textarea>
                                                </th>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 1."
                                                        v-model="
                                                            unit.newCompe2_R11
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 2."
                                                        v-model="
                                                            unit.newCompe2_R12
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 3."
                                                        v-model="
                                                            unit.newCompe2_R13
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                        </table>

                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <table style="width:100%">
                                            <tr>
                                                <th rowspan="3">
                                                    <textarea
                                                        name="welcome"
                                                        class="form-control"
                                                        placeholder="RA 2."
                                                        v-model="
                                                            unit.newResult2_2
                                                        "
                                                        required
                                                    ></textarea>
                                                </th>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 1."
                                                        v-model="
                                                            unit.newCompe2_R21
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 2."
                                                        v-model="
                                                            unit.newCompe2_R22
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 3."
                                                        v-model="
                                                            unit.newCompe2_R23
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                        </table>

                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <table style="width:100%">
                                            <tr>
                                                <th rowspan="3">
                                                    <textarea
                                                        name="welcome"
                                                        class="form-control"
                                                        placeholder="RA 3."
                                                        v-model="
                                                            unit.newResult2_3
                                                        "
                                                        required
                                                    ></textarea>
                                                </th>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 1."
                                                        v-model="
                                                            unit.newCompe2_R31
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 2."
                                                        v-model="
                                                            unit.newCompe2_R32
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 3."
                                                        v-model="
                                                            unit.newCompe2_R33
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                        </table>

                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <table style="width:100%">
                                            <tr>
                                                <th rowspan="3">
                                                    <textarea
                                                        name="welcome"
                                                        class="form-control"
                                                        placeholder="RA 4."
                                                        v-model="
                                                            unit.newResult2_4
                                                        "
                                                        required
                                                    ></textarea>
                                                </th>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 1."
                                                        v-model="
                                                            unit.newCompe2_R41
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 2."
                                                        v-model="
                                                            unit.newCompe2_R42
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 3."
                                                        v-model="
                                                            unit.newCompe2_R43
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                        </table>

                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <div align="center">
                                            <strong
                                                >Aprenda preguntandose
                                                preguntas</strong
                                            >
                                            <a
                                                tabindex="0"
                                                class="badge badge-info"
                                                role="button"
                                                data-toggle="popover"
                                                data-trigger="focus"
                                                title="Aprenda preguntandose preguntas"
                                                data-content="En este espacio se hace una invitacion al estudiante para que este realice preguntas que el desearia que resolviera con el tema o programa a cursar."
                                            >
                                                <i class="fas fa-question"></i>
                                            </a>
                                        </div>
                                        <textarea
                                            name="welcome"
                                            class="form-control"
                                            v-model="unit.newQuestion2"
                                            required
                                        ></textarea>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <div align="center">
                                            <strong>Aprenda alistándose</strong>
                                            <a
                                                tabindex="0"
                                                class="badge badge-info"
                                                role="button"
                                                data-toggle="popover"
                                                data-trigger="focus"
                                                title="Aprenda alistándose"
                                                data-content="Redacte un problema, caso, entre otros que le sirvan al estudiante como reflexion y diagnostico de sus competencias actuales y le motivaran en su proceso de formacion."
                                            >
                                                <i class="fas fa-question"></i>
                                            </a>
                                        </div>
                                        <textarea
                                            name="intentioned"
                                            class="form-control"
                                            v-model="unit.newReady2"
                                            placeholder="Redacte un problema, caso, entre otros que le sirvan al estudiante como reflexion y diagnostico de sus competencias actuales y le motivaran en su proceso de formacion."
                                            required
                                        ></textarea>
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div align="center">
                                        <strong>Aprenda de las fuentes</strong>
                                    </div>
                                    <div
                                        class="form-group row mx-auto"
                                        v-for="(input2, m) in inputs2"
                                        :key="m"
                                    >
                                        <div class="col-md-6">
                                            <label for="name">Tema</label>
                                            <span>
                                                <a
                                                    href="#"
                                                    class="badge badge-danger"
                                                    @click.prevent="remove2(m)"
                                                    v-show="
                                                        m ||
                                                            (!m &&
                                                                inputs2.length >
                                                                    1)
                                                    "
                                                    >-</a
                                                >
                                                <a
                                                    href="#"
                                                    class="badge badge-primary"
                                                    @click.prevent="add2(m)"
                                                    v-show="
                                                        m == inputs2.length - 1
                                                    "
                                                    >+</a
                                                >
                                            </span>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="objetive1"
                                                    class="form-control"
                                                    v-model="input2.name"
                                                    placeholder="Nombre del Tema"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="name">Contenido</label>
                                            <textarea
                                                name="competences"
                                                class="form-control"
                                                v-model="input2.contenido"
                                                placeholder="Es la explicacion o sintesis de la tematica a abordar en la unidad de estudio."
                                                required
                                            ></textarea>
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="form-group row"
                                        v-for="(input3, l) in inputs3"
                                        :key="l"
                                    >
                                        <div class="col-md-6">
                                            <label for="name"
                                                >Master class (MC)</label
                                            >
                                            <span>
                                                <a
                                                    href="#"
                                                    class="badge badge-danger"
                                                    @click.prevent="remove3(l)"
                                                    v-show="
                                                        l ||
                                                            (!l &&
                                                                inputs3.length >
                                                                    1)
                                                    "
                                                    >-</a
                                                >
                                                <a
                                                    href="#"
                                                    class="badge badge-primary"
                                                    @click.prevent="add3(l)"
                                                    v-show="
                                                        l == inputs3.length - 1
                                                    "
                                                    >+</a
                                                >
                                            </span>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="objetive"
                                                    class="form-control"
                                                    v-model="input3.name"
                                                    placeholder="Nombre de la clase"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="name">Video MC</label>
                                            <input
                                                type="file"
                                                name="picture"
                                                class="form-control"
                                                accept="image/*"
                                                required
                                            />
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row mx-auto">
                                        <div class="col-md-6">
                                            <label for="name"
                                                >Video de apoyo</label
                                            >
                                            <input
                                                type="text"
                                                name="objetive1"
                                                class="form-control"
                                                v-model="unit.newNameV2"
                                                placeholder="Nombre del Video"
                                                required
                                            />
                                            <input
                                                type="file"
                                                name="picture2"
                                                class="form-control"
                                                required
                                            />
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="col">
                                            <label for="name"
                                                >Bibliografia
                                                complementaria</label
                                            >
                                            <textarea
                                                name="competences"
                                                class="form-control"
                                                v-model="unit.newBibliography2"
                                                placeholder="Competencias conceptuales, procedimentales y actitudinales"
                                                required
                                            ></textarea>
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <div align="center">
                                            <strong>Aprenda haciendo</strong>
                                            <a
                                                tabindex="0"
                                                class="badge badge-info"
                                                role="button"
                                                data-toggle="popover"
                                                data-trigger="focus"
                                                title="Aprenda haciendo"
                                                data-content="Aquí se mencionan las actividades de la unidad. NOTA: Es imprescindible en los cursos Especializados, que una actividad de cualquiera de las tres (3) unidades del curso, sea un Ensayo, que esté relacionado con el espacio académico, con una extensión máxima de ocho (8) páginas que incluye la introducción, el desarrollo, las conclusiones y las fuentes bibliográficas con normas APA."
                                            >
                                                <i class="fas fa-question"></i>
                                            </a>
                                        </div>
                                        <textarea
                                            name="doing"
                                            class="form-control"
                                            v-model="unit.newDoing2"
                                            required
                                        ></textarea>
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <div align="center">
                                            <strong
                                                >Aprenda poniéndose
                                                retos</strong
                                            >
                                            <a
                                                tabindex="0"
                                                class="badge badge-info"
                                                role="button"
                                                data-toggle="popover"
                                                data-trigger="focus"
                                                title="Aprenda poniéndose retos"
                                                data-content="Colocar una situación extrema (real o ficticia) en la cual el estudiante proponga soluciones con los conocimientos, habilidades y actitudes adquiridas en el curso."
                                            >
                                                <i class="fas fa-question"></i>
                                            </a>
                                        </div>
                                        <textarea
                                            name="map"
                                            class="form-control"
                                            v-model="unit.newChallenge2"
                                            required
                                        ></textarea>
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <div align="center">
                                            <strong
                                                >Aprenda proyectándose</strong
                                            >
                                            <a
                                                tabindex="0"
                                                class="badge badge-info"
                                                role="button"
                                                data-toggle="popover"
                                                data-trigger="focus"
                                                title="Aprenda proyectándose"
                                                data-content="Redacte una situación problémica que se presenta en una entidad o comunidad relacionada con el tema tratado,  y bajo el esquema de consultor,  el estudiante deberá proponer las soluciones y mejoras a que haya lugar. "
                                            >
                                                <i class="fas fa-question"></i>
                                            </a>
                                        </div>
                                        <textarea
                                            name="metodology"
                                            class="form-control"
                                            v-model="unit.newProjecting2"
                                            required
                                        ></textarea>
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                </tab-content>
                                <tab-content title="Unidad 3">
                                    <div class="form-group mx-auto col-md-6">
                                        <strong>Nombre de la unidad (3)</strong>
                                        <input
                                            type="text"
                                            name="name"
                                            class="form-control"
                                            v-model="unit.newName3"
                                            required
                                        />
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <div align="center">
                                            <strong
                                                >Presentación de la
                                                unidad</strong
                                            >
                                            <a
                                                tabindex="0"
                                                class="badge badge-info"
                                                role="button"
                                                data-toggle="popover"
                                                data-trigger="focus"
                                                title="Presentación de la unidad"
                                                data-content=" Se refiere al espacio en el cual se da a conocer el proposito de la unidad; debe ser escrita mediante un texto corto."
                                            >
                                                <i class="fas fa-question"></i>
                                            </a>
                                        </div>
                                        <textarea
                                            name="welcome"
                                            class="form-control"
                                            v-model="unit.newPresentationU3"
                                            required
                                        ></textarea>
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <div align="center">
                                            <strong
                                                >Conocimientos, habilidades y
                                                requisitos para el desarrollo de
                                                la unidad</strong
                                            >
                                            <a
                                                tabindex="0"
                                                class="badge badge-info"
                                                role="button"
                                                data-toggle="popover"
                                                data-trigger="focus"
                                                title="Conocimientos, habilidades y requisitos"
                                                data-content="Se presentan los conocimientos previos al aprendizaje que corresponden al desarrollo de la unidad"
                                            >
                                                <i class="fas fa-question"></i>
                                            </a>
                                        </div>
                                        <textarea
                                            name="welcome"
                                            class="form-control"
                                            v-model="unit.newHability3"
                                            required
                                        ></textarea>
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div align="center">
                                        <strong
                                            >Competencias (Especificas y
                                            transversales)</strong
                                        >
                                    </div>
                                    <div class="form-group row">
                                        <div class="col">
                                            <label for="name"
                                                >Competencias Especificas</label
                                            >
                                            <input
                                                type="text"
                                                name="name"
                                                class="form-control"
                                                placeholder="CE 1."
                                                v-model="
                                                    unit.newCompetences3_E1
                                                "
                                                required
                                            />
                                            <input
                                                type="text"
                                                name="name"
                                                class="form-control"
                                                placeholder="CE 2."
                                                v-model="
                                                    unit.newCompetences3_E2
                                                "
                                                required
                                            />
                                            <input
                                                type="text"
                                                name="name"
                                                class="form-control"
                                                placeholder="CE 3."
                                                v-model="
                                                    unit.newCompetences3_E3
                                                "
                                                required
                                            />
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="col">
                                            <label for="name"
                                                >Competencias
                                                transversales</label
                                            >
                                            <input
                                                type="text"
                                                name="name"
                                                class="form-control"
                                                placeholder="CT 1."
                                                v-model="
                                                    unit.newCompetences3_T1
                                                "
                                                required
                                            />
                                            <input
                                                type="text"
                                                name="name"
                                                class="form-control"
                                                placeholder="CT 2."
                                                v-model="
                                                    unit.newCompetences3_T2
                                                "
                                                required
                                            />
                                            <input
                                                type="text"
                                                name="name"
                                                class="form-control"
                                                placeholder="CT 3."
                                                v-model="
                                                    unit.newCompetences3_T3
                                                "
                                                required
                                            />
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                    </div>
                                    <div align="center">
                                        <strong
                                            >Resultados de Aprendizaje /
                                            Criterio de evaluación</strong
                                        >
                                    </div>
                                    <div class="form-group mx-auto">
                                        <table style="width:100%">
                                            <tr>
                                                <th rowspan="3">
                                                    <textarea
                                                        name="welcome"
                                                        class="form-control"
                                                        placeholder="RA 1."
                                                        v-model="
                                                            unit.newResult3_1
                                                        "
                                                        required
                                                    ></textarea>
                                                </th>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 1."
                                                        v-model="
                                                            unit.newCompe3_R11
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 2."
                                                        v-model="
                                                            unit.newCompe3_R12
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 3."
                                                        v-model="
                                                            unit.newCompe3_R13
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                        </table>

                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <table style="width:100%">
                                            <tr>
                                                <th rowspan="3">
                                                    <textarea
                                                        name="welcome"
                                                        class="form-control"
                                                        placeholder="RA 2."
                                                        v-model="
                                                            unit.newResult3_2
                                                        "
                                                        required
                                                    ></textarea>
                                                </th>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 1."
                                                        v-model="
                                                            unit.newCompe3_R21
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 2."
                                                        v-model="
                                                            unit.newCompe3_R22
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 3."
                                                        v-model="
                                                            unit.newCompe3_R23
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                        </table>

                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <table style="width:100%">
                                            <tr>
                                                <th rowspan="3">
                                                    <textarea
                                                        name="welcome"
                                                        class="form-control"
                                                        placeholder="RA 3."
                                                        v-model="
                                                            unit.newResult3_3
                                                        "
                                                        required
                                                    ></textarea>
                                                </th>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 1."
                                                        v-model="
                                                            unit.newCompe3_R31
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 2."
                                                        v-model="
                                                            unit.newCompe3_R32
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 3."
                                                        v-model="
                                                            unit.newCompe3_R33
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                        </table>

                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <table style="width:100%">
                                            <tr>
                                                <th rowspan="3">
                                                    <textarea
                                                        name="welcome"
                                                        class="form-control"
                                                        placeholder="RA 4."
                                                        v-model="
                                                            unit.newResult3_4
                                                        "
                                                        required
                                                    ></textarea>
                                                </th>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 1."
                                                        v-model="
                                                            unit.newCompe3_R41
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 2."
                                                        v-model="
                                                            unit.newCompe3_R42
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="CE 3."
                                                        v-model="
                                                            unit.newCompe3_R43
                                                        "
                                                        required
                                                    />
                                                </td>
                                            </tr>
                                        </table>

                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <div align="center">
                                            <strong
                                                >Aprenda preguntandose
                                                preguntas</strong
                                            >
                                            <a
                                                tabindex="0"
                                                class="badge badge-info"
                                                role="button"
                                                data-toggle="popover"
                                                data-trigger="focus"
                                                title="Aprenda preguntandose preguntas"
                                                data-content="En este espacio se hace una invitacion al estudiante para que este realice preguntas que el desearia que resolviera con el tema o programa a cursar."
                                            >
                                                <i class="fas fa-question"></i>
                                            </a>
                                        </div>
                                        <textarea
                                            name="welcome"
                                            class="form-control"
                                            v-model="unit.newQuestion3"
                                            required
                                        ></textarea>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <div align="center">
                                            <strong>Aprenda alistándose</strong>
                                            <a
                                                tabindex="0"
                                                class="badge badge-info"
                                                role="button"
                                                data-toggle="popover"
                                                data-trigger="focus"
                                                title="Aprenda alistándose"
                                                data-content="Redacte un problema, caso, entre otros que le sirvan al estudiante como reflexion y diagnostico de sus competencias actuales y le motivaran en su proceso de formacion."
                                            >
                                                <i class="fas fa-question"></i>
                                            </a>
                                        </div>
                                        <textarea
                                            name="intentioned"
                                            class="form-control"
                                            v-model="unit.newReady3"
                                            required
                                        ></textarea>
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div align="center">
                                        <strong>Aprenda de las fuentes</strong>
                                    </div>
                                    <div
                                        class="form-group row mx-auto"
                                        v-for="(input4, h) in inputs4"
                                        :key="h"
                                    >
                                        <div class="col-md-6">
                                            <label for="name">Tema</label>
                                            <span>
                                                <a
                                                    href="#"
                                                    class="badge badge-danger"
                                                    @click.prevent="remove4(h)"
                                                    v-show="
                                                        h ||
                                                            (!h &&
                                                                inputs4.length >
                                                                    1)
                                                    "
                                                    >-</a
                                                >
                                                <a
                                                    href="#"
                                                    class="badge badge-primary"
                                                    @click.prevent="add4(h)"
                                                    v-show="
                                                        h == inputs4.length - 1
                                                    "
                                                    >+</a
                                                >
                                            </span>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="objetive1"
                                                    class="form-control"
                                                    v-model="input4.name"
                                                    placeholder="Nombre del Tema"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="name">Contenido</label>
                                            <textarea
                                                name="competences"
                                                class="form-control"
                                                v-model="input4.contenido"
                                                placeholder="Es la explicacion o sintesis de la tematica a abordar en la unidad de estudio."
                                                required
                                            ></textarea>
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="form-group row"
                                        v-for="(input5, g) in inputs5"
                                        :key="g"
                                    >
                                        <div class="col-md-6">
                                            <label for="name"
                                                >Master class (MC)</label
                                            >
                                            <span>
                                                <a
                                                    href="#"
                                                    class="badge badge-danger"
                                                    @click.prevent="remove5(g)"
                                                    v-show="
                                                        g ||
                                                            (!g &&
                                                                inputs5.length >
                                                                    1)
                                                    "
                                                    >-</a
                                                >
                                                <a
                                                    href="#"
                                                    class="badge badge-primary"
                                                    @click.prevent="add5(g)"
                                                    v-show="
                                                        g == inputs5.length - 1
                                                    "
                                                    >+</a
                                                >
                                            </span>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="objetive"
                                                    class="form-control"
                                                    v-model="input5.name"
                                                    placeholder="Nombre de la clase"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="name">Video MC</label>
                                            <input
                                                type="file"
                                                name="picture"
                                                class="form-control"
                                                accept="image/*"
                                                required
                                            />
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row mx-auto">
                                        <div class="col-md-6">
                                            <label for="name"
                                                >Video de apoyo</label
                                            >
                                            <input
                                                type="text"
                                                name="objetive1"
                                                class="form-control"
                                                v-model="unit.newNameV3"
                                                placeholder="Nombre del Video"
                                                required
                                            />
                                            <input
                                                type="file"
                                                name="picture2"
                                                class="form-control"
                                                accept="image/*"
                                                required
                                            />
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                        <div class="col">
                                            <label for="name"
                                                >Bibliografia
                                                complementaria</label
                                            >
                                            <textarea
                                                name="competences"
                                                class="form-control"
                                                v-model="unit.newBibliography3"
                                                placeholder="Competencias conceptuales, procedimentales y actitudinales"
                                                required
                                            ></textarea>
                                            <div class="invalid-feedback">
                                                Please fill out this field
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <div align="center">
                                            <strong>Aprenda haciendo</strong>
                                            <a
                                                tabindex="0"
                                                class="badge badge-info"
                                                role="button"
                                                data-toggle="popover"
                                                data-trigger="focus"
                                                title="Aprenda haciendo"
                                                data-content="Aquí se mencionan las actividades de la unidad. NOTA: Es imprescindible en los cursos Especializados, que una actividad de cualquiera de las tres (3) unidades del curso, sea un Ensayo, que esté relacionado con el espacio académico, con una extensión máxima de ocho (8) páginas que incluye la introducción, el desarrollo, las conclusiones y las fuentes bibliográficas con normas APA."
                                            >
                                                <i class="fas fa-question"></i>
                                            </a>
                                        </div>
                                        <textarea
                                            name="doing"
                                            class="form-control"
                                            v-model="unit.newDoing3"
                                            required
                                        ></textarea>
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <div align="center">
                                            <strong
                                                >Aprenda poniéndose
                                                retos</strong
                                            >
                                            <a
                                                tabindex="0"
                                                class="badge badge-info"
                                                role="button"
                                                data-toggle="popover"
                                                data-trigger="focus"
                                                title="Aprenda poniéndose retos"
                                                data-content="Colocar una situación extrema (real o ficticia) en la cual el estudiante proponga soluciones con los conocimientos, habilidades y actitudes adquiridas en el curso."
                                            >
                                                <i class="fas fa-question"></i>
                                            </a>
                                        </div>
                                        <textarea
                                            name="map"
                                            class="form-control"
                                            v-model="unit.newChallenge3"
                                            required
                                        ></textarea>
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto">
                                        <div align="center">
                                            <strong
                                                >Aprenda proyectándose</strong
                                            >
                                            <a
                                                tabindex="0"
                                                class="badge badge-info"
                                                role="button"
                                                data-toggle="popover"
                                                data-trigger="focus"
                                                title="Aprenda proyectándose"
                                                data-content="Redacte una situación problémica que se presenta en una entidad o comunidad relacionada con el tema tratado,  y bajo el esquema de consultor,  el estudiante deberá proponer las soluciones y mejoras a que haya lugar. "
                                            >
                                                <i class="fas fa-question"></i>
                                            </a>
                                        </div>
                                        <textarea
                                            name="metodology"
                                            class="form-control"
                                            v-model="unit.newProjecting3"
                                            required
                                        ></textarea>
                                        <div class="invalid-feedback">
                                            Please fill out this field
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <input
                                            type="submit"
                                            @click.prevent="createCourses"
                                            class="btn btn-primary"
                                            value="Guardar"
                                        />
                                    </div>
                                </tab-content>
                            </form-wizard>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
    var hidden = $("#hidden_fields1");

    hidden.hide();

    checkbox.change(function() {
        if (checkbox.is(":checked")) {
            // Show the hidden fields.
            hidden.show();
        } else {
            hidden.hide();
        }
    });
});
import VueFormWizard from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
Vue.use(VueFormWizard);
export default {
    data() {
        return {
            inputs: [
                {
                    name: "",
                    contenido: "",
                    unit: ""
                }
            ],
            inputs1: [
                {
                    name: "",
                    video: ""
                }
            ],
            inputs2: [
                {
                    name: "",
                    contenido: "",
                    unit: ""
                }
            ],
            inputs3: [
                {
                    name: ""
                }
            ],
            inputs4: [
                {
                    name: "",
                    contenido: "",
                    unit: ""
                }
            ],
            inputs5: [
                {
                    name: ""
                }
            ],
            inputs6: [
                {
                    name: ""
                }
            ],
            file: "",
            categories: [],
            subcategories: [],
            TypeUsers: [],
            classes: [],
            myOptions: ["e-learning", "b-learning"],
            newDescription: "",
            newName: "",
            newPicture: "",
            newId_category: "",
            newId_subcategories: "",
            newMethodologyG: "",
            newType: "",
            newIntensityAC: "",
            newIndicatorA: "",
            newIntensityTA: "",
            newWelcome: "",
            newPresentation: "",
            newIntention: "",
            newCompetences: "",
            newAchievement: "",
            newMap: "",
            newDescriptionO: "",
            metodology: "",
            newState: "",
            newPublish: "",
            newPrice: "",
            fillC: {
                id: "",
                name: "",
                description: "",
                id_user: "",
                id_category: "",
                id_subcategory: "",
                intensityAC: "",
                intensityTA: "",
                methodology: "",
                methodologyG: "",
                welcome: "",
                presentation: "",
                intention: "",
                competences: "",
                achievement: "",
                indicatorA: "",
                map: "",
                type: "",
                descriptionO: "",
                state: "",
                publish: "",
                image: "",
                video_presentation: ""
            },
            newId_subcategories: "",
            newId_category: "",
            unit: {
                newName1: "",
                newName2: "",
                newName3: "",
                newPresentationU1: "",
                newPresentationU2: "",
                newPresentationU3: "",
                newHability1: "",
                newHability2: "",
                newHability3: "",
                newCompetences1_E1: "",
                newCompetences1_E2: "",
                newCompetences1_E3: "",
                newCompetences1_T1: "",
                newCompetences1_T2: "",
                newCompetences1_T3: "",
                newCompetences2_E1: "",
                newCompetences2_E2: "",
                newCompetences2_E3: "",
                newCompetences2_T1: "",
                newCompetences2_T2: "",
                newCompetences2_T3: "",
                newCompetences3_E1: "",
                newCompetences3_E2: "",
                newCompetences3_E3: "",
                newCompetences3_T1: "",
                newCompetences3_T2: "",
                newCompetences3_T3: "",
                newResult1_1: "",
                newResult1_2: "",
                newResult1_3: "",
                newResult1_4: "",
                newResult2_1: "",
                newResult2_2: "",
                newResult2_3: "",
                newResult2_4: "",
                newResult3_1: "",
                newResult3_2: "",
                newResult3_3: "",
                newResult3_4: "",
                newCompe1_R11: "",
                newCompe1_R12: "",
                newCompe1_R13: "",
                newCompe1_R21: "",
                newCompe1_R22: "",
                newCompe1_R23: "",
                newCompe1_R31: "",
                newCompe1_R32: "",
                newCompe1_R33: "",
                newCompe1_R41: "",
                newCompe1_R42: "",
                newCompe1_R43: "",
                newCompe2_R11: "",
                newCompe2_R12: "",
                newCompe2_R13: "",
                newCompe2_R21: "",
                newCompe2_R22: "",
                newCompe2_R23: "",
                newCompe2_R31: "",
                newCompe2_R32: "",
                newCompe2_R33: "",
                newCompe2_R41: "",
                newCompe2_R42: "",
                newCompe2_R43: "",
                newCompe3_R11: "",
                newCompe3_R12: "",
                newCompe3_R13: "",
                newCompe3_R21: "",
                newCompe3_R22: "",
                newCompe3_R23: "",
                newCompe3_R31: "",
                newCompe3_R32: "",
                newCompe3_R33: "",
                newCompe3_R41: "",
                newCompe3_R42: "",
                newCompe3_R43: "",
                newQuestion1: "",
                newQuestion2: "",
                newQuestion3: "",
                newReady1: "",
                newReady2: "",
                newReady3: "",
                newContent: [],
                newMaster: "",
                newVideo: "",
                newBibliography1: "",
                newBibliography2: "",
                newBibliography3: "",
                newDoing1: "",
                newDoing2: "",
                newDoing3: "",
                newChallenge1: "",
                newChallenge2: "",
                newChallenge3: "",
                newProjecting1: "",
                newProjecting2: "",
                newProjecting3: "",
                newNameM1: "",
                newNameM2: "",
                newNameM3: "",
                newNameV1: "",
                newNameV2: "",
                newNameV3: ""
            },

            newTopic: [],
            newUnit: "",
            newimage: "",
            newVideo_presentation: "",
            image: "",
            fillU: {
                id: "",
                unit: "",
                name: "",
                type: "",
                id_course: "",
                presentation: "",
                hability: "",
                competences_e1: "",
                competences_e2: "",
                competences_e3: "",
                competences_t1: "",
                competences_t2: "",
                competences_t3: "",
                result1: "",
                result2: "",
                result3: "",
                result4: "",
                comper11: "",
                comper12: "",
                comper13: "",
                comper21: "",
                comper22: "",
                comper23: "",
                comper31: "",
                comper32: "",
                comper33: "",
                comper41: "",
                comper42: "",
                comper43: "",
                question: "",
                ready: "",
                content: "",
                master: "",
                video: "",
                bibliography: "",
                doing: "",
                challenge: "",
                projecting: "",
                topic: "",
                nameM: "",
                nameV: ""
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
        getCourses() {
            var urlr = "courses";
            axios.get(urlr).then(response => {
                this.course = response.data;
            });
        },
        add(index) {
            this.inputs.push({ name: "", contenido: "", unit: "" });
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
        add2(index) {
            this.inputs2.push({ name: "", contenido: "", unit: "" });
        },
        remove2(index) {
            this.inputs2.splice(index, 1);
        },
        add3(index) {
            this.inputs3.push({ name: "" });
        },
        remove3(index) {
            this.inputs3.splice(index, 1);
        },
        add4(index) {
            this.inputs4.push({ name: "", contenido: "", unit: "" });
        },
        remove4(index) {
            this.inputs4.splice(index, 1);
        },
        add5(index) {
            this.inputs5.push({ name: "" });
        },
        remove5(index) {
            this.inputs5.splice(index, 1);
        },
        add6(index) {
            this.inputs6.push({ name: "" });
        },
        remove6(index) {
            this.inputs6.splice(index, 1);
        },
        createCourses() {
            var url = "courses";
            this.newType = "specialized";
            this.newState = "up";
            if (this.inputs.length >= 1) {
                for (let i = 0; i < this.inputs.length; i++) {
                    this.inputs[i].unit = this.newName1;
                    this.newTopic.push(this.inputs[i]);
                    // this.newContent.push(this.inputs[i].contenido);
                }
            }
            if (this.inputs2.length >= 1) {
                for (let i = 0; i < this.inputs2.length; i++) {
                    this.inputs2[i].unit = this.newName2;
                    this.newTopic.push(this.inputs2[i]);
                    // this.newContent.push(this.inputs[i].contenido);
                }
            }
            if (this.inputs4.length >= 1) {
                for (let i = 0; i < this.inputs4.length; i++) {
                    this.inputs4[i].unit = this.newName3;
                    this.newTopic.push(this.inputs4[i]);
                    // this.newContent.push(this.inputs[i].contenido);
                }
                console.log(this.newTopic);
            }
            axios
                .post(url, {
                    //Cursos generales
                    name: this.newName,
                    id_category: this.Category,
                    id_subcategory: this.newId_subcategories,
                    welcome: this.newWelcome,
                    methodology: this.metodology,
                    intention: this.newIntention,
                    intensityAC: this.newIntensityAC,
                    competences: this.newCompetences,
                    description: this.newDescription,
                    intensityTA: this.newIntensityTA,
                    achievement: this.newAchievement,
                    indicatorA: this.newIndicatorA,
                    map: this.newMap,
                    methodologyG: this.newMethodologyG,
                    type: this.newType,
                    presentation: this.newPresentation,
                    descriptionO: this.newDescriptionO,
                    state: this.newState,
                    publish: this.publish,
                    image: this.newimage,
                    video_presentation: this.newVideo_presentation,
                    state: this.newState,
                    //Cursos unidades
                    unit: this.unit,
                    //temas
                    topic: this.newTopic
                    //videos
                })
                .then(response => {
                    this.getCourses();
                    /*this.newDescription = "";
          this.newId_user = "";
          this.newName = "";
          this.newId_subcategories = "";
          this.newIntensityAC = "";
          this.newIntensityTA = "";
          this.newMethodologyG = "";
          this.newType = "";
          this.newWelcome = "";
          this.newPresentation = "";
          this.newIndicatorA = "";
          this.newMap = "";
          this.newCompetences = "";
          this.newIntention = "";
          this.newDescriptionO = "";*/
                    this.errors = [];

                    toastr.success("Nuevo curso creado exitosamente");
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
        },
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.createImage(files[0]);
        },
        createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = e => {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
            this.newVideo_presentation = vm.image;
        }
    }
};
</script>
<style></style>
