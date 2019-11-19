<template>
  <div id="app">
    <nut-navbar
      @on-click-back="back"
      @on-click-title="title"
      @on-click-more="more"
      :leftShow="true"
      :rightShow="false"
      >App</nut-navbar
    >
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  methods: {
    back() {
      alert("header头部， 点击返回");
    },
    title() {
      alert("header头部， 点击title");
    },
    more() {
      alert("header头部， 点击更多");
    }
  }
};
</script>
