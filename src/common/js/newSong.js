export default class NewSong{
  constructor({album,sname,mid}){
    this.album=album,
    this.sname=sname,
    this.albumPic=`https://y.gtimg.cn/music/photo_new/T002R300x300M000${mid}.jpg?max_age=2592000`,
    this.link=`https://y.qq.com/n/yqq/album/${mid}.html#stat=y_new.index.album.albumpic`
    this.play=`y_new.index.album.play_btn`
  }
}
