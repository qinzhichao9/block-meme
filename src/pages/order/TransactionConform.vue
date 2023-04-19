<template>
  <div>

    <div class="transaction-conform">
      <el-row>
        <el-col :span="14">
          <div class="left-container">
            <div class="phone-info">
              <div>
                手机号码
              </div>
              <div>
                我们将通过以下手机号码向您发送订单相关信息
              </div>
              <div>
                {{ address.phoneNumber }}
              </div>
            </div>

            <div class="order-address-container">
              <div class="address-head">
                <label>配送地址</label>
              </div>
              <el-divider/>
              <div>
                <el-row>
                  <el-col span="21">
                    <label>选择你的配送地址</label>
                  </el-col>
                  <el-col span="3">
                    <el-button size="mini" icon="el-icon-plus" @click="openAddAddress">添加地址</el-button>
                  </el-col>
                </el-row>
                <div>
                  <el-row>
                    <el-col span="12" v-for="(item,idx) in addressList"
                            :key="idx">
                      <div class="address-item-info">
                        <div style="padding: 5px">
                          <el-row>
                            <el-col span="21">
                              <label>{{ item.receiver }}</label>
                            </el-col>
                            <el-col span="3">
                              <el-button type="text" class="edit-address"> 编辑</el-button>
                            </el-col>
                          </el-row>
                          <div style="margin-bottom: 15px">
                            <label>{{ item.phoneNumber }}<br/>
                              {{ item.province }} {{ item.city }} {{ item.country }}
                              {{ item.detail }}
                            </label>
                          </div>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>

              <div style="padding-top: 50px">
                <label>配送方式<br/></label>
                <el-row style="padding-top: 10px;">
                  <el-col span="7">
                    <el-radio v-model="divType" label="1">普通快递</el-radio>
                  </el-col>
                  <el-col span="4">-免费</el-col>
                </el-row>
              </div>
            </div>

            <div class="order-address-container">
              <div class="address-head">
                <label>支付方式</label>
              </div>
              <el-divider/>
              <div>
                <label>在线支付</label>
              </div>
              <div style="padding-top: 20px">
                <el-radio v-model="payType">
                  支付宝
                </el-radio>
              </div>
              <el-divider/>
              <div>
                <el-checkbox v-model="needInvoice">需要发票</el-checkbox>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="7" :offset="2">
          <div class="right-price">
            <label> {{ conformData.productCount }} 件商品</label>
            <el-divider></el-divider>
            <el-row v-for="(handbag,idx) in conformData.handbags"
                    :key="idx">
              <el-col span="4">
                <el-image src="https://block-meme.oss-cn-beijing.aliyuncs.com/img/p2.jpg"></el-image>
              </el-col>
              <el-col span="14" offset="2">
                <div style="text-align: left">
                  <label>{{ handbag.name }}</label>
                </div>
                <div class="right-product-info">
                  <div>
                    <label>款号# {{ handbag.series }}</label>
                  </div>
                  <!--                  <div>-->
                  <!--                    <label>款式： 玫瑰米色皮革</label>-->
                  <!--                  </div>-->
                  <div>
                    <label>有货：</label>
                  </div>
                </div>
              </el-col>
              <el-col span="4">
                <div>
                  <label>数量: {{ handbag.quantity }}</label>
                </div>
                <div style="margin-top: 25px">
                  ￥{{ handbag.price }}
                </div>
              </el-col>
            </el-row>
            <div>
              <el-divider></el-divider>
            </div>
            <div class="price-info">
              <el-row>
                <el-col span="4">
                  <label>
                    商品总计
                  </label>
                </el-col>
                <el-col span="4" offset="16">
                  <label>
                    ￥{{ conformData.totalAmount }}
                  </label>
                </el-col>
              </el-row>

              <el-row>
                <el-col span="4">
                  <label>
                    运费
                  </label>
                </el-col>
                <el-col span="4" offset="16">
                  <label>
                    免费
                  </label>
                </el-col>
              </el-row>

              <el-row>
                <el-col span="4">
                  <label>
                    总计
                  </label>
                </el-col>
                <el-col span="4" offset="16">
                  <label>
                    ￥{{ conformData.totalAmount }}
                  </label>
                </el-col>
              </el-row>
            </div>
            <el-divider/>
            <div>
              <el-button class="confirm-order" @click="submitOrder">提交订单</el-button>
            </div>
            <el-divider/>
            <div class="desc-price">
              <div>
                说明
              </div>
              <div class="desc-price-2">
                在线支付订单提交之后15分钟内未付款，订单将被系统自动取消，请您尽快完成支付以确保商品能及时送达，有货商品和门店配货商品是分开寄出。
              </div>
            </div>
            <div>
              <label>免费配送</label>
            </div>
          </div>
        </el-col>
      </el-row>
      <div>
      </div>
    </div>

    <BlockFooter/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import BlockFooter from "@/components/BlockFooter.vue";
