import ScrollFixed from '../listview/scrollFixed.vue'
import ScrollFixed2 from '../listview/scrollFixed2.vue'

export default {
    install: function(Vue) {
        Vue.component('imui2-scroll-fixed', ScrollFixed);
        Vue.component('imui2-scroll-fixed2', ScrollFixed2);
    }
}