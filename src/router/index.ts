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
        component: () => import("@/pages/handbag/Products.vue")
    },

    {
        path: "/login",
        name: "login",
        component: () => import("@/pages/login/LogIn.vue")
    },
    {
        path: "/myAccount",
        name: "myAccount",
        component: () => import("@/pages/MyAccount.vue")
    },
    {
        path: "/address",
        name: "myAddress",
        component: () => import("@/pages/address/MyAddress.vue")
    },
    {
        path: "/orders",
        name: "myOrders",
        component: () => import("@/pages/order/OrderHistory.vue")
    },
    {
        path: "/shoppingCart",
        name: "myShoppingCart",
        component: () => import("@/pages/cart/ShoppingCart.vue")
    },
    {
        path: "/profile",
        name: "myPriofile",
        component: () => import("@/pages/MyProfile.vue")
    },
    {
        path: "/product/detail/:id",
        name: "productDetail",
        component: () => import("@/pages/handbag/HandbagDetail.vue")
    }
    ,
    {
        path: "/connectUs",
        name: "connectUs",
        component: () => import("@/pages/ConnectUs.vue")
    },
    {
        path: "/tech",
        name: "techHandbag",
        component: () => import("@/pages/TechHandbag.vue")
    }
    , {
        path: "/transaction",
        name: "Transaction",
        component: () => import("@/pages/Transaction.vue")
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
