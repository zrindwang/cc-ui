//所有组件入口
import Button from './button/button.vue';
import Icon from './button/icon.vue';
import ButtonGroup from './button/button-group.vue';
import Row from './layout/row.vue';
import Col from './layout/col.vue';

const install = (Vue) => {
    Vue.component(Button.name,Button)
    Vue.component(Icon.name,Icon)
    Vue.component(ButtonGroup.name,ButtonGroup)
    Vue.component(Row.name,Row)
    Vue.component(Col.name,Col)
    
}

if(typeof window.Vue !== 'undefined'){
    install(Vue);//用户通过标签直接引入 
}
export default {
    install
}
