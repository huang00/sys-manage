<template>
  <header class="header">
      <section class="logo"></section>
      <section class="navigation">
        <ul class="nav">
          <li><router-link to="/web">网站</router-link></li>
          <li><router-link to="/console">控制台</router-link></li>
          <li @click="back">退出</li>
        </ul>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <span style="float: left;">当前位置：</span>
          <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">{{ item }}</el-breadcrumb-item>
        </el-breadcrumb>
      </section>
  </header>
</template>

<script>
import WebStorageCache from 'web-storage-cache'

var wsCache = new WebStorageCache();
export default {
  data() {
    return {
      breadList: []
    }
  },
  methods: {
    goAbout() {
      this.$router.push('/web');
    },
    back() {
      wsCache.delete('isLogin');
      location.reload();
    },
    navPath() {
      var arr = [], matched = this.$route.matched;
      for(var i = 0, len = matched.length; i < len; i++) {
        arr.push(matched[i].meta.title);
      };
      this.breadList = arr;
    }
  },
  created() {
    this.navPath();
  },
  watch: {
    $route(to, form) {
      this.navPath();
    }
  }
};
</script>

<style lang='scss' scoped>
  .header {
    height: 100%;
    .logo {
      background: red;
      float: left;
      height: 100%;
      width: 200px;
    }
    .navigation {
      float: left;
      height: 100%;
      width: calc(100% - 200px);
      .nav {
        li {
          display: inline-block;
          padding: 0 20px;
        }
      }
      .el-breadcrumb {
        line-height: 39px;
        background-color: olive;
      }
    }
    .router-link-active { color: red; }
  }
</style>
