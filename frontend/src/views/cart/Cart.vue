<template>
  <div class="Cart">
    <!-- <Empty/> -->
    <ListTitle />
    <List />
    <List />
  </div>
</template>

<script>
import Empty from "./Empty";
import List from "./List";
import ListTitle from "./List-title";

export default {
  components: { Empty, List, ListTitle },
};
</script>

<style>
.Cart {
  background: #f8f8f8;
  padding-bottom: 100px;
}
</style>