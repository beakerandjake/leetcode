/**
 * You are given an integer array nums and an integer k.
 * In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.
 * Return the maximum number of operations you can perform on the array.
 */

// const sorting = (nums, k) => {
//   const sorted = [...nums].sort((a, b) => a - b);
//   let left = 0;
//   let right = nums.length - 1;
//   let toReturn = 0;
//   while (left < right) {
//     const desired = k - sorted[left];
//     if (sorted[right] === desired) {
//       right--;
//       left++;
//       toReturn++;
//     } else if (sorted[right] < desired) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return toReturn;
// };

const frequencyMap = (nums) =>
  nums.reduce((acc, num) => {
    acc.set(num, acc.has(num) ? acc.get(num) + 1 : 1);
    return acc;
  }, new Map());

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const maxOperations = (nums, k) => {
  let toReturn = 0;
  const remainingNums = frequencyMap(nums);
  for (let i = 0; i < nums.length; i++) {
    // skip if num has been consumed.
    if (!remainingNums.get(nums[i])) {
      continue;
    }
    const desired = k - nums[i];
    const remainingCount = remainingNums.get(desired);

    // not possible to make k with this number.
    if (!remainingCount || (remainingCount === 1 && desired === nums[i])) {
      continue;
    }

    // make k with this number and remove it and desired from set.
    remainingNums.set(nums[i], remainingNums.get(nums[i]) - 1);
    remainingNums.set(desired, remainingNums.get(desired) - 1);
    toReturn++;
  }
  return toReturn;
};
