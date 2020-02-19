<template>
  <div class="WideIcon">
    <img src="https://i.pinimg.com/originals/d3/42/4c/d3424c88bf1a0996c32b045ffc38cc49.jpg" alt />
    <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
    <p>게임이름</p>
    <p>0/18000RB</p>
  </div>
</template>

<script>
export default {
  name: "WideIcon"
};
</script>

<style lang="scss" scoped>
.WideIcon {
  width: 200px;
  margin-right: 10px;

  img {
    display: block;
    width: 200px;
    height: auto;
  }
}
</style>