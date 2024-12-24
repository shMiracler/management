<!--
 * @Date: 2024-10-24 16:16:57
 * @description: menu组件
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-12-24 11:15:04
-->
<template>
    <header class="logo" :style="logoStyle"></header>
    <el-menu
        default-active="2"
        :collapse="isCollapse"
        :text-color="props.textColor"
        :background-color="props.backgroundColor"
        class="menu"
    >
        <el-menu-item index="1">
            <SvgIcon iconName="home" color="#FFFFFF" class="menu-icon" /> 首页面
        </el-menu-item>
    </el-menu>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

// 接收props
const props = defineProps({
    backgroundColor: {
        type: String,
        default: '#001428',
    },
    textColor: {
        type: String,
        default: '#fff',
    },
})
// 是否折叠
const isCollapse = ref(false)

// logo样式
const logoStyle = computed(() => {
    return { backgroundColor: props.backgroundColor }
})

</script>

<style lang="scss" scoped>
.logo {
    height: $tabHeight;
    border-right: 1px solid #DCDFE6;
}
.menu {
    overflow: auto;
    height: calc(100% - $tabHeight);
    &-icon {
        margin-right: 10px;
        font-size: 18px;
    }
}
</style>