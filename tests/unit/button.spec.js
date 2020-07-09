import {shallowMount} from '@vue/test-utils'; //vue提供的快速测试方法
import {expect} from 'chai';

import Button from '@/packages/button.vue';
import Icon from '@/packages/icon.vue';

describe('button.vue',()=>{
    it('1.测试button能否正常显示slot里的内容',()=>{ //测试当前组件运行在浏览器情况
        const wrapper = shallowMount(Button,{
            slots:{
                default:'cc-ui'
            }
        });
        expect(wrapper.text()).to.eq('cc-ui')
        
    })
    it('2.测试icon传入是否能正常显示',()=>{ //测试当前组件运行在浏览器情况
        const wrapper = shallowMount(Button,{
            stubs:{
                'cc-icon':Icon //替换功能
            },
            propsData:{
                icon:'sousuo'
            }
        });
        expect(wrapper.find('use').attributes('href')).to.eq('#iconsousuo')
    })
    it('3.测试loading时 按钮是禁用状态',()=>{ //测试当前组件运行在浏览器情况
        const wrapper = shallowMount(Button,{
            stubs:{
                'cc-icon':Icon //替换功能
            },
            propsData:{
                loading:true
            }
        });
        expect(wrapper.find('use').attributes('href')).to.eq('#iconloading')
        expect(wrapper.find('button').attributes('disabled')).to.eq('disabled')
    })
    it('4.测试按钮能否点击',()=>{ //测试当前组件运行在浏览器情况
        const wrapper = shallowMount(Button,{
            // stubs:{
            //     'cc-icon':Icon //替换功能 数组就是假标签
            // },
            propsData:{
                loading:false
            }
        });
        wrapper.find('button').trigger('click');
        expect(wrapper.emitted('click').length).to.eq(1)
    })
    it('5.测试用户传入position是否正常显示',()=>{ //测试当前组件运行在浏览器情况
        const wrapper = shallowMount(Button,{
            attachToDocument:true,
            stubs:{
                'cc-icon':Icon //替换功能 数组就是假标签
            },
            slots:{
                default:'cc-ui'
            },
            propsData:{
                iconPosition:'left',
                icon:'sousuo'
            }
        });
        let ele =wrapper.vm.$el.querySelector('span');
        expect(getComputedStyle(ele).order).to.eq('2');
        wrapper.setProps({iconPosition:'right'});
        return wrapper.vm.$nextTick().then(()=>{
            expect(getComputedStyle(ele).order).to.eq('1');
        })
    })

})