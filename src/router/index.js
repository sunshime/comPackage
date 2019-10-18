import Vue from 'vue'
import Router from 'vue-router'
//	引入文件封装所在的位置
import lazyRouter from '../common/js/lazyRouter';

// 页面路由
import Home from '../pages/home.vue';
import KeyBoard from '../pages/keyBoard.vue';
import GetDate from '../pages/getDate.vue';
import Drag from '../pages/drag.vue';
import GetQcode from '../pages/getQcode.vue';

lazyRouter.add('/', 'home', '首页', Home);
lazyRouter.add('/keyBoard', 'keyBoard', '', KeyBoard);
lazyRouter.add('/getDate', 'getDate', '左右滑动选择日期', GetDate);
lazyRouter.add('/drag', 'drag', '拖拽图片', Drag);
lazyRouter.add('/getQcode', 'getQcode', '生成二维码', GetQcode);

//	将lazyRouter对象下面的routes暴露出去
Vue.use(Router);
export default new Router({
  routes: lazyRouter.routes
})
