<template>
  <div>
    <h1 style="margin-bottom: 50px;">我是详情下面的ONE页面</h1>
    <template>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="第一个模块" name="OneManage">
          <one-manage></one-manage>
        </el-tab-pane>
        <el-tab-pane label="第二个模块" name="OneConfig">
          <one-config></one-config>
        </el-tab-pane>
      </el-tabs>
    </template>
  </div>
</template>

<script>
import OneManage from './subComponents/manage'
import OneConfig from './subComponents/config'
import Base from '@/common/base'

export default {
  mixins: [Base],
  data() {
    return {
      activeName: 'second'
    }
  },
  components: {
    OneManage,
    OneConfig
  },
  methods: {
    handleClick(tab, event) {
      location.href = `#/console/detail/one#${tab.name}`;
      console.log(tab, event);
    }
  },
  created() {
    this.activeName = this.getHash() || 'OneManage';
  }
}
</script>


<style lang="scss" scoped>
    .nav {
        margin-bottom: 50px;
        span {
            padding: 0 10px;
            border-right: 1px solid blue;
        }
    }
</style>