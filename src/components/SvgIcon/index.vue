<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconClassName" :fill="color"></use>
    </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    iconName: {
        type: String,
        required: true,
    },
    className: {
        type: String,
        default: '',
    },
    color: {
        type: String,
        default: '#409EFF',
    },
})
// 图标在iconfont中的名字
const iconClassName = computed(() => { return `#icon-${props.iconName}` })
// 给图标加上类名
const svgClass = computed(() => {
    if (props.className) {
        return `svg-icon ${props.className}`
    } else {
        return 'svg-icon'
    }
})
</script>

<style scoped>
.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>