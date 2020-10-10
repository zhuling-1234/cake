<template>
  <div class="Product">
    <div class="content-div">
      <img class="product" :src="image" alt="" />
      <h3>
        {{ title }}
        <span>{{ subtitle }}</span>
      </h3>
      <span>{{ price }}</span>

      <img
        @click="$emit('cart-click')"
        class="cart"
        src="@/assets/index-icon/list-cart.png"
        alt=""
      />

      <div class="mask" v-show="mask">
        <span>敬请期待</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['image', 'title', 'subtitle', 'price', 'mask',],
};
</script>

<style scoped>
.Product .product {
  width: 160px;
}

.Product h3 {
  font-size: 13px;
  line-height: 1.2em;
  width: 100%;
  color: #442818;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: normal;
  margin: 0px;
}

.Product h3 span {
  font-size: 12px;
  display: block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.Product > div > span {
  color: #bb9772;
  display: block;
  margin-top: 5px;
  max-width: 80%;
  font-size: 12px;
}

.Product .cart {
  vertical-align: bottom;
  display: inline-block;
  width: 22px;
  position: absolute;
  bottom: 0;
  right: 0;
}

.Product .content-div {
  width: 160px;
  position: relative;
}

.Product .mask {
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  display: block;
}

.Product .mask span {
  color: #442818;
  display: block;
  text-align: center;
  margin-top: 80px;
}
</style>
