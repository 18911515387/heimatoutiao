<template>
  <div class="login">
    <el-card class="login-card">
      <div class="title">
        <img src="../../assets/imgs/logo_index.png">
      </div>
      <el-form ref="myForm" :model="ruleForm" :rules="ruleBank" style="margin-top:15px">
        <el-form-item prop="phone">
          <el-input v-model="ruleForm.phone" placeholder='请输入手机号'></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="ruleForm.code" class="code-i" placeholder='请输入验证码'></el-input>
          <el-button type="primary" style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="protocol">
          <el-checkbox v-model="ruleForm.protocol">
            <span class="protocol">我已阅读并同意<a href="#">用户协议</a>和<a href="#">隐私条款</a> </span>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button @click="ruleLogin" type="primary" round style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    let validator = function (rule, value, callback) {
      if (value) {
        callback()
      } else {
        callback(new Error('请勾选'))
      }
    }
    return {
      ruleForm: {
        phone: '',
        code: '',
        protocol: false
      },
      ruleBank: {
        phone: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号' }
        ],
        code: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '验证码为6位数字' }
        ],
        protocol: [{ validator }]
      }
    }
  },
  methods: {
    ruleLogin () {
      this.$refs.myForm.validate(function (ok) {
        if (ok) {
          console.log('校验完毕')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .login{
    background-image: url('../../assets/imgs/95.jpg');
    height: 100vh;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-card {
      height: 400px;
      width: 500px;
      .title{
        text-align: center;
        height: 50px;
      }
      .protocol a {
        color: skyblue;
      }
      .code-i {
        width:60%;
      }
      .el-item {
        margin-bottom: 15px;
      }
    }
  }
</style>
