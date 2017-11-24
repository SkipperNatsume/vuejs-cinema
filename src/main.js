import Vue from 'vue';
import './style.scss';
//importing global variables
import genres from './util/genres'
//importing components
import Overview from './components/Overview.vue'

import VueResourse from 'vue-resource';
Vue.use(VueResourse);
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import routes from './util/routes'
import moment from 'moment-timezone';

import { checkFilter } from './util/bus'
moment.tz.setDefault("EET")
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } })//assigning to all component access to $root.moment with $moment as allias

const bus = new Vue();
Object.defineProperty(Vue.prototype, '$bus', { get() { return this.$root.bus } });
const router = new VueRouter({
    routes
});
new Vue({
    el: '#app',
    data: {
        genre: [],
        time: [],
        movies: [],
        moment,
        day: moment(),
        bus
    },
    components: {
        Overview
    },
    created() {
        this.$http.get('/api').then(response => {
            this.movies = response.data;
        });
        this.$bus.$on('check-filter', checkFilter.bind(this));
    },
    router
});