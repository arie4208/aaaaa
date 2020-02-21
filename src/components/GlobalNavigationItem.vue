<template>
  <router-link :to="to" class="GlobalNavigationItem">
    <div>
      <i :class="[icon, 'icon']"></i>
      <span class="title">{{title}}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "GlobalNavigationItem",
  props: {
    to: {
      type: Object,
      default: () => {}
    },
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.GlobalNavigationItem {
  display: block;
  flex: 1;
  color: #5d5d5d;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .icon {
    font-size: 26px;
  }
  .title {
    font-size: 11px;
    display: block;
    margin-top: 3px;
  }

  &.router-link-active {
    background: #ffa514;
    color: #000;
  }
}
</style>