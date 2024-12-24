/*
 * @Date: 2024-10-22 15:46:25
 * @description: 
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-12-24 11:11:10
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/user/index.vue'),
        meta: {
            name: '登录页'
        }
    },
    {
        path: '/',
        name: 'home',
        redirect: 'index',
        component: () => import('@/views/home/index.vue'),
        meta: { name: '首页', icon: 'home' },
        children: [
            {
                path: '/index',
                name: 'index',
                component: () => import('@/views/controlPanel/index.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router