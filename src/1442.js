/**
 * Given an array of integers arr.
 *
 * We want to select three indices i, j and k where (0 <= i < j <= k < arr.length).
 *
 * Let's define a and b as follows:
 *
 *  * a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]
 *  * b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]
 *
 * Note that ^ denotes the bitwise-xor operation.
 *
 * Return the number of triplets (i, j and k) Where a == b.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: arr = [2,3,1,6,7]
 * Output: 4
 * Explanation: The triplets are (0,1,2), (0,2,2), (2,3,4) and (2,4,4)
 *
 *
 * Example 2:
 *
 *
 * Input: arr = [1,1,1,1,1]
 * Output: 10
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= arr.length <= 300
 *  * 1 <= arr[i] <= 108
 *
 *
 *
 * https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor
 */

const bruteForce = (() => {
  // iterates all triplets
  // eslint-disable-next-line func-style
  function* triplets(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        for (let k = j; k < arr.length; k++) {
          yield [i, j, k];
        }
      }
    }
  }

  // returns the xor of the "slice" starting at from and up to but not including to.
  const xor = (arr, from, to) => (from < to ? arr[from] ^ xor(arr, from + 1, to) : 0);

  // returns the count of all triplets who were equal.
  return (arr) =>
    [...triplets(arr)].reduce(
      (acc, [i, j, k]) => acc + (xor(arr, i, j) === xor(arr, j, k + 1)),
      0,
    );
})();

/**
 * @param {number[]} arr
 * @return {number}
 */
export const countTriplets = bruteForce;
