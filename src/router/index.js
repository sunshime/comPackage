import Vue from 'vue'
import Router from 'vue-router'
//	引入文件封装所在的位置
import lazyRouter from '../common/js/lazyRouter';

// 页面路由
import Home from '../pages/home.vue';
import KeyBoard from '../pages/keyBoard.vue';

lazyRouter.add('/', 'home', '首页', Home);
lazyRouter.add('/keyBoard','keyBoard','',KeyBoard);

//	将lazyRouter对象下面的routes暴露出去
Vue.use(Router);
export default new Router({
  routes: lazyRouter.routes
})
