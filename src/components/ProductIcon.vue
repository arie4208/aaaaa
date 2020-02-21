<template>
  <div class="ProductIcon">
    <div class="image">
      <image-container
        src="https://img.danawa.com/prod_img/500000/456/722/img/5722456_1.jpg?shrink=500:500&_v=20171213091619"
        alt="상품이미지"
        :lazy="true"
      />
    </div>
  </div>
</template>

<script>
import ImageContainer from "@/components/ImageContainer";
export default {
  name: "ProductIcon",
  components: {
    ImageContainer
  }
};
</script>

<style lang="scss" scoped>
.ProductIcon {
}
</style>