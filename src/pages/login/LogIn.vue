<template>
  <div>
    <div class="logIn-container">
      <div class="login-with-code">
        <el-form :label-position=labelPosition label-width="150px" :model="logInParams">
          <el-form-item label="电话号码">
            <el-input v-model="logInParams.phoneNumber" @input="changeValue(event)"></el-input>
          </el-form-item>
          <el-form-item label="短信验证码" v-if="showLogInWithAuthCode">
            <el-input class="auth-code" v-model="logInParams.verifyCode" @input="changeValue(event)"></el-input>
            <el-button type="text" style="color: #645454" @click="getAuthCode"> 获取验证码</el-button>
          </el-form-item>
          <el-form-item label="密码" v-if="showLogInWithPassword">
            <el-input v-model="logInParams.password" @input="changeValue(event)" show-password></el-input>
          </el-form-item>
          <div>
            <el-button class="login-button" @click="login"> 登录</el-button>
          </div>
          <div v-if="showLogInWithAuthCode" class="switch-login-type">
            <el-button class="block-button" type="text" @click="showPasswdLogin">密码登录</el-button>
          </div>
          <div v-if="showLogInWithPassword" class="switch-login-type">
            <el-button class="block-button" type="text" @click="showAuthCodeLogin">手机验证码登录</el-button>
          </div>
          <div>
            <img @click="showWxLogin" style="width: 50px" src="../../assets/wx.png">
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {getCurrentUserInfo, getSmsVerifyCode, loginWithPassword, loginWithSmsCode} from "@/api/user";

@Component({
  components: {}
})
export default class LogInPage extends Vue {
  labelPosition = 'right';

  showLogInWithPassword = false;
  showLogInWithAuthCode = true;
  logInParams = {
    phoneNumber: '',
    verifyCode: '',
    password: '',
    email: '',
  };

  changeValue() {
    console.log(this.logInParams)
    this.$forceUpdate()
  }

  login() {
    if (this.showLogInWithAuthCode) {
      let data = {
        phoneNumber: this.logInParams.phoneNumber,
        code: this.logInParams.verifyCode
      };
      loginWithSmsCode(data).then(res => {
        this.handleLogInRes(res)
      })
    }
    if (this.showLogInWithPassword) {
      let date = {
        phoneNumber: this.logInParams.phoneNumber,
        password: this.logInParams.password
      }
      loginWithPassword(date).then(res => {
        this.handleLogInRes(res)
      })

    }
  }

  handleLogInRes(res: any) {
    if (res.code == 200) {
      this.$message({
        message: '登录成功',
        type: 'success'
      })
      localStorage.setItem("token", res.data.token);
      this.$router.push("/index")
    } else {
      this.$message({
        message: '登录失败',
        type: "warning"
      })
    }
  }


  getAuthCode() {
    getSmsVerifyCode(this.logInParams.phoneNumber);
  }

  showWxLogin() {
    console.log("微信登录")
  }

  showPasswdLogin() {
    this.showLogInWithAuthCode = false
    this.showLogInWithPassword = true
  }

  showAuthCodeLogin() {
    this.showLogInWithAuthCode = true
    this.showLogInWithPassword = false
  }

  created() {
  }
}
</script>

<style lang="less">
.logIn-container {
  margin-top: 80px;
  text-align: center;
}

.logIn-auth-code-container {
}

.login-with-code {
  width: 500px;
  display: inline-block;
}

.auth-code {
  float: left;
  width: 200px;
}

.login-button {
  width: 200px;
  font-size: 20px;
  background-color: #088178;
  color: white;
}

.block-button {
  color: #645454
}

.switch-login-type {
  margin-top: 10px;

}
</style>