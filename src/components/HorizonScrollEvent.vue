<template>
  <div class="HorizonScrollEvent">
    <div v-for="item in 5" :key="item">
      <image-container
        src="https://lh3.googleusercontent.com/proxy/QoO8ycm81Tc9BLJ0YLSMmwZz9tSrwvZasbf0LhxXchPszAewaOHI8RjYec3KajkLKvSrJXHE5sa1aUAPPTrBpEzSXI6T410mgUhosv6ag6V-Yfou2xA"
        alt="이벤트"
        :lazy="true"
      />
    </div>
  </div>
</template>

<script>
import ImageContainer from "@/components/ImageContainer";
export default {
  name: "HorizonScrollEvent",
  components: {
    ImageContainer
  }
};
</script>

<style lang="scss" scoped>
.HorizonScrollEvent {
  padding: 0 20px;
  white-space: nowrap;
  overflow-x: auto;
  margin-bottom: 16px;

  div {
    display: inline-block;
    width: 250px;
    height: 100px;
  }
  div + div {
    margin-left: 10px;
  }
}
</style>