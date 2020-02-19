<template>
  <div>
    <navi />

    <el-button type="success" @click.prevent="loadContact"
      >연락처를 불러온다.</el-button
    >

    <ul>
      <li v-for="user in contact" :key="user.no">
        {{ user }}
        <div>no: {{ user.no }}</div>
        <div>name: {{ user.name }}</div>
        <div>tel: {{ user.tel }}</div>
        <div>address: {{ user.address }}</div>
        <el-image
          style="width: 100px; height: 100px"
          :src="user.photo"
          fit="fit"
        ></el-image>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TestPage",
  data() {
    return {
      contact: []
    };
  },
  methods: {
    async loadContact() {
      const res = await axios({
        url: "http://sample.bmaster.kro.kr/contacts",
        method: "get"
      });
      this.contact = res.data.contacts;
    }
  }
};
</script>

<style lang="scss" scoped></style>
