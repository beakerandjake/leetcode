/**
 * Design a data structure to store the strings' count with the ability to return
 * the strings with minimum and maximum counts.
 *
 * Implement the AllOne class:
 *
 *  * AllOne() Initializes the object of the data structure.
 *  * inc(String key) Increments the count of the string key by 1. If key does not
 *    exist in the data structure, insert it with count 1.
 *  * dec(String key) Decrements the count of the string key by 1. If the count of
 *    key is 0 after the decrement, remove it from the data structure. It is
 *    guaranteed that key exists in the data structure before the decrement.
 *  * getMaxKey() Returns one of the keys with the maximal count. If no element
 *    exists, return an empty string "".
 *  * getMinKey() Returns one of the keys with the minimum count. If no element
 *    exists, return an empty string "".
 *
 * Note that each function must run in O(1) average time complexity.
 *
 *
 *
 * Example 1:
 *
 *
 * Input
 * ["AllOne", "inc", "inc", "getMaxKey", "getMinKey", "inc", "getMaxKey", "getMinKey"]
 * [[], ["hello"], ["hello"], [], [], ["leet"], [], []]
 * Output
 * [null, null, null, "hello", "hello", null, "hello", "leet"]
 *
 * Explanation
 * AllOne allOne = new AllOne();
 * allOne.inc("hello");
 * allOne.inc("hello");
 * allOne.getMaxKey(); // return "hello"
 * allOne.getMinKey(); // return "hello"
 * allOne.inc("leet");
 * allOne.getMaxKey(); // return "hello"
 * allOne.getMinKey(); // return "leet"
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= key.length <= 10
 *  * key consists of lowercase English letters.
 *  * It is guaranteed that for each call to dec, key is existing in the data
 *    structure.
 *  * At most 5 * 104 calls will be made to inc, dec, getMaxKey, and getMinKey.
 *
 *
 *
 * https://leetcode.com/problems/all-oone-data-structure
 */

import { MaxPriorityQueue, MinPriorityQueue } from '@datastructures-js/priority-queue';

export class AllOne {
  #counts = new Map();
  #minKeys = new MinPriorityQueue();
  #maxKeys = new MaxPriorityQueue();

  /**
   * @param {string} key
   * @return {void}
   */
  inc(key) {
    this.#counts.set(key, (this.#counts.get(key) || 0) + 1);
    this.#minKeys.enqueue(key, this.#counts.get(key));
    this.#maxKeys.enqueue(key, this.#counts.get(key));
  }

  /**
   * @param {string} key
   * @return {void}
   */
  dec(key) {
    if (this.#counts.get(key) === 1) {
      this.#counts.delete(key);
      return;
    }
    this.#counts.set(key, (this.#counts.get(key) || 0) - 1);
    this.#minKeys.enqueue(key, this.#counts.get(key));
    this.#maxKeys.enqueue(key, this.#counts.get(key));
  }

  /**
   * @return {string}
   */
  getMaxKey() {
    while (!this.#maxKeys.isEmpty()) {
      const { element: key, priority: count } = this.#maxKeys.front();
      if (this.#counts.get(key) === count) {
        return key;
      }
      this.#maxKeys.dequeue();
    }
    return '';
  }

  /**
   * @return {string}
   */
  getMinKey() {
    while (!this.#minKeys.isEmpty()) {
      const { element: key, priority: count } = this.#minKeys.front();
      if (this.#counts.get(key) === count) {
        return key;
      }
      this.#minKeys.dequeue();
    }
    return '';
  }
}

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
