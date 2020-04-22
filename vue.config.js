module.exports = {
    devServer: {
        proxy: {
            '/api': {            //这里的key就是axios的baseURL
                target: 'http://47.106.12.223:8569',    //访问域名
                changeOrigin: true,        //开启跨域
                pathRewrite: {
                    '^/api': ''  //使用  /api  替换了http://47.106.12.223:8569
                }
            }
        }
    }
}