<template>
  <div>
    <div class="shop-header">
      <h2>科技手袋</h2>
      <b><span style="font-size: 30px;color: #088178">All series On Chain</span></b>
      <p>立即获取你的BLOCK MEME品牌专属券码</p>
    </div>
    <FeatureProduct/>
    <div class="product-container">
      <el-row>
        <el-col :span="8"
                v-for="(handbag,idx) in productList"
                :key="idx">
          <HandbagBrief :handbag="handbag"></HandbagBrief>
        </el-col>
      </el-row>
    </div>
    <BlockFooter/>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {getHandbagList} from "@/api/handbag";
import FeatureProduct from "@/components/FeatureProduct.vue";
import HandbagBrief from "@/pages/handbag/HandbagBrief.vue";
import BlockFooter from "@/components/BlockFooter.vue";

@Component({
  components: {BlockFooter, HandbagBrief, FeatureProduct}
})

export default class Products extends Vue {
  productList: any = [];

  created() {
    getHandbagList().then((res) => {
      this.productList = res.data;
    });
  }
}
</script>

<style lang="less" scoped>
* {
  font-family: 'Montserrat', sans-serif;
}


.shop-header {
  background-image: url("https://block-meme.oss-cn-beijing.aliyuncs.com/banner-bg.jpg");
  height: 300px;
  width: 100%;
  background-size: cover;
  background-position: top 25% right 0;
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.product-container {
  padding-top: 50px;
  text-align: center;
  padding-left: 10%;
  padding-right: 10%;
}
</style>

