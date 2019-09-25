<template>
  <el-container>
    <el-aside style="width:200px;overflow:hidden;background-color: #323745">
      <left-nav>
      </left-nav>
    </el-aside>
    <el-container>
      <el-header>
        <left-head></left-head>
      </el-header>
      <el-main style="padding:0">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {}
</script>

<style>
</style>
