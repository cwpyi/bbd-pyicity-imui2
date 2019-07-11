import creator from '../util/creator'
import BToast from '../base/toast/btoast.vue'

export default {
    install: function(Vue) {
        creator.new(Vue, BToast, (imui2, target)=>{
            imui2.btoast = {
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