import {getAreaCodeList, getMyAddress} from "@/api/address";
import {orderConform, submitOrder} from "@/api/order";

@Component({

  components: {BlockFooter}
})
export default class TransactionConform extends Vue {
  divType: string
  payType: String = '1';
  needInvoice = false
  addressList: any = []
  address: any = {}
  conformData = ''
  cartIds: any = [];

  openAddAddress() {

  }

  submitOrder() {
    let req = {
      "cartIds": this.cartIds,
      "addressId": this.address.id
    }
    submitOrder(req).then(res => {
      localStorage.setItem("form", res.data)
    })
    this.$router.push("/transaction/pay")
  }

  created() {
    getMyAddress().then(res => {
      this.addressList = res.data
      if (res.data.length > 0) {
        this.address = this.addressList[0];
      }
      for (var i = 0; i < res.data.length; i++) {
        let item = res.data[i]
        if (item.defaultAddress) {
          this.address = item
        }
      }
    })
    this.divType = "1"
    const items = localStorage.getItem("cartIds");
    var xx = null
    if (items != null) {
      xx = items.split(',');
    }
    const request = {
      "cartItemIds": xx
    }
    this.cartIds = xx
    orderConform(request).then(res => {
      this.conformData = res.data
    })


  }
}
</script>

<style lang="less" scoped>
.transaction-conform {
  margin-top: 60px;
  padding-left: 5%;
  padding-right: 5%;
}


.right-price {
  background-color: whitesmoke;
  padding-left: 20px;
  padding-top: 20px;
  padding-right: 20px;
  margin-right: 10%;

  padding-bottom: 50px;
}

.right-product-info {
  color: #757070;
  font-size: 0.9rem;
  text-align: left;
}

.price-info {
  font-size: 0.9rem;
  text-align: left;
}

.price-info label {
  margin-top: 5px;
}

.confirm-order {
  width: 75%;
  border: none;
  background-color: #4a4e56;
  color: #F9F9F9;
}

.desc-price {
  text-align: left;
  font-size: 0.9rem;
  color: #8a8686;
}

.desc-price-2 {
  font-style: italic;
  margin-top: 10px;
}

.phone-info {
  text-align: left;
  font-size: 0.9rem;
  background-color: whitesmoke;
  padding-left: 5%;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
}

.phone-info div {
  margin-top: 8px;
}

.order-address-container {
  background-color: whitesmoke;
  margin-top: 40px;
  padding-left: 5%;
  padding-right: 5%;
  text-align: left;
  padding-bottom: 40px;
}

.address-item-info {
  border: 1.6px solid black;
  margin-right: 10px;
  margin-top: 10px;
}

.edit-address {
  height: 15px;
  color: #444040;
}

.address-head {
  font-size: 1.5rem;
  padding-top: 1.5rem;
}


.pay-type-container {
}
</style>