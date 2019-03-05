<template>
  <div class="page">
    <button-counter></button-counter>
  </div>
</template>
<script>
import buttonCounter from "components/button-counter.vue";
export default {
  components: {
    "button-counter": buttonCounter
  },
  data() {
    return {};
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestory() {
    console.log("beforeDestory");
  },
  destoryed() {
    console.log("destory");
  },
  watch: {},
  computed: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
@import "assets/views/base/base.scss";
</style>
