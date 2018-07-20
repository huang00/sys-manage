<template>
  <el-container>
    <el-header>
      <app-header></app-header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <app-menu></app-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import AppHeader from '@/components/public/Header'
import AppMenu from '@/components/public/Menu'
import AppFooter from '@/components/public/Footer'

export default {
  data() {
    return {
      
    }
  },
  components: {
    AppHeader,
    AppMenu,
    AppFooter
  }
}
</script>

<style lang="scss">
  .el-header {
    padding: 0;
  }

  .el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  
  #app > .el-container {
    .el-container {
      min-height: calc(100vh - 100px);
    }
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>