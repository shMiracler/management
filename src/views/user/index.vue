<template>
    <section ref="vantaRef" class="user-background" />
    <section class="user-content">
        <el-card>
            <Login v-if="isLoginStatus" @changeStatus="changeStatus" />
            <Register v-else  @changeStatus="changeStatus" />
        </el-card>
        
    </section>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'
import BIRDS from 'vanta/src/vanta.birds.js'
import Login from './login.vue'
import Register from './register.vue'

// dom元素
const vantaRef = ref<any>(null)
// vanta 实列
let vantaEffect: any = null
// 是否展示登录表单
let isLoginStatus = ref<boolean>(true)

onMounted(() => {
    BIRDS({ el: vantaRef.value, THREE })
})

// 离开页面时需销毁 vanta
onBeforeUnmount(() => {
    if (vantaEffect) vantaEffect.destroy()
})

const changeStatus = (status: boolean) => {
    isLoginStatus.value = status
 }

</script>

<style scoped lang="scss">
.user-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
}
.user-content {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 1;
    width: 28%;
    height: 30%;
    ::v-deep .el-card {
        height: 100%;
        &__body {
            display: grid;
            grid-template-columns: 1fr;
            place-items: center;
            .el-form {
                width: 100%;
            }
        }
    }
}
</style>