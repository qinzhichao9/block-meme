<template>
  <div>
    <div class="order-list">
      <div class="order-item">
        <div class="order-item-header">
          <el-row gutter="20">
            <el-col span="4">
              <span>2023年2月8日</span></el-col>
            <el-col style="text-align: left" span="6">订单编号 #GU202302262668417</el-col>
            <el-col span="4"> 数量: 2</el-col>
            <el-col span="5">总计: ￥18,600</el-col>
            <el-col span="5">查看详情</el-col>
          </el-row>
        </div>
        <div class="order-body">
          <div class="order-status">
            <label class="label-status"><b> 订单已取消</b></label>
            <el-button class="delete-order" type="text">删除订单</el-button>
          </div>
          <el-divider></el-divider>
          <div>
            <el-row gutter="20">

              <el-col span="4">
                <div style="width: 70%;padding-left: 20%">
                  <el-image
                      :src="url"
                      :fit="fit"></el-image>
                </div>

              </el-col>
              <el-col span="6" style="text-align: left">
                <p><a href="http://localhost:8081/" class="order-item-origin">Ophidia系列GG花卉迷你手袋</a></p>
                <p style="height: 10px">款号 # 517350 FABH0 9889</p>
                <span>款式： 多色GG Supreme花卉帆布</span>
              </el-col>
              <el-col span="4">
                已取消
              </el-col>
              <el-col span="5">
                数量 2
              </el-col>
              <el-col span="5">总计: ￥18,600</el-col>
            </el-row>
          </div>
          <div class="order-footer">
            <el-row>
              <el-divider></el-divider>
              <el-col span="4">收货地址</el-col>
              <el-col style="text-align: left" span="6">上海市杨浦区五角场</el-col>
            </el-row>
            <el-divider></el-divider>
            <el-row>
              <el-col span="4">支付方式</el-col>
              <el-col style="text-align: left" span="6">上海市杨浦区五角场</el-col>
            </el-row>
            <el-divider></el-divider>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component({
  components: {}
})
export default class OrderHistory extends Vue {

  withs = screen.width;
  url = "https://block-meme.oss-cn-beijing.aliyuncs.com/img/p1.jpg"

  orders: [{}]

  created() {

  }
}
</script>

<style lang="less" scoped>

.order-list {
  margin-left: 5%;
  margin-right: 5%;
  background-color: #E3E3E3;
}

.order-item-header {
  padding-top: 12px;
  background-color: #F9F9F9;
  height: 40px;
}

.order-status {
  padding-left: 5%;
  padding-top: 15px;
  text-align: left;

  height: 45px;
}

.label-status {
  font-size: 20px;
}

.order-body {
  background-color: white;
}

.delete-order {
  color: #2c3e50;
  float: right;
  margin-right: 9%;
}

.order-img {
}

.order-item-origin {
  text-decoration: none;
  font-size: 20px;
  color: #2c3e50;
}

.order-footer {
  margin-top: 20px;
}
</style>