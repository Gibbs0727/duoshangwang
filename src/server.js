const express = require('express');

//配置服务器
let app = express();
//配置静态资源服务器
app.use(express.static('./dist'));
//配置端口
app.listen(3160,()=>{
    console.log(`端口3160启动成功`);
})