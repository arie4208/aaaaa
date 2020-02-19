<template>
  <div class="ScrollHorizonIcon">
    <wide-icon></wide-icon>
    <wide-icon></wide-icon>
    <wide-icon></wide-icon>
    <wide-icon></wide-icon>
    <wide-icon></wide-icon>
  </div>
</template>

<script>
import WideIcon from "@/components/WideIcon";
export default {
  name: "ScrollHorizonIcon",
  components: {
    WideIcon
  }
};
</script>

<style lang="scss" scoped>
.ScrollHorizonIcon {
  display: flex;
  overflow-y: hidden;
  overflow-x: auto;
}
</style>