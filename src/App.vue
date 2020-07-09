<template>
  <div id="app">
   <cc-button>默认按钮</cc-button>
   <cc-button type='primary'>主要按钮</cc-button>
   <cc-button type='warning'>警告按钮</cc-button>
   <cc-button type='danger'>危险按钮</cc-button>
   <cc-button type='success'>成功按钮</cc-button>
   <cc-button type='info'>信息按钮</cc-button>
   <!-- 带icon的按钮 -->
   <cc-button   type='danger' icon="xinxi"></cc-button>
   <cc-button  type='primary' icon="sousuo">信息按钮</cc-button>
   <cc-button  type='success' icon="sousuo" icon-position="right" >success</cc-button>
   <!-- loading 按钮 -->
   <cc-button  type='success' icon="shangchuan" loading>加载中</cc-button>
   <!-- 触发事件 -->
   <cc-button type="warning" @click="fn"></cc-button>
   <cc-button-group>
     <div></div>
     <cc-button icon="left" icon-position="left">上一页</cc-button>
     <cc-button icon="right" icon-position="right">下一页</cc-button>
   </cc-button-group>
  </div>
  
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods:{
    fn(e){
      console.log(e);
      
    }
  }
}
</script>

<style lang="scss">
</style>
