<template>

  <div>
    <div class="shop-header">
      <h2>科技手袋</h2>
      <b><span style="font-size: 30px;color: #088178">All series On Chain</span></b>
      <p>立即获取你的BLOCK MEME品牌专属券码</p>
    </div>
  </div>
</template>
<script lang="ts">
import {Vue} from "vue-property-decorator";

export default class Products extends Vue {


}
</script>

<style lang="less" scoped>
* {
  font-family: 'Montserrat', sans-serif;
}
.shop-header {
  background-image: url("https://block-meme.oss-cn-beijing.aliyuncs.com/img/b2.jpg");
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
</style>

