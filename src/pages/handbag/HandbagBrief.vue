<template>
  <div>
    <div>
      <div class="brief-product-info" @click="addShoppingCart">
        <div>
          <el-image class="product-img" v-bind:src="handbag.image"></el-image>
        </div>
        <div class="product-col-int2">
          <div>
            <label style="text-align: left">{{ handbag.name }}</label>
          </div>
          <div class="product-title">
            <label>{{ handbag.category }}</label>
          </div>
          <b><label class="cart-price">￥ {{ handbag.price }} </label></b>
          <el-image @click="addShoppingCart" class="product-cart" v-bind:src="cartUrl"></el-image>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

import {Component, Prop, Vue} from "vue-property-decorator";

@Component({
  components: {}
})
export default class HandbagBrief extends Vue {
  @Prop({required: true}) handbag: any;
  cartUrl = "https://block-meme.oss-cn-beijing.aliyuncs.com/%E8%B4%AD%E7%89%A9%E8%BD%A6.png"

  created() {
  }

  addShoppingCart() {
    this.$router.push("/product/detail/" + this.handbag.id)
  }
}
</script>
<style lang="less" scoped>

.product-img {
  border-radius: 10%;
  width: 90%;
  margin: auto;
  margin-top: 10px;
}

.brief-product-info {
  margin: auto;
  width: 95%;
  border: 1px solid;
  border-radius: 25px;
  cursor: pointer;
  padding-bottom: 20px;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
  margin-bottom: 50px;
}

.cart-price {
  font-size: 24px;
  padding-left: 5px;
  font-family: "Droid Sans Mono Slashed";
}

.product-col-int2 {
  text-align: left;
  margin-left: 10%;
  margin-top: 30px;
}

.product-cart {
  float: right;
  margin-right: 20%;
  width: 30px;
}


.product-title {
  font-size: 22px;
  padding-top: 20px;
  margin-bottom: 20px;
}
</style>