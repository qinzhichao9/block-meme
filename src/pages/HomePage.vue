<template xmlns:el-col="http://www.w3.org/1999/html">
  <div>
    <div class="introduce-img">
      <label style="font-size:20px; padding-bottom: 12px"><b>Trade-in-offer</b></label>
      <label style="font-size: 30px"><b>科技手袋</b></label>
      <label style="font-size: 40px;color: #088178">All series On Chain</label>
      <label style="padding-bottom: 10px">立即获取你的BLOCK MEME品牌专属券码</label>
      <el-button class="introduce-buy-now">立即购买</el-button>
    </div>
    <div class="introduce-word">
      <h1>美感、激情与珍贵细节</h1>
      <p>Address、Trinty、Juste Un、Love Fo | 系列均遵循的设计准则：简约、精准、比例和珍贵细节</p>
      <div></div>
    </div>
    <div>
      <el-row :gutter="100">
        <el-col :span="8">
          <div class="feature-box col-lg-4">
            <h4>手袋科技</h4>
            <p>"—BLOCK From LIFE & TECHNOLOGY—"</p>
            <p> 布洛可 灵感来自于生活与科技</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="feature-box col-lg-4">
            <h4>精致设计</h4>
            <p>"—Natural Angle for Perfection—"</p>
            <p>天然角度 自然协调</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="feature-box col-lg-4">
            <h4>质感斐然</h4>
            <p>"—My Youth, My Elegant and My Block—"</p>
            <p>我的青春 我的优雅 我的斐然</p>
          </div>
        </el-col>
      </el-row>
    </div>

    <FeatureProduct/>
    <div>
      <el-row :gutter="20">
        <el-col :span="8" class="product-col" v-for="(product,idx) in productList"
                :key="idx">
          <div class="product-info" @click="openUrl(product.handbagId)">
            <div>
              <el-image class="product-img" v-bind:src=product.img></el-image>
            </div>
            <div class="product-col-intr">
              <label style="text-align: left">BLOCK MEME</label>
              <h5 class="prodcut-title">{{ product.title }}</h5>
              <b><h3 class="price">¥{{ product.price }}</h3></b>
            </div>
            <i class='bx bx-cart bx-sm cart1'></i>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="block-idea-container">
      <el-row>
        <el-col :span=12>
          <el-image class="block-idea-container-img" :src=this.images[0]></el-image>
        </el-col>
        <el-col :span=12>
          <div style="text-align: left;padding-left: 30px">
            <div>
              <b><label style="font-size: 30px;padding-top: 30px"> 潜入万物苏醒之间 </label></b>
            </div>
            <div style="padding-top: 20px">
              <label>"——时代女性，正确将相信的人吸引——"</label>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="block-idea-container">
      <el-row>
        <el-col :span=12>
          <div style="text-align: right;padding-right: 30px">
            <div>
              <b><label style="font-size: 30px"> 倏然春和景明 </label></b>
            </div>
            <div style="padding-top: 10px">
              <label>"——时代女性，正确将相信的人吸引——"</label>
            </div>
          </div>
        </el-col>
        <el-col :span=12>
          <div style="padding-left: 30px">
            <el-image class="block-idea-container-img" :src=this.images[1]></el-image>
          </div>
        </el-col>
      </el-row>
    </div>


    <div class="block-idea-container">
      <el-row>
        <el-col :span=12>
          <div>
            <el-image class="block-idea-container-img" :src=this.images[2]></el-image>
          </div>
        </el-col>
        <el-col :span=12>
          <div style="text-align: left;padding-left: 30px;">
            <div>
              <b><label style="font-size: 30px">你看这世界开满了花 </label></b>
            </div>
            <div style="padding-top: 10px">
              <label>"——时代女性，正确将相信的人吸引——"</label>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <block-footer/>
  </div>
</template>

<script>
import {Component, Vue} from "vue-property-decorator";
import BlockFooter from "@/components/BlockFooter.vue";
import {getCurrentUserInfo} from "@/api/user";
import FeatureProduct from "@/components/FeatureProduct";
import {getIndexImages} from "@/api/config";

@Component({
  components: {
    FeatureProduct,
    BlockFooter
  }
})
export default class HomePage extends Vue {
  productList = [];
  images = [];

  created() {
    getIndexImages().then(res => {
      this.productList = res.data.products;
      this.images = res.data.images;
    })
  }

  openUrl(id) {
    window.open("http://blockmeme.cn/product/detail/" + id);
  }

  openProductDetail(productId) {
  }
}
</script>

<style lang="less">

* {
  //font-family: 'Montserrat', sans-serif;
  font-family: 'Montserrat', Sans-serif;
}

.introduce-img {
  background-image: url("https://block-meme.oss-cn-beijing.aliyuncs.com/%E5%AE%98%E7%BD%91%E5%9B%BE%E7%89%87%E5%92%8C%E6%95%B0%E6%8D%AE/%E9%A6%96%E9%A1%B5banner.jpg");
  height: 600px;
  width: 95%;
  background-size: cover;
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.introduce-img h4 {
}

.introduce-img h1 {
  color: #088178;
}

.introduce-img p {
  color: #616060;
}

.introduce-buy-now {
  width: 250px;
  height: 50px;
  border: 1px solid #088178;
  cursor: pointer;
  /* background-color: rgba(14, 47, 234, 0.707); */
  background-color: #088178;
  color: aliceblue;
  font-size: 15px;
  font-weight: 700;
  background-repeat: no-repeat;
}

.introduce-word {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(20, 62, 48);
  padding: 1rem 2rem;
}

.introduce-word p {
  margin: 6px 0;
}

.introduce-word h1 {
  margin: 1rem 0;
  font-size: 40px;
}

.introduce-word div {
  width: 60px;
  height: 3px;
  background-color: rgb(13, 22, 30);
  margin: 1rem 0;
}


.el-row {
  margin: 80px 3% 30px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.feature-box {
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
}


.product-col {
}

.product-img {
  border-radius: 10%;
  width: 90%;
  margin: auto;
  margin-top: 10px;
}

.product-info {
  margin: auto;
  width: 90%;
  border: 1px solid;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
}

.product-col-intr {
  text-align: left;
  margin-left: 6%;
}

.block-idea-container {
  margin-top: 100px;
}

.block-idea-container-img {
  width: 80%;
  display: flex;
}
</style>
