<template>
  <div class="Signup">
    <p>用户注册</p>
    <!-- 注册信息表 -->
    <van-form @submit="onSubmit">
      <van-field v-model="username" label="用户名" placeholder="用户名" />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="密码:8~20字符，需同时包含英文和数字"
      />
      <van-field
        v-model="password2"
        type="password"
        label="确认密码"
        placeholder="请再次填写密码"
      />
      <!-- 提交按钮 -->
      <div style="margin: 16px;">
        <van-button color="#442818" size="large" @click="signup"
          >提交</van-button
        >
      </div>
      <!-- 协议勾选 -->
      <van-checkbox v-model="checked" shape="square" icon-size="14px">
        已阅读并同意
        <router-link to="">21客会员协议</router-link>和
        <router-link to="">隐私保护政策</router-link>
      </van-checkbox>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      password2: '',
      checked: true,
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
    signup() {
      if (!this.password2 && !this.username && !this.password) {
        this.$toast('请输入注册信息');
        return;
      }
      if (!this.username) {
        this.$toast('用户名不能为空');
        return;
      }
      if (!this.password) {
        this.$toast('密码不能为空');
        return;
      }
      if (!this.password2) {
        this.$toast('请再次输入密码');
        return;
      }
      if (this.password2 != this.password) {
        this.$toast('密码不一致');
        return;
      }
    },
  },
};
</script>

<style scoped>
.Signup .van-checkbox {
  font-size: 14px;
  margin: 0 auto;
  width: 341px;
}

.Signup > p {
  font-size: 15px;
  color: #442818;
  text-align: center;
  margin-top: 16px;
}

.Signup .van-form {
  margin-bottom: 150px;
}
</style>
