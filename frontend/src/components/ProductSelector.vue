<template>
  <div class="ProductSelector">
    <van-overlay :show="show">
      <div class="wrapper">
        <div class="block">
          <i @click="$emit('close')"></i>
          <p>￥198.00</p>
          <ul class="details-options">
            <li><i class="icon-1"></i>12.5x12.5cm</li>
            <li><i class="icon-2"></i>3-4人</li>
            <li><i class="icon-3"></i>含5套餐具(蜡烛需单独订购)</li>
            <li><i class="icon-4"></i>须提前5小时预定</li>
          </ul>
          <div class="clear"></div>
          <p class="spec-title">规格</p>
          <ul class="spec-one">
            <li class="active">蔓生(有酒款)</li>
            <li>蔓生(无酒款)</li>
          </ul>
          <div class="clear"></div>
          <p class="spec-title">商品规格</p>
          <ul class="spec-two">
            <li class="active"><span class="spec-size">454g</span>(1.0)磅</li>
            <li><span class="spec-size">908g</span> (2.0)磅</li>
            <li><span class="spec-size">908g</span> (2.0)磅</li>
            <li><span class="spec-size">908g</span> (2.0)磅</li>
          </ul>
          <div class="clear"></div>
          <router-link to=""
            ><van-button color="#442818" @click="$emit('add-cart',id)">加入购物车</van-button></router-link
          >
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  props: ['show','id'],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.ProductSelector .wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.ProductSelector .block {
  width: 300px;
  height: 400px;
  background-color: #fff;
  padding: 0 25px;
}

.ProductSelector .block > i {
  background: url('./../assets/index-icon/icon-hide.png') no-repeat center;
  height: 14px;
  width: 14px;
  padding: 15px;
  background-size: 14px 14px;
  position: absolute;
  right: 10px;
}

.ProductSelector .icon-1 {
  background: url('./../assets/productSelector/icon-1.png') no-repeat center;
  background-size: auto 100%;
}

.ProductSelector .icon-2 {
  background: url('./../assets/productSelector/icon-2.png') no-repeat center;
  background-size: auto 100%;
}

.ProductSelector .icon-3 {
  background: url('./../assets/productSelector/icon-3.png') no-repeat center;
  background-size: auto 100%;
}

.ProductSelector .icon-4 {
  background: url('./../assets/productSelector/icon-4.png') no-repeat center;
  background-size: auto 100%;
}

.ProductSelector .details-options li i {
  height: 15px;
  width: 15px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
}

.ProductSelector .details-options li {
  font-size: 12px;
  color: #442818;
  float: left;
  width: 48%;
  margin-right: 2%;
  margin-bottom: 7px;
}

.ProductSelector .clear {
  clear: both;
}

.ProductSelector .spec-title {
  font-size: 12px;
  color: #442818;
}

.ProductSelector .spec-one li {
  font-size: 15px;
  text-align: center;
}

.ProductSelector .spec-one li,
.ProductSelector .spec-two li {
  color: #442818;
  float: left;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  margin-left: 2%;
  padding: 0 1%;
}

.ProductSelector .spec-two li {
  display: flex;
  flex-wrap: wrap;
  line-height: 14px;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

.ProductSelector .active {
  border: 1px solid #442818;
  box-sizing: border-box;
  background: url('./../assets/productSelector/icon-selected.png') no-repeat top
    left !important;
  background-size: 12px 12px !important;
}

.ProductSelector .spec-size {
  width: 100%;
  text-align: center;
}

.ProductSelector .van-button {
  width: 215px;
  margin-top: 20px;
  margin-left: 15%;
  font-size: 11px;
}
</style>
