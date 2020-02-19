<template>
  <div class="ScrollHorizonIcon">
    <game-icon></game-icon>
    <game-icon></game-icon>
    <game-icon></game-icon>
    <game-icon></game-icon>
    <game-icon></game-icon>
  </div>
</template>

<script>
import GameIcon from "@/components/GameIcon";
export default {
  name: "ScrollHorizonIcon",
  components: {
    GameIcon
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