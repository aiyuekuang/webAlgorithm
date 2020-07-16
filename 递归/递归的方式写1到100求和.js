function hundred(a, b) {
  let num = a + b
  if (num >= 100) {
    return num
  } else {
    return hundred(num, b + 1)
  }
}

console.log(111, hundred(1, 2))