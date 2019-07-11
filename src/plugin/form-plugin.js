import Toggle from '../form/toggle/toggle.vue'
import Button from '../form/button/button.vue'
import Password from '../form/password/password.vue'
import Label from '../form/label/label.vue'
import Input from '../form/input/input.vue'
import LabelInput from '../form/label-input/labelInput.vue'

export default {
    install: function(Vue) {
        Vue.component('imui2-toggle', Toggle);
        Vue.component('imui2-button', Button);
        Vue.component('imui2-password', Password);
        Vue.component('imui2-label', Label);
        Vue.component('imui2-input-text', Input);
        Vue.component('imui2-label-text', LabelInput);
    }
}