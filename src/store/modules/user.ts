/*
 * @Date: 2024-10-28 09:41:19
 * @description: 
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-11-28 14:51:19
 */
import { defineStore } from 'pinia'
import { PersistenceOptions } from 'pinia-plugin-persistedstate'

// 用户字段类型
type UserInfo = {
    name: string,
    sex?: string | number
}

type MyPersistedStateOptions = PersistenceOptions<UserInfo>

export default defineStore('user', {
    state: (): UserInfo => ({
        name: '',
        sex: ''
    }),
    actions: {

    },
    getters: {},
    // 配置持久化
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'userInfo',
                storage: localStorage
            }
        ]
    } as MyPersistedStateOptions
}) 