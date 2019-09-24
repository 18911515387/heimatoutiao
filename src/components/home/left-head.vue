<template>
  <el-row class="left-header" align="middle" type="flex" justify="space-between">
    <el-col :span="6">
      <i class="el-icon-s-unfold"></i>
      <span class="title">江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <el-col :span="4">
      <img :src="!userInfo.photo ? userInfo.photo : defaultImg" alt />
      <el-dropdown trigger="click" @command="commonClick">
        <span class="el-dropdown-link">
          {{userInfo.name}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-user" command="userinfo">个人信息</el-dropdown-item>
          <el-dropdown-item icon="el-icon-share" command="herf">gir地址</el-dropdown-item>
          <el-dropdown-item icon="el-icon-position" command="quit">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {},
      defaultImg: require('../../assets/imgs/avatar.jpg')
    }
  },
  methods: {
    getUserInfo () {
      var token = window.localStorage.getItem('user-token')
      // console.log(token)
      this.$axios({
        url: '/user/profile',
        headers: { Authorization: `Bearer ${token}` }
      }).then(result => {
        // console.log(result)
        this.userInfo = result.data.data
      })
    },
    commonClick (parameter) {
      if (parameter === 'userinfo') {
        this.$router.push('/home/account')
      } else if (parameter === 'herf') {
        window.location.href = 'http://www.baidu.com'
      } else {
        window.localStorage.clear()
        this.$router.push('/login')
      }
    }
  },
  created () {
    this.getUserInfo()
  }
}
</script>

<style lang="less" scope>
.left-header {
  height: 50px;
  .el-icon-s-unfold {
    font-size: 24px;
  }
  .title {
    vertical-align: top;
  }
  img {
    border-radius: 50%;
    margin-right: 10px;
    vertical-align: middle;
  }
}
</style>
