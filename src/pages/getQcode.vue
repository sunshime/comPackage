<template>
  <div class="getqrcode">
    <Qrcode sid="url" :text="codeText" :swidth="swidth"></Qrcode>
  </div>
</template>
<script>
import Qrcode from "../components/qrcode";
export default {
  data() {
    return {
      url: "https://github.com/sunshime/comPackage",
      codeText: ""
    };
  },
  components: {
    Qrcode
  },
  computed: {
    // 修改二维码的宽高
    swidth() {
      return (window.innerWidth * 0.9 * 0.4 * 560) / window.innerWidth / 20; //370*320/(window.innerWidth)/20
    }
  }
};
</script>
<style lang="less">
@import "../common/style/index.css";
</style>