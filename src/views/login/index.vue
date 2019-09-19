<template>
  <div class="login">
    <el-card class="login-card">
      <div class="title">
        <img src="../../assets/imgs/logo_index.png">
      </div>
      <el-form ref="" :model="ruleBase" :rules="rules" style="margin-top:15px">
        <el-form-item prop="phone">
          <el-input v-model="ruleBase.phone" placeholder='请输入手机号'></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="ruleBase.code" class="code-i" placeholder='请输入验证码'></el-input>
          <el-button type="primary" style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="protocol">
          <el-checkbox v-model="ruleBase.protocol">
            <span class="protocol">我已阅读并同意<a href="#">用户协议</a>和<a href="#">隐私条款</a> </span>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" round style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleBase: {
        phone: '',
        code: '',
        protocol: false
      },
      rules: {
        phone: [
          { require: true, message: '请输入手机号' },
          { pattern: /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/, messagae: '请输入正确的手机号' }
        ]
      }
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
