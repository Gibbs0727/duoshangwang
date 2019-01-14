<template>
    <div class="message">
        <!-- 顶部 -->
        <mt-header title="我的消息">
            <router-link to="/Home/tuijian" slot="left">
                <mt-button icon="back">首页</mt-button>
            </router-link>
        </mt-header>
        <!-- 消息 -->
        <div class="xx_list">
            <a class="xx_lists" href="#" v-for="item in xiaoxi" :key="item.title">
                <div class="pic">
                    <img
                        :src="item.img"
                    >
                </div>
                <div class="content">
                    <p class="xx_title">
                        <span class="wl_left">{{item.title}}</span>
                    </p>
                    <p class="xx_profile">{{item.content}}</p>
                </div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            xiaoxi:[{
                img:"http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2017-05/5912c616d8a44.png",
                title:"物流消息",
                content:"暂无物流消息！"
            },{
                img:"http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2017-05/5912c63c627d1.png",
                title:"退款通知",
                content:"暂无退款通知！"
            },{
                img:"http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2017-05/5915321c370ea.png",
                title:"积分通知",
                content:"暂无积分通知！"
            },{
                img:"http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2017-05/5912c6c3aba34.png",
                title:"多商动态",
                content:"暂无商品动态！"
            }]
        }
    }
};
</script>
<style lang="scss" scoped>
@function t($px) {
    //$px为需要转换的字号
    @return $px / 75px * 1rem; //100px为根字体大小
}
.message {
    header {
        background: red;
    }
    .xx_list {
        background: #fff;
        .xx_lists {
            overflow: hidden;
            padding: 0 t(14px);
            display: block;
            .pic {
                width: t(45px);
                height: t(45px);
                padding: t(6.5px) 0;
                float: left;
                img {
                    width: t(45px);
                    height: t(45px);
                    border: 0 none;
                    vertical-align: top;
                }
            }
            .content {
                width: t(288px);
                height: t(45px);
                padding: t(6.5px) 0;
                float: right;
                border-bottom: t(1px) solid #ddd;
                .xx_title {
                    overflow: hidden;
                    padding: 0;
                    vertical-align: baseline;
                    .wl_left {
                        font-size: t(14px);
                        color: #666;
                        width: t(288px);
                        height: t(22px);
                        line-height: t(22px);
                        float: left;
                    }
                }
                .xx_profile {
                    font-size: t(14px);
                    color: #666;
                    width: t(288px);
                    height: t(22px);
                    line-height: t(22px);
                    float: left;
                }
            }
        }
    }
}
</style>
