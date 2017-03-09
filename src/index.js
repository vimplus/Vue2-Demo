import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';

Vue.use(VueRouter);

const router = new VueRouter(require('./router'));

new Vue({
    el: '#VueApp',
    router: router,
    render: h => h(App)
})