<template>
  <div id="app">
    <template v-if="isLogin">
      <app-home></app-home>
    </template>
    <template v-else>
      <app-login></app-login>
    </template>
  </div>
</template>

<script>
import AppHome from '@/components/Home'
import AppLogin from '@/components/Login'
import { mapGetters, mapMutations } from 'vuex'
import WebStorageCache from 'web-storage-cache'

var wsCache = new WebStorageCache();
export default {
  name: 'App',
  data () {
    return {
      isLogin: true
    }
  },
  methods: {
    ...mapMutations(['setLogin'])
  },
  components: {
    AppHome,
    AppLogin
  },
  computed: {
    // ...mapGetters(['isLogin'])
  },
  created() {
    /* 
      去判断用户是否已经登录，如果登录，直接执行 setLogin()
    */
   /* if(wsCache.get('isLogin')) {
     this.setLogin();
   }; */
  }
}
</script>
