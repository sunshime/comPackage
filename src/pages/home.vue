<template>
  <div class="home">
    <div class="bodys">
      <div class="bysearch" @click="keyBoard">数字键盘</div>
      <div class="bygetdate" @click="getDate">左右滑动选择日期</div>
      <div class="bydrag" @click="drag">拖拽图片</div>
      <div class="byqcode" @click="qcode">生成二维码</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: this.$route.meta,
      heighting: {
        header: 0
      }
    };
  },
  components: {},
  methods: {
    backing() {
      console.log("backing=====================返回");
    },
    getheight(value) {
      this.heighting["header"] = value;
    },
    keyBoard() {
      this.$router.push("keyBoard");
    },
    getDate() {
      this.$router.push("getDate");
    },
    drag() {
      this.$router.push("drag");
    },
    qcode() {
      this.$router.push("getQcode");
    }
  }
};
</script>
<style lang="less" scoped>
@import "../common/style/index.css";
</style>