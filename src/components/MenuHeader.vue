<template>
  <div class="header">
    <div class="header-log" @click="clockLogo">
      <img class="logo-img" src="../assets/logo.jpg" alt="a"/>
    </div>
    <div class="head-menu">
      <el-menu
          :default-active="defaultActiveIndex"
          style="height: 65px; border:0;"
          mode="horizontal"
          text-color="#171427"
          :ellipsis="false"
          @select="handleSelect"
      >
        <el-menu-item class="head-menu-item" index="1">首页</el-menu-item>
        <el-menu-item class="head-menu-item" index="2">时尚手袋</el-menu-item>
        <el-menu-item class="head-menu-item" index="3">数字技术</el-menu-item>
        <el-menu-item class="head-menu-item" index="4">联系我们</el-menu-item>
        <el-menu-item v-if="!hasLogin" class="head-menu-item" index="5">登录</el-menu-item>
        <el-menu-item v-if="hasLogin" class="head-menu-item" index="6">我的账户</el-menu-item>
        <el-menu-item v-if="hasLogin" class="head-menu-item" index="7">
          <img class="head-cart"
               src="data:image/png;base64,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">
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts">

import {Component, Vue} from "vue-property-decorator";

@Component({
  components: {}
})
export default class MenuHeader extends Vue {
  defaultActiveIndex = "1";
  hasLogin = false;

  clockLogo() {
    this.$router.push("/index");
  }

  handleSelect(key: any) {
    console.log("点击" + key);
    switch (key) {
      case"1":
        this.$router.push("/index");
        break;
      case "2":
        this.$router.push("/shop");
        break;
      case "3":
        this.$router.push("/tech");
        break;
      case "4":
        this.$router.push("/connectUs");
        break;
      case "5":
        this.$router.push("/login");
        break;
      case "6":
        this.$router.push("/myAccount");
        break;
      case "7":
        this.$router.push("/shoppingCart");
        break;
    }
  }

  created() {
    const halLog = this.$store.getters.getToken;
    if (halLog) {
      this.hasLogin = true
    } else {
      this.hasLogin = false;
    }
  }
}
</script>

<style lang="less" scoped>

.header {
  margin: auto;
  width: 90%;
  height: 65px;
}

.logo-img {
  display: flex;
  align-items: flex-start;
  justify-content: left;
  margin-top: 20px;
  width: 230px;
  alignment: center;
}

.header-log {
  float: left;
  width: 30%;
  cursor: pointer;
}

.head-menu {
  float: right;
  width: 60%;
  height: 100%;
}

.head-menu-item {
  font-size: 25px;
  font-weight: 400;
  padding-left: 4%;
  position: relative;
}


.head-cart {
  width: 25px;
}
</style>
