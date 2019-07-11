import creator from '../util/creator'
import Loading from '../loading/loading.vue'

export default {
    install: function(Vue) {
        Vue.component('imui2-loading', Loading);
        creator.new(Vue, Loading, (imui2, target)=>{
            imui2.loading = {
                show: function(title) {
                    target.value = title;
                    target.isShow = true;
                },
                hide: function() {
                    target.isShow = false;
                }
            }
        });
    }
}
