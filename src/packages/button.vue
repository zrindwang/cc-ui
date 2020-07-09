<template>
    <button class="cc-button" :class="btnClass" :disabled="loading" @click="$emit('click',$event)">
        <cc-icon v-if="icon && !loading" class="icon" :icon="icon"></cc-icon>
        <cc-icon v-if="loading" class="icon" icon="loading"></cc-icon>
        <span v-if="this.$slots.default">
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
    name: "cc-button",
    props: {
        type: {
            type: String,
            default: "",
            validator(type) {
                if (
                    type &&
                    ![
                        "warning",
                        "success",
                        "info",
                        "primary",
                        "danger"
                    ].includes(type)
                ) {
                    throw new Error(
                        "type类型必须为：" +
                            "'warning','success','info','primary','danger'"
                    );
                }
                return true;
            }
        },
        icon: {
            type: String
        },
        iconPosition: {
            type: String,
            default: "left",
            validator(type) {
                if (!["left", "right"].includes(type)) {
                    console.error("icon-position属性必须为left | right");
                }
                return true;
            }
        },
        loading:{
          type:Boolean,
          default:false
        }
    },
    computed: {
        btnClass() {
            let classes = [];
            if (this.type) {
                classes.push(`cc-button-${this.type}`);
            }
            if (this.iconPosition) {
              classes.push(`cc-button-${this.iconPosition}`);
            }
            return classes;
        }
    }
};
</script>

<style lang='scss'>
@import "../styles/_var.scss";
$height: 42px;
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.cc-button {
    border-radius: $border-radius;
    border: 1px solid $border-color;
    height: $height;
    line-height: 1;
    font-size: $font-size;
    cursor: pointer;
    padding: 12px 20px;
    display: inline-flex;
    justify-content: center;
    vertical-align: middle;
    user-select: none;
    &:hover {
        border-color: $border-color;
        background-color: $background;
    }
    &:focus,
    &:active {
        color: $active-color;
        border: 1px solid $active-color;
        background-color: $background;
        outline: none;
    }
    @each $type,
        $color
            in (
                primary: $primary,
                success: $success,
                info: $info,
                warning: $warning,
                danger: $danger
            )
    {
        &-#{$type} {
            background: #{$color};
            border: 1px solid #{$color};
            color: #fff;
            fill: #fff;
        }
    }
    @each $type,
        $color
            in (
                primary: $primary-hover,
                success: $success-hover,
                info: $info-hover,
                warning: $warning-hover,
                danger: $danger-hover
            )
    {
        &-#{$type}:hover {
            background: #{$color};
            border: 1px solid #{$color};
            color: #fff;
        }
    }
    @each $type,
        $color
            in (
                primary: $primary-active,
                success: $success-active,
                info: $info-active,
                warning: $warning-active,
                danger: $danger-active
            )
    {
        &-#{$type}:active,
        &-#{$type}:focus {
            background: #{$color};
            border: 1px solid #{$color};
            color: #fff;
        }
    }
    .icon {
        width: 16px;
        height: 16px;
        fill: currentColor;
    }
   
    &-left{
      svg {
        order:1;
      }
      span{
        order:2;
        margin-left: 4px;
      }
    }
    &-right{
      svg {
        order:2;
      }
      span{
        order:1;
        margin-right: 4px;
      }
    }
    &[disabled]{
      cursor: not-allowed;
    }
}
</style>