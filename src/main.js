import Vue from 'vue';
import './style.scss';
//importing global variables
import genres from './util/genres'
//importing components
import MovieList from './components/MovieList.vue'
import MovieFilter from './components/MovieFilter.vue'

import VueResourse from 'vue-resource';
Vue.use(VueResourse);
new Vue({
    el: '#app',
    data: {
        genre: [],
        time:[]
    },
    methods: {
        checkFilter(category, title, checked) {
            if (checked) {
                this[category].push(title);
            }
            else {
                this[category].splice(this[category].indexOf(title), 1);
            }
        }
    },
    components: {
        MovieList, 
        MovieFilter 
    },
    created() {

    }
});