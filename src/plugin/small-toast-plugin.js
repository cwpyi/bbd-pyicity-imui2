import creator from '../util/creator'
import Toast from '../base/toast/toast.vue'

export default {
    install: function(Vue) {
        creator.new(Vue, Toast, (imui2, target)=>{
            imui2.stoast = {
                show: function(value, millisecond) {
                    target.value = value;
                    target.isShow = true;
                    setTimeout(() => {
                        target.isShow = false;
                    }, millisecond || 3000);
                }
            }
        });
    }
}
