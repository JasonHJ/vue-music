import jsonp from 'common/js/jsonp'
import {
  commonParams,
  options
} from './config'

export function getAllData() {
  const url="https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg"

  const data = Object.assign({}, commonParams, {
    tpl:'v12',
    page:'other',
    rnd:Math.random(),
    hostUin:0,
    platform: 'yqq',
    needNewCode: 0
  })

  return jsonp(url, data, options)
}
