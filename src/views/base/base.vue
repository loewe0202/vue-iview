<template>
  <div class="page">
    <div>
      {{ message }}
    </div>
    <span :title="message1">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
    <p v-if="seen" class="uaStyle">{{ userAgent }}</p>
    <ol>
      <list
        v-for="(todo, index) in todos"
        :key="index"
        :index="index"
        :todo="todo"
      ></list>
    </ol>
    <el-button @click="reverseMessage">逆转消息</el-button>
    <h3></h3>
    <el-input
      v-model="input"
      placeholder="请输入内容"
      @blur="addItem"
      @input="inputFn"
    ></el-input>
  </div>
</template>
<script>
import list from "components/list.vue";
export default {
  components: {
    list
  },
  data() {
    return {
      message: "Hello Vue!",
      userAgent: navigator.userAgent,
      message1: "页面加载于 " + new Date().toLocaleString(),
      seen: false,
      todos: [
        {
          text: "学习 JavaScript"
        },
        {
          text: "学习 Vue"
        },
        {
          text: "学习 webpack"
        }
      ],
      input: null
    };
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    this.reverseMessage = this._.debounce(this.reverseMessage, 100); // 防抖
    this.inputFn = this._.throttle(this.inputFn, 100); // 节流
    setTimeout(() => {
      this.seen = !this.seen;
    }, 3000);
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
    input(newVal, oldVal) {
      console.log(newVal, oldVal);
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    },
    inputFn() {
      console.log(this.input);
    },
    addItem() {
      if (this.input) {
        this.todos.push({
          text: this.input
        });
        this.input = null;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.page {
  padding: 15px;
  text-align: justify;
  line-height: 1.8;
}

a {
  display: block;
  text-decoration: none;
}

.uaStyle {
  color: #409eff;
  word-break: break-all;
}
</style>
