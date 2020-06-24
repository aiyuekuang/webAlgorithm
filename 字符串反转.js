let arr = ["h", "e", "l", "l", "o"];

let reverseString = function (s) {
  let i = 0, j = s.length - 1;
  for (;i < j; i++, j--) {
    [s[i], s[j]] = [s[j], s[i]]
  }
  return s;
};

console.log(111, reverseString(arr))