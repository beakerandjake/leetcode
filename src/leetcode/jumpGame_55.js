/**
 * You are given an integer array nums.
 * You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
 * Return true if you can reach the last index, or false otherwise.
 */

// const recursiveMemo = (nums) => {
//   if (nums.length === 1) {
//     return true;
//   }

//   const target = nums.length - 1;
//   const memo = new Map();
//   const test = (index) => {
//     if (index === target) {
//       return true;
//     }

//     if (memo.has(index)) {
//       return memo.get(index);
//     }

//     let value = nums[index];
//     while (value) {
//       if (test(index + value--)) {
//         memo.set(index, true);
//         return true;
//       }
//     }
//     memo.set(index, false);
//     return false;
//   };

//   return test(0);
// };

/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const canJump = (nums) => {
  if (nums.length === 1) {
    return true;
  }
  let targetIndex = nums.length - 1;
  let currentIndex = targetIndex - 1;
  for (;;) {
    if (targetIndex === 0) {
      return true;
    }
    const canReachTarget = nums[currentIndex] >= targetIndex - currentIndex;
    if (currentIndex === 0) {
      return canReachTarget;
    }
    if (!canReachTarget) {
      currentIndex--;
    } else {
      targetIndex--;
      currentIndex = targetIndex - 1;
    }
  }
};
