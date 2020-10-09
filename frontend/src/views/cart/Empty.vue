<template>
  <div class="Empty">
    <div class="cart-image">
      <img src="../../assets/cart-icon/cart-empty.png" alt="" />
      <p>您的购物车还没有商品</p>
      <router-link to="/product/list">去购物>></router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.Empty .cart-image {
  margin: 150px 0 150px 0;
}

.Empty .cart-image img {
  height: 150px;
  width: 150px;
  display: block;
  margin: 0 auto;
}

.Empty .cart-image p {
  margin: 10px 0;
  font-size: 14px;
  color: #d5bfa7;
  text-align: center;
}

.Empty .cart-image a {
  width: 120px;
  margin: 0 auto;
  display: block;
  text-align: center;
  cursor: pointer;
  color: #442818;
  font-size: 12px;
}
</style>
