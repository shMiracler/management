/*
 * @Date: 2024-10-22 14:38:11
 * @description: 
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-11-27 14:42:09
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true, // 忽略sass 依赖警告，包括@import 警告
        javascriptEnabled: true,
        additionalData: `@use "./src/assets/styles/variable.scss" as *;`
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: false // 设置服务启动是否自动打开浏览器
  }
})
