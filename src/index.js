import Vue from 'vue';
import App from './app.vue'

const root = document.createElement('div');
document.body.appendChild(root);

// 将根节点root注入到app.vue组件中
new Vue({
  render: (h) => h(App)
}).$mount(root);