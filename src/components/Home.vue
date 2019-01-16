<template>
    <div class="home">
        <mt-header fixed>
            <mt-button @click="goto('/Home/tuijian')" slot="left">
                <img class="imgleft" src="/static/home/logo.png" alt>
            </mt-button>
            <mt-button slot="right" @click="goto('/Search')">
                
                <img class="imgright" src="/static/home/search.jpg" alt>
            </mt-button>
        </mt-header>
        <mt-navbar v-model="selected" fixed>
            <mt-tab-item
                :id="homelist.name"
                v-for="homelist in homelists"
                :key="homelist.name"
                @click.native="goto2(homelist.name)"
            >{{homelist.title}}</mt-tab-item>
        </mt-navbar>
     <router-view></router-view> 
    </div>
</template>
<script>
export default {
    data() {
        return {
            homelists: [
                {
                    title: "推荐",
                    name: "tuijian"
                },
                {
                    title: "鞋靴",
                    name: "xiexue"
                },
                {
                    title: "男装",
                    name: "nanzhuang"
                },
                {
                    title: "女装",
                    name: "nvzhuang"
                },
                {
                    title: "套装",
                    name: "taozhuang"
                },
                {
                    title: "美妆",
                    name: "meizhuang"
                }
            ],
            selected: "tuijian"
        };
    },
    methods: {
        goto(path) {
            // 编程式导航：利用js实现路由跳转
            // 通过this.$router获取到路由实例对象
            this.$router.push({ path });
        },
        goto2(name) {
            this.$router.push({ path: "/Home/" + name });
        }
    },
    mounted() {
        this.selected = this.$route.path.slice(this.$route.path.lastIndexOf('/')+1)
        // console.log(this.selected)
    },
    // watch: {
    //     //Home页面子路由监听
    //     $route(to, from) {
    //         let index = this.$route.path.slice(6);
    //         this.selected = index;
    //     }
    // }
};
</script>
<style lang="scss" scoped>
@function t($px) {
    //$px为需要转换的字号
    @return $px / 50px * 1rem; //100px为根字体大小
}
body {
    margin: t(0px);
    .home {
        padding-top: t(85px);
        .mint-header {
            background: #f00;
            height: t(50px);
            .mint-header-button {
                .mint-button {
                    .imgleft {
                        width: t(120px);
                    }
                    .imgright {
                        width: t(220px);
                    }
                }
            }
        }
        .mint-navbar {
            top: t(50px);
            .mint-tab-item {
                padding: t(10px) t(0px);
            }
            .mint-tab-item.is-selected {
                border-bottom: t(3px) solid #f00;
                color: #f00;
                margin-bottom: t(0px);
            }
        }
    }
}
</style>
