module.exports = {
    lintOnSave: false,
    devServer: {
        port: 8888,
        host: "localhost",  // 主机名，127.0.0.1  真机 0.0.0.0
        https: false,  // 协议
        open: true,  // 启动服务时自动打开浏览器访问
        watchOptions: { // 热部署
            aggregateTimeout: 6000,
            ignored: '**/node_modules',
            poll: 3000,
        },
/*
        proxy: {
            '/api': { // 侦听代理的路径名称，这里将侦听 /api 的请求到代理主机的 www.leekroot.com/api
                target: 'www.leekroot.com',  // 指向代理主机
                changeOrigin: true,
                ws: true,
                pathRewrite: {'^/api': '/new/api'}  // 重写目标路径，即请求 /path 时将代理到 www.leekroot.com/new/api
            },

        },
*/
    },
    productionSourceMap: false // 打包时不会生成.map文件，加快打包速度
}
