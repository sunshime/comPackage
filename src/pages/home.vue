<template>
  <div class="home">
    <div class="search">
      <Search
        :placeholder="placeholder"
        @height="getsearchheight"
        @clearText="clearText"
        @submit="submit"
      />
    </div>
    <div>{{keyword}}</div>
    <keyBoard @closekeyboard="closekeyboard" @changekey="changekey" @checkNume="checkNume" />
  </div>
</template>
<script>
import keyBoard from "../components/keyboard";
import Search from "../components/search";
export default {
  data() {
    return {
      heighting: {
        search: 0
      },
      placeholder: "输入关键字进行搜索",
      keyword: "" // 自定义键盘输入的值
    };
  },
  components: {
    keyBoard,
    Search
  },
  methods: {
    getsearchheight(value) {
      console.log("搜索框的高度---->", value);
      this.heighting["search"] = value;
    },
    clearText() {
      console.log("263764724679");
    },
    submit(value) {
      console.log("要搜索的内容---->", value);
    },
    // 
    closekeyboard(value) {
      console.log("value--closekeyboard-->", value);
    },
    changekey(value) {
      console.log("value-changekey--->", value);
    },
    // 
    checkNume(value) {
      console.log("value-checkNume--->", value);
    }
  }
};
</script>
<style lang="less" scoped>
@import "../common/style/index.css";
</style>