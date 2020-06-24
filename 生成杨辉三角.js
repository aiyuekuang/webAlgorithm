var generate = function (m, n) {
  if (n === 0) {
    return 1
  } else if (m === n) {
    return 1
  }
  return generate(m - 1, n) + generate(m - 1, n - 1)
};

function Print(n) {
  for (let i = 0; i < n; i++) {
    let arr = []
    for (let j = 0; j <= i; j++) {
      arr.push(generate(i, j))
    }
    console.log(arr.join(" "))
  }
}


Print(5)