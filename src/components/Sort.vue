<template>
    <div class="sore">
        <!-- 顶部 -->
        <mt-header title="分类">
            <router-link to="/Home/tuijian" slot="left">
                <mt-button icon="back">首页</mt-button>
            </router-link>
            <mt-button slot="right">分享</mt-button>
        </mt-header>
        <!-- 选项卡 -->
        <mt-navbar class="page-part" v-model="selected">
            <mt-tab-item
                v-for="(item,idx) in xuanxiang"
                :key="item.title"
                :id="(idx+1)"
                @click.native="changeapi(item.api)"
            >{{item.title}}</mt-tab-item>
        </mt-navbar>
        <!-- tabcontainer -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item
                v-for="(list,idx) in goodlist"
                :key="list.gc_id"
                :id="(idx+1)"
                style="display:block"
            >
                <div class="dsort">
                    <img :src="list.gc_image" class="pic-wrap">
                    <span class="list-tt">{{list.gc_name}}</span>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
export default {
    name: "page-navbar",
    data() {
        return {
            xuanxiang: [
                {
                    title: "衣服",
                    api:
                        "https://www.nanshig.com/mobile/index.php?act=goods_class&op=get_child_all&gc_id=256"
                },
                {
                    title: "套装",
                    api:
                        "https://www.nanshig.com/mobile/index.php?act=goods_class&op=get_child_all&gc_id=3"
                },
                {
                    title: "美妆",
                    api:
                        "https://www.nanshig.com/mobile/index.php?act=goods_class&op=get_child_all&gc_id=470"
                },
                {
                    title: "鞋靴",
                    api:
                        "https://www.nanshig.com/mobile/index.php?act=goods_class&op=get_child_all&gc_id=1"
                },
                {
                    title: "裤子",
                    api:
                        "https://www.nanshig.com/mobile/index.php?act=goods_class&op=get_child_all&gc_id=2"
                }
            ],
            goodlist: [],
            selected: "0" //请注意这里的1一定要加引号，否则没效 ，若初始化默认并且需要动态请求数据  则在初methods里面写个初始化获取数据的就行了
        };
    },
    methods: {
        changeapi(api) {
            // console.log(api);
            this.axios.get(api).then(res => {
                let data = res.data.datas.class_list[0].child;
                this.goodlist = data;
                // console.log(this.goodlist);k
            });
        }
    },
    created(){
        this.changeapi("https://www.nanshig.com/mobile/index.php?act=goods_class&op=get_child_all&gc_id=256")
    }
};
</script>
<style lang="scss" scoped>
@function t($px) {
    //$px为需要转换的字号
    @return $px / 50px * 1rem; //100px为根字体大小
}
.sore {
    header {
        background: red;
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
    .mint-tab-container {
        line-height: 0;
        .b {
            display: block;
        }
        .mint-tab-container-wrap {
            // width:t(375px);
            .mint-tab-container-item {
                flex-shrink: 1;
                .dsort {
                    width: t(84px);
                    height: t(103px);
                    float: left;
                    display: block;
                    // background: green;
                    margin-top: t(7.5px);
                    margin-left: t(7.5px);
                    .pic-wrap {
                        width: t(84px);
                        height: t(84px);
                        vertical-align: text-top;
                    }
                    .list-tt {
                        height: t(20px);
                        width: t(84px);
                        display: block;
                        font-size: t(12px);
                        line-height: t(20px);
                        text-align: center;
                        overflow: hidden;
                    }
                }
            }
        }
    }
}
</style>
