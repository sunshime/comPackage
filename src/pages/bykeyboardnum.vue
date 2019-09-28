<template>
  <div class="home">
    <div>{{keyword}}</div>
    <keyBoardNum @closekeyboard="closekeyboard" @changekey="changekey" @checkNume="checkNume" />
  </div>
</template>
<script>
import keyBoardNum from "../components/keyboardnum";
import Search from "../components/search";
export default {
  data() {
    return {
      keyword: "" // 自定义键盘输入的值
    };
  },
  components: {
    keyBoardNum,
  },
  methods: {
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