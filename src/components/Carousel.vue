<template>
  <div class="Carousel">
    <el-carousel trigger="click" height="164px">
      <el-carousel-item v-for="carousel in imageList" :key="carousel.id">
        <!-- type:default시작 -->
        <template v-if="carousel.type === 'default'">
          <router-link :to="carousel.urlInfo.router">
            <image-container :src="carousel.image" :alt="carousel.title" :lazy="false" />
          </router-link>
        </template>
        <!-- type:default종료 -->

        <!-- type:_blank시작 -->
        <template v-if="carousel.type === '_blank'">
          <a :href="carousel.urlInfo.url" target="_blank">
            <image-container :src="carousel.image" :alt="carousel.title" :lazy="false" />
          </a>
        </template>
        <!-- type:_blank종료 -->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import ImageContainer from "@/components/ImageContainer";
import "@/styles/Carousel.scss";
export default {
  name: "Carousel",
  components: {
    ImageContainer
  },
  props: {
    imageList: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.Carousel {
  margin-bottom: 10px;

  a {
    display: block;
    width: 100%;
    height: 150px;
    text-decoration: none;
  }
}
</style>