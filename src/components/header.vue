<template>
  <header id="c-header" class="c-header">
    <i v-if="back" class="header-back iconfont icon-back"></i>
    {{ _title }}
    <i v-if="icon" class="header-btn-icon iconfont icon-list"></i>
  </header>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: false
    },
    back: {
      type: Boolean,
      required: false,
      default() {
        return true;
      }
    },
    icon: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {};
  },
  computed: {
    _title() {
      return this.title || "loewe";
    }
  }
};
</script>
<style lang="scss" scoped>
@import "assets/components/header.scss";
</style>
