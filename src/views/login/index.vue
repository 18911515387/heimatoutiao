<template>
  <div class="login">
    <el-card class="login-card">
      <div class="title">
        <img src="../../assets/imgs/logo_index.png">
      </div>
      <el-form ref="myForm" :model="ruleForm" :rules="ruleBank" style="margin-top:15px">
        <el-form-item prop="mobile">
          <el-input v-model="ruleForm.mobile" placeholder='请输入手机号'></el-input>
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
    let validator = function (rule, value, callBack) {
      value ? callBack() : callBack(new Error('您必须同意无条件被我们蒙骗'))
    }
    return {
      ruleForm: {
        mobile: '',
        code: '',
        agree: false
      },
      ruleBank: {
        mobile: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号' }
        ],
        code: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '验证码为6位数字' }
        ],
        agree: [{ validator }]
      }
    }
  },
  methods: {
    ruleLogin () {
      this.$refs.myForm.validate((IsOk) => {
        if (IsOk) {
          this.$axios({
            method: 'post',
            url: '/authorizations',
            data: this.ruleForm
          }).then(result => {
            window.localStorage.setItem('user-token', result.data.token)
            this.$router.push('/home')
          }).catch(() => {
            this.$message({
              message: '你的手机号或者验证码错误',
              type: 'warning'
            })
          })
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
