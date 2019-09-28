<template>
    <div class="cuskeyboard" :style="cssStyle">
        <div class="keyboardcon">
            <div class="number">
                <div class="numberitem" v-for="(item,index) in keyList" @click="choosekey(item)" :key="index">
                    <span :class="index==keyList.length-1?'numspan textspan':'numspan'">
                        {{item.label}}
                    </span>
                </div>
            </div>
            <div class="operate">
                <div class="operateitem" @click="rebacking">
                    <span class="raback"></span>
                </div>
                <div class="operateitem sureitem" @click="makesure">
                    <span class="flexcenter">搜索</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript" src="./logic.js"></script>
<style lang="less" scoped>
    @import './style.css';
</style>