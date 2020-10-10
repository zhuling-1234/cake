<template>
  <div class="List">
    <div class="content">
      <div class="cart-box">
        <router-link to="">
          <img
            src="//static.21cake.com/public/images/e3/41/5f/e46d582c2d65f2da50485f9fba7a01d1.jpg"
            alt=""
          />
        </router-link>
        <div class="cart-title">
          <div>
            <h2>
              <span>Croissant With Blueberry Jam</span>
              <span>蓝莓丹麦（京沪杭满39元包邮）</span>
            </h2>
          </div>
          <span>规格：66g(份)</span>
          <span class="cart-price">￥27.60</span>
        </div>
      </div>
      <div class="cart-number">
        <i>
          <img src="//static.21cake.com//themes/wap/img/-.png" alt="" />
        </i>
        <span>1</span>
        <i>
          <img src="//static.21cake.com/themes/wap/img/+.png" alt="" />
        </i>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.List {
  background: #fff;
  margin-bottom: 10px;
}

.List .content {
  position: relative;
}

.List .cart-box img {
  display: block;
  float: left;
  width: 109px;
  height: 120px;
}

.List .clear {
  clear: both;
}

.List .cart-title {
  padding-left: 128px;
}

.List .cart-box h2 span {
  display: block;
  font-size: 12px;
  color: #442818;
  width: 100%;
  overflow: hidden;
  font-weight: normal;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.List .cart-box h2 {
  margin: 0;
  padding-top: 15px;
  padding-bottom: 6px;
}

.List .cart-box span {
  display: block;
  font-size: 11px;
  color: #969696;
}

.List .cart-box .cart-price {
  margin-top: 4px;
}

.List .cart-number i {
  background: #f0f0f0;
  font-weight: bolder;
}

.List .cart-number i,
.List .cart-number span {
  display: block;
  float: left;
  height: 26px;
  width: 26px;
  font-size: 26px;
  line-height: 26px;
  text-align: center;
}

.List .cart-number span {
  background: #f7f7f7;
  color: #969696;
  font-size: 12px;
}

.List .cart-number span + i img {
  margin-top: 7px;
}

.List .cart-number i img {
  margin-top: 12px;
  display: block;
  width: 12px;
  margin-left: 7px;
}

.List .cart-number {
  position: absolute;
  height: 26px;
  width: 78px;
  overflow: hidden;
  top: 80px;
  right: 20px;
}
</style>