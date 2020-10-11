import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

import {
  Grid,
  GridItem,
  Swipe,
  SwipeItem,
  Divider,
  Tag,
  Col,
  Row,
  Form,
  Field,
  Button,
  Checkbox,
  CheckboxGroup,
  Toast,
  Tab,
  Tabs,
  Overlay,
  Dialog,
} from 'vant';

Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Divider);
Vue.use(Tag);
Vue.use(Col);
Vue.use(Row);
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Toast);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Overlay);
Vue.use(Dialog);

// 将axios对象强行添加到vue.prototype中
Vue.prototype.$axios = axios.create({
  baseURL: 'http://localhost:3000',
});

Vue.config.productionTip = false;

Vue.prototype.$addToCart = function(id) {
  let product = this.productsId.filter((item) => item.id === id);
  let count = 1;
  if (product.length === 0) {
    this.productsId.push({ id, count });
  }
};
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
