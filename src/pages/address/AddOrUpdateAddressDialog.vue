<template>
  <el-dialog
      :title="tittle"
      :visible.sync="visible"
      width="30%"
      :before-close="handleClose">
    <div>
      <el-form class="address-form" :model="form">
        <el-form-item label="姓名" label-width="80px">
          <el-input v-model="form.name" style="width: 90%"></el-input>
        </el-form-item>
        <el-form-item label="省" label-width="80px">
          <el-select style="width: 100px">
            <el-option label="hh" value="xxx"></el-option>
          </el-select>

          <label class="form-label"> 市</label>
          <el-select style="width: 100px">
            <el-option label="hh" value="xxx"></el-option>
          </el-select>
          <label class="form-label">区/县</label>
          <el-select style="width: 100px">
            <el-option label="hh" value="xxx"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="详细地址" label-width="80px">
          <el-input v-model="form.detail" style="width: 90%"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" label-width="80px">
          <el-input v-model="form.detail" style="width: 90%"></el-input>
        </el-form-item>
        <el-form-item label="默认地址" label-width="80px">
          <el-switch v-model="form.isDefault"></el-switch>
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
import {Component, Prop, Vue} from "vue-property-decorator";

@Component({
  components: {}
})

export default class AddOrUpdateAddressDialog extends Vue {
  @Prop({required: true}) visible: boolean = false
  @Prop({required: false}) address: any
  @Prop({required: false}) isCreate: boolean = false


  tittle = this.isCreate ? "新地址" : "修改地址";

  form = {
    province: "",
    city: "xxxxxx",
    country: "xx",
    detail: "xx",
    name: "qinzhichao",
    phoneNumber: "",
    isDefault: false,
    call: "暂不透露"
  }

  saveOrUpdateAddress() {
    this.visible =false
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