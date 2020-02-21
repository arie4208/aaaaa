<template>
  <el-image class="ImageContainer" :src="src" :alt="alt" fit="cover" :lazy="lazy">
    <div slot="placeholder" class="image-slot">{{alt}}</div>
    <div slot="error" class="image-slot">
      <i class="el-icon-picture-outline"></i>
    </div>
  </el-image>
</template>

<script>
export default {
  name: "ImageContainer",
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    lazy: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.ImageContainer {
  display: block;
  width: 100%;
  height: 100%;
}
</style>