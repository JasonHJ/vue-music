import jsonp from 'common/js/jsonp'
import {
  commonParams,
  options
} from './config'

export function getNewSong() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/album_library'

  const data = Object.assign({}, commonParams, {
    hostUin:0,
    platform: 'yqq',
    uin: 0,
    needNewCode: 0,
    cmd:'firstpage',
    page:0,
    pagesize:16,
    sort:1,
    language:0,
    genre:0,
    year:1,
    pay:0,
    type:-1,
    company:-1,
  })

  return jsonp(url, data, options)
}
