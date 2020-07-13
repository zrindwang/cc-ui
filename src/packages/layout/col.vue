<template>
  <div class="cc-col" :class="colClass" :style="colStyle">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:"cc-col",
    props:{
        span:{
            type:Number,
            default:24
        },
        offset:{
            type:Number,
            default:null
        }
    },
    data(){
        return{
            gutter:0
        }
    },
    computed:{
        colClass(){
            let classes = [];
            classes.push(`cc-col-${this.span}`)
            if(this.offset){ //用户传入偏移量
                classes.push(`cc-col-offset-${this.offset}`)
            }
            return classes;
        },
        colStyle(){
            let style = {};
            if(this.gutter){
                style = {
                    ...style,
                    paddingLeft:this.gutter/2 +'px', 
                    paddingRight:this.gutter/2 +'px'
                }
            }
            return style;
        }
    }
}
</script>

<style lang="scss">
    //循环24 来创造宽度
    @for $i from 1 through 24{
        .cc-col-#{$i} {
            width: $i/24 *100%;
        }
    }
    @for $i from 1 through 24{
        .cc-col-offset-#{$i} {
            margin-left: $i/24 *100%;
        }
    }

</style>