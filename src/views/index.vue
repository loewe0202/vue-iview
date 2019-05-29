<template>
  <div class="page" id="page">
    <c-header :title="title" :back="back" />
    <div class="container">
      1311222323
    </div>
  </div>
</template>
<script>
import header from "components/header.vue";
export default {
  name: "home",
  components: {
    "c-header": header
  },
  data() {
    return {
      back: false,
      title: "首页"
    };
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.page {
  padding: 44px 0 0;
}
</style>
