<template>
  <div class="keyboards">
    <div class="input">
      <span>{{inputVal}}</span>
      <span class="icon"></span>
    </div>
    <div class="key">
      <keyBoard @closekeyboard="closekeyboard" @changekey="changekey" @makesure="makesure"></keyBoard>
    </div>
  </div>
</template>
<script>
import keyBoard from "../components/keyboard";
export default {
  data() {
    return {
      inputVal: "" // 输入的内容
    };
  },
  components: {
    keyBoard
  },
  methods: {
    closekeyboard(val) {
      console.log("val****", val);
    },
    changekey(val) {
      console.log("val---->", val);
      let value = val.join("");
      this.inputVal = value;
    },
    makesure(val) {
      console.log("val++++", val);
      let value = val.join("");
      this.inputVal = value;
    }
  }
};
</script>
<style lang="less">
@import "../common/style/index.css";
</style>