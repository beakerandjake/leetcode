/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 */

// const simple = (array) => {
//   const productExcept = (exceptIndex) =>
//     array.reduce(
//       (total, number, index) => (index !== exceptIndex ? number * total : total),
//       1
//     );

//   return array.map((_, i) => productExcept(i));
// };

// const recursive = (array) => {
//   const beforeCache = [];
//   const before = (index) => {
//     if (index === 0) {
//       return 1;
//     }
//     if (beforeCache[index] != null) {
//       return beforeCache[index];
//     }
//     const result = array[index - 1] * before(index - 1);
//     beforeCache[index] = result;
//     return result;
//   };

//   const afterCache = [];
//   const after = (index) => {
//     if (index === array.length - 1) {
//       return 1;
//     }
//     if (afterCache[index] != null) {
//       return afterCache[index];
//     }
//     const result = array[index + 1] * after(index + 1);
//     afterCache[index] = result;
//     return result;
//   };

//   return array.map((_, i) => before(i) * after(i));
// };

/**
 * @param {number[]} array
 * @return {number[]}
 */
export const productExceptSelf = (array) => {
  const beforeCache = [1];
  for (let i = 1; i < array.length; i++) {
    beforeCache.push(array[i - 1] * beforeCache[i - 1]);
  }

  const afterCache = Array(array.length).fill(1);
  for (let i = array.length - 1; i--; ) {
    afterCache[i] = array[i + 1] * afterCache[i + 1];
  }

  return array.map((_, i) => beforeCache[i] * afterCache[i]);
};
