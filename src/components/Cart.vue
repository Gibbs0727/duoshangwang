<template>
    <div class="cart">
        <!-- 顶部 -->
        <mt-header title="我的购物车">
            <router-link to="/Home/tuijian" slot="left">
                <mt-button icon="back">首页</mt-button>
            </router-link>
        </mt-header>
        <!-- 商品 -->
        <div class="cartlist">
            <div class="gwt" id>
                <div class="gw-contop">
                    <p class="df-ct-ls">广州肤色化妆品有限公司</p>
                </div>
                <div class="gw-contain">
                    <div class="df-containtg">
                        <img
                            class="gw-img"
                            height="70px"
                            width="70px"
                            src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-05/5aead4d644dd3.jpg"
                            style="display: block;"
                        >
                        <div class="gw-cn-r">
                            <p class="df-cn-rfg">宋慧乔 活萃补水保湿面膜</p>
                            <a
                                href="javascript:;"
                                class="df-ct-rg"
                                data-id="832899"
                                supplier-id="244337"
                            ></a>
                            <p class="df-cn-rs">5片</p>
                            <p class="gw-cn" id="item832899_price">¥6.90</p>
                            <p class="gw-cou">
                                <a href="#" class="gw-jian gw-suan">-</a>
                                <input
                                    name="item832899"
                                    type="text"
                                    id="item832899"
                                    class="gw-input"
                                    value="1"
                                    data-stock="1"
                                    data-price="6.90"
                                    data-id="27179567"
                                    goods-id="3272299"
                                    rec-id="832899"
                                >
                                <a href="#" class="gw-jia gw-suan">+</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="gw-conmm">
                    <div class="dk-conbottom">
                        <span class="yf-wen"></span>
                        <div class="zaicia">
                            <p class="gw-cnj">
                                <span>合计:</span>
                                <em class="gw-value">￥6.9</em>
                            </p>
                            <a href="javascript:;" class="jiesuan"></a>
                        </div>
                    </div>
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
.cart {
    header {
        background: red;
    }
    .cartlist {
        .gwt {
            background: #f0f0f0;
            height: t(201px);
            width: t(375px);
            padding: t(10px) 0;
            .gw-contop {
                height: t(38px);
                width: t(375px);
                // background: yellow;
                .df-ct-ls {
                    width: 100%;
                    height: 38px;
                    line-height: 38px;
                    overflow: hidden;
                    text-indent: 9px;
                    float: left;
                    font-size: t(14px);
                    color: #666;
                }
            }
            .gw-contain {
                height: t(107px);
                width: t(375px);
                background: #fff;
                // background: red;
                .df-containtg {
                    width: t(345px);
                    height: t(100px);
                    padding: t(3px) 0;
                    border-bottom: t(1px) solid #666;
                    margin-left: t(15px);
                    margin-right: t(15px);
                    .gw-img {
                        float: left;
                        margin: t(10px) t(10px) 0 0;
                        display: block;
                        width: t(66px);
                        border: t(1px) solid #e5e5e5;
                    }
                    .gw-cn-r {
                        width: t(280px);
                        height: t(70px);
                        // background: red;
                        margin: t(10px) 0 0 t(66px);
                        line-height: 17px;
                        color: #b2b2b2;
                        position: relative;
                        .df-cn-rfg {
                            width: t(250px);
                            height: t(32px);
                            margin-bottom: 0 t(17px) t(2px) 0;
                            font-size: t(12px);
                        }
                        .df-ct-rg {
                            width: t(14px);
                            height: t(17px);
                            background: url(http://m.ecduo.cn/static/images/wap/mem_73.jpg)
                                no-repeat left center;
                            background-size: t(14px) t(17px);
                            position: absolute;
                            top: t(5px);
                            right: t(10px);
                        }
                        .df-cn-rs {
                            width: t(280px);
                            height: t(15px);
                            font-size: t(12px);
                            line-height: t(15px);
                        }
                        .gw-cn {
                            color: #ff1e4c;
                            margin-top: t(5px);
                            width: t(280px);
                            height: t(15px);
                            line-height: t(15px);
                            font-size: t(12px);
                        }
                        .gw-cou {
                            position: absolute;
                            left: 70px;
                            top: 53px;
                            width: t(115px);
                            height: t(20px);
                            .gw-suan {
                                background: #fff;
                                // background: yellow;
                                border: t(1px) solid #d6d6d9;
                                color: #7f7f7f;
                                height: t(18px);
                                line-height: t(18px);
                                width: t(18px);
                                display: block;
                                text-align: center;
                                float: left;
                                font-size: t(12px);
                            }
                            .gw-input {
                                width: t(69px);
                                text-align: center;
                                height: t(18px);
                                border: t(1px) solid #b2b2b2;
                                display: block;
                                float: left;
                                margin: 0 t(2px);
                            }
                        }
                    }
                }
            }
            .gw-conmm {
                width: t(375px);
                height: t(53px);
                border-bottom: t(1px) solid #e5e5e5;
                background: #fff;
                .dk-conbottom {
                    .yf-wen {
                        display: block;
                        float: none;
                        text-indent: t(15px);
                        line-height: t(20px);
                    }
                    .zaicia {
                        width: auto;
                        height: t(26px);
                        float: right;
                        margin: t(12px) t(20px) t(12px) 0;
                        cursor: pointer;
                        display: block;
                        .gw-cnj {
                            color: #ff1e4c;
                            float: left;
                            margin: t(5px) t(5px) 0 0;
                            font-size: t(14px);
                            span {
                                color: #505050;
                            }
                        }
                        .jiesuan {
                            background: url(http://m.ecduo.cn/static/images/wap/mem_76.jpg)
                                no-repeat center top;
                            width: t(61px);
                            height: t(28px);
                            float: right;
                            margin: t(3px) 0;
                            cursor: pointer;
                            display: block;
                        }
                    }
                }
            }
        }
    }
}
</style>
