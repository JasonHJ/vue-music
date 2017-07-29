export function recommendData(data) {
  let newData=[];
  for(let k in data){
    newData.push({
      "pic":data[k].pic,
      "jumpurl":data[k].jumpurl==""?`https://y.qq.com/n/yqq/album/${data[k].id}.html`:data[k].jumpurl
    })
  }
  return newData;
}

export function toplistData(data) {
  let newData=[];
  for(let k in data){
    newData.push({
      listname:data[k].ListName.substr(data[k].ListName.indexOf("·")+1),
      songlist:data[k].songlist,
      topid:data[k].topID,
      url:`https://y.qq.com/n/yqq/toplist/${data[k].topID}.html?stat=y_new.index.toplist.detail${k-0+1}`
    })
  }
  return newData;
}

export function hotdiss(data){
  let newData=[];
  for(let k in data){
    newData.push({
      imgurl:data[k].imgurl,
      dissname:data[k].dissname,
      listennum:"播放量:"+numberFormat(data[k].listennum),
      dissurl:`https://y.qq.com/n/yqq/playlist/${data[k].dissid}.html`
    })
  }
  newData.length=12;
  for(let k=1;k<=4;k++){
    newData.unshift(newData[newData.length-k]);
  }
  for(let k=4;k<=7;k++){
    newData.push(newData[k])
  }
  return newData;
}
function numberFormat(num) {
  return (num/10000).toFixed(1)+'万'
}
