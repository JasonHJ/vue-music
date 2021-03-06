import jsonp from 'common/js/jsonp'
import {
  commonParams,
  options
} from './config'

export function getRecommend() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}
