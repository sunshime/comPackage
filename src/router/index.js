import Vue from 'vue'
import Router from 'vue-router'
//	引入文件封装所在的位置
import lazyRouter from '../common/js/lazyRouter';

// 页面路由
import Home from '../pages/home.vue';
import Bysearch from '../pages/bysearch.vue';
import Bykeyboardnum from '../pages/bykeyboardnum.vue';
import Bykeyboardasmd from '../pages/Bykeyboardasmd.vue';

lazyRouter.add('/', 'home', '首页', Home);
lazyRouter.add('/bysearch', 'bysearch', '搜索', Bysearch);
lazyRouter.add('/bykeyboardnum', 'bykeyboardnum', '数字键盘', Bykeyboardnum);
lazyRouter.add('/bykeyboardasmd', 'bykeyboardasmd', '搜索', Bykeyboardasmd);

//	将lazyRouter对象下面的routes暴露出去
Vue.use(Router);
export default new Router({
  routes: lazyRouter.routes
})
