let _arr = [[1, 3], [2, 6], [8, 10], [15, 18]]

function marge(arr = _arr) {
  if (arr && arr.length) {
    arr.sort((a, b) => {
      return a[0] - b[0]
    })
  } else {
    return []
  }

  let temp = [arr[0]];
  let pre = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] > pre[1]) {
      temp.push(arr[i])
      pre = arr[i]
    } else {
      pre[1] = Math.max(arr[i][1], pre[1])
    }
  }
  return temp;
}

console.log(marge())