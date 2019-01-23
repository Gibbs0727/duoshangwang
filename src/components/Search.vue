<template>
    <div class="search">
        <!-- 上方搜索框 -->
        <div class="searchbtn">
            <span class="backindex" @click="goto('/Home/tuijian')">&lt;</span>
            <input type="text" class="shuru" v-model="keyword">
            <span class="sousuo" @click="gotolist">搜索</span>
        </div>
        <div class="hotsearch">
            <div class="searchtop">
                <p>热门搜索</p>
            </div>
            <mt-badge size="small" color="#fff" v-for="(item,idx) in searchlist" :key="idx" @click.native="gotolist2(item)">{{item}}</mt-badge>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            searchlist: [],
            keyword:''
        };
    },
    methods: {
        goto(path) {
            // 编程式导航：利用js实现路由跳转
            // 通过this.$router获取到路由实例对象
            this.$router.push({ path });
        },
        gotolist() {
            this.$router.push({ path: "/List/"+this.keyword});
            // this.$router.push({name:'Detail',params:{id},query:{keyword:'xxx'}})
        },
        gotolist2(name) {
            this.$router.push({ path: "/List/"+name});
        }
    },
    created() {
        this.axios
            .get(
                "https://www.nanshig.com/mobile/index.php?act=index&op=search_key_list"
            )
            .then(res => {
                let data = res.data.datas.list;
                // console.log(data)

                this.searchlist = data;
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
    .search {
        line-height: 0;
        font-size: t(16px);
        .searchbtn {
            height: t(32px);
            width: t(355.2px);
            background: red;
            padding: t(10px) t(10px);
            .backindex {
                font-size: t(20px);
                margin-right: t(15px);
                font-weight: bold;
                color:white;
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
    }
}
.hotsearch {
    position: absolute;
    top: t(52px);
    left: 0;
    right: 0;
    line-height: 0;
    height: t(94px);
    // background: red;
    padding: t(10px);
    .searchtop {
        height: t(30px);
        line-height: t(30px);
        background: url(/static/search/hotsearch.png) no-repeat center left;
        background-size: 25px 25px;
        padding-left: t(35px);
        font-size: t(14px);
    }
    .mint-badge {
        border: t(1px) solid #ccc;
        color: #ccc;
        height: t(15px);
        line-height: t(15px);
        padding: t(3px);
        margin-right: t(10px);
        margin-bottom:t(5px);
        margin-top:t(5px);
    }
}
</style>
