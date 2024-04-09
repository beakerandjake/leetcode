/**
 * Given an integer array nums, return the third distinct maximum number in this
 * array. If the third maximum does not exist, return the maximum number.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [3,2,1]
 * Output: 1
 * Explanation:
 * The first distinct maximum is 3.
 * The second distinct maximum is 2.
 * The third distinct maximum is 1.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,2]
 * Output: 2
 * Explanation:
 * The first distinct maximum is 2.
 * The second distinct maximum is 1.
 * The third distinct maximum does not exist, so the maximum (2) is returned instead.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [2,2,3,1]
 * Output: 1
 * Explanation:
 * The first distinct maximum is 3.
 * The second distinct maximum is 2 (both 2's are counted together since they have the same value).
 * The third distinct maximum is 1.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums.length <= 104
 *  * -231 <= nums[i] <= 231 - 1
 *
 *
 *
 * Follow up: Can you find an O(n) solution?
 *
 *
 *
 * https://leetcode.com/problems/third-maximum-number
 */

class ThirdMaxHeap {
  #items = [];
  #lookup = new Set();

  constructor(nums) {
    for (const num of nums) {
      this.push(num);
    }
  }

  push(value) {
    if (this.#lookup.has(value)) {
      return;
    }
    this.#lookup.add(value);
    this.#items.push(value);
    this.#bubbleDown();

    if (this.#items.length > 3) {
      this.#lookup.delete(this.#items.shift());
    }
  }

  peek() {
    return this.#items.length === 3 ? this.#items[0] : this.#items.at(-1);
  }

  #bubbleDown() {
    for (let i = this.#items.length - 1; i > 0; i--) {
      if (this.#items[i] < this.#items[i - 1]) {
        this.#swap(i, i - 1);
      }
    }
  }

  #swap(a, b) {
    const temp = this.#items[a];
    this.#items[a] = this.#items[b];
    this.#items[b] = temp;
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
export const thirdMax = (nums) => new ThirdMaxHeap(nums).peek();
