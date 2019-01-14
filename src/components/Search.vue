<template>
    <div class="search">
        <mt-search cancel-text="取消" placeholder="搜索"></mt-search>
        <div class="hotsearch">
            <div class="searchtop">
                <p>热门搜索</p>
            </div>
            <mt-badge size="small" color="#fff" v-for="(item,idx) in searchlist" :key="idx">{{item}}</mt-badge>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            searchlist: []
        };
    },
    created() {
        this.axios
            .get(
                "https://www.nanshig.com/mobile/index.php?act=index&op=search_key_list",
                {
                    params: {}
                }
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
    @return $px / 75px * 1rem; //100px为根字体大小
}
body {
    margin: 0;
}
.mint-search {
    height: t(52px);
}
.hotsearch {
    line-height:0;
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
        // margin-bottom:t(10px);
    }
    .mint-badge{
        border:t(1px) solid #ccc;
        color:#ccc;
        height:t(15px);
        line-height:t(15px);
        padding:t(3px);
        margin-right:t(10px);
    }
}
</style>
