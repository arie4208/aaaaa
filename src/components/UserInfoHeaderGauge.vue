<template>
  <div class="UserInfoHeaderGauge">
    <div class="tri" :style="{ left: gaugeWidth }"></div>
    <div class="gaugeWrap">
      <div class="gauge" :style="{ width: gaugeWidth }"></div>
    </div>
    <div class="flexBox">
      <div>오늘의 RB</div>
      <div>{{ commaGetPoint }} / {{ commaGoalPoint }} RB ></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "UserInfoHeaderGauge",
  computed: {
    ...mapState("userInfo", ["getPoint", "goalPoint"]),
    commaGetPoint() {
      return this.addComma(this.getPoint);
    },
    commaGoalPoint() {
      return this.addComma(this.goalPoint);
    },
    gaugeWidth() {
      return `${(this.getPoint * 100) / this.goalPoint}%`;
    }
  }
};
</script>

<style lang="scss" scoped>
.UserInfoHeaderGauge {
  position: relative;
  padding-top: 4px;

  .tri {
    width: 0px;
    height: 0px;
    border-top: 4px solid none;
    border-bottom: 4px solid #ffa514;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
    position: absolute;
    top: 0;
    transform: rotate(180deg) translateX(4px);
    z-index: 99;
  }

  .gaugeWrap {
    height: 20px;
    background: #9d9d9d;
    border-radius: 5px;
    overflow: hidden;
    position: relative;

    .gauge {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      background: #ffa514;
    }
  }

  .flexBox {
    position: absolute;
    left: 0;
    top: 4px;
    right: 0;
    bottom: 0;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10px 0 15px;

    div {
      font-weight: bold;
      font-size: 12px;
    }
  }
}
</style>
