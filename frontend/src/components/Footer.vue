<template>
  <div class="Footer">
    <div class="footer-text">
      <van-row type="flex" justify="space-around">
        <van-col span="8">关于我们</van-col>
        <van-col span="8"></van-col>
        <van-col span="8" class="jia">+</van-col>
      </van-row>
      <van-row type="flex" justify="space-around">
        <van-col span="8">网站运营</van-col>
        <van-col span="8"></van-col>
        <van-col span="8" class="jia">+</van-col>
      </van-row>
      <van-row>
        <van-col span="12">
          <img
            class="footer-logo"
            src="@/assets/index-logo/footer-logo.png"
            alt=""
          />
        </van-col>
        <van-col span="4">
          <img
            class="footer-icon"
            src="@/assets/index-logo/footer-icon-weibo.png"
            alt=""
          />
        </van-col>
        <van-col span="4">
          <img
            class="footer-icon"
            src="@/assets/index-logo/footer-icon-tel.png"
            alt=""
          />
        </van-col>
        <van-col span="4">
          <img
            class="footer-icon"
            src="@/assets/index-logo/footer-icon-app.png"
            alt=""
          />
        </van-col>
      </van-row>

      <van-row>
        <van-col class="copyright" span="24"
          >Copyright© 21Cake蛋糕官网商城 2007-2020,版权所有</van-col
        >
      </van-row>
      <van-row>
        <van-col class="copyright" span="24"
          >京公网安备11030102010682号</van-col
        >
      </van-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.Footer {
  background: #333;
  color: #fff;
  padding-bottom: 15px;
  bottom: 0;
  left: 0;
  width: 100%;
}

.Footer .footer-text {
  width: 340px;
  margin: 0 auto;
}

.Footer .jia {
  text-align: end;
}

.Footer .van-row:nth-child(1),
.Footer .van-row:nth-child(2),
.Footer .van-row:nth-child(3) {
  height: 50px;
  line-height: 50px;
}

.Footer .footer-logo {
  height: 40px;
  width: 140px;
}

.Footer .footer-icon {
  width: 35px;
  text-align: center;
}

.Footer .copyright {
  font-size: 12px;
  color: darkgrey;
  text-align: center;
}

.Footer .van-row .van-col:nth-child(1) {
  font-size: 12px;
}
</style>
