<template>
  <div>
    <div style="margin-top: 80px">
      <el-row>
        <el-col span="10">
          <div class="detail-img-con">
            <el-carousel class="detail-img-carousel" direction="horizontal" :autoplay="false" height="700px">
              <el-carousel-item v-for="item in handbag.images" :key="item">
                <el-image class="detail-img" v-bind:src="item"></el-image>
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
        <el-col span="10" offset="3">
          <div class="detail-info">
            <div class="detail-title">
              <label>{{ handbag.name }}</label>
            </div>
            <div class="detail-title">
              <label> ￥{{ handbag.price }}</label>
            </div>

            <el-divider/>
            <div>
              <label>款号 {{ handbag.series }}</label>
            </div>
            <div style="margin-top: 20px">
              <label>有货</label>
            </div>
            <div>
              <label style="font-style:italic">预计发货后1-4个工作日送达</label>
            </div>
            <div style="margin-top: 20px">
              <el-button @click="addShoppingCart2" class="detail-button">加入购物车</el-button>
            </div>

            <div class="bag-des">
              {{ handbag.description }}
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div style="margin-top: 150px">
      <BlockFooter></BlockFooter>
    </div>
    <div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {getDetail} from "@/api/handbag";
import {addShoppingCart} from "@/api/shppingCart";
import BlockFooter from "@/components/BlockFooter.vue";

@Component({
  components: {BlockFooter}
})
export default class HandbagDetail extends Vue {
  id: string = '';

  handbag: any = {};

  created() {
    console.log(this.$route.params.id)
    this.id = this.$route.params.id;
    getDetail(this.id).then(res => {
      console.log(res.data)
      this.handbag = res.data
    })
  }

  addShoppingCart2() {
    let request = {
      "handbagId": this.id,
      "quantity": 1
    };

    addShoppingCart(request).then(res => {
      this.$message({
        message: '添加购物车成功',
        type: 'success'
      })
    })

  }
}
</script>

<style lang="less" scoped>

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.detail-img-con {
  margin-left: 10%;
  width: 700px;
  float: left;
}

.detail-info {
  margin-right: 25%;
  margin-top: 50px;
  text-align: left;
}

.detail-img {
  width: 800px;
  object-fit: cover;
}

.detail-img-carousel {
  background-color: #F9F9F9;
  height: 700px;
}

.detail-title {
  font-size: 22px;
  //font-weight: bold;
}

.detail-button {
  width: 230px;
  background-color: #088178;
  color: white;
}

.bag-des {
  margin-top: 40px;
}
</style>