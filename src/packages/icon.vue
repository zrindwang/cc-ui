<template>
    <svg class="cc-icon" aria-hidden="true">
        <use :xlink:href="`#icon${icon}`" />
    </svg>
</template>
<!-- chenggong xinxi weixian shangchuan sousuo saoyisao jinggao ren -->
<script>
import "../styles/icon";
export default {
    name: "cc-icon",
    props:{
        icon:{
            type:String,
            required:true
        }
    }
};
</script>

<style lang="scss">
.cc-icon {
    width: 25px;
    height: 16px;
    vertical-align: middle;
}
</style>