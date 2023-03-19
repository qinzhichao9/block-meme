<template>
  <div class="product-wel">
    <div>
      <b><label style="font-size: 30px">Featured Products</label></b>
    </div>
    <div style="padding-top: 20px">
      <label class="product-wcl3">设计单品集合</label>
    </div>
  </div>
</template>

<script lang="ts">

import {Component, Vue} from "vue-property-decorator";

@Component({
  components: {}
})
export default class FeatureProduct extends Vue {

}
</script>

<style lang="less" scoped>

.product-wel {
  margin-top: 100px;
}

.product-wcl3 {
  font-size: 18px;
  font-weight: 400;
  color: #606063;
}

</style>