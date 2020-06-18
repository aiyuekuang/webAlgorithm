let _arr = [[1, 3], [2, 6], [8, 10], [15, 18]]

function marge(arr = _arr) {
  if (!arr || arr.length === 0) return []
  arr.sort((a, b) => {
    return a[0] - b[0]
  })
  let arrTemp = [arr[0]];
  let pre = arr[0]
  for (let i = 1; i < arr.length; i++) {
    console.log(21232, arrTemp, i)
    if (arr[i][0] > pre[1]) {
      arrTemp[i - 1][1] = Math.max(arr[i][1], arr[i - 1][1])
      pre = arr[i]
    } else {
      arrTemp.push(arr[i])
    }
  }
  return arrTemp;
}

console.log(marge())