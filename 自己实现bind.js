Function.prototype.myBind=function(context,...arg){
  if(typeof this !== 'function') {
    throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
  }
  context["self"] = this
  return function (...arg2) {
    context.self(...arg,...arg2)
  }
}

function aaa(t,y) {
  console.log(this.name,t,y)
}

(aaa.myBind({name:5555555},9,8))()