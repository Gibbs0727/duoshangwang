<template>
    <div class="list">
        <!-- 上方搜索框 -->
        <div class="searchbtn">
            <span class="backindex" @click="goto('/Home/tuijian')">&lt;</span>
            <input type="text" class="shuru" v-model="keyword">
            <span class="sousuo" @click="gotoresult">搜索</span>
        </div>
        <!-- 列表部分 -->
        <div class="product" id="_goods">
            <ul class="clearfix">
                <li
                    v-for="item in goodlist"
                    :key="item.goods_id"
                    @click="gotodetail(item.goods_id)"
                >
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
                                <span>￥</span>
                                {{item.goods_price}}
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
            goodlist:[],
            keyword: ""
        };
    },
    methods: {
        goto(path) {
            // 编程式导航：利用js实现路由跳转
            // 通过this.$router获取到路由实例对象
            this.$router.push({ path });
        },
        gotoresult() {
            this.$router.push({ path: "/List/"+this.keyword});
            this.axios
            .get(
                `https://www.nanshig.com/mobile/index.php?act=goods&op=goods_list&page=20&keyword=${
                    this.keyword
                }`
            )
            .then(res => {
                let data = res.data.datas.goods_list;
                console.log(data);
                this.goodlist = data;
            });
        },
        gotodetail(id) {
            this.$router.push({ path: "/Detail/" + id });
        }
    },
    created() {
        // console.log(this.$route.params.keyword);
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
                `https://www.nanshig.com/mobile/index.php?act=goods&op=goods_list&page=20&keyword=${
                    this.$route.params.keyword
                }`
            )
            .then(res => {
                let data = res.data.datas.goods_list;
                // console.log(data);
                this.goodlist = data;
            });
    }
};
</script>
<style lang="scss" scoped>
@function t($px) {
    //$px为需要转换的字号
    @return $px / 50px * 1rem; //100px为根字体大小
}
body {
    margin: 0;
    .list {
        line-height: 0;
        font-size: t(16px);
        padding-top:t(52px);
        .searchbtn {
            height: t(32px);
            width: t(375.2px);
            background: red;
            padding: t(10px) t(10px);
            position:fixed;
            top:0;
            right:0;
            left:0;
            .backindex {
                font-size: t(20px);
                margin-right: t(15px);
                font-weight: bold;
                color: white;
            }
            .shuru {
                height: t(30px);
                border: t(1px) solid #ccc;
                line-height: t(30px);
                width: t(260px);
                font-size: t(16px);
                margin-right: t(15px);
            }
            .sousuo {
                color: white;
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
                                color: #E4393C;
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
    }
}
</style>

