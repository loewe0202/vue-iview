<template>
  <div>
    <h3 class="tc">
      <slot></slot>
    </h3>
    <button @click="count += Math.floor(Math.random() * 10)">
      Star Number: {{ countFn }}
    </button>
  </div>
</template>
<script>
export default {
  // props: ["count"],
  props: {
    number: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      count: 0
    };
  },
  computed: {
    countFn() {
      return this.number + this.count;
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
@import "assets/components/button-counter.scss";
</style>
