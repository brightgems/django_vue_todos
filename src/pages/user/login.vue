<template>
  <div class="login-body">
    <div class="loginWarp"
         @keyup.enter="submit_form">
      <div class="login-title">
        <img src="./images/login_logo.png"/>
      </div>

      <div class="form-signin" ref="form" :model="form">
        <h2 class="form-signin-heading">Please sign in</h2>
        <label for="inputEmail" class="">Email address</label>
        <input type="text" id="inputEmail"  v-model="form.username" class="form-control" placeholder="User" required="true" autofocus="">
        <label for="inputPassword" class="">Password</label>
        <input type="password"  v-model="form.password"  id="inputPassword" class="form-control" placeholder="Password" required="true">
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" @click="submit_form">Sign in</button>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import api from 'src/store/api'

  export default{
    data(){
      return {
        form: {
          // 使用admin帐号登陆会被拒绝
          username: "bot",
          password: "bot"
        },
        rules: {
          username: [{required: true, message: '请输入账户名！', trigger: 'blur'}],
          password: [{required: true, message: '请输入账户密码！', trigger: 'blur'}]
        },
        //请求时的loading效果
        load_data: false
      }
    },
    methods: {
      //提交
      submit_form() {
        var data  ={username: this.form.username, password: this.form.password}
        this.$store.dispatch('login', data)
        this.$router.push({ path: '/' });

      }
    }
  }
</script>
<style lang='scss' scoped>
  .login-body {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url(./images/login_bg.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    .loginWarp {
      width: 300px;
      padding: 25px 15px;
      margin: 100px auto;
      background-color: #fff;
      border-radius: 5px;
      .login-title {
        margin-bottom: 25px;
        text-align: center;
      }
     
    }
  }

  
.form-signin {
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>
