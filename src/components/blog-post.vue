<template>
  <div class="blog-container">
    <h2 class="blog-title">{{ news.title }}</h2>
    <div class="blog-desc" v-html="news.desc"></div>
    <el-row class="tc mgt-15">
      <el-col :span="6" :offset="4">
        <el-button
          type="primary"
          plain
          @click="$emit('addFont', { num: Math.random() })"
          >增大字体</el-button
        >
      </el-col>
      <el-col :span="4">
        <input
          class="el-input__inner tc"
          placeholder="请输入字体大小"
          :value="value"
          @input="$emit('input', Number($event.target.value))"
        />
      </el-col>
      <el-col :span="6">
        <el-button
          type="primary"
          plain
          @click="$emit('delFont', { num: Math.random() })"
          >减小字体</el-button
        >
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Number,
      required: false
    },
    news: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
@import "assets/components/blog-post.scss";
</style>
