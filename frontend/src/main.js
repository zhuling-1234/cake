import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

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

Vue.config.productionTip = false;

Vue.prototype.$addToCart = function(id) {
  console.log(this,this.productsId);
  let product = this.productsId.filter((item) => item.id === id);
  let count = 0;
  debugger
  if (product.length===0) {
    this.productsId.push({ id, count });
  } else {
    this.productsId = this.productsId.map(function(currentValue, index, arr) {
      if (currentValue.id === id) {
        return {
          id,
          count: currentValue.count + 1,
        };
      }
      return currentValue;
    });
  }

};
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
