<template>
  <div id="app" style="width:95%;">
    <cc-row>
      <cc-col :span="12">
        <div>aaa</div>
      </cc-col>
      <cc-col :span="12">
        <div>bbb</div>
      </cc-col>
    </cc-row>
    <cc-row>
      <cc-col :span=6 :offset=12>ccc</cc-col>
    </cc-row>
    <cc-row :gutter="20">
      <cc-col :span="6" >
        <div class="red">aaa</div>
      </cc-col>
       <cc-col :span="6" >
        <div class="green">aaa</div>
      </cc-col>
       <cc-col :span="6" >
        <div class="red">aaa</div>
      </cc-col>
       <cc-col :span="6" >
        <div class="green">aaa</div>
      </cc-col>
    </cc-row>

    <cc-row justify="space-around">
      <cc-col :span=3 >
        <div class="green">ccc</div>
      </cc-col>
      <cc-col :span=3 >
        <div class="red">ddd</div>
      </cc-col>
      <cc-col :span=3 >
        <div class="yellow">aaa</div>
      </cc-col>
    </cc-row>
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
  .red{
    background: red;
  }
  .green{
    background: green;
  }
  .yellow{
    background: yellow;
  }
</style>
