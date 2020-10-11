<template>
  <div class="Index">
    <div class="product-content">
      <van-tabs @change="onTabChange">
        <van-tab v-for="item in tabs" :title="item.cname" :key="item.id">
          <template v-for="(dataitem, dataindex) in data">
            <Title
              :title="dataitem.title.title"
              :account="dataitem.title.subtitle"
              :key="dataindex"
            ></Title>

            <van-row :key="dataindex + 'b'" gutter="20">
              <template v-for="(productitem, productindex) in dataitem.items">
                <van-col span="12" :key="productindex + 'b'">
                  <Product
                    @cart-click="onCartClick"
                    :key="productindex + 'a'"
                    :id="productitem.id"
                    :title="productitem.title"
                    :image="productitem.image"
                    :price="productitem.price"
                    :subtitle="productitem.subtitle"
                    :mask="productitem.mask"
                  ></Product>
                </van-col>
              </template>
            </van-row>
          </template>
        </van-tab>
      </van-tabs>
      <ProductSelector
        :show="showSelector"
        @close="onClose"
        @add-cart="onAddCart"
      />
    </div>
  </div>
</template>

<script>
import Title from './Title';
import Product from './Product';
import ProductSelector from '../../components/ProductSelector';

export default {
  components: { Title, Product, ProductSelector },
  inject: ['productsId'],
  created() {
    this.getProducts('蛋糕');
    this.getCategory();
  },
  data() {
    return {
      showSelector: false,
      tabs: '',
      selectedProductId: '',
      data: [],
      data2: {
        title: {
          title: '季节性下线',
          subtitle: '在合适的季节，吃恰当的食物',
        },
        items: [
          {
            mask: true,
            title: 'Golden Chaplet',
            subtitle: '金枝',
            price: '￥198.00/454g(1.0磅)',
            image:
              '//static.21cake.com//upload/images/2be18888cf45c71c66ab452a9578e9bb.jpg',
          },
          {
            mask: true,
            title: 'Framboise Cake',
            subtitle: '蔓生',
            price: '￥198.00/454g(1.0磅)',
            image:
              '//static.21cake.com//upload/images/8887a7814dfc724f39b125dc1b7a6ea2.jpeg',
          },
          {
            mask: true,
            title: 'Framboise Cake',
            subtitle: '蔓生',
            price: '￥198.00/454g(1.0磅)',
            image:
              '//static.21cake.com//upload/images/3f2c8d9b56c03e7cdced4af65a907bf5.jpg ',
          },
        ],
      },
    };
  },
  methods: {
    onCartClick(id) {
      this.showSelector = true;
      this.selectedProductId = id;
    },
    onClose() {
      this.showSelector = false;
      this.selectedProductId = '';
    },
    onAddCart(id) {
      this.showSelector = false;
      this.$addToCart(this.selectedProductId);
      this.$dialog.alert({
        message: '加入购物车成功',
      });
    },
    getProducts(title) {
      this.$axios
        .get('product/list', { params: { title: title } })
        .then((res) => {
          this.data = res.data;
          this.data.push(this.data2);
        });
    },
    getCategory() {
      this.$axios.get('category/list').then((res) => {
        this.tabs = res.data;
      });
    },
    onTabChange(id, title) {
      console.log(id, title);
      this.getProducts(title);
    },
  },
};
</script>

<style scoped>
.Index .van-row {
  width: 90%;
  margin: 0 auto;
}
</style>
