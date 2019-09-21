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
import leftNav from '../../components/home/left-nav'
import leftHead from '../../components/home/left-head'
export default {
  components: {
    'left-nav': leftNav,
    'left-head': leftHead
  }
}
</script>

<style>
</style>
