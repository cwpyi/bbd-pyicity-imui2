import creator from '../util/creator'
import AddressPicker from '../picker/address/index'

export default {
    install: function(Vue) {
        Vue.component('imui2-address-picker', AddressPicker);
        creator.new(Vue, AddressPicker, (imui2, target)=>{
            imui2.addressPicker = {
                show: function(params, onok, oncancel) {
                    target.title = params.title;
                    target.level = params.level || 3;
                    target.addressShow = true;
                    target.onok = (data)=>{
                        this.hide();
                        onok && onok(data);
                    };
                    target.oncancel = (type)=>{
                        this.hide();
                        oncancel && oncancel();
                    };
                },
                hide: function() {
                    target.addressShow = false;
                }
            }
        });
    }
}
