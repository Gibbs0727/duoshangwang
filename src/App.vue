<template>
  <div id="app">
    <router-view/>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item :id="tab.name" v-for="tab in tabs" :key="tab.name" @click.native="goto(tab.path)">
        <myicons :type="tab.icon"/>{{tab.text}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Vue from 'vue'

// 引入并使用MintUI
import MintUI from "mint-ui";
Vue.use(MintUI);
import "mint-ui/lib/style.css";

//引入并使用图标插件
import myicons from "@/plugins/icons.js";
Vue.use(myicons);

//引入
import axios from 'axios';
// Vue.use(axios);
// Vue.prototype.axios = axios
// console.log(axios);

//引入vue-axios
import vueaxios from "vue-axios";
// Vue.use(vueaxios);
/* eslint-disable no-new */
Vue.use(vueaxios,axios);

export default {
  name: 'App',
  data(){
        return {
            tabs:[
                {
                    text:'首页',
                    icon:'home',
                    path:'/Home',
                    name:'Home'
                },{
                    text:'分类',
                    icon:'list-unordered',
                    path:'/Sort',
                    name:'Sort'
                },{
                    text:'消息',
                    icon:'comment',
                    path:'/Message',
                    name:'Message'
                },{
                    text:'购物车',
                    icon:'inbox',
                    path:'/Cart',
                    name:'Cart'
                },{
                    text:'我的',
                    icon:'person',
                    path:'/Mine',
                    name:'Mine'
                }
            ],
            selected:'Home'
        }
    },
    methods:{
        goto(path){
            // 编程式导航：利用js实现路由跳转
            // 通过this.$router获取到路由实例对象
            this.$router.push({path});
        }
    },
    mounted(){
        this.selected = this.$route.path.slice(this.$route.path.lastIndexOf('/')+1)
        // console.log(this.selected)
    }
}
</script>

<style lang="scss">
//引入base.css
@import "assets/base.css";
.mint-tabbar{
    .is-selected{
        color:#f01d0d;
        svg{color:#f01d0d;fill:#f01d0d}
        .mint-tab-item-label{color:#f01d0d}
    }
}

</style>
