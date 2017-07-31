/**
 * Created by Guo on 2017/7/26 0026.
 */
export function addClass(el,className){
  if(hasClass(el,className)){
    return;
  }
  let newClass = el.className.split(' ');
  newClass.push(className);
  el.className=newClass.join(' ');
}

export function hasClass(el,className) {
  let reg = new RegExp('(^|\\s)'+className+'(\\s|$)')
  return reg.test(el.className)
}

export function getData(el,name,val) {
  const prefix = 'data-';
  name = prefix+name;
  if(val){
    return el.setAttribute(namename,val)
  }else{
    return el.getAttribute(name)
  }
}

let elementStyle = document.createElement('div').style

let vendor = (() => {
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  }

  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }

  return false
})()

export function prefixStyle(style) {
  if (vendor === false) {
    return false
  }

  if (vendor === 'standard') {
    return style
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}

//侦听事件
export function on(ele, ev, handler) {
  if (ele.addEventListener) {
    ele.addEventListener(ev, handler, false)
  } else {
    ele.attachEvent('on' + ev, function () {
      fn.call(handler);
    })
  }
}

//取消事件
export function off(ele, ev, handler) {
  if (ele.removeEventListener) {
    ele.removeEventListener(ev, handler, false)
  } else {
    ele.detachEvent('on' + ev, function () {
      fn.call(handler);
    })
  }
}

//获取样式
export function getStyle(dom, attr) {

  return dom.currentStyle ? dom.currentStyle[attr] : getComputedStyle(dom, false)[attr];

};


export function view() {
  return {
    w: document.documentElement.clientWidth,
    h: document.documentElement.clientHeight
  };
}
