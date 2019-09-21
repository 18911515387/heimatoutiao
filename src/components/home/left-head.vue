<template>
  <el-row class="left-header" align="middle" type="flex" justify="space-between">
    <el-col :span="6">
      <i class="el-icon-s-unfold"></i>
      <span class="title">江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <el-col :span="4">
      <img src="../../assets/imgs/avatar.jpg" />
      <el-dropdown trigger="click">
        <a>
          <span class="el-dropdown-link">
            老总
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        </a>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-user">个人信息</el-dropdown-item>
          <el-dropdown-item icon="el-icon-share">gir地址</el-dropdown-item>
          <el-dropdown-item icon="el-icon-position">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {}
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
