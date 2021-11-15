import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import './styles/login.less'
import router from './router'
/**
 * route 拦截
 * axios 拦截
 */
import './premission'
import './utils/axios'

/**
 * api路径 和 http请求
 */
import api from './utils/api'
import http from './utils/http'

Vue.prototype.$api = api;       // 对后端接口 进行全局注册
Vue.prototype.$ajax = http;     // 对请求方式 进行全局注册

/**
 * mock 数据
 */
import './mock/mock'

/**
 * 第二种将axios挂载到vue实例的方式
 */
/*
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
*/
Vue.use(ElementUI);

// 环境配置，是否为生成环境
// false为开发环境，Vue会提供很多警告，方便调试代码
// true为生成环境，Vue会提供很少的警告
Vue.config.productionTip = process.env.NODE_ENV === 'production'

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
