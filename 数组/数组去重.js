// es6方法数组去重

function dedupe(arr) {
  // return [...new Set(arr)]
  return Array.from(new Set(arr))
}