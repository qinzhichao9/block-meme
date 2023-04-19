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
      <a href=" https://beian.miit.gov.cn" style="text-decoration-line: none">沪ICP备2022003488号-1</a>
    </footer>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component({
  components: {}
})
export default class BlockFooter extends Vue {

  openUrl() {
    window.open('https://beian.miit.gov.cn')
  }

}
</script>

<style lang="less" scoped>


.foot-box {
  background-image: url("https://block-meme.oss-cn-beijing.aliyuncs.com/%E5%AE%98%E7%BD%91%E5%9B%BE%E7%89%87%E5%92%8C%E6%95%B0%E6%8D%AE/%E5%BA%95%E9%83%A8banner.jpg");
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
