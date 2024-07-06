/**
 * A critical point in a linked list is defined as either a local maxima or a local
 * minima.
 *
 * A node is a local maxima if the current node has a value strictly greater than
 * the previous node and the next node.
 *
 * A node is a local minima if the current node has a value strictly smaller than
 * the previous node and the next node.
 *
 * Note that a node can only be a local maxima/minima if there exists both a
 * previous node and a next node.
 *
 * Given a linked list head, return an array of length 2 containing [minDistance,
 * maxDistance] where minDistance is the minimum distance between any two distinct
 * critical points and maxDistance is the maximum distance between any two distinct
 * critical points. If there are fewer than two critical points, return [-1, -1].
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/10/13/a1.png]
 *
 *
 * Input: head = [3,1]
 * Output: [-1,-1]
 * Explanation: There are no critical points in [3,1].
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2021/10/13/a2.png]
 *
 *
 * Input: head = [5,3,1,2,5,1,2]
 * Output: [1,3]
 * Explanation: There are three critical points:
 * - [5,3,1,2,5,1,2]: The third node is a local minima because 1 is less than 3 and 2.
 * - [5,3,1,2,5,1,2]: The fifth node is a local maxima because 5 is greater than 2 and 1.
 * - [5,3,1,2,5,1,2]: The sixth node is a local minima because 1 is less than 5 and 2.
 * The minimum distance is between the fifth and the sixth node. minDistance = 6 - 5 = 1.
 * The maximum distance is between the third and the sixth node. maxDistance = 6 - 3 = 3.
 *
 *
 * Example 3:
 *
 * [https://assets.leetcode.com/uploads/2021/10/14/a5.png]
 *
 *
 * Input: head = [1,3,2,2,3,2,2,2,7]
 * Output: [3,3]
 * Explanation: There are two critical points:
 * - [1,3,2,2,3,2,2,2,7]: The second node is a local maxima because 3 is greater than 1 and 2.
 * - [1,3,2,2,3,2,2,2,7]: The fifth node is a local maxima because 3 is greater than 2 and 2.
 * Both the minimum and maximum distances are between the second and the fifth node.
 * Thus, minDistance and maxDistance is 5 - 2 = 3.
 * Note that the last node is not considered a local maxima because it does not have a next node.
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in the list is in the range [2, 105].
 *  * 1 <= Node.val <= 105
 *
 *
 *
 * https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// iterates each node of the list which has a previous and next node.
// eslint-disable-next-line func-style
function* triplesIterator(node) {
  let current = node.next;
  let previous = node;
  while (current.next) {
    yield [previous.val, current.val, current.next.val];
    previous = current;
    current = current.next;
  }
}

// returns true if the current node is a local maxima
const localMaxima = (previous, current, next) => current > previous && current > next;

// returns true if the current node is a local minima
const localMinima = (previous, current, next) => current < previous && current < next;

// returns true if the current node is a local maxima or minima
const criticalPoint = (previous, current, next) =>
  localMaxima(previous, current, next) || localMinima(previous, current, next);

// returns an array of the index of each critical point in the list.
const criticalPoints = (head) => {
  const result = [];
  let index = 1;
  for (const [p, c, n] of triplesIterator(head)) {
    if (criticalPoint(p, c, n)) {
      result.push(index);
    }
    index++;
  }
  return result;
};

// returns the minimum distance between any two consecutive items in the array.
const minDistance = (arr) => {
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < arr.length; i++) {
    result = Math.min(result, arr[i] - arr[i - 1]);
  }
  return result;
};

// returns the distance between the smallest and largest items in the sorted array.
const maxDistance = (points) => points.at(-1) - points[0];

/**
 * @param {ListNode} head
 * @return {number[]}
 */
export const nodesBetweenCriticalPoints = (head) => {
  const critical = criticalPoints(head);
  return critical.length > 1 ? [minDistance(critical), maxDistance(critical)] : [-1, -1];
};
