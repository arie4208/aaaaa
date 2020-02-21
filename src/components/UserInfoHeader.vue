<template>
  <div class="UserInfoHeader">
    <!-- 유저정보표시시작 -->
    <div class="flexBox">
      <el-image class="profileImage" :src="profileImage" fit="cover"></el-image>
      <div>
        <div class="title">REWARDBRIDGE</div>
        <div class="rbPoint">{{ commaRbPoint }} RB</div>
      </div>
    </div>
    <!-- 유저정보표시종료 -->

    <!-- 유저획득포인트시작 -->
    <user-info-header-gauge />
    <!-- 유저획득포인트종료 -->
  </div>
</template>

<script>
import UserInfoHeaderGauge from "@/components/UserInfoHeaderGauge";
import { mapState } from "vuex";
export default {
  name: "UserInfoHeader",
  components: {
    UserInfoHeaderGauge
  },
  computed: {
    ...mapState("userInfo", [
      "profileImage",
      "rbPoint",
      "goalPoint",
      "getPoint"
    ]),
    commaRbPoint() {
      return this.addComma(this.rbPoint);
    }
  }
};
</script>

<style lang="scss" scoped>
.UserInfoHeader {
  padding: 7px 15px 10px 15px;
  background: #fff;

  // 유저정보 표시
  .flexBox {
    display: flex;
    align-items: center;

    .profileImage {
      width: 49px;
      height: 46px;
      border-radius: 100%;
      overflow: hidden;
      border: 2px solid #c4c4c4;
      margin-right: 8px;
    }
    .title {
      font-size: 12px;
      line-height: 14px;
    }
    .rbPoint {
      font-weight: bold;
      font-size: 18px;
      line-height: 20px;
    }
  }
}
</style>
