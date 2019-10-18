<template>
  <div class="keyboard" :style="cssStyle">
    <div class="keyboardcon">
      <div class="number">
        <div
          :class="active==index?'numberitem changecolor':'numberitem'"
          v-for="(item,index) in lists"
          :key="index"
          @click="choosekey(item,index)"
        >
          <span :class="index==lists.length-1?'numspan textspan':'numspan'">{{item.label}}</span>
        </div>
      </div>
      <div class="operate">
        <div :class="active==-1?'operateitem changecolor':'operateitem'" @click="rebacking">
          <span class="raback"></span>
        </div>
        <div class="operateitem sureitem" @click="makesure">
          <span class="flexcenter">确认</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript" src="./logic.js"></script>
<style lang="less" scoped>
@import "./style.css";
</style>