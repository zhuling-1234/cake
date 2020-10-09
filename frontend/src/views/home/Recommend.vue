<template>
   <div class="Recommend">
        <van-tag
          round
          type="primary"
          color="#F4EBE2"
          text-color="#322418"
          size="large"
          >{{title}}</van-tag
        >
        <span class="more" v-show="isShow">更多></span>
      </div>
</template>

<script>
export default {
    props:['title', 'isShow']
}
</script>

<style scoped>

.Recommend .more {
  font-size: 13px;
  color: #808080;
  float: right;
}

</style>