module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://47.106.12.223:8569',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''  //使用  /api  替换了http://47.106.12.223:8569
                }

            }
        }
    }
}