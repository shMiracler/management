import router from '@/router'
import cookie from '@/class/cookie'

// 全局路由守卫
router.beforeEach((to, _, next) => {
    const token = cookie.get('token')
    if (!token && to.name !== 'login') {
        next({ name: 'login' })
    } 
    if (to.name === 'home') {
        next({ name: 'index' })
    }
    next()
})