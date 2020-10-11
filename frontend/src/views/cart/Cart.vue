<template>
  <div class="Cart">
    <Empty v-if="myProductsId.length === 0" />
    <ListTitle v-if="myProductsId.length != 0" />
    <template v-for="item in products">
      <List
        :key="item.id"
        :id="item.id"
        :src="item.src"
        :title="item.title"
        :pname="item.pname"
        :price="item.price"
        :productNumber="productCount(item.id)"
        @jian="onProductJian"
        @jia="onProductJia"
      />
    </template>

    <div class="PlaceOrder" v-if="myProductsId.length > 0">
      <van-row>
        <van-col span="5">
          <a href="#" class="order-delete"></a>
        </van-col>
        <van-col span="14">
          <span class="order-price">￥{{ totalMoney }}</span>
        </van-col>
        <van-col span="5">
          <a href="#" class="order-btn">去结算</a>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import Empty from './Empty';
import List from './List';
import ListTitle from './List-title';

export default {
  components: { Empty, List, ListTitle },
  inject: ['productsId'],
  computed: {
    productCount() {
      return (id) => {
        const product = this.myProductsId.filter((item) => item.id === id);
        return product[0].count;
      };
    },
    totalMoney() {
      if (!this.getCartListIsCompleted) return 0;

      const total = this.myProductsId.reduce((count, item) => {
        const product = this.products.filter(
          (product) => product.id === item.id
        );
        const price = product[0].price;
        return count + price * item.count;
      }, 0);

      return total;
    },
  },
  data() {
    return {
      myProductsId: this.productsId,
      products: [],
      getCartListIsCompleted: false,
    };
  },
  mounted() {
    this.getCartList();
  },
  methods: {
    getCartList() {
      var ids = this.myProductsId.map((item) => item.id);
      if (!ids || ids.length === 0) return;

      this.getCartListIsCompleted = false;
      this.$axios.post('/product/cart', { ids }).then((res) => {
        this.products = res.data;
        this.getCartListIsCompleted = true;
      });
    },
    onProductJian(id) {
      const index = this.myProductsId.findIndex((item) => item.id === id);
      let product = this.myProductsId[index];
      if (product.count > 1) product.count--;

      this.myProductsId.splice(index, 1, product);
    },
    onProductJia(id) {
      const index = this.myProductsId.findIndex((item) => item.id === id);
      let product = this.myProductsId[index];
      product.count++;

      this.myProductsId.splice(index, 1, product);
    },
  },
};
</script>

<style>
.Cart {
  background: #f8f8f8;
  padding-bottom: 100px;
  padding-top: 1px;
  min-height: 280px;
}

.Cart .order-delete {
  display: block;
  float: left;
  height: 44px;
  width: 44px;
  background: url('../../assets/cart-icon/cart-order-delete.png') no-repeat
    center center;
  background-size: 14px auto;
}

.Cart .order-price {
  cursor: pointer;
  font-size: 16px;
  line-height: 44px;
  color: #442818;
  font-weight: bold;
  padding-right: 10px;
}

.Cart .van-col {
  text-align: end;
}

.Cart .order-btn {
  display: block;
  background-color: #442818;
  color: #fff;
  text-align: center;
  height: 44px;
  line-height: 44px;
  font-size: 12px;
}

.Cart .PlaceOrder {
  height: 44px;
  overflow: hidden;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000000;
  box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.1);
}
</style>
