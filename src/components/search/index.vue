<template>
  <div id="searchblock" class="search">
    <div class="search-input">
      <div class="icon">
        <span></span>
      </div>
      <!-- <input class="input" id="search" type="text" :placeholder="placeholder" @input="getInputText($event)" autocomplete="off"/> -->
      <input class="input" id="search" type="text" :placeholder="placeholder" v-model="keywords" autocomplete="off"/>
      <div class="cleartxt" @click="clearText">
          <span>x</span>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript" src="./logic.js"></script>
<style lang="less" scoped>
@import "./style.css";
</style>