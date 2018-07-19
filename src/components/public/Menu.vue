<template>
    <el-menu 
      :default-active="defaultActive" 
      :router= 'true'
      background-color="#545c64"
      class="app-menu" 
      @open="handleOpen" 
      @close="handleClose">
        <template v-for="item in list">
          <el-submenu v-if="item.child" :index="item.id" :key="item.id">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">{{ item.name }}</span>
              </template>
              <el-menu-item v-for="(subItem, index) in item.child" :index="subItem.path" :key="index">
                {{subItem.name}}
              </el-menu-item>
          </el-submenu>
          <el-menu-item v-else :index="item.path" :key="item.id">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </template>
    </el-menu>
</template>

<script>
  export default {
    data() {
      return {
        list: [],
        defaultActive: ''
      };
    },
    props: {
      menuName: { type: String }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      navPath() {
        this.defaultActive = this.$route.path;
      }
    },
    created() {
      this.list = menuList(this.menuName);
      this.navPath();
    },
    watch: {
      $route(to, form) {
        this.navPath();
      }
    }
  }
  function menuList(name) {
    var list = {
      console: [
        {
          path: '/console/about', 
          icon: 'el-icon-menu',
          name: '关于',
          id: '1'
        },
        {
          icon: 'el-icon-location',
          name: '详情',
          id: '2',
          child: [
            {
              path: '/console/detail/one',
              icon: '',
              name: 'one',
              id: '2-1'
            },
            {
              path: '/console/detail/two',
              icon: '',
              name: 'two',
              id: '2-2'
            }
          ]
        }
      ],
      web: [
        {
          path: '/web/classify', 
          icon: '',
          name: '文章分类',
          id: '1'
        },
        {
          path: '/web/manage', 
          icon: '',
          name: '文章管理',
          id: '2'
        }
      ]
    };
    return list[name];
  };
</script>

<style lang="scss" scoped>
  .app-menu {
    min-height: calc(100vh - 100px);
    width: 200px;
    border: 0;
  }
  
</style>