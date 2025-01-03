import request from '@/utils/request'

interface UserData {
    username: string;
    password: string;
    sex?: string,
    age?: number,
}

// 登录
export function login(data: UserData) {
    return request.post('/api/auth/login', data)
}

// 注册
export function register(data: UserData) {
    return request.post('/api/auth/register', data)
}
// 获取用户信息
export function getUserInfo() { 
    return request.get('/api/auth/info')
}

// 修改用户信息
export function updateUserInfo(data: UserData) {
    return request.put('/api/auth/update', data)
}