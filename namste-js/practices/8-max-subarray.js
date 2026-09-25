function maxSubArray(nums) {
  if (nums.length < 1) return Number.NEGATIVE_INFINITY
  let currentSum = nums[0];
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

const input1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const input2 = [1];
const input3 = [5, 4, -1, 7, 8];
const input4 = [-1];

const res1 = maxSubArray(input1)
const res2 = maxSubArray(input2)
const res3 = maxSubArray(input3)
const res4 = maxSubArray(input4)
// const res5 = maxSubArray(input5)

console.log(res1); // Output: 6
console.log(res2); // Output: 1
console.log(res3); // Output: 23
console.log(res4); // Output: -1
// console.log(res5); // Output: -1
