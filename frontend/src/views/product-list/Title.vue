<template>
  <div class="Title">
    <h2>
      {{ title }}<span>{{ account }}</span>
    </h2>
  </div>
</template>

<script>
export default {
  props: ['title', 'account'],
};
</script>

<style scoped>
.Title h2 {
  font-weight: normal;
  font-size: 15px;
  color: #442818;
  padding: 8px 0;
  text-align: center;
  height: 30px;
  margin: 0 auto;
  background: rgba(213, 191, 167, 0.1);
  border-bottom: 1px solid #e9e9e9;
}

.Title h2 span {
  display: block;
  font-size: 10px;
  color: #d5bfa7;
}
</style>
