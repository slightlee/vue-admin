<template>

  <div class="login-container">

    <div class="login-form-wrap">

      <el-form class="login-form" ref="loginForm" :model="user">

        <el-form-item>
          <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
        </el-form-item>

        <el-form-item>
          <el-input type="password" v-model="user.password" placeholder="请输入密码"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button class="login-btn" type="primary" @click="onLogin">登录</el-button>
        </el-form-item>

      </el-form>

    </div>

  </div>

</template>

<script>
import request from "@/utils/request"
import { ElMessage } from 'element-plus'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data() {
    return {
      user: {
        username: 'admin123', // 请输入用户名
        password: 'admin123' // 请输入密码
      }
    }
  },
  methods: {
    onLogin () {
      // 获取表单数据（根据接口要求绑定数据）
      const user = this.user

      // 表单验证

      // 验证通过，提交登录
      request({
        method: 'POST',
        url: '/sys/login',
        // data 用来设置 POST 请求体
        data: user
      }).then(res => {
      console.log(res)
      if(res.data.code == 10000){
        // 登录成功
        ElMessage.success({message: '登录成功',type: 'success'});
      }

      }).catch(err => {
        console.log('登录失败', err)
        // 登录失败
      })
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../../assets/imges/login_bg.jpg') no-repeat;
  background-size: cover;
  .login-form-wrap {
    min-width: 300px;
    padding: 60px 70px 35px;
    background-color: #fff;
    border-radius: 5px;
    .login-form {
      .login-btn {
        width: 100%;
      }
    }
  }
}
</style>
