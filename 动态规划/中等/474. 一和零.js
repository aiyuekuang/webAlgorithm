/*
在计算机界中，我们总是追求用有限的资源获取最大的收益。

现在，假设你分别支配着 m 个 0 和 n 个 1。另外，还有一个仅包含 0 和 1 字符串的数组。

你的任务是使用给定的 m 个 0 和 n 个 1 ，找到能拼出存在于数组中的字符串的最大数量。每个 0 和 1 至多被使用一次。

 

示例 1:

输入: strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3
输出: 4
解释: 总共 4 个字符串可以通过 5 个 0 和 3 个 1 拼出，即 "10","0001","1","0" 。
示例 2:

输入: strs = ["10", "0", "1"], m = 1, n = 1
输出: 2
解释: 你可以拼出 "10"，但之后就没有剩余数字了。更好的选择是拼出 "0" 和 "1" 。
 

提示：

1 <= strs.length <= 600
1 <= strs[i].length <= 100
strs[i] 仅由 '0' 和 '1' 组成
1 <= m, n <= 100

*/
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  // let dp = new Array(m + 1).fill(new Array(n + 1).fill(0));

  let map = {};
  for (let t of strs) {
    let count = 0;
    for (let ch of t) {
      if (ch === "1") {
        count++
      }
      map[t] = [t.length - count, count]
    }
  }

  const dp = new Array(m + 1);
  for (let i = 0; i < dp.length; i++) dp[i] = new Array(n + 1).fill(0);

  console.log(1111, dp, m, n)

  for (let i in map) {
    const [v0, v1] = map[i];
    console.log(666, v0, v1)

    for (let t = m; t >= v0; t--) {
      for (let j = n; j >= v1; j--) {
        dp[t][j] = Math.max(dp[t][j], (dp[t - v0][j - v1]) + 1)
      }
    }

  }

  console.log(22222, dp)

  return dp[m][n]
};

console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3))

