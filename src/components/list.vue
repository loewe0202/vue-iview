<template>
  <li>
    <div :id="'list' + index">{{ todo.text }}</div>
  </li>
</template>
<script>
export default { props: ["todo", "index"] };
</script>
