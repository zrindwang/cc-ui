//所有组件入口
import Button from './button.vue';
import Icon from './icon.vue';
import ButtonGroup from './button-group.vue'
const install = (Vue) => {
    Vue.component(Button.name,Button)
    Vue.component(Icon.name,Icon)
    Vue.component(ButtonGroup.name,ButtonGroup)
}

if(typeof window.Vue !== 'undefined'){
    install(Vue);//用户通过标签直接引入 
}
export default {
    install
}
