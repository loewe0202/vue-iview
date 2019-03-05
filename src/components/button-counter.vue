<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>
<script>
export default {
  // props: ["count"],
  props: {
    count: {
      default: 0
    }
  },
  data() {
    return {};
  }
};
</script>
