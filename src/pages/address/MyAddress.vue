<template>
  <div>
    <div class="address-container">
      <el-row class="">
        <el-col :span="8"
                v-for="(address,idx) in addressList"
                :key="idx">
          <AddressCard :address="address"/>
        </el-col>
        <el-col :span="8">
          <div>添加地址</div>
        </el-col>
      </el-row>
    </div>
    <AddOrUpdateAddressDialog :visible="addAddressDialog" :is-create=true></AddOrUpdateAddressDialog>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import AddressCard from "@/pages/address/AddressCard.vue";
import AddOrUpdateAddressDialog from "@/pages/address/AddOrUpdateAddressDialog.vue";

@Component({
  components: {
    AddOrUpdateAddressDialog,
    AddressCard
  }
})

export default class MyAddress extends Vue {
  addOrUpdateAddressDialog = false;

  addAddressDialog = false;
  addressList = [
    {
      "province": "贵州",
      "city": "铜仁",
      "country": "思南",
      "detail": "北京",
      "id": "1212",
      "name": "其内涵擦汗",
      "phoneNumber": "1212121212",
      "isDefault": true,
    },
    {
      "province": "贵州",
      "city": "铜仁",
      "country": "思南",
      "detail": "北京",
      "id": "1212",
      "name": "北京",
      "phoneNumber": "1212212211",
      "isDefault": false,
    }
  ]

  showUpdateDialog() {
    this.addOrUpdateAddressDialog = true;
    console.log(this.addOrUpdateAddressDialog)
    console.log("xxxxxxxxxxxxxxxx-----------------------")
  }

  created() {

  }
}

</script>

<style lang="less">
.address-container {
  padding-top: 60px;
  padding-left: 20%;
  padding-right: 20%;
  background-color: #E3E3E3;
}
</style>