<template>
  <el-container>
    <el-header height="100px">
      <app-header></app-header>
    </el-header>
    <router-view/>
  </el-container>
</template>

<script>
import AppHeader from '@/components/public/Header'

export default {
  data() {
    return {
      
    }
  },
  components: {
    AppHeader
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