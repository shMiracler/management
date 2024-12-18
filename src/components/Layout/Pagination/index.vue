<!--
 * @Date: 2024-12-06 10:54:05
 * @description: 
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-12-06 12:30:42
-->
<template>
    <el-pagination 
        background 
        :layout="layout" 
        :total="total"
        :size="size"
        @size-change="paginationChange($event, 'size')"
        @current-change="paginationChange($event, 'page')"
    />
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue'

interface Props {
    layout: string,
    total: number,
    size: string,
}

// 接收传递下来的值
withDefaults(defineProps<Props>(), {
    layout: 'prev, pager, next',
    total: 0,
    size: 'default',
})

const paginationChange = (e:number, type: string) => {
    console.log(e, type)
}
</script>