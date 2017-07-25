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
