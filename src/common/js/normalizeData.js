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
