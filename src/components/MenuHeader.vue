<template>
  <div class="header">
    <div class="header-log" @click="clockLogo">
      <img class="logo-img" src="../assets/logo.jpg" />
    </div>
    <div id="head-menu">
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
        <el-menu-item class="head-menu-item" index="5">LogIn</el-menu-item>
        <el-menu-item class="head-menu-item" index="6"><i class="bx bx-shopping-bag bx-sm" id="cart-icon"></i>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class MenuHeader extends Vue {
  defaultActiveIndex = 1;
  clockLogo() {
    console.log("点击logo");
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleSelect() {
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
  width: 35%;
  cursor: pointer;
}

.head-menu {
  float: right;
  width: auto;
  height: 100%;
}

.head-menu-item {
  padding: 0 5px;
  font-size: 1.4rem;
  font-weight: 400;
  margin-left: 50px;
  position: relative;
}

.cart-icon{
  font-size: 1.4rem;
  cursor: pointer;
}
</style>
