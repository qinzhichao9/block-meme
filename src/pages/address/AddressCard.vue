<template>
  <div class="address-card">
    <div class="span-cl">
      <div style="padding-bottom: 20px;font-size: 20px">{{ address.name }}</div>
      <div>{{ address.province }}</div>
      <div>{{ address.city }} {{ address.country }}</div>
      <div>{{ address.detail }}</div>

      <div style="padding-top: 10px">{{ address.phoneNumber }}</div>

      <div v-if="address.isDefault" class="default-cl">
        <el-button style="color: #2c3e50" type="text" disabled>默认地址</el-button>
      </div>
      <div v-if="!address.isDefault">
        <el-button type="text">设为默认地址</el-button>
      </div>
      <div style="border-bottom:1px solid #E3E3E3"></div>
      <div>
        <el-button type="text" @click="handleEditAddress">编辑</el-button>
        <el-button type="text" @click="deleteAdr">删除</el-button>
      </div>
    </div>
    <AddOrUpdateAddressDialog :visible="updateAddress" :address="address"/>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {deleteAddress} from "@/api/address";
import AddOrUpdateAddressDialog from "@/pages/address/AddOrUpdateAddressDialog.vue";

@Component({
  components: {AddOrUpdateAddressDialog}
})
export default class AddressCard extends Vue {
  @Prop({required: true}) address: any
  is = false


  updateAddress = false;

  deleteAdr() {
    deleteAddress(this.address.id);
  }

  handleEditAddress() {
    this.updateAddress = true
  }
}
</script>

<style lang="less" scoped>
.address-card {
  padding-right: 15%;
  padding-left: 15%;
  height: 350px;
  flex-direction: row;
}

.span-cl {
  padding-top: 50px;
  background-color: whitesmoke;
}

.default-cl {
}
</style>