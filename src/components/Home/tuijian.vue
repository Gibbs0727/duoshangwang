<template>
    <div class="tuijian">
        <div class="banner">
            <mt-swipe :auto="4000">
                <mt-swipe-item>
                    <img src="/static/home/tuijian/banner1.jpg">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="/static/home/tuijian/banner2.jpg">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="special">
            <a href="javascript:;" class="special_item" v-for="(item,idx) in special_item" :key="idx">
                <img :src="item">
            </a>
        </div>
        <div class="ms-view">
            <img src="http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-10/5bc1a96d8cff0.jpg" alt>
        </div>
        <div class="zhibo_title">
            <h2>精选专题</h2>
            <a class="more" href="#">更多</a>
        </div>
        <div id="zt_list" class="zt_list">
            <a class="zt_item" href="javascript:;" v-for="(item,idx) in zt_list" :key="idx">
                <img :src="item">
            </a>
        </div>
        <div class="new-searcha proseabg" id="target">
            <ul class="new-mu_l2w clearfix">
                <li
                    class="new-mu_l2"
                    v-for="item in homegoods"
                    :key="item.goods_id"
                    @click="gotodetail(item.goods_id)"
                >
                    <div class="prolibor">
                        <span class="new-mu_tmb">
                            <a href="javascript:;" class="new-mu_l2a" target="_self">
                                <img :src="item.goods_image_url">
                            </a>
                        </span>
                        <span class="new-mu_l2cw">
                            <b class="new-mu_l2h">
                                <a
                                    href="javascript:;"
                                    class="new-mu_l2a"
                                    target="_self"
                                >{{item.goods_name}}</a>
                            </b>
                            <span class="new-mu_l2c new-p-re">
                                <span class="new-txt">¥{{item.goods_price}}</span>
                                <span class="new-sale-icon">
                                    <span class="new-add">售出:{{item.goods_salenum}} 件</span>
                                </span>
                            </span>
                        </span>
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
            homegoods: [],
            special_item:[
                "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-10/5bcfeb9164169.png",
                "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-10/5bcfebb393a81.png",
                "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-10/5bcfec1ad5f38.png",
                "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-10/5bcfec340d031.png",
                "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-10/5bcfec4c275a8.png",
                "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-10/5bcfed1a3e954.png",
                "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-10/5bcfed3dcf47d.png",
                "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-10/5bcfed893edaf.png",
                "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-10/5bcfeda4279bb.png",
                "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-10/5bcfedd95871e.png"
            ],
            zt_list:[
                "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-09/5b978d72d48f2.jpg",
                "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-09/5b978d922a921.jpg",
                "http://cdn.img.ecduo.cn/ecduo/Uploads/Picture/2018-09/5b978d440dbbe.jpg"

            ]
        };
    },
    methods: {
        gotodetail(id) {
            this.$router.push({ path: "/Detail/" + id });
        }
    },
    created() {
        this.axios
            .get(
                "https://www.nanshig.com/mobile/index.php?act=goods&op=goods_list&keyword=&page=20&curpage=7",
                {
                    params: {}
                }
            )
            .then(res => {
                let data = res.data.datas.goods_list;
                // console.log(data)

                this.homegoods = data;
            });
    }
};
</script>
<style lang="scss" scoped>
@function t($px) {
    //$px为需要转换的字号
    @return $px / 50px * 1rem; //100px为根字体大小
}
//轮播图区域
.banner {
    // width:t(375px)
    // width: 100%;
    height: t(200px);
    .mint-swipe {
        height: t(200px);
        .mint-swipe-item {
            img {
                height: 100%;
                width: 100%;
            }
        }
    }
}
//特别推荐区
.special {
    height: t(120px);
    // width: t(360px);
    padding: t(0px) t(7.5px) t(12px) t(7.5px);
    background: rgb(225, 239, 243);
    line-height: t(0px);
    .special_item {
        display: inline-block;
        height: t(45px);
        width: t(72px);
        // background: red;

        margin-top: t(12px);
        // margin-right:t(20px);
        img {
            // display: block;
            height: t(45px);
            width: t(53px);
            line-height: 0;
        }
    }
}
//秒杀区
.ms-view {
    height: t(105px);
    // width: t(375px);
    line-height: 0;
    img {
        height: 100%;
        width: 100%;
    }
}
//图片区
.zhibo_title {
    height: t(34px);
    // width: t(360px);
    // background: red;
    padding: t(0px) t(7.5px);
    h2 {
        float: left;
        font-size: 0.22rem;
        font-weight: bold;
        line-height: t(34px);
    }
    .more {
        font-size: 0.15rem;
        float: right;
        line-height: t(34px);
    }
}
.zt_list {
    .zt_item {
        display: block;
        height: t(160px);
        // width: t(375px);
        margin-bottom: t(10px);
        img {
            height: 100%;
            width: 100%;
        }
    }
}
/*产品横排*/
#newprot {
    background: #fff;
}
.proseabg {
    background: #f0f0f0;
}
.new-searcha {
    // width:t(360px);
    padding: 0px t(7px) t(60px);
}
.new-search {
    padding: t(7px) t(7px) t(60px);
}
.new-searcha .new-mu_l2 {
    width: 50%;
    margin: t(7px) 0 0 0;
    padding: 0px 0px;
    display: block;
    float: left;
}
.new-searcha .prolibor {
    clear: both;
    display: block;
    overflow: hidden;
    padding: t(5px);
    margin: 0px t(3px);
    border: t(1px) solid #e4e4e4;
    background: #fff;
    position: relative;
}
.new-searcha .new-mu_l2 .new-mu_tmb {
    height: 100%;
    width: 100%;
    text-align: center;
    clear: both;
    float: left;
    margin-bottom: t(5px);
}
.new-searcha .new-mu_l2 .new-mu_tmb img {
    width: 100%;
}
.new-searcha .new-mu_l2h {
    max-height: t(33px);
    height: t(32px);
    overflow: hidden;
    color: #6e6e6e;
    display: block;
    font-size: t(12px);
    font-weight: normal;
    margin: t(5px) 0 0.3em;
    width: 90%;
    line-height: t(16px);
}
.new-searcha .new-mu_l2h a:link,
.new-searcha .new-mu_l2h a:visited,
.new-searcha .new-mu_l2h a:hover {
    color: #6e6e6e;
}
.new-searcha .new-mu_l2c {
    display: block;
    color: #6e6e6e;
    font-size: t(16px);
    margin-top: t(7px);
    border-top: t(1px) dashed #efefef;
    line-height: t(28px);
}
.new-searcha .new-p-re {
    position: relative;
}
.new-searcha .new-mu_l2c .new-txt {
    color: #e4393c;
    font-size: t(16px);
    font-weight: normal;
}
.new-searcha .new-mu_l2c .new-txt a {
    display: block;
    text-align: center;
}
.new-searcha .new-mu_l2c .new-txt a:link,
.new-searcha .new-mu_l2c .new-txt a:visited,
.new-searcha .new-mu_l2c .new-txt a:hover {
    color: #e4393c;
    font-size: t(14px);
}
.new-searcha .new-mu_l2c .new-txt b {
    background: #d30000;
    color: #fff;
    font-size: t(12px);
    padding: 0px t(9px);
    margin-left: t(6px);
    display: none;
}
.new-searcha .new-sale-icon {
    position: absolute;
    bottom: t(4px);
    right: 0px;
}
.new-searcha .new-add {
    color: #a2a2a2;
    display: inline-block;
    font-size: t(12px);
    height: t(18px);
    line-height: t(18px);
    margin-left: 0px;
    text-align: left;
}
.new-searcha .newsmore {
    width: 100%;
    clear: both;
}
.new-searcha .newsmore a {
    display: block;
    height: t(36px);
    line-height: t(36px);
    margin: t(10px) auto t(10px);
    text-align: center;
    border: t(1px) solid #e4e4e4;
    color: #333;
    font-size: t(12px);
    background: #fff;
    width: 86%;
}
.new-searcha .newsmore img {
    vertical-align: top;
}

#page-header li.a-login .proliico {
    display: inline-block;
    position: relative;
    top: t(3px);
    margin: 0px 0px 0px 10px;
    width: t(16px);
    height: t(15.5px);
    background: url(/static/images/wap/liico.png) no-repeat 0 0;
    background-size: t(15px) auto;
}
#page-header li.a-login .proliicob {
    display: inline-block;
    position: relative;
    top: t(3px);
    margin: 0px 0px 0px t(10px);
    width: t(16px);
    height: t(15.5px);
    background: url(/static/images/wap/liicoa.png) no-repeat 0 0;
    background-size: t(15px) auto;
}
</style>
