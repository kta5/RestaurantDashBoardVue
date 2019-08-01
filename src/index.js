import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import { LayoutPlugin } from 'bootstrap-vue';
// import { ModalPlugin } from 'bootstrap-vue';
// import { CardPlugin } from 'bootstrap-vue';
// import { VBScrollspyPlugin } from 'bootstrap-vue';
// import { DropdownPlugin, TablePlugin } from 'bootstrap-vue';


//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap-vue/dist/bootstrap-vue.css';



//Vue.use(BootstrapVue)
//Vue.use(LayoutPlugin);
//Vue.use(ModalPlugin);
//Vue.use(CardPlugin);
//Vue.use(VBScrollspyPlugin);
//Vue.use(DropdownPlugin);
//Vue.use(TablePlugin);
new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App />'

});
