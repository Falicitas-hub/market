<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/product">商品管理</el-menu-item>
      <el-menu-item index="/params">规格参数</el-menu-item>
      <el-menu-item index="/ad">广告管理</el-menu-item>
      <el-menu-item id="user">
        <el-dropdown @command="handleCommand">
          <span id="user-name" class="el-drop-link">{{ user.username }}</span>
          <el-dropdown-menu>
            <el-dropdown-item command="logoutHandle">
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      activeIndex: "/",
    };
  },
  computed: {
    ...mapState("login", ["user"]),
  },
  methods: {
    ...mapMutations("login", ["setUser"]),
    handleCommand(command) {
      this.setUser({});
      localStorage.removeItem("ice_wine");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
#user {
  float: right;
  margin-right: 30px;
  line-height: 60px;
}
#user-name {
  color: #fff;
  margin-right: 10px;
  font-size: 15px;
  width: 40px;
  height: 40px;
  display: inline-block;
  line-height: 40px;
}
</style>