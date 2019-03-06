<template>
  <div class="page">
    <el-row :gutter="20">
      <el-col :span="8">
        <button-counter :number="12">语文</button-counter>
      </el-col>
      <el-col :span="8">
        <button-counter :number="22">数学</button-counter>
      </el-col>
      <el-col :span="8">
        <button-counter :number="32">物理</button-counter>
      </el-col>
    </el-row>
    <div :style="{ fontSize: postFontSize + 'em' }">
      <table>
        <tr
          is="blog-post"
          v-for="(item, index) in articles"
          :key="index + 1"
          :news="item"
          v-model="searchText"
          @addFont="addFontFn"
          @delFont="delFontFn"
        ></tr>
      </table>

      <blog-post
        v-for="(item, index) in articles"
        :key="index + 1"
        :news="item"
        v-model="searchText"
        @addFont="addFontFn"
        @delFont="delFontFn"
      ></blog-post>
    </div>
  </div>
</template>
<script>
import buttonCounter from "components/button-counter.vue";
import blogPost from "components/blog-post.vue";
export default {
  components: {
    "button-counter": buttonCounter,
    blogPost
  },
  data() {
    return {
      searchText: null,
      postFontSize: 1,
      articles: [
        {
          title: "华尔街开始对财经新闻数据分析",
          desc:
            "旧金山联储的经济学家发现，衡量新闻报道所含情绪的指标与同时期商业周期指标之间存在很强关联性。同时，新闻报道中所隐含的情绪变化能预测未来经济活动。经济学家们选取了1980年1月至2015年4月美国16家主要报纸的经济新闻报道和社论，再依据特定标准从中挑选大约23.1万篇文章作为研究对象。"
        },
        {
          title: "英国消费者紧捂钱袋 “脱欧”阴影拖累英国经济",
          desc:
            "英国零售商协会最新数据显示，“脱欧”阴影致使英国消费者今年2月紧捂钱袋，预示严重不确定性在2019年年初显现对英国经济的拖累效应。英国《金融时报》5日援引零售商协会数据报道，今年2月，英国零售额增长0.5%。这一数字2018年同期为1.6%。"
        }
      ]
    };
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
  watch: {
    searchText(newVal) {
      this.postFontSize = Number((this.postFontSize + newVal).toFixed(1));
    }
  },
  computed: {},
  methods: {
    addFontFn(params) {
      // 字体改变
      this.postFontSize = Number((this.postFontSize + params.num).toFixed(1));
    },
    delFontFn(params) {
      // 字体-
      let fontSize = Number((this.postFontSize - params.num).toFixed(1));
      if (fontSize <= 1) {
        fontSize = 1;
      }
      this.postFontSize = fontSize;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "assets/views/base/base.scss";
</style>
