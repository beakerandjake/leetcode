/**
 * Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
 *
 *     [4,5,6,7,0,1,2] if it was rotated 4 times.
 *     [0,1,2,4,5,6,7] if it was rotated 7 times.
 *
 * Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
 * Given the sorted rotated array nums of unique elements, return the minimum element of this array.
 * You must write an algorithm that runs in O(log n) time.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
export const findMin = (nums) => {
  let l = 0;
  let u = nums.length - 1;
  while (l < u) {
    const m = Math.floor(l + (u - l) / 2);
    console.log(`l:${l}=${nums[l]}, m:${m}=${nums[m]}, u:${u}=${nums[u]}`);
    if (nums[m] < nums[u]) {
      u = m;
      console.log(`set u:${u}=${nums[u]}`);
    } else {
      l = m + 1;
      console.log(`set l:${l}=${nums[l]}`);
    }
  }
  return nums[l];
};
