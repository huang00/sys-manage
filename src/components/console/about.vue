<template>
  <div>
    <template>
      <el-radio v-model="radio" label="1">备选项</el-radio>
      <el-radio v-model="radio" label="2">备选项</el-radio>
    </template>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio: '2'
      };
    }
  }
</script>