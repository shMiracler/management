<!--
 * @Date: 2024-10-28 14:14:16
 * @description: 
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-01-03 16:48:38
-->
<template>
    <el-form 
        ref="ruleFormRef"
        :model="form"
        :rules="rules"
        status-icon
        label-width="auto"
        hide-required-asterisk
    >
        <el-form-item label="用户名" prop="username">
            <el-input 
                v-model="form.username" 
                placeholder="请输入用户名" 
            />
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input 
                v-model="form.password" 
                type="password"
                show-password
                placeholder="请输入密码" 
            />
        </el-form-item>
        <el-form-item>
            <div id="captcha" />
        </el-form-item>
        <el-form-item>
            <el-button 
                :loading="isLoading"
                class="login-submit"
                @click="submit(ruleFormRef)"
            >
                登 录
            </el-button>
        </el-form-item>
    </el-form>
    <p class="login-tips">
        <span>没有账号, </span>
        <span 
            class="login-tips_register"
            @click="linkRegister"
        >
            去注册
        </span>
    </p>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { reactive, ref, onMounted } from 'vue'
import { FormRules, FormInstance } from 'element-plus'
import cookie from '@/class/cookie'
import { login } from '@/https/user'

const router = useRouter()

interface LoginForm {
    username: string;
    password: string
}

const emits = defineEmits(['changeStatus'])
const ruleFormRef = ref<FormInstance>()

const form = reactive<LoginForm>({
    username: '',
    password: ''
})

const rules = reactive<FormRules<LoginForm>>({
    username: [{ required: true, message: '请输入用户名!', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

let isLoading = ref<boolean>(false)

const submit = async (formElement: FormInstance | undefined) => {
    isLoading.value = true
    if (!formElement) {
        isLoading.value = false
        return
    }
    await formElement.validate(async (valid, fields) => {
        if (valid) {
            const result = await login(form) || {}
            const { code, data, message } = result || {}
            if (+code === 200) {
                cookie.set({ name: 'token', value: data.token })
                router.push({ name: 'home' })
            } else {
                console.log('error submit', message)
            }
        } else {
            console.log('error submit', fields)
        }
        isLoading.value = false
    })
}

const linkRegister = async () => {
    emits('changeStatus', false)
}

onMounted(() => {
    document.addEventListener('keydown', (e: KeyboardEvent) => {
        const key: string = e.key
        if (key === 'Enter') submit(ruleFormRef.value)
    })
})

</script>

<style scoped lang="scss">
.login-submit {
    width: 100%;
    border-radius: 6px;
    background: rgb(41, 82, 234);
    color: #FFFFFF;
}
.login-tips {
    width: 100%;
    text-align: center;
    margin-top: 15px;
    font-size: 14px;
    &_register {
        cursor: pointer;
        color: rgb(41, 82, 234);
    }
}
</style>