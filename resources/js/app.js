
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');

window.Vue = require('vue');
window.toastr = require('toastr');


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
//Vue.component('task-component', require('./components/TaskComponent.vue').default);
Vue.component('category-component', require('./components/CategoryComponent.vue').default);
Vue.component('pagination-component', require('./components/PaginationComponent.vue').default);
Vue.component('select2', require('./components/Select2.vue').default);
Vue.component('user-component', require('./components/UserComponent.vue').default);
Vue.component('typeuser-component', require('./components/TypeUserComponent.vue').default);
Vue.component('resume-component', require('./components/ResumeComponent.vue').default);
Vue.component('checkbox', require('./components/Checkbox.vue').default);
Vue.component('class-component', require('./components/ClassComponent.vue').default);



const app = new Vue({
  
 
    el: '#app',

});
