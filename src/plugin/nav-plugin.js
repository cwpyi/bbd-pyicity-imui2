import Nav from '../layout/nav/nav.vue'
import Nav2 from '../layout/nav/nav2.vue'

export default {
    install: function(Vue) {
        Vue.component('imui2-nav', Nav);
        Vue.component('imui2-nav2', Nav2);
    }
}