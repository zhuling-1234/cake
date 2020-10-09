<template>
  <div class="Signin">
    <p>用户登录</p>
    <!-- 注册信息表 -->
    <van-form @submit="onSubmit">
      <van-field v-model="username" label="用户名" placeholder="用户名" />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
      />
      <!-- 提交按钮 -->
      <div style="margin: 16px;">
        <van-button color="#442818" size="large" @click="signin"
          >登录</van-button
        >
      </div>

      <router-link class="tosignup" to="/signup">去注册>></router-link>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      checked: true,
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
    signin() {
      if (!this.username && !this.password) {
        this.$toast('请输入登录信息');
        return;
      }
      if (!this.username) {
        this.$toast('用户名不能为空');
        return;
      } else if (!this.password) {
        this.$toast('密码不能为空');
        return;
      }
    },
  },
};
</script>

<style scoped>
.Signin > p {
  font-size: 15px;
  color: #442818;
  text-align: center;
  margin-top: 16px;
}

.Signin .van-form {
  margin-bottom: 150px;
}

.Signin .tosignup {
  font-size: 14px;
  color: gray;
  float: right;
  margin-right: 20px;
}
</style>
