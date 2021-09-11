// 独立封装一个JS文件，来对首页所有网络请求进行集中管理，降低耦合性
import { request } from "./request";

export function getHomeData () {
    return request({
        url:'/home/multidata'
    })
}

export function getHomeGoods(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}