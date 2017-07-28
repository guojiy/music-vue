/**
 * Created by Guo on 2017/7/26 0026.
 */
import jsonp from '../common/js/jsonp'
import {commonParams,options} from './config.js'
import axios from 'axios'
export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
  const data = Object.assign({},commonParams,{
    platform:'h5',
    rin:0,
    needNewCode:1
  })

  return jsonp(url,data,options);
}

export function getDiscList() {
  const url = '/api/getDiscList';
  const data = Object.assign({},commonParams,{
    loginUin:0,
    hostUin:0,
    notice:0,
    platform:'yqq',
    needNewCode:0,
    categoryId:10000000,
    sortId:5,
    sin:0,
    ein:29,
    rnd:Math.random(),
    format:'json'
  });
  return axios.get(url,{
    params:data
  }).then((res)=>{
    return Promise.resolve(res.data)
  })
}
