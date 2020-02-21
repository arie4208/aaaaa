<template>
  <div class="DefaultGauge">
    <div class="gauge" :style="{width:percentWidth}"></div>
  </div>
</template>

<script>
export default {
  name: "DefaultGauge",
  props: {
    getValue: {
      type: Number,
      required: true
    },
    maxValue: {
      type: Number,
      required: true
    }
  },
  computed: {
    percentWidth() {
      return `${Math.floor((this.getValue * 100) / this.maxValue)}%`;
    }
  }
};
</script>

<style lang="scss" scoped>
.DefaultGauge {
  width: 100%;
  height: 5px;
  position: relative;
  background: #68696e;

  .gauge {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background: #ffa514;
  }
}
</style>