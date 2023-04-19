<template>
  <div style="margin-bottom: 25px">
    <el-row gutter="20">
      <el-col span="6">
        <div style="width: 80%;padding-left: 20%">
          <el-image
              v-bind:src="item.handbag.image"></el-image>
        </div>
      </el-col>
      <el-col :span="10">
        <p><a href="http://localhost:8081/" class="order-item-origin">
          <label>{{ item.handbag.name }}</label>
        </a></p>
        <span>款式: {{ item.handbag.series }}</span>
      </el-col>
      <el-col :span="6">
        <label style="font-size: 20px">数量: x{{ item.cartItem.quantity }}</label>
        <i class="el-icon-edit"></i>
      </el-col>
      <el-col :span="2">
        <label style="font-size: 25px">¥</label>
        <label class="price">{{ item.handbag.price }}</label>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component({
  components: {}
})

export default class ShoppingCartCard extends Vue {
  @Prop({required: true}) item: any;
  count = 2;
  price = 2121;

  created() {
    console.log("首页")
    console.log(this.item)
  }
}
</script>

<style lang="less" scoped>

.price {
  font-size: 33px;
  padding-left: 5px;
  font-family: "Droid Sans Mono Slashed";
}

.el-icon-edit {
  padding-left: 5px;
}
</style>