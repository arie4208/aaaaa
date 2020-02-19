<template>
  <div class="GameIcon">
    <img src="https://encdn.ldmnq.com/ldstore/kr/com.nexon.nsc.maplem-0.webp" alt />
    <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
    <p>게임이름</p>
    <p>0/18000RB</p>
  </div>
</template>

<script>
export default {
  name: "GameIcon"
};
</script>

<style lang="scss" scoped>
.GameIcon {
  width: 100px;
  margin-right: 10px;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
}
</style>