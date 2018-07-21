<template>
  <div class="login">
    <el-form :rules="rules" status-icon label-position="right" label-width="80px" ref="formLogin" :model="formLogin">
      <el-form-item label="用户名: " prop="userName">
        <el-input 
          placeholder="请输入用户名"
          prefix-icon="el-icon-warning"
          @focus="handlerFocus"
          v-model="formLogin.userName">
        </el-input>
      </el-form-item>
      <el-form-item label="密  码:" prop="password">
        <el-input 
        placeholder="请输入密码"
        prefix-icon="el-icon-info"
        type="password"
        @focus="handlerFocus"
        @keyup.enter.native="submitForm('formLogin')"
        v-model="formLogin.password">
        </el-input>
      </el-form-item>
      <el-form-item class="errinfo" >
        <span v-if="errinfo">*&nbsp;&nbsp;用户名或密码错误!</span>
      </el-form-item>
      <div class="submit">
        <el-button :disabled="wait" type="primary" @click="submitForm('formLogin')">{{ wait?'登录中...':'登录' }}</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
import WebStorageCache from 'web-storage-cache'

var wsCache = new WebStorageCache();
export default {
  name: 'login',
  data() {
    let validate = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('不能为空'));
      }
      callback();
    }
    return {
      wait: false,
      errinfo: false,
      formLogin: {
        userName: '',
        password: '',
      },
      rules: {
        userName: [{ validator: validate, trigger: 'blur' }],
        password: [{ validator: validate, trigger: 'blur' }],
      }
    }
  },
  methods: {
    submitForm(formName) {
      if(this.wait) { return false; }
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.wait = true;
          setTimeout(() => {
            this.wait = false;
            this.$router.push( {name: 'home'} )
          }, 2000)
        } else {
          this.errinfo = true;
          console.log('error submit!!');
          return false;
        }
      });
    },
    handlerFocus(event) {
      let el = event.path[1].getElementsByClassName('el-input__prefix')[0];
      el.style.color = 'blue';
    }
  }
}
</script>

<style lang="scss" scoped>
  .login {
    height: 100%;
    background-color:antiquewhite;
    overflow: hidden;
    .el-form {
      background-color: white;
      width: 400px;
      margin: 0 auto;
      margin-top: 15%;
      border: 1px solid;
      border-radius: 5px;
      padding: 30px;
    }
    .submit { text-align: center; }
    .errinfo { color: red; height: 40px; }
  }
</style>
