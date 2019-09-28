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
  </div>
</template>
<script>
import Search from "../components/search";
export default {
  data() {
    return {
      heighting: {
        search: 0
      },
      placeholder: "输入关键字进行搜索",
    };
  },
  components: {
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
    }
  }
};
</script>
<style lang="less" scoped>
@import "../common/style/index.css";
</style>