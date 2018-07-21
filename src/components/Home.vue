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
        <el-footer>
          <app-footer></app-footer>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import AppHeader from '@/components/public/Header'
import AppMenu from '@/components/public/Menu'
import AppFooter from '@/components/public/Footer'

export default {
  components: {
    AppHeader,
    AppMenu,
    AppFooter
  }
}
</script>

<style lang="scss">
  .el-header, .el-footer {
    padding: 0;
  }

  .el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-footer { background: green; }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    margin-top: 40px;
  }
  
  #app > .el-container > .el-container{
    min-height: calc(100vh - 60px);
  }
  
  .el-aside {
    .el-menu { height: 100%; width: 200px; }
  }
</style>