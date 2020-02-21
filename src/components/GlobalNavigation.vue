<template>
  <div class="GlobalNavigation">
    <global-navigation-item :to="{name:'EventPage'}" title="EVENT" icon="el-icon-s-goods" />
    <global-navigation-item :to="{name:'GamePage'}" title="GAME" icon="el-icon-s-ticket" />
    <global-navigation-item :to="{name:'MainPage'}" title="RB" icon="el-icon-s-opportunity" />
    <global-navigation-item :to="{name:'ShopPage'}" title="SHOP" icon="el-icon-s-shop" />
    <global-navigation-item :to="{name:'BagPage'}" title="BAG" icon="el-icon-s-cooperation" />
  </div>
</template>

<script>
import GlobalNavigationItem from "@/components/GlobalNavigationItem";
export default {
  name: "GlobalNavigation",
  components: {
    GlobalNavigationItem
  }
};
</script>

<style lang="scss" scoped>
.GlobalNavigation {
  height: 55px;
  background: #ebebeb;
  display: flex;
}
</style>