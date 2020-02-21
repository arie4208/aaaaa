<template>
  <div class="HorizonScrollMainIcon">
    <div v-for="item in 5" :key="item">
      <main-icon
        game-name="게임명"
        :get-value="100"
        :max-value="1000"
        :bullet="true"
        image-url="https://image.winudf.com/v2/image1/Y29tLm5ldG1hcmJsZS5uMmJhZHVrX2ljb25fMTU2NDQ2NDA0MF8wMDM/icon.png?w=170&fakeurl=1"
      >
        <template slot="title">배틀그라운드</template>
        <template slot="text">서브타이틀</template>
      </main-icon>
    </div>
  </div>
</template>

<script>
import MainIcon from "@/components/MainIcon";
export default {
  name: "HorizonScrollMainIcon",
  components: {
    MainIcon
  }
};
</script>

<style lang="scss" scoped>
.HorizonScrollMainIcon {
  padding: 0 20px;
  white-space: nowrap;
  overflow-x: auto;
  margin-bottom: 16px;

  div {
    display: inline-block;
  }
  div + div {
    margin-left: 10px;
  }
}
</style>