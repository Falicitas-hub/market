<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>商场后台管理系统</span>
      </div>
      <el-tabs v-model="currentIndex" stretch>
        <el-tab-pane label="登录" name="login">
          <el-form
            :model="loginForm"
            status-icon
            label-width="60px"
            :rules="rules"
            ref="loginForm"
          >
            <el-form-item label="用户名" prop="username">
              <el-input v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="loginForm.password" type="password"></el-input>
            </el-form-item>
            <el-form-item label-width="0px">
              <el-button type="primary" @click="submitForm('loginForm')">
                登录
              </el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册" name="register">
          <el-form
            :model="registerForm"
            status-icon
            label-width="70px"
            :rules="rules"
            ref="registerForm"
          >
            <el-form-item label="用户名" prop="username">
              <el-input v-model="registerForm.username"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="registerForm.email"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                v-model="registerForm.password"
                type="password"
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="configurePassword">
              <el-input
                v-model="registerForm.configurePassword"
                type="password"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="0px">
              <el-button type="primary" @click="submitForm('registerForm')">
                注册
              </el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import api from "../api";
import { mapMutations } from "vuex";
export default {
  data() {
    var validateUserName = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    var validatePassWord = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validateConfigurePassWord = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入确认密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致"));
      } else {
        callback();
      }
    };
    return {
      currentIndex: "login",
      loginForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ validator: validateUserName, trigger: "blur" }],
        password: [{ validator: validatePassWord, trigger: "blur" }],
        configurePassword: [
          { validator: validateConfigurePassWord, trigger: "blur" },
        ],
      },
      registerForm: {
        username: "",
        password: "",
        configurePassword: "",
        email: "",
      },
    };
  },
  mounted() {
    this.enterKeyUp();
  },
  destroyed() {
    this.enterKeyUpDestroyed();
  },
  methods: {
    ...mapMutations("login", ["setUser"]),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (formName === "loginForm") {
            //登录
            api.login(this.loginForm).then((res) => {
              if (res.data.status == 200) {
                this.setUser(res.data);
                localStorage.setItem("ice_wine", JSON.stringify(res.data));
                this.$router.push("/");
              } else {
                this.$message.error("登陆失败");
              }
            });
          } else if (formName === "registerForm") {
            //注册
            api.register(this.registerForm).then((res) => {
              if (res.data.status == 200) {
                this.$message.success("注册成功");
                this.currentIndex = "login";
              } else {
                this.$message.error("注册失败");
              }
            });
            console.log(this.registerForm);
          }
          this.$refs[formName].resetFields();
        } else {
          this.$message.error("请确认信息是否填写正确");
          return;
        }
      });
    },
    enterKeyUp() {
      document.addEventListener("keyup", this.enterKey);
    },
    enterKeyUpDestroyed() {
      document.removeEventListener("keyup", this.enterKey);
    },
    enterKey(event) {
      const code = event.keyCode
        ? event.keyCode
        : event.which
        ? event.which
        : event.charCode;
      if (code == 13) {
        if (this.currentIndex == "login") {
          this.submitForm("loginForm");
        } else if (this.currentIndex == "register") {
          this.submitForm("registerForm");
        }
      }
    },
  },
};
</script>

<style scoped >
.login {
  width: 1200px;
  margin: 0 auto;
}
.box-card {
  width: 500px;
  margin: 100px auto;
}
</style>