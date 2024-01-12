/**
 * You are given two integer arrays nums1 and nums2 sorted in non-decreasing order
 * and an integer k.
 *
 * Define a pair (u, v) which consists of one element from the first array and one
 * element from the second array.
 *
 * Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
 * Output: [[1,2],[1,4],[1,6]]
 * Explanation: The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
 *
 *
 * Example 2:
 *
 *
 * Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
 * Output: [[1,1],[1,1]]
 * Explanation: The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
 *
 *
 * Example 3:
 *
 *
 * Input: nums1 = [1,2], nums2 = [3], k = 3
 * Output: [[1,3],[2,3]]
 * Explanation: All possible pairs are returned from the sequence: [1,3],[2,3]
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= nums1.length, nums2.length <= 105
 *  * -109 <= nums1[i], nums2[i] <= 109
 *  * nums1 and nums2 both are sorted in non-decreasing order.
 *  * 1 <= k <= 104
 *
 *
 *
 * https://leetcode.com/problems/find-k-pairs-with-smallest-sums
 */

class MaxHeap {
  #items = [];
  #size = 0;

  get size() {
    return this.#size;
  }

  insert(key, value) {
    this.#size++;
    this.#items[this.#size] = { key, value };
    this.#bubbleUp();
  }

  findMax() {
    return this.#items[1];
  }

  #bubbleUp() {
    const parent = (i) => Math.floor(i / 2);

    let i = this.#size;
    while (i > 1 && this.#items[i].key > this.#items[parent(i)].key) {
      this.#swap(i, parent(i));
      i = parent(i);
    }
  }

  deleteMax() {
    if (!this.#size) {
      return undefined;
    }
    this.#swap(1, this.#size);
    const toReturn = this.#items.pop();
    this.#size--;
    this.#bubbleDown();
    return toReturn;
  }

  pushPop(key, value) {
    this.#items[1] = { key, value };
    this.#bubbleDown();
  }

  #bubbleDown() {
    const left = (i) => i * 2;
    const right = (i) => i * 2 + 1;
    let i = 1;
    while (left(i) <= this.#size) {
      // choose larger child
      const child =
        right(i) <= this.#size && this.#items[right(i)].key > this.#items[left(i)].key
          ? right(i)
          : left(i);
      // stop if child is in right place.
      if (this.#items[i].key > this.#items[child].key) {
        break;
      }
      this.#swap(i, child);
      i = child;
    }
  }

  #swap(a, b) {
    [this.#items[a], this.#items[b]] = [this.#items[b], this.#items[a]];
  }

  toArray() {
    const toReturn = [];
    for (let i = 1; i < this.#items.length; i++) {
      toReturn.push(this.#items[i].value);
    }
    return toReturn;
  }
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
export const kSmallestPairs = (nums1, nums2, k) => {
  const aMin = nums1[0];
  const bMin = nums2[0];
  const heap = new MaxHeap();
  for (const a of nums1) {
    // stop early if no remaining a can produce sum smaller than max.
    if (heap.size === k && a + bMin > heap.findMax().key) {
      break;
    }
    for (const b of nums2) {
      // stop early if no remaining b can produce sum smaller than max.
      if (heap.size === k && b + aMin > heap.findMax().key) {
        break;
      }
      if (heap.size < k) {
        heap.insert(a + b, [a, b]);
      } else if (a + b <= heap.findMax().key) {
        heap.pushPop(a + b, [a, b]);
      }
    }
  }
  // order does not seem to matter for leetcode.
  return heap.toArray();
};
