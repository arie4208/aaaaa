<template>
  <div class="PremiumIcon">
    <div class="image">
      <image-container :src="imageUrl" :alt="gameName" :lazy="true" />
    </div>

    <div v-if="bullet" class="bullet"></div>

    <default-gauge v-if="maxValue===0 ? false : true" :get-value="getValue" :max-value="maxValue" />

    <div class="text">
      <div class="bold">[프리미엄]</div>
      <span class="bold">{{getValue}} RB</span>
      <span class="default">/{{maxValue}} RB</span>
    </div>
  </div>
</template>

<script>
import ImageContainer from "@/components/ImageContainer";
import DefaultGauge from "@/components/DefaultGauge";
import MainIcon from "@/components/MainIcon";
export default {
  name: "PremiumIcon",
  components: {
    ImageContainer,
    DefaultGauge
  },
  extends: MainIcon
};
</script>

<style lang="scss" scoped>
.PremiumIcon {
  position: relative;
  width: 100%;

  .image {
    width: 100%;
    height: 72px;
    display: block;
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
    font-weight: bold;
    font-size: 11px;
    text-align: center;
    line-height: 12px;
    padding-top: 3px;

    .bold {
      color: #535353;
    }
    .default {
      color: #8f8f8f;
    }
  }
}
</style>