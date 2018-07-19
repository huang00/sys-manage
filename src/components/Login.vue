<template>
  <div class="login">
    <form action="">
      <h5 @click="login">请登录, 点击登录</h5>
      <input type="text">
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import WebStorageCache from 'web-storage-cache'

var wsCache = new WebStorageCache();
export default {
  methods: {
    login() {
      alert('登录成功');
      wsCache.set('isLogin', true, {exp : 60 * 10});
      this.setLogin();
    },
    ...mapMutations(['setLogin'])
  }
}
</script>

<style lang="scss" scoped>
  .login {
    height: 100%;
    background-color:antiquewhite;
    overflow: hidden;
    form {
      text-align: center;
      margin-top: 15%;
    }
  }
</style>
