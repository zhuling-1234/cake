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

      this.$axios
        .post('/login/signin', {
          uname: this.username,
          pwd: this.password,
        })
        .then((res) => {
          // 在localStorage里存储或更新一条登陆记录
                              //key       值
          localStorage.setItem('auth', this.username);

          this.$toast.success('登陆成功');
          // 声明变量保存登陆之前的页面的地址
          const redirect = this.$route.query.redirect;
          // 判断redirect里是否有之前的页面地址
          if(redirect){
            // 如果有，登录后就跳转到之前的页面地址中
            this.$router.push(redirect)
          }else{
            // 如果没有，就跳转到首页地址
            this.$router.push('/')
          };
          
        })
        .catch((err) => {
          this.$toast(err.response.data.msg);
        });
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
