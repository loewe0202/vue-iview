<template>
  <div class="page">
    <a href="http://www.oppo.com/cn" title="oppo" target="_blank"
      >oppo.com(_blank)</a
    >
    <a href="https://www.opposhop.cn/products/516.html" title="A5s">A5s</a>
    <a href="http://www.oppo.com/cn" title="oppo">oppo.com</a>
    <div class="uaStyle">
      {{ userAgent }}
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      userAgent: navigator.userAgent
    };
  }
};
</script>
<style lang="scss" scoped>
.page {
  padding: 15px;
  text-align: justify;
  line-height: 1.8;

  a {
    display: block;
    text-decoration: none;
  }

  .uaStyle {
    color: #409eff;
    word-break: break-all;
  }
}
</style>
