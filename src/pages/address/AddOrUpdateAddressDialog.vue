<template>
  <el-dialog
      :title="tittle"
      :visible.sync="visible"
      width="600px"
      :before-close="handleClose">
    <div>
      <el-form class="address-form" :model="form">
        <el-form-item label="姓名" label-width="80px">
          <el-input v-model="form.name" style="width: 90%"></el-input>
        </el-form-item>
        <el-form-item label="省" label-width="80px">
          <el-select v-model="provinceCode" style="width: 100px">
            <el-option v-for="(item,idx) in  this.provinceAreaList "
                       :key="idx" :label="item.name" :value="item.code"></el-option>
          </el-select>

          <label class="form-label"> 市</label>
          <el-select v-model="cityCode" style="width: 100px">
            <el-option v-for="(item,idx) in  this.cityAreaList "
                       :key="idx" :label="item.name" :value="item.code"></el-option>
          </el-select>
          <label class="form-label">区/县</label>
          <el-select v-model="countryCode" style="width: 100px">
            <el-option v-for="(item,idx) in  this.countryAreaList "
                       :key="idx" :label="item.name" :value="item.code"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="详细地址" label-width="80px">
          <el-input v-model="form.detail" style="width: 90%"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" label-width="80px">
          <el-input v-model="form.phoneNumber" style="width: 90%"></el-input>
        </el-form-item>
        <el-form-item label="默认地址" label-width="80px">
          <el-switch v-model="form.defaultAddress"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button class="form-button" @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="saveOrUpdateAddress">确 定</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from "vue-property-decorator";
import {addAddress, getAreaCodeList} from "@/api/address";

@Component({
  components: {}
})

export default class AddOrUpdateAddressDialog extends Vue {
  @Prop({required: true}) visible: boolean = false
  @Prop({required: false}) address: any
  @Prop({required: false}) isCreate: boolean = false


  tittle = this.isCreate ? "新地址" : "修改地址";
  provinceCode = "";
  cityCode = '';
  countryCode = '';

  provinceAreaList: any[] = []

  cityAreaList: any[] = []

  countryAreaList: any[] = []

  form = {
    province: "",
    city: "",
    country: "",
    detail: "",
    name: "",
    phoneNumber: "",
    defaultAddress: false,
    call: "暂不透露"
  }

  saveOrUpdateAddress() {
    let request = {
      "phoneNumber": this.form.phoneNumber,
      "receiver": this.form.name,
      "adCode": this.countryCode,
      "detail": this.form.detail,
      "defaultAddress": this.form.defaultAddress
    }
    this.visible = false
    addAddress(request).then(res => {
      if (res == 200) {
        this.$message({
          message: '添加地址成功',
          type: 'success'
        });
      }
    })

    this.getAreaCodeList("0", 1);
  }

  created() {
    this.getAreaCodeList("0", 1);
    if (!this.isCreate) {
      this.form.province = this.address.province;
      this.form.name = this.address.receiver
      this.form.detail = this.address.detail
      this.form.phoneNumber = this.address.phoneNumber;
      this.form.defaultAddress = this.address.defaultAddress;

      this.provinceCode = this.address.provinceCode
      // this.cityCode = this.address.cityCode
      //
      // this.getAreaCodeList(this.address.cityCode, 3);
      // this.countryCode = this.address.countryCode
    }

  }

  getAreaCodeList(code: String, type: Number) {
    getAreaCodeList(code).then(res => {
      if (type == 1) {
        this.provinceAreaList = res.data
      }
      if (type == 2) {
        this.cityAreaList = res.data
      }
      if (type == 3) {
        this.countryAreaList = res.data
      }
    })
  }

  @Watch("provinceCode")
  updateCityCode() {
    this.getAreaCodeList(this.provinceCode, 2);
    this.cityCode = '';
    this.countryCode = '';

  }

  @Watch("cityCode")
  updateCountyCode() {
    this.getAreaCodeList(this.cityCode, 3);
    this.countryCode = '';
  }

}
</script>

<style scoped>
.address-form {
  text-align: left;
}

.form-label {
  padding-left: 15px;
  padding-right: 15px;
}


.form-button {
  margin-right: 100px;
}
</style>