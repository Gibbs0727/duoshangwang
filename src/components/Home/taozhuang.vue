<template>
    <div class="xiexue">
        <!-- 上方图片 -->
        <div class="bd">
            <ul>
                <li>
                    <a href="javascript:;">
                        <img
                            class="img-responsive"
                            src=" http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2017-11/59fc381cd1739.jpg"
                        >
                    </a>
                </li>
            </ul>
        </div>
        <!-- special区域 -->
        <div class="special">
            <a class="special_item" href="javascript:;">
                <img
                    class="pic"
                    src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-09/5ba0ceeb2f58c.jpg"
                >
                <span class="cate_name">男套装</span>
            </a>
            <a class="special_item" href="javascript:;">
                <img
                    class="pic"
                    src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-09/5ba0ceccc1baf.jpg"
                >
                <span class="cate_name">女套装</span>
            </a>
        </div>
        <!-- 商品 -->
        <div class="product" id="_goods">
            <ul class="clearfix">
                <li v-for="item in taozhuang" :key="item.goods_id">
                    <img
                        class="default_image"
                        :alt="item.goods_name"
                        :src="item.goods_image_url"
                        style="display: block;"
                    >
                    <div class="text">
                        <p class="goods_name">{{item.goods_name}}</p>
                        <span class="virtual_seles">月销{{item.goods_salenum}}件</span>
                        <div class="bottom">
                            <p class="fenxiao_price">
                                <span>￥</span>{{item.goods_price}}
                            </p>
                            <span class="nowbuy">下单</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            taozhuang: []
        };
    },
    created() {
        this.axios
            .get(
                "https://www.nanshig.com/mobile/index.php?act=goods&op=goods_list&gc_id=218&page=20&curpage=1&gc_id=218",
                {
                    params: {}
                }
            )
            .then(res => {
                let data = res.data.datas.goods_list;
                // console.log(data)

                this.taozhuang = data;
            });
    }
};
</script>
<style lang="scss" scoped>
@function t($px) {
    //$px为需要转换的字号
    @return $px / 75px * 1rem; //100px为根字体大小
}
//顶上图
.bd {
    height: t(150px);
    width: t(375px);
    .img-responsive {
        height: 100%;
        width: 100%;
    }
}
//special区
.special {
    background: #eff4ee;
    width: t(360px);
    height: t(58px);
    padding: t(0px) t(7.5px) t(12px) t(7.5px);
    margin-top: t(7.5px);
    line-height: 0;
    .special_item {
        display: inline-block;
        width: t(42px);
        height: t(42px);
        margin-top: t(12px);
        margin-right: t(12px);
        .pic {
            height: t(30px);
            width: t(30px);
            margin-left: t(10px);
            margin-right: t(10px);
        }
        .cate_name {
            height: t(16px);
            line-height: t(16px);
            font-size: t(12px);
            color: #000;
            text-align: center;
            display: block;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
}
/*实体专供    */
/*商品展示*/
.product {
    width: 100%;
    margin-bottom: t(80px);
    line-height: 0;
    ul {
        width: 100%;
        li:nth-child(2n) {
            margin-left: t(7px);
        }
        li {
            float: left;
            width: t(184px);
            height: t(284px);
            margin-bottom: t(7.5px);
            background: #fff;
            display: block;
            // background: green;
            img {
                height: t(184px);
                width: t(184px);
            }
            .text {
                height: t(93px);
                width: t(176px);
                padding: t(3.75px);
                line-height: 0;
                .goods_name {
                    line-height: t(17px);
                    height: t(34px);
                    overflow: hidden;
                    font-size: t(14px);
                    color: #000;
                }
                .virtual_seles {
                    height: t(14px);
                    line-height: t(14px);
                    padding: t(-5px) 0;
                    font-size: t(12px);
                    color: rgb(117, 116, 116);
                    margin-bottom: t(10px);
                }
                .bottom {
                    height: t(24px);
                    .fenxiao_price {
                        height: t(24px);
                        font-size: t(14px);
                        float: left;
                        line-height: t(24px);
                        font-weight: bold;
                        span {
                            font-size: t(10px);
                        }
                    }
                    .nowbuy {
                        line-height: t(24px);
                        height: t(24px);
                        text-align: center;
                        width: t(60px);
                        float: right;
                        color: #fff;
                        border-radius: 0.4rem;
                        background: linear-gradient(
                            to right,
                            rgb(252, 88, 22) 0%,
                            rgb(255, 44, 50) 100%
                        );
                        font-size: t(14px);
                    }
                }
            }
        }
    }
}
</style>