<template>
  <div class="Index">
    <div class="product-content">
      <van-tabs>
        <van-tab v-for="(item, index) in tabs" :title="item" :key="index">
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
  data() {
    return {
      showSelector: false,
      tabs: ['蛋糕', '冰淇淋', '咖啡下午茶', '面包', '常温蛋糕', '设计师礼品'],
      data: [
        {
          title: {
            title: '蛋糕',
            subtitle: '新鲜乳脂奶油蛋糕',
          },
          items: [
            {
              title: 'Framboise Cake',
              subtitle: '蔓生',
              price: '￥198.00/454g(1.0磅)',
              image:
                '//static.21cake.com//upload/images/6741e6a33ded89163be645cf6484d9ad.jpg',
            },
            {
              title: 'Tofu cheese Cake',
              subtitle: '豆酪',
              price: '￥198.00/454g(1.0磅)',
              image:
                '//static.21cake.com//upload/images/8887a7814dfc724f39b125dc1b7a6ea2.jpeg',
            },
            {
              title: 'Calamondin&Calamansi',
              subtitle: '橘与桔',
              price: '￥198.00/454g(1.0磅)',
              image:
                '//static.21cake.com//upload/images/3f2c8d9b56c03e7cdced4af65a907bf5.jpg',
            },
            {
              title: 'Deep Baileys Lovers',
              subtitle: '深爱',
              price: '￥198.00/454g(1.0磅)',
              image:
                '//static.21cake.com//upload/images/887535ff37a336eb09fe99170c9b3f6b.jpg',
            },
            {
              title: 'Café Mocha',
              subtitle: '摩卡',
              price: '￥198.00/454g(1.0磅)',
              image:
                '//static.21cake.com//upload/images/505c71f60ac4b3d96744a6bb54d63cb1.jpg',
            },
            {
              title: 'Teatime',
              subtitle: '浅草',
              price: '￥198.00/454g(1.0磅)',
              image:
                '//static.21cake.com//upload/images/59954fac59f25d03564b474b1a10e385.jpg',
            },
            {
              title: 'Black and White Chocolate Mousse',
              subtitle: '黑白巧克力慕斯彼尔德（ＨＢＤ）',
              price: '￥198.00/454g(1.0磅)',
              image:
                '//static.21cake.com//upload/images/7c8bb6800b5ff00ab44d7980585ead35.jpg',
            },
          ],
        },
        {
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
      ],
    };
  },
  methods: {
    onCartClick() {
      this.showSelector = true;
    },
    onClose() {
      this.showSelector = false;
    },
    onAddCart(id) {
      this.showSelector = false;
      // this.productsId.push(id);
      this.$addToCart(id);
      this.$dialog.alert({
        message: '加入购物车成功',
      });
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
