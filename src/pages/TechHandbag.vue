<template>
  <div>
    <div>
      <div class="tech">
        <img src="https://block-meme.oss-cn-beijing.aliyuncs.com/img/%E6%95%B0%E5%AD%972.jpg"/>
        <br><br/>
        <p>BLOCK MEME 采用数字技术来保真与防伪</p>
        <div>
          <button class="tech-button">逛一逛</button>
        </div>
      </div>
    </div>
    <block-footer></block-footer>
  </div>
</template>

<script lang="ts">

import {Component, Vue} from "vue-property-decorator";
import BlockFooter from "@/components/BlockFooter.vue";

@Component({
  components: {BlockFooter}
})
export default class TechHandbag extends Vue {
}
</script>

<style lang="less" scoped>
.tech {
  margin-top: 50px;
  object-fit: cover;
  /* display: flex; */
  text-align: center;

}

.tech-button {
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
</style>