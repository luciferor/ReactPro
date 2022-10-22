import axios from 'axios';
import cookie from 'react-cookies';
import { message } from 'antd';

let hide = null;

//创建axios实例，在这里可以设置请求的默认配置
const instance = axios.create({
    timeout:30000,//设置超时时间30s
    baseURL:'https://apicom.dsnbc.com'
})

//配置请求头
instance.defaults.headers.post['content-type'] = 'application/json';

//http请求状态码
const httpCode = {
    400: '请求参数错误',
    401: '权限不足, 请重新登录',
    403: '服务器拒绝本次访问',
    404: '请求资源未找到',
    500: '内部服务器错误',
    501: '服务器不支持该请求中使用的方法',
    502: '网关错误',
    504: '网关超时'
}

//请求拦截器
instance.interceptors.request.use(config=>{
    config.headers['Authorization'] = cookie.load('token')||'';//带上token
    hide = message.loading({content:'Loading...',duration:0});
    //根据上次类型设置请求头，这里是二进制文件流
    if(config.url.includes('/ossuploads')){
        config.headers['content-type'] = 'multipart/form-data';//二进制流
    }
    return config;
},err=>{
    //错误请求处理
    return Promise.reject(err);
})

//添加响应拦截器
instance.interceptors.response.use(res=>{
    hide();
    if(res.data.status === 200){
        return Promise.resolve(res.data.message);
    }else{
        message.error('请求超时');
        return Promise.reject(res.data.message);
    }
},err=>{
    hide();
    if(err.res){
        message.error(err.res.status in httpCode ? httpCode[err.res.status] : err.res.data.message);
        if(err.res.status === 401){
            //token失效跳转到登录
            this.props.history.push({path:'/login'});
        }
        return Promise.reject(err);
    }else{
        message.error('请求超时，请刷新重试');
        return Promise.reject('请求超时，请刷新重试');
    }
})

//统一封装Get请求
export const get = (url,params,config={})=>{
    return new Promise((resolve,reject)=>{
        instance({
            method:'get',url,params,...config
        }).then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })
}

//统一封装Post请求
export const post = (url,params,config={})=>{
    return new Promise((resolve,reject)=>{
        instance({
            method:'post',url,params,...config
        }).then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })
}