<template>
  <div class="Me">
    <div class="me-title">我的甘一客</div>
    <h2>亲爱的<span>{{uname}}</span>，欢迎光临！</h2>
    <img
      src="//static.21cake.com//upload/images/20200317/7649161442134eb493c5d60fbfe84540.jpeg"
      alt=""
    />
    <van-row type="flex" justify="end">
      <van-col span="6">
        <van-button type="warning" @click="tuichu"
          >退出登录</van-button
        ></van-col
      >
    </van-row>
  </div>
</template>

<script>
export default {
  mounted() {
    //将auth中保存的值给一个变量，展示在页面上
    this.uname = localStorage.getItem('auth');
  },
  data() {
    return {
      uname: '',
    };
  },
  methods: {
    tuichu() {
      localStorage.removeItem('auth');
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.Me .me-title {
  text-align: center;
  font-size: 16px;
  line-height: 44px;
  color: #8e6a55;
}

.Me .van-row {
    margin: 50px 0 30px 0;
}

.Me h2{
    color: #442818;
}

.Me h2 span{
    color: rgb(255, 153, 0);
}
</style>
