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
                登录
              </el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
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
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (formName === "loginForm") {
            //登录
            console.log(this.loginForm);
          } else if (formName === "registerForm") {
            //注册
            console.log(this.registerForm);
          }
        } else {
          this.$message.error("请确认信息是否填写正确");
          return;
        }
      });
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