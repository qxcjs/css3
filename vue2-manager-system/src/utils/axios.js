import axios from 'axios';
// element ui中的loading和message组件
import {Loading, Message} from 'element-ui'

axios.defaults.timeout = 5000

let loadingInstance

// http 拦截
axios.interceptors.request.use(config => {
    // loadingInstance = Loading.service({fullscreen: true})
    // 1. 这个位置就请求前最后的配置
    // 2. 当然你也可以在这个位置 加入你的后端需要的用户授权信息
    return config
}, error => {
    // loadingInstance.close()
    Message.error({
        message: '加载超时'
    })
    return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use(response => {
    // loadingInstance.close()
    // 请求成功
    // 1. 根据自己项目需求定制自己的拦截
    // 2. 然后返回数据
    return response;
}, error => {
    // loadingInstance.close()
    Message.error({
        message: '加载失败'
    })

    // 请求失败
    if (error && error.response) {
        switch (error.response.status) {
            case 400:
                // 对400错误您的处理\
                break
            case 401:
                // 对 401 错误进行处理
                break
            default:
                // 如果以上都不是的处理
                return Promise.reject(error);
        }
    }

})