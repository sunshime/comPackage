<template>
  <div class="home">
    <div class="bodys">
      <div class="bysearch" @click="keyBoard">数字键盘</div>
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
  components: {
  },
  methods: {
    backing() {
      console.log("backing=====================返回");
    },
    getheight(value) {
      this.heighting["header"] = value;
    },
    keyBoard(){
        this.$router.push('keyBoard');
    },
  }
};
</script>
<style lang="less" scoped>
@import "../common/style/index.css";
</style>