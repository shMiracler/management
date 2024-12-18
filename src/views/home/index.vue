<template>
    <section class="layout">
        <section class="layout-aside">
            <MenuList />
        </section>
        <main class="layout-main">
            <header class="layout-main_header"></header>
            <Breadcrumb />
            <section class="layout-main_content">
                <router-view />
            </section>
        </main>
    </section>
</template>

<script setup lang="ts">
import MenuList from '@/components/Layout/Menu/index.vue'
import Breadcrumb from '@/components/Layout/Breadcrumb/index.vue'

</script>

<style scoped lang="scss">
.layout {
    display: grid;
    grid-template-columns: $asideWidth 1fr;
    width: 100%;
    height: 100%;
    &-aside {
        width: 100%;
        height: 100%;
    }
    &-main {
        background: #F5F7F9;
        height: 100%;
        &_header {
            box-sizing: border-box;
            height: $tabHeight;
            background: #FFFFFF;
            border-bottom: 1px solid #E7E7E7;
        }
        &_content {
            overflow: hidden;
            box-sizing: border-box;
            height: calc(100% - $tabHeight - 50px);
        }
    }
}
</style>