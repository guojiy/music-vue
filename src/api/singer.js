/**
 * Created by Guo on 2017/7/26 0026.
 */
import jsonp from '../common/js/jsonp'
import {commonParams,options} from './config.js'

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg';
  const data = Object.assign({},commonParams,{
    channel:'singer',
    page:'list',
    key:'all_all_all',
    pagesize:100,
    pagenum:1,
    g_tk:1664029744,
    platform:'yqq',
    needNewCode:0
  })
  return jsonp(url,data,options)
}

export function getSingerDetail(singerId) {
  const url='https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  const data = Object.assign({},commonParams,{
    order:'listen',
    begin:0,
    num:100,
    uin:0,
    needNewCode:1,
    singerid:singerId
  })
  return jsonp(url,data,options)
}
