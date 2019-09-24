<template>
  <el-container>
    <el-aside style="width:200px">
      <left-nav></left-nav>
    </el-aside>
    <el-container>
      <el-header>
        <left-head></left-head>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {

}
</script>

<style>
</style>
