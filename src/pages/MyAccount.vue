<template xmlns:el-col="http://www.w3.org/1999/html">
  <div class="order-list">
    <div class="order-item">
      <div class="user-info-div">
        <el-row gutter="20">
          <el-col :span="8">
            <div>
              <el-button type="text" class="el-info" @click="this.openMyOrder">我的订单
                <i class="el-icon-arrow-right"></i>
              </el-button>
            </div>
            <label> 管理和编辑您的订单</label>
          </el-col>

          <el-col :span="8">
            <div>
              <el-button type="text" class="el-info" @click="openMyAccount">我的账户
                <i class="el-icon-arrow-right"></i>
              </el-button>
            </div>
            <label> 管理您的个人信息</label>
          </el-col>

          <el-col :span="8">
            <div>
              <el-button type="text" class="el-info" @click="openMyAddress">我的地址 <i class="el-icon-arrow-right"/>
              </el-button>
            </div>
            <label> 管理您的订单地址</label>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component({
  components: {}
})
export default class MyAccount extends Vue {

  openMyOrder() {
    this.$router.push("/myOrder");
  }

  openMyAddress() {
    this.$router.push("/myAddress");
  }

  openMyAccount() {
    this.$router.push("/myProfile");
  }
};
</script>
<style lang="less" scoped>
.el-info {
  font-size: 22px;
  color: #4a4e56;
}

.user-info-div {
  margin-top: 100px;
}
</style>

