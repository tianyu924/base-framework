<template>
  <div>
    <el-form
      ref="ruleFormRef"
      status-icon
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="用户名"
        prop="pass"
      >
        <el-input
          v-model="loginForm.account"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item
        label="密码"
        prop="age"
      >
        <el-input v-model="loginForm.pwd" />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="login()"
        >
          Submit
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { ILoginUser } from '@/types/user'
import api from '@/api'
import { useStore } from '@/store'

const store = useStore()
console.log(store)
const loginForm = reactive<ILoginUser>({
  account: '',
  pwd: ''
})

const login = async () => {
  try {
    const data = await api.common.loginApi(loginForm)
    console.log('data', data)
  } catch (error) {
    console.log('error', error)
  }
}
</script>

<style scoped>

</style>
