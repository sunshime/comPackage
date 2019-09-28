<template>
  <div class="home">
    <Aheader :name="name" @backing="backing" @height="getheight" />
    <div class="bodys">
      <div class="bysearch" @click="search">搜索框的使用例子</div>
      <div class="bykeyboardnum" @click="keyboardnum">单纯的数字键盘的使用例子</div>
      <div class="bykeyboardasmd" @click="keyboardasmd">加减乘除数字键盘的使用例子</div>
    </div>
  </div>
</template>
<script>
import Aheader from "../components/header";
export default {
  data() {
    return {
      name: this.$route.meta,
      heighting: {
        header: 0
      }
    };
  },
  components: {
    Aheader
  },
  methods: {
    backing() {
      console.log("backing=====================返回");
    },
    getheight(value) {
      this.heighting["header"] = value;
    },
    search(){
        this.$router.push('bysearch');
    },
    keyboardnum(){
        this.$router.push('bykeyboardnum');
    },
    keyboardasmd(){
        this.$router.push('bykeyboardasmd');
    }
  }
};
</script>
<style lang="less" scoped>
@import "../common/style/index.css";
</style>