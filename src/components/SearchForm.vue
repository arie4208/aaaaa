<template>
  <div class="SearchForm">
    <input
      v-model="searchText"
      type="text"
      placeholder="어떤 상품을 찾으세요?"
      class="inputText"
      @keypress.enter="searchForm"
    />
    <div class="button" @click="searchForm">
      <i class="el-icon-search"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchForm",
  data() {
    return {
      searchText: ""
    };
  },
  methods: {
    searchForm() {
      alert("검색하기");
    }
  }
};
</script>

<style lang="scss" scoped>
.SearchForm {
  padding: 0 20px;
  position: relative;
  margin-bottom: 16px;

  .inputText {
    display: block;
    width: 100%;
    height: 35px;
    background: #efefef;
    border-radius: 5px;
    border: none;
    box-sizing: border-box;
    padding: 0 40px 0 10px;
    outline: none;
  }

  .button {
    color: #8a8a8a;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
    position: absolute;
    right: 30px;
    top: 0;
    height: 35px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>