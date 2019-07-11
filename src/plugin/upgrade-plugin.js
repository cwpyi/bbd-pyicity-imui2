import Upgrade from '../assist/upgrade/upgrade.vue'
import Upgrade2 from '../assist/upgrade/upgrade2.vue'

export default {
    install: function(Vue) {
        Vue.component('imui2-upgrade', Upgrade);
        Vue.component('imui2-upgrade2', Upgrade2);
    }
}