<!--
 * @Date: 2024-10-28 15:27:26
 * @description: 
 * @LastEditors: 
 * @LastEditTime: 2024-12-23 18:30:26
-->
<template>
    <el-form
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
                show-password
                placeholder="请输入密码"
            />
        </el-form-item>
        <el-form-item label="确认密码" prop="aginPassword">
            <el-input 
                v-model="form.aginPassword"
                show-password
                placeholder="请输入密码"
            />
        </el-form-item>
        <el-form-item>
            <el-button class="register-submit">注 册</el-button>
        </el-form-item>
    </el-form>
    <p class="register-tips">
        <span>已有账号, </span>
        <span 
            class="register-tips_login"
            @click="linkLogin"
        >
            去登录
        </span>
    </p>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { FormRules  } from 'element-plus'

interface RegisterForm {
    username: string,
    password: string,
    aginPassword: string
}

const emits = defineEmits(['changeStatus'])

const form = reactive<RegisterForm>({
    username: '',
    password: '',
    aginPassword: '',
})

const rules = reactive<FormRules<RegisterForm>>({
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    aginPassword: [
        { required: true, message: '请输入密码', trigger: 'blur' },
    ]
})

const linkLogin = () => {
    emits('changeStatus', true)
}

</script>

<style scoped lang="scss">
.register-submit {
    width: 100%;
    border-radius: 6px;
    background: rgb(41, 82, 234);
    color: #FFFFFF;
}
.register-tips {
    width: 100%;
    text-align: center;
    margin-top: 15px;
    font-size: 14px;
    &_login {
        cursor: pointer;
        color: rgb(41, 82, 234);
    }
}
</style>