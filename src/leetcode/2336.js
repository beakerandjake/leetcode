/**
 * You have a set which contains all positive integers [1, 2, 3, 4, 5, ...].
 *
 * Implement the SmallestInfiniteSet class:
 *
 *  * SmallestInfiniteSet() Initializes the SmallestInfiniteSet object to contain
 *    all positive integers.
 *  * int popSmallest() Removes and returns the smallest integer contained in the
 *    infinite set.
 *  * void addBack(int num) Adds a positive integer num back into the infinite set,
 *    if it is not already in the infinite set.
 *
 *
 *
 * Example 1:
 *
 *
 * Input
 * ["SmallestInfiniteSet", "addBack", "popSmallest", "popSmallest", "popSmallest", "addBack", "popSmallest", "popSmallest", "popSmallest"]
 * [[], [2], [], [], [], [1], [], [], []]
 * Output
 * [null, null, 1, 2, 3, null, 1, 4, 5]
 *
 * Explanation
 * SmallestInfiniteSet smallestInfiniteSet = new SmallestInfiniteSet();
 * smallestInfiniteSet.addBack(2);    // 2 is already in the set, so no change is made.
 * smallestInfiniteSet.popSmallest(); // return 1, since 1 is the smallest number, and remove it from the set.
 * smallestInfiniteSet.popSmallest(); // return 2, and remove it from the set.
 * smallestInfiniteSet.popSmallest(); // return 3, and remove it from the set.
 * smallestInfiniteSet.addBack(1);    // 1 is added back to the set.
 * smallestInfiniteSet.popSmallest(); // return 1, since 1 was added back to the set and
 *                                    // is the smallest number, and remove it from the set.
 * smallestInfiniteSet.popSmallest(); // return 4, and remove it from the set.
 * smallestInfiniteSet.popSmallest(); // return 5, and remove it from the set.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= num <= 1000
 *  * At most 1000 calls will be made in total to popSmallest and addBack.
 *
 *
 *
 * https://leetcode.com/problems/smallest-number-in-infinite-set
 */

class MinHeap {
  #items;
  #size;

  constructor() {
    this.#items = [];
    this.#size = 0;
  }

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
    while (i > 1 && this.#items[parent(i)] > this.#items[i]) {
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
      // get the smallest child
      const child =
        right(i) <= this.#size && this.#items[right(i)] < this.#items[left(i)]
          ? right(i)
          : left(i);

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

export class SmallestInfiniteSet {
  #lastPopped;
  #pushedBack;
  #pushedBackLookup;

  constructor() {
    this.#lastPopped = 0;
    this.#pushedBack = new MinHeap();
    this.#pushedBackLookup = new Set();
  }

  /**
   * @return {number}
   */
  popSmallest() {
    if (!this.#pushedBack.size || this.#pushedBack.findMin() > this.#lastPopped + 1) {
      return ++this.#lastPopped;
    }
    const smallest = this.#pushedBack.deleteMin();
    this.#pushedBackLookup.delete(smallest);
    return smallest;
  }

  /**
   * @param {number} num
   * @return {void}
   */
  addBack(num) {
    if (num > this.#lastPopped || this.#pushedBackLookup.has(num)) {
      return;
    }
    this.#pushedBack.insert(num);
    this.#pushedBackLookup.add(num);
  }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
