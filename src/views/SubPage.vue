<template>
  <div>
    <navi />
    <div>서브페이지</div>
    <el-button type="primary" @click.prevent="commitChangeText('뮤테이션으로 변경')">뮤테이션으로 변경</el-button>
    <el-button @click.prevent="chageText('액션으로 변경')">액션으로 변경</el-button>
    <p>{{text}}</p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "SubPage",
  computed: {
    ...mapState("test", ["text"])
  },
  methods: {
    ...mapMutations("test", ["commitChangeText"]),
    ...mapActions("test", ["chageText"])
  }
};
</script>

<style lang="scss" scoped>
</style>