/*给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:

  输入: [-2,1,-3,4,-1,2,1,-5,4],
    输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function (nums) {
  if(!nums.length){
    return 0
  }

  let maxArr = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] + maxArr[i - 1] > 0 && maxArr[i - 1] > 0) {
      maxArr[i] = nums[i] + maxArr[i - 1]
    } else {
      maxArr[i] = nums[i]
    }
  }
  return Math.max(...maxArr)
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))