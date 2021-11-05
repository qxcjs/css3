import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "@/components/Layout";
import Login from "@/views/Login";
import Home from "@/views/Home";
import Staff from "@/views/Staff";
import Goods from "@/views/Goods";

// 使用@后，文件快速跳转时不能使用快捷键，../形式可以
import Supplier from "@/views/Supplier";
import Member from "../views/Member";

Vue.use(VueRouter)

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        name: 'Layout',
        redirect: '/home', // 当访问 / 时重定向到 home
        component: Layout,
        children: [
            {
                path: '/home',
                component: Home,
                meta: {title: '首页'}
            }
        ]
    },
    // 上面的是一种写法，可以放在children下面，还有一种方法是下面的这种
    // 当访问 /member 时，渲染的是 Layout 组件，
    {
        path: '/member',
        component: Layout,
        children: [
            {
                path: '/', // 等价于 /member/,请求 /member 时会在后面拼接个 / 因为AppNavbar下的index.vue写的是/member/
                component: Member,
                meta: {title: '会员管理'}
            }
        ]
    },
    {
        path: '/supplier',
        component: Layout,
        children: [
            {
                path: '/',
                component: Supplier,
                meta: {title: '供应商管理'}
            }
        ]
    },
    {
        path: '/goods',
        component: Layout,
        children: [
            {
                path: '/',
                component: Goods,
                meta: {title: '商品管理'}
            }
        ]
    },
    {
        path: '/staff',
        component: Layout,
        children: [
            {
                path: '/',
                component: Staff,
                meta: {title: '员工管理'}
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
