/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require("./bootstrap");

window.Vue = require("vue");
window.toastr = require("toastr");
import CKEditor from "@ckeditor/ckeditor5-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);
//Vue.component('task-component', require('./components/TaskComponent.vue').default);
Vue.component(
    "category-component",
    require("./components/CategoryComponent.vue").default
);
Vue.component(
    "pagination-component",
    require("./components/PaginationComponent.vue").default
);
Vue.component("select2", require("./components/Select2.vue").default);
Vue.component(
    "user-component",
    require("./components/UserComponent.vue").default
);
Vue.component(
    "type-component",
    require("./components/TypeUserComponent.vue").default
);
Vue.component(
    "resume-component",
    require("./components/ResumeComponent.vue").default
);
Vue.component("checkbox", require("./components/Checkbox.vue").default);
Vue.component(
    "class-component",
    require("./components/ClassComponent.vue").default
);
Vue.component(
    "chat-message",
    require("./components/ChatMessageComponent.vue").default
);
Vue.component("chat-log", require("./components/ChatLogComponent.vue").default);
Vue.component(
    "chat-composer",
    require("./components/ChatcomposerComponent.vue").default
);
Vue.component(
    "blog-component",
    require("./components/BlogComponent.vue").default
);
Vue.component("draw-c", require("./components/draw.vue").default);
Vue.component("app-vue", require("./App1.vue").default);
Vue.component(
    "modify-users",
    require("./components/AdminModifyUsersComponent.vue")
);
Vue.component(
    "subscribe-button",
    require("./components/SubscribeButtonComponent.vue")
);
Vue.component(
    "report-topic-button",
    require("./components/ReportTopicComponent.vue")
);
Vue.component(
    "report-post-button",
    require("./components/ReportPostComponent.vue")
);
Vue.component(
    "delete-report",
    require("./components/ModeratorDeleteReportButtonComponent.vue")
);
Vue.component("messaging", require("./components/UserMessagingComponent.vue"));
Vue.component("home", require("./components/home.vue").default);
Vue.component("board", require("./components/board.vue").default);
Vue.component("formstyle", require("./components/formstyle.vue").default);
Vue.component("footers", require("./components/footer.vue").default);
Vue.component(
    "car-component",
    require("./components/carComponent.vue").default
);
Vue.component(
    "description-class",
    require("./components/descriptionClassComponent.vue").default
);
Vue.component("unit-class", require("./components/unitComponent.vue").default);
Vue.component(
    "free-component",
    require("./components/freeComponent.vue").default
);
Vue.component(
    "freeu-component",
    require("./components/freeUnitComponent.vue").default
);
Vue.component(
    "course-component",
    require("./components/courseComponent.vue").default
);
Vue.component(
    "courseu-component",
    require("./components/courseUnitComponet.vue").default
);
Vue.component(
    "list-component",
    require("./components/listClassComponent.vue").default
);

Vue.use(CKEditor);
Vue.use(CKEditor);

const app = new Vue({
    el: "#app",
    data: {
        messages: [],
        baseurl: window.baseurl,
        user: null
    },
    init() {
        var container = this.$el.querySelector("#container");
        container.scrollTop = container.scrollHeight;
    },
    methods: {
        addMessage(message) {
            this.messages.push(message);
            axios
                .post("http://127.0.0.1:8000/message", message)
                .then(response => {});
        },
        getMessages() {
            axios.get("http://127.0.0.1:8000/messages").then(response => {
                this.messages = response.data.messages;
                var container = this.$el.querySelector("#container");
                container.scrollTop = container.scrollHeight;
            });
        }
    },
    created() {
        axios.get("http://127.0.0.1:8000/messages").then(response => {
            this.messages = response.data.messages;
            this.user = response.data.user;
        });
    }
});
