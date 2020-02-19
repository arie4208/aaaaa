<template>
  <div>
    <router-link :to="{ name: 'MainPage' }">메인페이지</router-link>
    <router-link :to="{ name: 'SubPage' }">서브페이지</router-link>
    <router-link :to="{ name: 'TestPage' }">axios테스트페이지</router-link>
    <el-button @click.prevent="$router.push({ name: 'MainPage' })"
      >라우터 메인페이지</el-button
    >
    <el-button @click.prevent="$router.push({ name: 'SubPage' })"
      >라우터 서브페이지</el-button
    >
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
