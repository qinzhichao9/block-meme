<template>
  <div>
    <div class="foot-box">
      <h4 style="color: white">BLOCK MEME</h4>
      <b> <label style="font-size: 30px;color: white">Find your <span style="color: red">100.0% True</span> Love of Your
        Bag's Fashion & Technology</label></b>
      <div style="padding-top: 10px">
        <el-button class="export-more">探索更多</el-button>
      </div>
    </div>
    <footer style="align-content: center">
      <p>COPYRIGHT ©️ 2022 BLOCK MEME</p>
      <p>沪ICP备2022003488号-1</p>
    </footer>
  </div>
</template>
<script lang="ts">
import {Vue} from "vue-property-decorator";

export default class BlockFooter extends Vue {


}
</script>

<style lang="less" scoped>


.foot-box {
  background-image: url("https://block-meme.oss-cn-beijing.aliyuncs.com/banner-bg.jpg");
  text-align: center;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 450px;
  background-size: cover;

}

.export-more {
  background-color: #088178;
  width: 200px;
  color: white;

}
</style>
