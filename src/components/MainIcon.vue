<template>
  <div class="MainIcon">
    <div :class="['image', {yellowBorder}]">
      <image-container :src="imageUrl" :alt="gameName" :lazy="true" />
    </div>

    <div v-if="bullet" class="bullet"></div>

    <default-gauge v-if="maxValue===0 ? false : true" :get-value="getValue" :max-value="maxValue" />

    <div class="text">
      <div class="bold">
        <slot name="title"></slot>
      </div>
      <div class="default">
        <slot name="text"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import ImageContainer from "@/components/ImageContainer";
import DefaultGauge from "@/components/DefaultGauge";
export default {
  name: "MainIcon",
  components: {
    ImageContainer,
    DefaultGauge
  },
  props: {
    gameName: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    bullet: {
      type: Boolean,
      default: false
    },
    getValue: {
      type: Number,
      default: 0
    },
    maxValue: {
      type: Number,
      default: 0
    }
  },
  computed: {
    yellowBorder() {
      console.log(this.getValue != 0);
      console.log(this.maxValue != 0);
      console.log(this.getValue === this.maxValue);

      if (
        this.getValue != 0 &&
        this.maxValue != 0 &&
        this.getValue === this.maxValue
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.MainIcon {
  position: relative;
  width: 76px;

  .image {
    width: 100%;
    height: 76px;
    display: block;
    border: 2px solid #c4c4c4;
    box-sizing: border-box;

    &.yellowBorder {
      border: 2px solid #ffd914 !important;
    }
  }

  .bullet {
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    background: url(~@/assets/icon_hot.png) no-repeat center center;
    background-size: 100% 100%;
  }

  .text {
    background: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 29px;
    font-weight: bold;
    font-size: 11px;
    flex-wrap: wrap;

    .bold {
      color: #535353;
    }
    .default {
      color: #8f8f8f;
    }
  }
}
</style>