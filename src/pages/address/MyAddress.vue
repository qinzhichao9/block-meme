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
          <el-button @click="showAddDialog"> 添加地址</el-button>
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
import {getMyAddress} from "@/api/address";

@Component({
  components: {
    AddOrUpdateAddressDialog,
    AddressCard
  }
})

export default class MyAddress extends Vue {
  addOrUpdateAddressDialog = false;

  addAddressDialog = false;
  addressList: any[] = []

  showUpdateDialog() {
    this.addOrUpdateAddressDialog = true;
  }

  showAddDialog() {
    this.addAddressDialog = true;
  }

  created() {
    getMyAddress().then(res => {
      this.addressList = res.data
    })
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