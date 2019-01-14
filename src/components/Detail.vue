<template>
    <div class="detail">
        <!-- 顶部 -->
        <mt-header title="商品详情">
            <router-link to="/Home/tuijian" slot="left">
                <mt-button icon="back">首页</mt-button>
            </router-link>
            <router-link to="/Cart" slot="right">
                <mt-button>购物车</mt-button>
            </router-link>
        </mt-header>
        <!-- 主要部分 -->
        <!-- 上方轮播图 -->
        <div class="banner">
            <mt-swipe :auto="4000">
                <mt-swipe-item>
                    <img
                        src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b6a5d594f8d0.jpg?x-oss-process=image/resize,m_fill,h_400,w_400"
                        alt
                    >
                </mt-swipe-item>
                <mt-swipe-item>
                    <img
                        src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b6a5d5bddf4a.jpg?x-oss-process=image/resize,m_fill,h_400,w_400"
                        alt
                    >
                </mt-swipe-item>
                <mt-swipe-item>
                    <img
                        src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b6a5d5f99c28.jpg?x-oss-process=image/resize,m_fill,h_400,w_400"
                        alt
                    >
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <!-- 信息区 -->
        <div class="zc-top">
            <div class="zc-one">
                <div class="left-warpper">
                    <p class="title">花楒伊 2019年春秋薄款小清新Polo领针织毛衣 093...</p>
                    <p class="oriPrice">
                        <span class="value_bot" style>
                            <b>￥61.7</b>
                        </span>
                    </p>
                    <div class="warpper">
                        <span class="textLeft">运费 0.00</span>
                        <span class="textCenter">已售: 813件</span>
                        <span class="textRight">库存: 200件</span>
                    </div>
                </div>
                <div class="right-warpper">
                    <a class="zm-sell" href="javascript:;">转卖</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@function t($px) {
    //$px为需要转换的字号
    @return $px / 75px * 1rem; //100px为根字体大小
}
.detail {
    header {
        background: red;
    }
    .banner {
        height: t(375px);
        width: 100%;
        .mint-swipe {
            .mint-swipe-item {
                img {
                    height: 100%;
                    width: 100%;
                }
            }
        }
    }
    .zc-top {
        width: t(375px);
        .zc-one {
            width: t(375px);
            height: t(117px);
            padding: t(9px);
            background: red;
            .left-warpper {
                width: 72%;
                float: left;
                .title {
                    height: t(45px);
                    margin-top: t(10px);
                    font-size: 16px;
                    line-height: t(22.5px);
                    overflow: hidden;
                }
                .oriPrice {
                    height: t(18px);
                    line-height: t(18px);
                    color: #df2027;
                    font-size: t(16px);
                    margin-top: t(15px);
                }
                .warpper {
                    height: t(27px);
                    display: flex;
                    span {
                        color: #828282;
                        flex: 1;
                        justify-content: space-between;
                        height: t(27px);
                        line-height: t(27px);
                        font-size: t(12px);
                        width: t(85px);
                    }
                    .textLeft {
                        text-align: left;
                    }
                    .textCenter {
                        text-align: center;
                    }
                    .textRight {
                        text-align: right;
                    }
                }
            }
            .right-warpper {
                width: 28%;
                float: right;
                line-height:0;
                .zm-sell {
                    width: t(27px);
                    height: t(25px);
                    background: #df2027;
                    color: #fff;
                    display: inline-block;
                    font-size:t(12px);
                    line-height:t(25px);
                    border-radius: t(6px);
                    margin:t(8px) 0 t(15px) t(10px);
                    padding:0 t(22.5px);
                }
            }
        }
    }
}
</style>