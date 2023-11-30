/**
 * You are given two 0-indexed integer arrays nums1 and nums2 of equal length n and
 * a positive integer k. You must choose a subsequence of indices from nums1 of
 * length k.
 *
 * For chosen indices i0, i1, ..., ik - 1, your score is defined as:
 *
 *  * The sum of the selected elements from nums1 multiplied with the minimum of
 *    the selected elements from nums2.
 *  * It can defined simply as: (nums1[i0] + nums1[i1] +...+ nums1[ik - 1]) *
 *    min(nums2[i0] , nums2[i1], ... ,nums2[ik - 1]).
 *
 * Return the maximum possible score.
 *
 * A subsequence of indices of an array is a set that can be derived from the set
 * {0, 1, ..., n-1} by deleting some or no elements.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums1 = [1,3,3,2], nums2 = [2,1,3,4], k = 3
 * Output: 12
 * Explanation:
 * The four possible subsequence scores are:
 * - We choose the indices 0, 1, and 2 with score = (1+3+3) * min(2,1,3) = 7.
 * - We choose the indices 0, 1, and 3 with score = (1+3+2) * min(2,1,4) = 6.
 * - We choose the indices 0, 2, and 3 with score = (1+3+2) * min(2,3,4) = 12.
 * - We choose the indices 1, 2, and 3 with score = (3+3+2) * min(1,3,4) = 8.
 * Therefore, we return the max score, which is 12.
 *
 *
 * Example 2:
 *
 *
 * Input: nums1 = [4,2,3,1,1], nums2 = [7,5,10,9,6], k = 1
 * Output: 30
 * Explanation:
 * Choosing index 2 is optimal: nums1[2] * nums2[2] = 3 * 10 = 30 is the maximum possible score.
 *
 *
 *
 *
 * Constraints:
 *
 *  * n == nums1.length == nums2.length
 *  * 1 <= n <= 105
 *  * 0 <= nums1[i], nums2[j] <= 105
 *  * 1 <= k <= n
 *
 *
 *
 * https://leetcode.com/problems/maximum-subsequence-score
 */

const simple = (() => {
  const subsequenceIndexes = (arrLength, subsequenceLength) => {
    const toReturn = [];
    const recurse = (i, current) => {
      if (i >= arrLength) {
        if (current.length === subsequenceLength) {
          toReturn.push([...current]);
        }
        return;
      }
      // use i
      current.push(i);
      recurse(i + 1, current);
      current.pop();

      // don't use i.
      recurse(i + 1, current);
    };
    recurse(0, []);
    return toReturn;
  };

  const elements = (arr, indexes) => indexes.map((i) => arr[i]);

  const sum = (arr) => arr.reduce((acc, x) => acc + x, 0);

  return (nums1, nums2, k) =>
    Math.max(
      ...subsequenceIndexes(nums1.length, k).map(
        (indexes) => sum(elements(nums1, indexes)) * Math.min(...elements(nums2, indexes))
      )
    );
})();

const withHeap = (() => {
  class MinHeap {
    #size = 0;
    #items = [];

    get size() {
      return this.#size;
    }

    findMin() {
      return this.#items[1];
    }

    insert(value) {
      this.#size++;
      this.#items[this.#size] = value;
      this.#bubbleUp();
    }

    #bubbleUp() {
      const parent = (i) => Math.floor(i / 2);
      let i = this.#size;
      while (i > 1 && this.#items[i] < this.#items[parent(i)]) {
        this.#swap(i, parent(i));
        i = parent(i);
      }
    }

    deleteMin() {
      if (!this.#size) {
        return undefined;
      }
      this.#swap(1, this.#size);
      const toReturn = this.#items.pop();
      this.#size--;
      this.#bubbleDown();
      return toReturn;
    }

    #bubbleDown() {
      const left = (i) => i * 2;
      const right = (i) => i * 2 + 1;
      let i = 1;
      while (left(i) <= this.#size) {
        // choose smaller child
        const child =
          right(i) <= this.#size && this.#items[right(i)] < this.#items[left(i)]
            ? right(i)
            : left(i);
        // stop if node is now at correct place.
        if (this.#items[i] < this.#items[child]) {
          break;
        }
        this.#swap(i, child);
        i = child;
      }
    }

    #swap(a, b) {
      [this.#items[a], this.#items[b]] = [this.#items[b], this.#items[a]];
    }
  }
  
  return (nums1, nums2, k) => {
    const pairs = nums1.map((x, i) => [x, nums2[i]]).sort((a, b) => b[1] - a[1]);
    const heap = new MinHeap();
    let answer = 0;
    let sum = 0;
    for (const [num, min] of pairs) {
      heap.insert(num);
      sum += num;
      if (heap.size === k) {
        answer = Math.max(answer, sum * min);
        sum -= heap.deleteMin();
      }
    }
    return answer;
  };
})();

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
export const maxScore = withHeap;
