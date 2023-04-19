<template>

  <div>
    <div class="shop-header">
      <h2>科技手袋</h2>
      <b><span style="font-size: 30px;color: #088178">All series On Chain</span></b>
      <p>立即获取你的BLOCK MEME品牌专属券码</p>
    </div>
    <div class="contact1">
      <div>
        <h2>有关于BLOCK MEME中国官网的咨询</h2>
        <h4>在线客服</h4>
        <p>(我们的客服从平日9:00-20:00，节假日9:00-18:00（春节除外）提供咨询服务)</p>
      </div>
      <div>
        <img src="@/assets/wechat_qr.jpg">
      </div>
    </div>
    <BlockFooter></BlockFooter>
  </div>
</template>

<script>
import {Component, Vue} from "vue-property-decorator";
import BlockFooter from "@/components/BlockFooter";

@Component({
  components: {BlockFooter}
})
export default class ConnectUs extends Vue {
  url = src / assets / wechat_qr.jpg
}
</script>

<style lang="less" scoped>

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


.contact1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px;
  text-align: left;
}

.contact1 img {
  height: 150px;
  width: auto;
}


</style>