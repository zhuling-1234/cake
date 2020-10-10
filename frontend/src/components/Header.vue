<template>
  <div class="Header">
    <div class="header-left">
      <i class="icon-title" v-if="show" @click="Show"></i>
      <i class="icon-hide" v-else @click="hide"></i>
      <router-link to="" class="weizhi"> <i></i>上海 </router-link>
    </div>
    <div class="hide">
      <div class="hide-div" v-show="isShow">
        <router-link to="/">
          <i class="menu-home"></i><span>首页</span>
        </router-link>
        <router-link to="/product/list">
          <i class="menu-class"></i><span>分类</span>
        </router-link>
        <router-link to="/signin">
          <i class="menu-per"></i><span>个人</span>
        </router-link>
      </div>
    </div>
    <div class="header-center">
      <router-link to="/">
        <img
          src="./../assets/index-icon/index-home.png"
          alt=""
          class="title-logo"
        />
      </router-link>
    </div>
    <div class="header-right">
      <router-link to="">
        <i class="message"></i>
      </router-link>
      <router-link to="/cart">
        <i class="cart"></i>
        <span class="cartNumber">{{myProductsId.length}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  inject:['productsId'],
  data() {
    return {
      myProductsId:this.productsId,
      show: true,
      isShow: false,
    };
  },
  methods: {
    Show() {
      this.show = false;
      this.isShow = true;
    },
    hide() {
      this.show = true;
      this.isShow = false;
    },
  },
};
</script>

<style scoped>
.Header {
  background: #fff;
  font-size: 15px;
  height: 48px;
  line-height: 48px;
  position: relative;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
}

.Header .icon-title {
  background: url('./../assets/index-icon/index-icon.png') no-repeat;
}

.Header .icon-hide {
  background: url('./../assets/index-icon/icon-hide.png') no-repeat;
}

.Header .icon-title,
.Header .icon-hide {
  display: inline-block;
  background-size: cover;
  width: 18px;
  height: 18px;
  vertical-align: middle;
}

.Header .weizhi i {
  background: url('./../assets/index-icon/index-address.png') no-repeat;
  display: inline-block;
  height: 15px;
  width: 12px;
  background-size: cover;
  vertical-align: middle;
  margin-right: 4px;
  margin-top: -3px;
}

.Header .weizhi {
  text-decoration: none;
  cursor: pointer;
  color: #442818;
  padding-left: 15px;
}

.Header .hide {
  position: absolute;
  z-index: 999999;
  width: 100%;
}

.Header .hide-div {
  display: flex;
  justify-content: space-around;
  background: #fff;
  height: 55px;
  box-shadow: 0px 7px 10px 0px rgba(145, 145, 145, 0.5);
}

.Header .hide-div a {
  text-decoration: none;
}

.Header .hide-div a .menu-home {
  background: url('./../assets/index-icon/menu-home.png') no-repeat;
  background-size: 25px 25px;
}

.Header .hide-div a .menu-class {
  background: url('./../assets/index-icon/menu-class.png') no-repeat;
  background-size: 25px 25px;
}

.Header .hide-div a .menu-per {
  background: url('./../assets/index-icon/menu-per.png') no-repeat;
  background-size: 25px 25px;
}

.Header .hide-div a i {
  display: inline-block;
  height: 25px;
  width: 25px;
}

.Header .hide-div a span {
  display: block;
  cursor: pointer;
  color: #442818;
  font-size: 12px;
  margin-top: -30px;
}

.Header .title-logo {
  width: 30px;
  display: inline-block;
  vertical-align: middle;
}

.Header .header-left {
  margin-left: 10px;
}

.Header .header-center {
  position: absolute;
  left: 50%;
  top: 0;
  display: inline-block;
  width: 120px;
  margin-left: -60px;
  height: 30px;
  text-align: center;
  font-size: 15px;
}

.Header .message {
  background: url('./../assets/index-icon/header_message.png') no-repeat;
  display: inline-block;
  background-size: 19px 19px;
  height: 48px;
  width: 20px;
  vertical-align: middle;
  margin-top: -4px;
  text-align: right;
  padding-left: 8px;
}

.Header .cart {
  background: url('./../assets/index-icon/cart.png') no-repeat;
  display: inline-block;
  background-size: 19px 19px;
  height: 48px;
  width: 20px;
  vertical-align: middle;
  margin-top: -4px;
  text-align: right;
  padding-left: 8px;
}

.Header .header-right {
  position: absolute;
  top: 15px;
  right: 0px;
}

.Header .cartNumber {
  height: 12px;
  width: 12px;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  display: block;
  position: absolute;
  right: 3px;
  top: -4px;
  background: rgb(186, 153, 120);
  color: #fff;
}
</style>
