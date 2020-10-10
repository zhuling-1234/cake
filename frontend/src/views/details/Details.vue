<template>
  <div class="Details">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img
          src="//static.21cake.com/upload/images/8c25e3cc2341f40973d0359ca8a7e048.jpg"
          alt=""
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="//static.21cake.com/upload/images/0e3515f1a46479785b7e52930c729858.jpg"
          alt=""
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="//static.21cake.com/upload/images/4c33eb4b0d0851bd124a27082690bbe6.jpg"
          alt=""
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="//static.21cake.com/upload/images/994fcc4d0606a548610dae72cb2a4ec9.jpg"
          alt=""
        />
      </van-swipe-item>
    </van-swipe>
    <!-- 标题和价格 -->
    <div class="details-box">
      <div class="details-title">
        <h3>Teatime</h3>
        <span>浅草</span>
      </div>
      <p class="details-price">￥198.00</p>
    </div>
    <!-- 商品介绍 -->
    <div class="detaills-introduction">
      <div class="details-text">
        /“浅草才能没马蹄”/<br />
        /“切着吃的雨前西湖龙井”/<br />
        /“中国绿茶与爽脆果实，工笔勾勒一杯好茶”/<br />
        /“复杂而纯粹的深浅绿意”/
      </div>
      <div class="details-img">
        <img
          src="https://static.21cake.com/public/images/99/ac/c5/8697fe7846058940e56725827af1f290.jpg?1559641434#h"
          alt=""
        />
        <img
          src="https://static.21cake.com/public/images/bc/35/11/5a10b57019cb997308d8329a8b3e1f66.jpg?1559641443#h"
          alt=""
        />
        <img
          src="https://static.21cake.com//upload/images/20200525/2cbc277880c0255272380fc7d80544dd.jpg?_=0.8285908593512981"
          alt=""
        />
        <img
          src="https://static.21cake.com//upload/images/20200522/e797198fb27846d51b5c350d4363f082.jpg?_=0.399083444316071"
          alt=""
        />
        <img
          src="https://static.21cake.com//upload/images/20200522/c519db68cc754d619ef24ad9146dbfec.jpg?_=0.6000009639741973"
          alt=""
        />
        <br />
        <img
          src="https://static.21cake.com/public/images/8e/4b/86/6d1c6b083239fd799f23f094983eab3e.png?1575080776#w"
          alt=""
        />
      </div>
    </div>

    <!-- 加入购物车按钮 -->
    <div class="joinCart">
      <router-link to="/cart" class="left-buy">立即购买</router-link>
      <div @click="AddCart">
        <router-link to="" class="right-buy">加入购物车</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["productsId"],
  data() {
    return {};
  },
  methods: {
    AddCart(id) {
      this.$addToCart(id);
      this.$dialog.alert({
        message: "加入购物车成功",
      });
    },
  },
};
</script>

<style scoped>
.Details {
  background: #f6f6f6;
  padding-bottom: 100px;
}

.Details .van-swipe-item img {
  width: 100%;
}

.Details .details-box {
  background: #fff;
  padding-bottom: 20px;
  padding-left: 20px;
}

.Details .details-title h3 {
  margin: 0;
  font-size: 24px;
  color: #333;
  line-height: 29px;
  padding-top: 10px;
  font-weight: normal;
}

.Details .details-title span {
  font-size: 14px;
  line-height: 18px;
  color: #333;
}

.Details .details-price {
  margin: 0;
  font-size: 22px;
  color: #c69c6d;
  height: 30px;
  line-height: 30px;
  margin-left: -4px;
}

.Details .details-text {
  padding: 15px;
  margin: 12px 0;
  font-size: 12px;
  color: #442818;
  background: #fff;
}

.Details .details-img img {
  width: 100%;
}

.Details .joinCart {
  position: fixed;
  height: 46px;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 100;
  background: #fff;
  z-index: 100000000;
  box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.1);
}

.Details .left-buy {
  background: #fff;
  color: #442818;
}

.Details .right-buy {
  background: #442818;
  color: #fff;
}

.Details .left-buy,
.Details .right-buy {
  float: left;
  width: 50%;
  height: 46px;
  line-height: 46px;
  font-size: 15px;
  margin: 0;
  display: block;
  text-align: center;
}
</style>