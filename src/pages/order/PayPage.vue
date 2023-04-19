<template>
  <div>
    <div style="height:50px"></div>
    <iframe
        :srcdoc="form"
        frameborder="no"
        border="1"
        width="90%"
        height="900"
        style="overflow: hidden"
    >
    </iframe>
    <BlockFooter></BlockFooter>
  </div>

</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import BlockFooter from "@/components/BlockFooter.vue";

@Component({

  components: {BlockFooter}

})
export default class PayPage extends Vue {
  form: any;

  created() {
    this.form = localStorage.getItem("form")
  }
}
</script>

<style scoped>

</style>