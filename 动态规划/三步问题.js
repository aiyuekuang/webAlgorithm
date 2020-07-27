/*
三步问题。有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶或3阶。实现一种方法，计算小孩有多少种上楼梯的方式。结果可能很大，你需要对结果模1000000007。

示例1:

  输入：n = 3
输出：4
说明: 有四种走法
示例2:

  输入：n = 5
输出：13
提示:

  n范围在[1, 1000000]之间
*/


/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function (n) {
  if (n <= 2) {
    return n
  }
  let dp = new Array(n);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let i = 4; i <= n; i++) {
    dp[i] = (dp[i - 3] + dp[i - 1] + dp[i - 2]) % 1000000007
  }

  return dp[dp.length - 1]
};

console.log(waysToStep(20))