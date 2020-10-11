<template>
  <div class="Card">
    <router-link  :to="{path:'/details',query:{id:id}}"><img :src="image" alt="" /></router-link>
    <div class="card-text">
      <h4>{{ title }}</h4>
      <p>
        {{ price }} <span>{{ danwei }}</span>
      </p>
      <h6>{{ account }}</h6>
      <button @click="$emit('add-cart', id)"></button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'price', 'danwei', 'account', 'image', 'id','link'],
  mounted() {
    //console.log(this.id);
  },
};
</script>

<style scoped>
.Card {
  width: 333px;
  background: #fff;
  border: 1px solid #f2eae4;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.06);
  border-radius: 5px;
}

.Card h4 {
  font-size: 15px;
  color: #322418;
  display: inline-block;
  margin-right: 8px;
  max-width: 50%;
}

.Card p {
  font-size: 16px;
  color: #c69c6d;
  display: inline-block;
  vertical-align: middle;
}

.Card p span {
  color: #a6a6a6;
  font-size: 12px;
}

.Card h6 {
  color: #442818;
  margin-top: -10px;
  font-weight: normal;
}

.Card img {
  width: 100%;
}

.Card .card-text {
  position: relative;
  margin-left: 10px;
  margin-bottom: -10px;
}

.Card button {
  height: 45px;
  width: 45px;
  background: url('../../assets/index-icon/new-home-icon.png') no-repeat;
  background-position: -37px 0px;
  background-size: 80px auto;
  border: 0px;
  position: absolute;
  right: 10px;
  bottom: -6px;
}
</style>
