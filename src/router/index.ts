import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'

Vue.use(VueRouter)


const routes: Array<RouteConfig> = [
    {
        path: "*",
        redirect: "/index"
    },
    {
        path: '/index',
        name: "index",
        component: () => import("@/pages/HomePage.vue"),
    },
    {
        path: "/shop",
        name: "shop",
        component: () => import("@/pages/Products.vue")
    },

    {
        path: "/login",
        name: "login",
        component: () => import("@/pages/LogIn.vue")
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((from, to, next) => {
    console.log("跳转地址")
})
export default router
