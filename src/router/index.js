import Cart from '@/components/Cart';
import Home from '@/components/Home';
import xiexue from '@/components/Home/xiexue';
import meizhuang from '@/components/Home/meizhuang';
import nanzhuang from '@/components/Home/nanzhuang';
import nvzhuang from '@/components/Home/nvzhuang';
import tuijian from '@/components/Home/tuijian';
import taozhuang from '@/components/Home/taozhuang';
import Login from '@/components/Login';
import Message from '@/components/Message';
import Mine from '@/components/Mine';
import Search from '@/components/Search';
import Sort from '@/components/Sort';
import Detail from '@/components/Detail';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/Home',
        name: 'Home',
        component: Home,
        children: [{
        path: 'tuijian',
        name: 'tuijian',
        component: tuijian
        }, {
        path: '',
        redirect: {
            name: 'tuijian'
        }
        }, {
        path: 'xiexue',
        name: 'xiexue',
        component: xiexue
        }, {
        path: 'nanzhuang',
        name: 'nanzhuang',
        component: nanzhuang
        }, {
        path: 'nvzhuang',
        name: 'nvzhuang',
        component: nvzhuang
        }, {
        path: 'taozhuang',
        name: 'taozhuang',
        component: taozhuang
        }, {
        path: 'meizhuang',
        name: 'meizhuang',
        component: meizhuang
        }]
    }, {
        path: '/',
        redirect: {
        name: 'Home'
        }
    }, {
        path: '/Cart',
        name: 'Cart',
        component: Cart
    }, {
        path: '/Search',
        name: 'Search',
        component: Search
    }, {
        path: '/Mine',
        name: 'Mine',
        component: Mine
    }, {
        path: '/Login',
        name: 'Login',
        component: Login
    }, {
        path: '/Sort',
        name: 'Sort',
        component: Sort
    }, {
        path: '/Message',
        name: 'Message',
        component: Message
    }, {
        path: '/Detail',
        name: 'Detail',
        component: Detail
    }]
})
