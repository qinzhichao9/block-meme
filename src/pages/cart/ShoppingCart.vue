<template xmlns:el-col="http://www.w3.org/1999/html">
  <div class="shopping-cart">
    <div class="cart-container">
      <div class="shopping-items">
        <div style="float: left">
          <el-checkbox v-model="chooseAll"> 全选</el-checkbox>
        </div>
        <div style="padding-top: 10px">
          <el-divider></el-divider>
        </div>
        <div class="shopping-items2">
          <div v-for="(item,idx) in shoppingCartItems"
               :key="idx">
            <el-row :gutter="20">
              <el-col :span="1" class="chooseItem">
                <div style="padding-top: 50px">
                  <el-checkbox v-model="chosenItems[idx]"></el-checkbox>
                </div>
              </el-col>
              <el-col :span="20">
                <ShoppingCartCard :item="item"></ShoppingCartCard>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <div class="price-card">
        <div class="price-card-header">
          <label> 订单小计</label>
          <label style="float: right">已选 {{ this.priceInfo.totalQuantity }} 件商品</label>
        </div>
        <div>
          <el-divider/>
        </div>
        <div class="price-card-header">
          <label> 商品总计算</label>
          <label style="float: right">￥ {{ this.priceInfo.totalPrice }}</label>
        </div>
        <div class="price-card-header">
          <label> 运费</label>
          <label style="float: right">免费</label>
        </div>
        <el-divider/>
        <div class="price-card-header">
          <label> 说明</label>
        </div>
        <div class="description">
          <label>
            在线支付订单提交之后15分钟内未付款，订单将被系统自动取消，请您尽快完成支付以确保商品能及时送达ss
          </label>
        </div>
        <el-divider/>
        <div>
          <el-button class="buy-now" @click="conformOrder" plain>立即结算</el-button>
        </div>
        <div style="padding-top: 30px">
          <el-button class=" continue-buy" @click="continueBuy" plain>继续购买</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator";
import ShoppingCartCard from "@/pages/cart/ShoppingCartCard.vue";
import {calculateCartPrice, getShoppingCart} from "@/api/shppingCart";
import {watch} from "vue";

@Component({
  components: {ShoppingCartCard}
})
export default class ShoppingCart extends Vue {
  shoppingCartItems: any = []
  chooseAll = true;
  chosenItems: boolean[] = [];
  priceInfo: any = {}
  chosenCartIds: any[] = []

  created() {
    getShoppingCart().then(res => {
      let cartIds: string[] = [];
      this.shoppingCartItems = res.data
      for (let i = 0; i < this.shoppingCartItems.length; i++) {
        this.chosenItems[i] = true
        cartIds[i] = this.shoppingCartItems[i].cartItem.id
      }
      const request = {
        "ids": cartIds
      }
      this.chosenCartIds = cartIds
      console.log(request)
      calculateCartPrice(request).then(res => {
        this.priceInfo = res.data
      });
    });
  }


  continueBuy() {
    this.$router.push("/shop");
  }

  @Watch("chooseAll")
  chooseAllAction(chooseAll: boolean) {
    for (let i = 0; i < this.chosenItems.length; i++) {
      this.chosenItems[i] = this.chooseAll
    }
    this.calculatePrice()
  }

  @Watch("chosenItems")
  calculatePrice() {
    let cartIds: string[] = [];
    let index = 0;
    for (let i = 0; i < this.chosenItems.length; i++) {
      if (this.chosenItems[i]) {
        cartIds[index] = this.shoppingCartItems[i].cartItem.id
        index++
      }
    }
    this.chosenCartIds = cartIds
    const request = {
      "ids": cartIds
    }
    console.log(request)
    calculateCartPrice(request).then(res => {
      this.priceInfo = res.data
    });
  }

  conformOrder() {
    if (this.chosenCartIds.length == 0) {
      return
    }
    localStorage.setItem("cartIds", this.chosenCartIds.toString());
    this.$router.push("/transaction/check")
  }
};

</script>
<style scoped>
.shopping-cart {
  padding-left: 5%;
  padding-right: 5%;
}

.shopping-items {
  width: 60%;
  float: left;
  padding-left: 20px;
}

.price-card {
  background-color: whitesmoke;
  width: 25%;
  float: right;
  margin-right: 10%;
  padding: 20px 20px 60px;
}

.shopping-items2 {
  text-align: left;
}

.chooseItem {
  padding-top: 20px;
}

.price-card-header {
  text-align: left;
}

.description {
  margin-top: 10px;
  text-align: left;
  font-size: 16px;
  font-style: italic;
  color: #8a7777;
}

.buy-now {
  width: 75%;
  border: none;
  background-color: #4a4e56;
  color: #F9F9F9;
}

.continue-buy {
  width: 75%;
  border: none;
}

.cart-container {
  margin-top: 50px;
}
</style>