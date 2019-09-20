<template>
  <el-container>
    <el-aside>
      <let-nav></let-nav>
    </el-aside>
    <el-container>
      <el-headaer>头部</el-headaer>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import leftNav from '../../components/home/left-nav'
export default {
  components: {
    'let-nav': leftNav
  }
}
</script>

<style>

</style>
