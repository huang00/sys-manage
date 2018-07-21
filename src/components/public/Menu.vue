<template>
    <el-menu
      default-active="2"
      class="menu"
      @open="handleOpen"
      router
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>网站</span>
        </template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="/web/classify">文章分类</el-menu-item>
          <el-menu-item index="/web/manage">文章管理</el-menu-item>
        </el-menu-item-group>
        
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>控制台</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/console/about">关于</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
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
  .menu {
    li { width: 200px; }
  }
</style>