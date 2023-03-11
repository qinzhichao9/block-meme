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
            <i class="icon fa-sharp fa-solid fa-circle-check fa-4x"></i>
            <h4>手袋科技</h4>
            <p>"—BLOCK From LIFE & TECHNOLOGY—"</p>
            <p> 布洛可 灵感来自于生活与科技</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="feature-box col-lg-4">
            <i class="icon fa-solid fa-bullseye fa-4x"></i>
            <h4>精致设计</h4>
            <p>"—Natural Angle for Perfection—"</p>
            <p>天然角度 自然协调</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="feature-box col-lg-4">
            <i class="icon fa-solid fa-heart fa-4x"></i>
            <h4>质感斐然</h4>
            <p>"—My Youth, My Elegant and My Block—"</p>
            <p>我的青春 我的优雅 我的斐然</p>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="product-wel">
      <div>
        <b><label style="font-size: 30px">Featured Products</label></b>
      </div>
      <div style="padding-top: 20px">

        <label class="product-wcl3">设计单品集合</label>
      </div>
    </div>
    <div>
      <el-row :gutter="20">
        <div v-for="(product,idx) in products " key="idx" class="product-container"
             @click="openProductDetail(product.id)">
          <el-col :span="6" class="product-col">
            <img src="../assets/bg1.png">
            <span>BLOCK MEME</span>
            <h5 class="prodcut-title">保龄手提——Bowling Bag</h5>
            <span class="price">¥2255</span>
            <i class='bx bx-cart bx-sm cart1'></i>
          </el-col>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
import {Vue} from "vue-property-decorator";

export default class HomePage extends Vue {
  products = [{
    "id": 1212,
    "img": "./assets/bg1.png"
  },
    {
      "id": 1212,
      "img": "./assets/bg1.png"
    },
    {
      "id": 1212,
      "img": "./assets/bg1.png"
    }]

  created() {
  }


  openProductDetail(productId) {
  }
}
</script>

<style lang="less">

* {
  font-family: 'Montserrat', sans-serif;
}

.introduce-img {
  background-image: url("https://block-meme.oss-cn-beijing.aliyuncs.com/background.jpg");
  height: 600px;
  width: 90%;
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

.product-wel {
  margin-top: 100px;
}

.product-wcl3 {
  font-size: 18px;
  font-weight: 400;
  color: #606063;
}


.product-container {
  margin-left:5%;
}

.product-col {
  padding: 10px 12px;
  border:1px solid;
  border-radius: 25px;
  cursor: pointer;
  margin-right: 50px;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
}
</style>
