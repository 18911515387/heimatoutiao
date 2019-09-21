<template>
  <div class="left-nav">
    <div class="head-pic">
      <img src="../../assets/imgs/logo_admin.png" />
    </div>
    <el-menu background-color="#545c64" text-color="#adafb5" active-text-color="#ffd04b">
      <el-menu-item index="1">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>内容管理</span>
        </template>
        <el-menu-item index="1-1">发布文章</el-menu-item>
        <el-menu-item index="1-2">内容列表</el-menu-item>
        <el-menu-item index="1-3">评论列表</el-menu-item>
        <el-menu-item index="1-3">素材管理</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-loading"></i>
          <span>粉丝管理</span>
        </template>
        <el-menu-item index="1-1">图文数据</el-menu-item>
        <el-menu-item index="1-2">粉丝概况</el-menu-item>
        <el-menu-item index="1-3">粉丝画像</el-menu-item>
        <el-menu-item index="1-3">粉丝列表</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">
        <i class="el-icon-user"></i>
        <span slot="title">导账户管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.left-nav {
  background-color: #323745;
  height: 100vh;
  width: 200px;
  .head-pic {
    background-color: #2e2f32;
    text-align: center;
    padding: 15px 0;
  }
}
</style>
