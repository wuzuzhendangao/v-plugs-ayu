<template>
  <div class="ayu-hover-tip" :class="{'disabled': disabled}" @mouseenter="hoverEnter()" @mouseleave="hoverLeave()">
    <div class="ayu-hover-tip_part">
      <slot name="hover-part">
        <ayu-icon icon-class="question" style="font-size: 18px;"/>
      </slot>
    </div>
    <transition :name="transition">
      <div class="ayu-hover-tip_tip" :class="[placement, theme]" v-if="isShow">
        <!-- 用户要提示的部分 -->
        <slot name="tip-part"></slot>
        <!-- 箭头 -->
        <div class="tip_arrow"></div>
        <!-- 遮挡箭头在div里面部分 -->
        <div class="tip_block"></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AyuHoverTip',
  props: {
    placement: {
      type: String,
      default: 'top-center' // left/right/top/bottom
    },
    disabled: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String,
      default: 'fade-in-linear' // custom
    },
    theme: {
      type: String,
      default: 'light' // dark
    }
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    hoverEnter() {
      this.isShow = true;
    },
    hoverLeave() {
      this.isShow = false;
    }
  },
}
</script>

<style lang="scss" scoped>
.ayu-hover-tip {
  position: relative;
  display: inline-flex;
  .ayu-hover-tip_part {
    display: flex;
    align-items: center;
  }
  .ayu-hover-tip_tip {
    position: absolute;
    padding: 10px;
    width: max-content;
    white-space: normal;
    word-break: break-all;
    border-radius: 4px;
    border-color: transparent #fff transparent transparent;
    box-shadow: 0 0 4px 0 #babec1;
    font-size: 12px;
    z-index: 2;
    .tip_arrow {
      position: absolute;
      width: 12px;
      height: 12px;
      box-shadow: 0 0 4px 0 #babec1;
    }
    .tip_block {
      position: absolute;
    }
    // :theme light
    &.light {
      background-color: #fff;
      .tip_arrow,
      .tip_block {
        background-color: #fff;
      }
    }
    // :theme dark
    &.dark {
      color: #fff;
      box-shadow: none;
      background-color: rgba($color: #000000, $alpha: 1);
      .tip_arrow {
        box-shadow: none;
        background-color: rgba($color: #000000, $alpha: 1);
      }
      .tip_block {
        background-color: transparent;
      }
    }
  }
  // :placement top/bottom/left/right -center
  .top-center {
    bottom: 100%;
    left: 50%;
    margin-bottom: 10px;
    transform: translateX(-50%);
    .tip_arrow {
      left: 50%;
      top: 100%;
      transform: translateY(-50%) translateX(-50%) rotate(45deg);
    }
    .tip_block {
      left: 50%;
      width: 20px;
      height: 10px;
      transform: translateX(-50%);
    }
  }
  .bottom-center {
    top: 100%;
    left: 50%;
    margin-top: 10px;
    transform: translateX(-50%);
    .tip_arrow {
      bottom: 100%;
      left: 50%;
      transform: translateY(50%) translateX(-50%) rotate(45deg);
    }
    .tip_block {
      left: 50%;
      bottom: 100%;
      width: 20px;
      height: 10px;
      transform: translateX(-50%) translateY(100%);
    }
  }
  .left-center {
    bottom: 50%;
    right: 100%;
    margin-right: 10px;
    transform: translateY(50%);
    .tip_arrow {
      left: 100%;
      top: 50%;
      transform: translateY(-50%) translateX(-50%) rotate(45deg);
    }
    .tip_block {
      left: 100%;
      top: 50%;
      width: 10px;
      height: 20px;
      transform: translateX(-100%) translateY(-50%);
    }
  }
  .right-center {
    bottom: 50%;
    left: 100%;
    margin-left: 10px;
    transform: translateY(50%);
    .tip_arrow {
      left: 0%;
      top: 50%;
      transform: translateY(-50%) translateX(-50%) rotate(45deg);
    }
    .tip_block {
      left: 0%;
      top: 50%;
      width: 10px;
      height: 20px;
      transform: translateY(-50%);
    }
  }
}
</style>

