<template>
  <div class="SubTitle">
    <div class="title">{{title}}</div>
    <div v-if="url" class="button" @click.prevent="urlMove(url)">더보기</div>
  </div>
</template>

<script>
export default {
  name: "SubTitle",
  props: {
    title: {
      type: String,
      required: true
    },
    url: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    // 링크이동
    urlMove(url) {
      this.$router.push(url);
    }
  }
};
</script>

<style lang="scss" scoped>
.SubTitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 13px;

  .title {
    font-weight: bold;
    font-size: 14px;

    &:after {
      content: " >";
    }
  }

  .button {
    width: 90px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid #dedede;
    box-sizing: border-box;
    border-radius: 6px;
    font-size: 14px;
    color: #7c7c7c;
  }
}
</style>