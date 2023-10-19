/**
 * You are given a sorted unique integer array nums.
 * A range [a,b] is the set of all integers from a to b (inclusive).
 * Return the smallest sorted list of ranges that cover all the numbers in the array exactly.
 * That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
 * Each range [a,b] in the list should be output as:
 *
 *     "a->b" if a != b
 *     "a" if a == b
 */

const summary = (arr, start, end) =>
  start === end ? `${arr[start]}` : `${arr[start]}->${arr[end]}`;

const consume = (arr, start) => {
  let index = start + 1;
  while (index < arr.length) {
    if (arr[index] - arr[index - 1] > 1) {
      return index;
    }
    index++;
  }
  return index;
};

/**
 * @param {number[]} nums
 * @return {string[]}
 */
export const summaryRanges = (nums) => {
  const toReturn = [];
  let index = 0;
  while (index < nums.length) {
    const end = consume(nums, index);
    toReturn.push(summary(nums, index, end - 1));
    index = end;
  }
  return toReturn;
};
