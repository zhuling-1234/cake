<template>
  <div class="Home">
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#fff">
      <van-swipe-item v-for="(item, index) in images" :key="index">
        <img :src="item.src" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- 主体内容 -->
    <div class="new-home-content">
      <!-- 活动 -->
      <ul>
        <li v-for="(item, index) in activities" :key="index">{{ item }}</li>
      </ul>

      <!-- 导航列表 -->
      <van-grid :column-num="5" :border="false">
        <van-grid-item
          @click="onGridClick(item.id)"
          v-for="(item, index) in subjects"
          :key="index"
          :icon="item.src"
          :text="item.text"
        />
      </van-grid>

      <!-- 推荐商品 -->
      <div class="tuijian-list">
        <template v-for="(bankuaiitem, bankuaiindex) in bankuai">
          <van-divider :key="bankuaiindex" />
          <recommend
            :title="bankuaiitem.title"
            :key="bankuaiindex"
            :isShow="true"
          />
          <card
            @add-cart="onAddCart"
            v-for="(item, index) in bankuaiitem.recommends"
            :key="index + '' + bankuaiindex"
            class="card"
            :title="item.title"
            :price="item.price"
            :danwei="item.danwei"
            :account="item.account"
            :image="item.src"
            :id="item.id"
          />
        </template>

        <!-- 甘一客 -->

        <recommend title="甘一客·活动" />
        <router-link to="" class="gan-image">
          <img src="../../assets/index-tuijian/huodong-.jpg" alt="" />
        </router-link>

        <van-divider />

        <recommend title="甘一客·文章" />
        <van-swipe :loop="false" :width="300" :show-indicators="false">
          <van-swipe-item v-for="(item, index) in contentimages" :key="index">
            <img class="content-image" :src="item.src" alt="" />
          </van-swipe-item>
          <van-swipe-item>
            <router-link to=""
              ><h2 class="content-more">查看更多>>></h2></router-link
            >
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>

    <van-divider>小可爱，到底啦~</van-divider>

    <!-- 底部 -->
  </div>
</template>

<script>
import Card from './Card';
import Recommend from './Recommend';

export default {
  components: { Card, Recommend },
  inject: ['productsId'],
  data() {
    return {
      images: [
        { src: require('../../assets/index-logo/index-logo-1.jpg') },
        { src: require('../../assets/index-logo/index-logo-2.jpg') },
        { src: require('../../assets/index-logo/index-logo-3.jpg') },
        { src: require('../../assets/index-logo/index-logo-4.jpg') },
        { src: require('../../assets/index-logo/index-logo-5.jpg') },
      ],
      activities: ['◇新客满296赠送切片蛋糕', '◇满100包邮', '◇全程冷链配送'],
      subjects: [
        {
          id: 1,
          src: require('../../assets/index-icon/index-icon-1.png'),
          text: '蛋糕',
        },
        {
          id: 2,
          src: require('../../assets/index-icon/index-icon-2.png'),
          text: '鲜达',
        },
        {
          id: 3,
          src: require('../../assets/index-icon/index-icon-3.png'),
          text: '面包',
        },
        {
          id: 4,
          src: require('../../assets/index-icon/index-icon-4.png'),
          text: '下午茶',
        },
        {
          id: 5,
          src: require('../../assets/index-icon/index-icon-5.png'),
          text: '企业专区',
        },
      ],
      bankuai: [
        {
          title: '新品',
          recommends: [
            {
              id: 1,
              title: '蔓生',
              price: 198.0,
              danwei: '元/454g(1.0磅)',
              account: '树莓奶油与浆果慕斯蛋糕',
              src: require('@/assets/index-tuijian/tuijian-1.jpg'),
            },
            {
              id: 2,
              title: '浅草',
              price: 198.0,
              danwei: '元/454g(1.0磅)',
              account: '浅草才能没马蹄',
              src: require('@/assets/index-tuijian/tuijian-2.jpg'),
            },
          ],
        },
        {
          title: '面包卡上线',
          recommends: [
            {
              id: 3,
              title: '蓝莓丹麦',
              price: 198.0,
              danwei: '元/454g(1.0磅)',
              account: '21cake[经典款面包持续供应]',
              src: require('@/assets/index-tuijian/tuijian-3.jpg'),
            },
          ],
        },
        {
          title: '人气',
          recommends: [
            {
              id: 4,
              title: '蓝莓丹麦',
              price: 198.0,
              danwei: '元/454g(1.0磅)',
              account: '21cake[经典款面包持续供应]',
              src: require('@/assets/index-tuijian/tuijian-4.jpg'),
            },
            {
              id: 5,
              title: '蓝莓丹麦',
              price: 198.0,
              danwei: '元/454g(1.0磅)',
              account: '21cake[经典款面包持续供应]',
              src: require('@/assets/index-tuijian/tuijian-5.jpg'),
            },
          ],
        },
      ],
      contentimages: [
        { src: require('../../assets/index-tuijian/content-.jpg') },
        { src: require('../../assets/index-tuijian/content-2.jpg') },
        { src: require('../../assets/index-tuijian/content-3.jpg') },
        { src: require('../../assets/index-tuijian/content-4.jpg') },
      ],
    };
  },
  mounted() {
    // console.log(this.addToCart);
  },
  methods: {
    onAddCart(id) {
      //this.productsId.push(id);
      this.$addToCart(id);
      this.$dialog.alert({
        message: '加入购物车成功',
      });
    },
    onGridClick(n) {
      ///product/list/:
      this.$router.push({ name: 'ProductList', params: { acb: n } });
    },
  },
};
</script>

<style scoped>
.Home .my-swipe img {
  width: 100%;
}

.Home .new-home-content {
  padding-bottom: 50px;
}

.Home .new-home-content ul {
  font-size: 12px;
  display: flex;
  justify-content: space-around;
  color: #c69c6d;
  margin-top: 10px;
}

.Home .van-divider {
  margin-top: 0;
}

.Home .card {
  margin: 15px auto;
}

.Home .tuijian-list {
  width: 333px;
  margin: 0 auto;
}

.Home .gan-image img,
.Home .content-image {
  width: 100%;
  margin-top: 15px;
}

.Home .content-more {
  color: #442818;
  text-align: center;
  padding-top: 45px;
}
</style>
