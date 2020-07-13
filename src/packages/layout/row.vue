<template>
  <div class="cc-row" :style="rowStyl">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:"cc-row",
    props:{
        gutter:{
            type:Number,
            default:0
        },
        justify:{
            type:String,
            validator(type){
                if(type && !['start','center','end','space-around','space-between'].includes(type)){
                    console.error('类型必须是'+['start','center','enc','space-around','space-between'].join(",")+"的一种")
                }
                return true
            }
        }
    },
    mounted(){
        this.$children.forEach(child => {
            child.gutter = this.gutter
        })
    },
    computed:{
        rowStyl(){
            let style = {}
            if(this.gutter){
                style = {
                    ...style,
                    marginLeft: -this.gutter/2 + 'px',
                    marginRight: -this.gutter/2 + 'px'
                }
            }
            if(this.justify){
                let key = ['start','end'].includes(this.justify)?'flex-'+this.justify:this.justify
                style = {
                    ...style,
                    justifyContent:key

                }
            }
            return style; //通过外层负margin抵消padding
        }
    }
}
</script>

<style lang="scss">
    .cc-row{
        display: flex;    
        flex-wrap: wrap;
        overflow: hidden;
    }
</style>