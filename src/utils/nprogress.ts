/*
 * @Date: 2024-12-06 11:17:26
 * @description: 
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-12-06 11:24:38
 */
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

type NprogressType = {
    start: () => void,
    close: () => void
}
// 进度条配置
NProgress.configure({
    easing: 'ease',
    speed: 300,
    showSpinner: false,
    trickleSpeed: 200,
    minimum: 0.3,
    parent: 'body'
})

export const nprogress:NprogressType = {
    start: () => NProgress.start(),
    close: () => NProgress.done()
}