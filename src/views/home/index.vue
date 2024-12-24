<template>
    <section class="layout">
        <!-- 侧边狼 -->
        <section class="layout-aside">
            <MenuList />
        </section>
        <!-- 主内容区 -->
        <main class="layout-main">
            <header class="layout-main_header">
                <el-dropdown placement="bottom-start" @command="handlerCommand">
                    <span>
                        <SvgIcon 
                            icon-name="default-user" 
                            class="layout-main_header_user" 
                        />
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item command="user">用户信息</el-dropdown-item>
                            <el-dropdown-item command="loginOut">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                
            </header>
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
import { useRouter } from 'vue-router'

const router = useRouter()

const handlerCommand = (command: string) => {
    if (command === 'loginOut') {
        loginOut()
    }
}

const loginOut = () => { router.push({ name: 'login' }) }

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
            display: grid;
            justify-content: flex-end;
            align-items: center;
            box-sizing: border-box;
            height: $tabHeight;
            background: #FFFFFF;
            border-bottom: 1px solid #E7E7E7;
            &_user {
                font-size: 28px;
                margin-right: 15px;
            }
        }
        &_content {
            overflow: hidden;
            box-sizing: border-box;
            height: calc(100% - $tabHeight - 50px);
        }
    }
}
</style>