<template>
  <div ckass="MainPage">
    <navi />
    <div class="page-component__scroll">
      <div class="el-scrollbar__wrap">
        <member-info />
        <el-carousel trigger="click" height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
        <scroll-horizon-icon />
        <el-button>상품검색</el-button>
        <scroll-horizon-wide-icon></scroll-horizon-wide-icon>
        <scroll-horizon-icon />
        <scroll-horizon-wide-icon></scroll-horizon-wide-icon>
        <footer-fix></footer-fix>
      </div>
    </div>
    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
  </div>
</template>

<script>
import MemberInfo from "@/components/MemberInfo";
import ScrollHorizonIcon from "@/components/ScrollHorizonIcon";
import ScrollHorizonWideIcon from "@/components/ScrollHorizonWideIcon";
import FooterFix from "@/components/FooterFix";
export default {
  name: "MainPage",
  components: {
    MemberInfo,
    ScrollHorizonIcon,
    ScrollHorizonWideIcon,
    FooterFix
  }
};
</script>

<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-scrollbar__wrap {
  height: 100vh;
}
</style>