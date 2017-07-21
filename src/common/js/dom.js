export function addClass(el, className) {
  if (hasClass(el, className))
    return;
  let newClass = el.className.split(' ');
  newClass.push(className);
  el.className = newClass.join(' ');
}

export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
  return reg.test(el.className);
}

export function splitArr(arr, num) {
  var len = arr.length;
  var newArr = [];
  for (let i = 0; i < len; i += num) {
    newArr.push(arr.slice(i, i + num));
  }
  return newArr;
}
