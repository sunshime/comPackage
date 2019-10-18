<template>
  <div class="drag">
    <div class="content">
      <div class="small-picture">
        <p>图片可拖拽排序</p>
        <ul class="pc-show">
          <li
            class="showpc"
            v-for="(item,index) in masterImgList"
            :key="index"
            v-dragging="{ item: item, list: masterImgList, group: 'index' }"
            :style="'height:'+heighting+'px'"
          >
            <div>
              <div class="picture">
                <img :src="item" :style="'height:'+heighting+'px'" alt />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      masterImgList: [
        "http://img1.imgtn.bdimg.com/it/u=209805106,3265813767&fm=26&gp=0.jpg",
        "http://img4.imgtn.bdimg.com/it/u=3275408412,2382302438&fm=26&gp=0.jpg",
        "http://img4.imgtn.bdimg.com/it/u=3595217016,1106968040&fm=26&gp=0.jpg"
      ]
    };
  },
  mounted() {
    // 拖拽图片
    this.$dragging.$on("dragged", val => {
      console.log("val---->", val);
    });
    this.$dragging.$on("dragend", val => {
      //此处是拖动完成后鼠标松开时触发的事件
      console.log("val---111->", val);
    });
  },
  computed: {
    heighting() {
      return window.innerWidth * 0.52;
    }
  }
};
</script>
<style lang="less" scoped>
@import '../common/style/index.css';
</style>
