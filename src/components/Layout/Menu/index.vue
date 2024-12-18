<!--
 * @Date: 2024-10-24 16:16:57
 * @description: 
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-11-27 15:01:30
-->
<template>
    <header class="logo"></header>
    <el-menu
        default-active="2"
        :collapse="isCollapse"
        class="menu"
    >
        <el-menu-item index="1">首页面</el-menu-item>
    </el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isCollapse = ref(false)

</script>

<style lang="scss" scoped>
.logo {
    height: $tabHeight;
    border-right: 1px solid #DCDFE6;
}
.menu {
    overflow: auto;
    height: calc(100% - $tabHeight);
}
</style>