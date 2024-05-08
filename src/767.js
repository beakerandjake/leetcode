/**
 * Given a string s, rearrange the characters of s so that any two adjacent
 * characters are not the same.
 *
 * Return any possible rearrangement of s or return "" if not possible.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "aab"
 * Output: "aba"
 *
 *
 * Example 2:
 *
 * Input: s = "aaab"
 * Output: ""
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s.length <= 500
 *  * s consists of lowercase English letters.
 *
 *
 *
 * https://leetcode.com/problems/reorganize-string
 */

import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

const toPriorityQueue = (str) => {
  const charCounts = [...str].reduce(
    (acc, x) => acc.set(x, (acc.get(x) || 0) + 1),
    new Map(),
  );
  return MaxPriorityQueue.from([...charCounts.entries()]);
};

/**
 * @param {string} str
 * @return {string}
 */
export const reorganizeString = (str) => {
  const result = [];
  const heap = toPriorityQueue(str);

  // alternately append first and second most common characters.
  while (heap.size() > 1) {
    const first = heap.dequeue();
    const second = heap.dequeue();

    if (!result.length || result.at(-1) !== first.element) {
      result.push(first.element, second.element);
    } else {
      // handle edge case where most frequent element is equal to the last pushed character.
      result.push(second.element, first.element);
    }

    // only re-enqueue if there are remaining characters.
    if (first.priority > 1) {
      heap.enqueue(first.element, first.priority - 1);
    }
    if (second.priority > 1) {
      heap.enqueue(second.element, second.priority - 1);
    }
  }

  if (heap.isEmpty()) {
    return result.join('');
  }
  // if more than one remaining character then cannot rearrange string.
  if (heap.front().priority > 1) {
    return '';
  }
  return [...result, heap.front().element].join('');
};
