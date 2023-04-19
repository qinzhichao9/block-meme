<template>
  <div class="profile-container">
    <div class="profile-body">
      <div class="profile-category">
        <b><label>您的信息</label></b>
        <el-button @click="startEdit" type="text">
          <i class="el-icon-edit edit-button">修改</i></el-button>
        <el-divider></el-divider>
      </div>
      <div class="profile-line">
        <label class="profile-title"> 姓名 : </label>
        <label v-if="!isEdit" class="profile-info"> {{ this.profile.username }}</label>
        <el-input class="profile-input-button" v-if="isEdit" v-model="profile.username"></el-input>
      </div>
      <div class="profile-line">
        <label class="profile-title"> 生日 : </label>
        <label v-if="!isEdit" class="profile-info">
          {{ bornDate }}
        </label>
        <el-date-picker v-if="isEdit"
                        v-model="profile.bornDate"
                        type="date"
                        @change="pickTime"
                        placeholder="选择日期" format="yyyy 年 MM 月 dd 日">
        </el-date-picker>
      </div>

      <div class="profile-line">
        <label class="profile-title"> 联系电话 : </label>
        <label v-if="!isEdit" class="profile-info">{{ profile.phoneNumber }}</label>
        <el-input class="profile-input-button" v-if="isEdit" v-model="profile.phoneNumber"></el-input>
      </div>

      <div class="profile-category">
        <b><label>账户详情</label></b>
        <el-divider></el-divider>
      </div>
      <div class="profile-line">
        <label class="profile-title"> 手机号: </label>
        <label v-if="!isEdit" class="profile-info"> {{ profile.phoneNumber }}</label>
        <el-input class="profile-input-button" v-if="isEdit" v-model="profile.phoneNumber"></el-input>
      </div>

      <div class="profile-line">
        <label class="profile-title"> 邮箱 : </label>
        <label v-if="!isEdit" class="profile-info">{{profile.email}}</label>
        <el-input class="profile-input-button" v-if="isEdit" v-model="profile.email"></el-input>
      </div>

      <div class="profile-category">
        <b><label>隐私设置</label></b>
        <el-divider></el-divider>
      </div>
      <div class="profile-line">
        <el-checkbox v-if="isEdit" v-model="profile.privacy">我希望收到关于 BLOCK MEME
          的新活动邀请、独家产品、量身订制服务以及根据我的兴趣所个性化的客户体验的更新。
        </el-checkbox>
        <el-checkbox v-if="!isEdit" v-model="profile.privacy" disabled>我希望收到关于 BLOCK MEME
          的新活动邀请、独家产品、量身订制服务以及根据我的兴趣所个性化的客户体验的更新。
        </el-checkbox>

        <div class="privacy-settings">
          <label>隐私权相关法规赋予您多项权利。您可以向我们要求取得、删除、修改、更正您的个人信息，或限制我们处理或传输您个人信息的权利。
            您亦可向相关监管机构提出申诉，或于任何时候撤回同意或删除个人帐户。关于我们的隐私权实践及您的权利，您可以通过电子邮件与我们取得进一步的信息:privacy@gmail.com。</label>
        </div>
      </div>
      <div class="profile-save" v-if="isEdit">
        <el-button class="profile-save-button" @click="submitUpdate">保存修改</el-button>
        <el-button class="profile-cancel-button" type="text" @click="isEdit=false">取消修改</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {getCurrentUserInfo, updateUserInfo} from "@/api/user";
import {formatDate} from "@/utils/datetimeUtil";

@Component({
  components: {}
})
export default class MyProfile extends Vue {

  bornDate = '';
  isEdit = false;
  profile: any = {};

  startEdit() {
    if (this.isEdit) {
      this.isEdit = false
      return
    }
    this.isEdit = true;
  }

  pickTime(date: Date) {
    this.profile.bornDate = date.getTime()
    this.bornDate = formatDate(date.getTime())
  }

  submitUpdate() {
    updateUserInfo(this.profile);
    this.isEdit = false;
  }


  created() {
    getCurrentUserInfo().then(res => {
      this.profile = res.data;
      console.log("ssssssssssssssss")
      console.log(this.profile);
      this.bornDate = formatDate(this.profile.bornDate);
    })

  }
}
</script>

<style scoped>
.profile-container {
  margin-left: 5%;
  margin-right: 5%;
}

.profile-body {
  padding-left: 20%;
  padding-right: 20%;
  text-align: left;

}

.profile-title {
  font-size: 20px;
  padding-right: 25px;
  padding-left: 25px;

}

.profile-info {
  font-size: 20px;
}

.profile-input-button {
  width: 400px;
}

.profile-line {
  padding-top: 20px;
}

.profile-category {
  margin-top: 30px;
  font-size: 25px;
}

.privacy-settings {
  margin-top: 10px;
  font-size: 13px;
}

.profile-save {
  margin-top: 30px;
}

.profile-save-button {
  width: 200px;
  font-size: 20px;
  background-color: #088178;
  color: white;
}

.profile-cancel-button {
  width: 200px;
  font-size: 20px;
  color: #5b4848;
}

.edit-button {
  padding-left: 50px;
  font-size: 20px;
  color: #088178;
}

.edit-button:hover {
  color: #700d0d;
}
</style>