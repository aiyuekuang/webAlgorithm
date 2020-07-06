function Print(n) {
  if (!n) {
    return []
  }
  let result = []
  for (let i = 0; i < n; i++) {
    let arr = []
    for (let j = 0; j <= i; j++) {
      arr.push(generate(i, j))
    }
    result.push(arr)
  }

  function generate(m, n) {
    if (n === 0) {
      return 1
    } else if (m === n) {
      return 1
    }
    return generate(m - 1, n) + generate(m - 1, n - 1)
  };
  return result
}


//数组创建的方式
function yanghui(numRows) {
  let arr = [];
  for (let i = 0; i < numRows; i++) {
    arr[i] = new Array(i + 1)
    for (let j = 0; j <= i; j++) {
      if (j === 0 || i === j) {
        arr[i][j] = 1
      } else {
        arr[i][j] = arr[i - 1][j] + arr[i - 1][j - 1]
      }
    }
  }

  return arr
}

// console.log(yanghui(6))
// console.log(Print(6))

//给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
/**
 * @param {number} rowIndex
 * @return {number[]}
 */


var getRow = function (rowIndex) {
  if (rowIndex > 33) {
    return []
  }

  function yanghui(n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
      arr[i] = new Array(i + 1)
      for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
          arr[i][j] = 1
        } else {
          arr[i][j] = arr[i - 1][j] + arr[i - 1][j - 1]
        }
      }
    }
    return arr;
  }

  let result = yanghui(rowIndex)
  return result[result.length - 1]
};

console.log(getRow(30))