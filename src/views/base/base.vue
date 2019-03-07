<template>
  <div class="page">
    <form @submit.prevent="onSubmit">
      <div>
        <p>{{ message }}</p>
        <p>{{ reversedMessage }}</p>
      </div>
      <span :title="message1">鼠标悬停几秒钟查看此处动态绑定的提示信息！</span>
      <p v-if="seen" class="uaStyle">{{ userAgent }}</p>
      <ol>
        <list
          v-for="(todo, index) in todos"
          :key="index"
          :index="index"
          :todo="todo"
        ></list>
      </ol>
      <el-button @click="reverseMessageFn">逆转消息</el-button>
      <el-input
        class="mgt-15"
        v-model="input"
        placeholder="请输入内容"
        @blur="addItem"
        @input="inputFn"
      ></el-input>
      <template>
        <p>选择你喜欢的语言</p>
        <el-radio v-model="radio" label="javascript">javascript</el-radio>
        <el-radio v-model="radio" label="php">php</el-radio>
        <el-radio v-model="radio" label="python">python</el-radio>
      </template>
      <template>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 B"></el-checkbox>
          <el-checkbox label="复选框 C"></el-checkbox>
          <el-checkbox label="禁用" disabled></el-checkbox>
          <el-checkbox label="选中且禁用" disabled></el-checkbox>
        </el-checkbox-group>
      </template>
      <div class="origin-input">
        <el-row>
          <el-col :span="3">
            <input
              type="checkbox"
              id="jack"
              value="Jack"
              v-model="checkedNames"
            />
            <label for="jack">Jack</label>
          </el-col>
          <el-col :span="3">
            <input
              type="checkbox"
              id="john"
              value="John"
              v-model="checkedNames"
            />
            <label for="john">John</label>
          </el-col>
          <el-col :span="3">
            <input
              type="checkbox"
              id="mike"
              value="Mike"
              v-model="checkedNames"
            />
            <label for="mike">Mike</label>
          </el-col>
          <el-col :span="24">
            <span>Checked names: {{ checkedNames }}</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">
            <input type="radio" id="one" value="One" v-model="picked" />
            <label for="one">One</label>
          </el-col>
          <el-col :span="3">
            <input type="radio" id="two" value="Two" v-model="picked" />
            <label for="two">Two</label>
          </el-col>
          <el-col :span="3">
            <input type="radio" id="three" value="Three" v-model="picked" />
            <label for="three">Three</label>
          </el-col>
          <el-col :span="24">
            <span>Picked: {{ picked }}</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <select v-model="selected">
              <option
                v-for="(item, index) in options"
                :disabled="item.disabled"
                :key="index"
                >{{ item.text }}</option
              >
            </select>
            <span>Selected: {{ selected }}</span>
          </el-col>
          <el-col :span="24" class="mgt-15">
            <select v-model="selected2" multiple style="width: 100px;">
              <option
                v-for="(item, index) in options"
                :disabled="item.disabled"
                :key="index"
                >{{ item.text }}</option
              >
            </select>
          </el-col>
          <el-col :span="24">
            <span>Selected: {{ selected2 }}</span>
          </el-col>
        </el-row>
        <template>
          <el-row>
            <el-col :span="24">
              <!-- 在“change”时而非“input”时更新 -->
              <input v-model.lazy.trim="lazy_msg" class="el-input__inner" />
            </el-col>
            <el-col :span="24">
              <span>{{ lazy_msg }}</span>
            </el-col>
            <el-col :span="24" class="mgt-15">
              <input
                v-model.number="age"
                type="number"
                class="el-input__inner"
              />
            </el-col>
            <el-col :span="24">
              <span>年龄：{{ age }}</span>
            </el-col>
          </el-row>
        </template>
      </div>
      <el-input class="mgt-15" type="submit" value="提交"></el-input>
    </form>
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
      age: 24,
      lazy_msg: null,
      selected2: [],
      options: [
        {
          text: "请选择",
          value: "",
          disabled: true
        },
        {
          text: "One",
          value: "A",
          disabled: false
        },
        {
          text: "Two",
          value: "B",
          disabled: false
        },
        {
          text: "Three",
          value: "C",
          disabled: false
        }
      ],
      selected: "请选择",
      picked: "Two",
      checkedNames: [],
      checkList: ["选中且禁用", "复选框 A"],
      radio: "javascript",
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
    this.reverseMessageFn = this._.debounce(this.reverseMessageFn, 100); //防抖

    this.inputFn = this._.throttle(this.inputFn, 100); //节流

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
    checkList(newVal, oldVal) {
      console.log("checkList: ", newVal, oldVal);
    },
    radio(newVal, oldVal) {
      console.log("radio: ", newVal, oldVal);
    },
    input(newVal, oldVal) {
      console.log("input: ", newVal, oldVal);
    }
  },
  computed: {
    reversedMessage() {
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  },
  methods: {
    onSubmit(event) {
      console.log("submit: ", event);
    },
    reverseMessageFn() {
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
@import "assets/views/base/base.scss";
</style>
