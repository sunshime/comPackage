<!--公共组件-->
<template>
    <div id="header" :class="color=='#000'?'header specheader':(color=='theme'?'header theme':'header')">
        <div class="nav">
            <span class="func back" @click="backing">
                &lt;
                <!-- <x-icon type="ios-arrow-back"></x-icon> -->
            </span>
            <span class="title">
                {{name?name:'标题'}}
            </span>
            <span class="func more">
                <!--<x-icon type="search" v-if="false"></x-icon>-->
                <slot></slot>
            </span>
        </div>
    </div>
</template>
<script type="text/javascript" src="./logic.js"></script>
<style lang="less" scoped>
    @import './style.css';
</style>