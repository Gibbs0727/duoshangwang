<template>
    <div class="detail">
        <!-- 顶部 -->
        <mt-header title="商品详情" fixed>
            <div slot="left" @click="goto()">
                <mt-button icon="back"></mt-button>
            </div>
            <router-link to="/Cart" slot="right">
                <mt-button>购物车</mt-button>
            </router-link>
        </mt-header>
        <!-- 主要部分 -->
        <!-- 上方轮播图 -->
        <div class="banner">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(item,idx) in bannerimg" :key="idx">
                    <img :src="item">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <!-- 信息区 -->
        <div class="zc-top">
            <div class="zc-one">
                <div class="left-warpper">
                    <p class="title">{{gooddetail.goods_info.goods_name}}</p>
                    <p class="oriPrice">
                        <span class="value_bot" style>
                            <b>￥{{gooddetail.goods_info.goods_price}}</b>
                        </span>
                    </p>
                    <div class="warpper">
                        <span class="textLeft">{{gooddetail.goods_hair_info.content}}</span>
                        <span class="textCenter">已售: {{gooddetail.goods_info.goods_salenum}}件</span>
                        <span class="textRight">库存: {{gooddetail.goods_hair_info.if_store_cn}}</span>
                    </div>
                </div>
                <div class="right-warpper">
                    <a class="zm-sell" href="javascript:;">转卖</a>
                </div>
            </div>
            <div class="zc-two">
                <div class="cur-warpper" style="margin-top:0">
                    <a class="warpper" href="javascript:;">
                        <p class="left-text">产品参数</p>
                        <p class="right-text">&gt;</p>
                    </a>
                </div>
                <div class="cur-warpper">
                    <a class="warpper" href="javascript:;">
                        <p class="left-text">
                            <span class="yc-text">已选</span>
                            <span class="gg-text">杏色</span>
                            <span class="num-text">1件</span>
                        </p>
                        <p class="right-text">
                            <span class="iCon"></span>
                        </p>
                    </a>
                </div>
                <div class="cur-warpper">
                    <div class="warpper">
                        <p class="left-text">
                            <span>
                                <img
                                    class="pic"
                                    src="http://m.ecduo.cn/static/images/newwap/dp.png"
                                >
                                {{gooddetail.store_info.store_name}}
                            </span>
                        </p>
                        <p class="right-text">
                            <span class="dp-text">店铺评分</span>
                            <span class="num">4.8</span>
                            <span class="pf-text">高</span>
                        </p>
                    </div>
                    <div class="warpper">
                        <p class="left-text">
                            <span class="allGoodText">所有商品</span>
                            <span class="allGoodNum">{{gooddetail.store_info.goods_count}}</span>
                        </p>
                        <p class="right-text">
                            <a class="gotoHome" href="/store-259297.html">进店看看</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="zc-four">
                <img src="http://m.ecduo.cn/static/images/newwap/yc_26.jpg">
                <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b6a5d635c9fa.jpg">
                <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b6a5d655f09f.jpg">
                <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b6a5d6891dbc.jpg">
                <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b6a5d6b5d609.jpg">
                <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b6a5d6e21adb.jpg">
                <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b6a5d715949f.jpg">
                <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b6a5d74b81c0.jpg">
                <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b6a5d7701be4.jpg">
                <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b6a5d7a87548.jpg">
                <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b6a5d7d9d2b7.jpg">
                <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b6a5d8093210.jpg">
                <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b6a5d8210f9e.jpg">
                <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b6a5d869f8ad.jpg">
                <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b6a5d8aacbbf.jpg">
                <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b6a5d8e53143.jpg">
                <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b6a5d91ccfdd.jpg">
                <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b6a5d94bff0a.jpg">
                <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b6a5d97cd681.jpg">
                <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b6a5d9be1b7d.jpg">
                <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b6a5d9e8dc6b.jpg">
                <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b6a5da10ba37.jpg">
                <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b6a5da3f1c55.jpg">
                <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b6a5da80c94d.jpg">
                <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b6a5db0532d7.jpg">
                <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b6a5db8bdb3f.jpg">
                <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b6a5dbaede19.jpg">
                <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-08/5b6a5dbcc8153.jpg">
            </div>
        </div>
        <!-- 下方购买 -->
        <div class="foot-warpper">
            <div class="bottom_bar_icon">
                <div class="fengxiang">
                    <p class="icon"></p>
                    <p class="text">分享</p>
                </div>
            </div>
            <div class="bottom_bar_icon">
                <div class="kefu">
                    <p class="icon"></p>
                    <p class="text">客服</p>
                </div>
            </div>
            <div class="bottom_bar_icon">
                <div class="Add">
                    <p class="icon"></p>
                    <p class="text">上架</p>
                </div>
            </div>
            <div class="sys_button cart" item="2009597">
                <p>加入购物车</p>
            </div>
            <div class="sys_button buy" item="2009597">
                <p>立即下单</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            gooddetail: {
                goods_info: {
                    spec_image: {}
                },
                goods_hair_info: {},
                store_info: {}
            },
            bannerimg: []
        };
    },
    methods:{
        //返回上一页
        goto(){
            this.$router.go(-1);
        }
    },
    mounted() {
        // console.log(this.$route.params.id);
        //https://www.nanshig.com/mobile/index.php?act=goods&op=goods_detail&goods_id=227005
        // this.axios
        // .get("https://www.nanshig.com/mobile/index.php", {
        //     params: {
        //         act: "goods",
        //         op: "goods_detail",
        //         goods_id: "this.$route.params.id"
        //     }
        // })
        this.axios
            .get(
                `https://www.nanshig.com/mobile/index.php?act=goods&op=goods_detail&goods_id=${
                    this.$route.params.id
                }`
            )
            .then(res => {
                let data = res.data.datas;
                let goods_image = data.goods_image.split(",");
                //console.log(goods_image);
                this.gooddetail = data;
                this.bannerimg = goods_image;
            });
    }
};
</script>
<style lang="scss" scoped>
@function t($px) {
    //$px为需要转换的字号
    @return $px / 50px * 1rem; //100px为根字体大小
}
.detail {
    padding-top:t(42px);
    header {
        background: red;
    }
    .banner {
        height: t(375.2px);
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
        // width: t(375.2px);
        .zc-one {
            width: t(357.2px);
            height: t(117px);
            padding: t(9px);
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
                line-height: 0;
                .zm-sell {
                    width: t(27px);
                    height: t(25px);
                    background: #df2027;
                    color: #fff;
                    display: inline-block;
                    font-size: t(13px);
                    line-height: t(25px);
                    border-radius: t(5px);
                    margin: t(8px) 0 t(15px) t(10px);
                    padding: 0 t(22.5px);
                }
            }
        }
        .zc-two {
            width: t(375.2px);
            height: t(205px);
            background: rgb(238, 238, 238);
            padding-top: t(12px);
            .cur-warpper {
                width: t(375.2px);
                background: #fff;
                margin-top: t(12px);
                .warpper {
                    width: t(351px);
                    height: t(18px);
                    padding: t(12px);
                    overflow: hidden;
                    margin-bottom: t(1px);
                    display: block;
                    .left-text {
                        height: t(18px);
                        float: left;
                        color: #404040;
                        line-height: t(18px);
                        font-size: t(14px);
                        .yc-text {
                            color: #acacac;
                        }
                        .gg-text {
                            margin: 0 t(17px);
                        }
                        span {
                            .pic {
                                width: t(20px);
                                height: t(20px);
                                margin-right: t(8px);
                                display: inline-block;
                                vertical-align: top;
                            }
                        }
                        .allGoodText,
                        .allGoodNum {
                            color: #828282;
                        }
                    }
                    .right-text {
                        height: t(18px);
                        line-height: t(18px);
                        font-size: t(14px);
                        float: right;
                        color: #bcbdbf;
                        .iCon {
                            width: t(18px);
                            height: t(18px);
                            display: block;
                            background: url(http://m.ecduo.cn/static/images/newwap/yc_24.jpg)
                                no-repeat;
                            background-size: 100% 100%;
                        }
                        .dp-text {
                            color: #969696;
                            font-size: t(12px);
                        }
                        .num {
                            color: #df2027;
                            font-size: t(12px);
                        }
                        .pf-text {
                            padding: 0 t(4px);
                            color: #fff;
                            background: #df2027;
                            border-radius: 6px;
                            font-size: t(12px);
                        }
                        .gotoHome {
                            width: t(48px);
                            height: t(24px);
                            padding: t(0px) t(18px);
                            border: t(1px) solid #df2027;
                            color: #df2027;
                            border-radius: t(5px);
                            display: inline-block;
                            font-size: t(12px);
                            line-height: t(24px);
                        }
                    }
                }
            }
        }
        .zc-four {
            width: t(375.2px);
            margin-bottom: t(50px);
            font-size: 0;
            img {
                width: t(375.2px);
            }
        }
    }
    .foot-warpper {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        // width: t(375.2px);
        height: t(44px);
        overflow: hidden;
        z-index: 999;
        background: #fff;
        .bottom_bar_icon {
            width: 13.8%;
            float: left;
            text-align: center;
            .fengxiang {
                .icon {
                    width: t(15px);
                    height: t(15px);
                    margin: t(8px) t(18px) t(0px) t(18px);
                    background: url(http://m.ecduo.cn/static/images/newwap/31.png)
                        no-repeat;
                    background-size: contain;
                }
                .text {
                    font-size: t(12px);
                }
            }
            .kefu {
                .icon {
                    width: t(15px);
                    height: t(15px);
                    margin: t(8px) t(18px) t(0px) t(18px);
                    background: url(http://m.ecduo.cn/static/images/newwap/32.png)
                        no-repeat;
                    background-size: contain;
                }
                .text {
                    font-size: t(12px);
                }
            }
            .Add {
                .icon {
                    width: t(15px);
                    height: t(15px);
                    margin: t(8px) t(18px) t(0px) t(18px);
                    background: url(http://m.ecduo.cn/static/images/newwap/33.png)
                        no-repeat;
                    background-size: contain;
                }
                .text {
                    font-size: t(12px);
                }
            }
        }
        .sys_button {
            width: 29.3%;
            float: left;
            text-align: center;
            color: #fff;
            height: t(44px);
            line-height: t(44px);
            font-size: t(12px);
        }
        .cart {
            background: #ff6d02;
        }
        .buy {
            background: #df2027;
        }
    }
}
</style>