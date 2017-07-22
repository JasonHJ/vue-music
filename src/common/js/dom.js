export function addClass(el, className) {
  if (hasClass(el, className))
    return;
  let newClass = el.className.split(' ');
  newClass.push(className);
  el.className = newClass.join(' ');
}

export function removeClass(el,className) {
  if(!hasClass(el,className))
    return;

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

export function getData(el,name,val) {
	const prefix="data-";
	name=prefix+name;
	if(val)
		return el.setAttribute(name,val);
	else
		return el.getAttribute(name);
}

export function onlyClass(el,className) {
	let parent=el.parentElement;
  parent.getElementsByClassName(className)[0].className="item"
  addClass(el,className);
}
