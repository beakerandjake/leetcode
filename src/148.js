/**
 * Given the head of a linked list, return the list after sorting it in ascending
 * order.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2020/09/14/sort_list_1.jpg]
 *
 *
 * Input: head = [4,2,1,3]
 * Output: [1,2,3,4]
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2020/09/14/sort_list_2.jpg]
 *
 *
 * Input: head = [-1,5,3,4,0]
 * Output: [-1,0,3,4,5]
 *
 *
 * Example 3:
 *
 *
 * Input: head = []
 * Output: []
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in the list is in the range [0, 5 * 104].
 *  * -105 <= Node.val <= 105
 *
 *
 *
 * Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e.
 * constant space)?
 *
 *
 *
 * https://leetcode.com/problems/sort-list
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const length = (head) => (head ? 1 + length(head.next) : 0);

const nodeAt = (list, index) => (index === 0 ? list : nodeAt(list.next, index - 1));

const middle = (n) => Math.floor(n / 2);

const slice = (list, count) =>
  list && count ? new ListNode(list.val, slice(list.next, count - 1)) : null;

const merge = (left, right) => {
  const sentinel = new ListNode(null);
  let current = sentinel;
  let l = left;
  let r = right;
  while (l && r) {
    if (l.val < r.val) {
      current.next = new ListNode(l.val);
      l = l.next;
    } else {
      current.next = new ListNode(r.val);
      r = r.next;
    }
    current = current.next;
  }
  // ensure remaining elements are appended to tail (if any)
  current.next = l ? l : r;
  return sentinel.next;
};

const mergeSort = (list) => {
  if (length(list) < 2) {
    return list;
  }
  const m = middle(length(list));
  const left = mergeSort(slice(list, m));
  const right = mergeSort(nodeAt(list, m));
  return merge(left, right);
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const sortList = mergeSort;
