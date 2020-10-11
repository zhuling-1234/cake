<template>
  <div class="Details">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img
          src="//static.21cake.com/upload/images/512df48c3db753f77ff4f260ab338645.jpg"
          alt=""
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="//static.21cake.com/upload/images/3f2f29e55ff82876e7394bcbaab1b5e7.jpg"
          alt=""
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="//static.21cake.com/upload/images/673526204ff5c6e6abdbb8554902719b.jpg"
          alt=""
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="//static.21cake.com/upload/images/c89789d5f3cd45e73a7d9bec51b1da1d.jpg"
          alt=""
        />
      </van-swipe-item>
    </van-swipe>
    <!-- 标题和价格 -->
    <div class="details-box">
      <div class="details-title">
        <h3>Golden Chaplet</h3>
        <span>金枝</span>
      </div>
      <p class="details-price">￥298.00</p>
    </div>
    <!-- 商品介绍 -->
    <div class="detaills-introduction">
      <div class="details-text">
        /“第四代巧克力，复刻黑白巧克力慕斯”/<br />
        /“天然的粉色、白色”/<br />
        /“来自日本高知县柚子，和法国覆盆子”/<br />
        /“在这里，色彩即风味”/
      </div>
      <div class="details-img">
        <img
          src="https://static.21cake.com/public/images/bd/f5/0e/d9d2820c5a3efa4b47cd4a53b6245039.jpg?1597891398#h"
          alt=""
        />
        <img
          src="https://static.21cake.com/public/images/f2/b7/1e/72e861cffd259715435ef75b46a2b15d.jpg?1599804698#h"
          alt=""
        />
        <img
          src="https://static.21cake.com/public/images/fb/4f/43/f563e0408cf982c542c4b96bdc7d343b.jpg?1597891419#h"
          alt=""
        />
        <img
          src="https://static.21cake.com/public/images/19/ee/07/7febcf3c57c67172cd61b9c28d0a12b1.jpg?1597905936#h"
          alt=""
        />
        <img
          src="https://static.21cake.com/public/images/3d/a6/50/5de8e8d36db5f4d7fcdeb2480478fee3.jpg?1597891436#h"
          alt=""
        />
        <br />
        <img
          src="https://static.21cake.com/public/images/8e/4b/86/6d1c6b083239fd799f23f094983eab3e.png?1575080776#w"
          alt=""
        />
        <img
          src="https://static.21cake.com/public/images/28/3f/88/e632dba0aac0cf1d5008ac78d40bca55.jpg?1597891449#h"
          alt=""
        />
        <img
          src="https://static.21cake.com/public/images/96/89/29/cd69262b2a400997177fc70bbb3a2ec5.jpg?1597891510#h"
          alt=""
        />
        <img
          src="https://static.21cake.com/public/images/57/de/cf/3cc1a09aa2c1e7d8f0237aa7ae636c26.jpg?1597891517#h"
          alt=""
        />
        <img
          src="https://static.21cake.com/public/images/17/b9/19/d090e907b5c5d6995f8bc56784a25a65.jpg?1597891525#h"
          alt=""
        />
        <img
          src="https://static.21cake.com/public/images/0e/4f/e7/d0389e8a3d187a85bdd9d2a01ad7929c.jpg?1597891533#h"
          alt=""
        />
        <img
          src="https://static.21cake.com/public/images/34/ce/55/5f308b376126fb6ec1039505a4863b37.jpg?1597891540#h"
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
  inject: ['productsId'],
  data() {
    return {};
  },
  methods: {
    AddCart(id) {
      this.$addToCart(id);
      this.$dialog.alert({
        message: '加入购物车成功',
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
