/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const convertToNumbers = (() => {
  const pow = (val, power) => BigInt(val) * 10n ** power;

  const toDigit = (node, power = 0n) =>
    node.next
      ? pow(node.val, power) + toDigit(node.next, power + 1n)
      : pow(node.val, power);

  const toList = (num) => {
    let head;
    let currentNode;
    let remaining = num;
    while (remaining) {
      const decimal = remaining % 10n;
      remaining /= 10n;

      const newNode = new ListNode(Number(decimal));

      if (!currentNode) {
        head = newNode;
        currentNode = newNode;
      } else {
        currentNode.next = newNode;
        currentNode = newNode;
      }
    }

    return head || new ListNode(0);
  };

  return (l1, l2) => toList(toDigit(l1) + toDigit(l2));
})();

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export const addTwoNumbers = (l1, l2) => {

};
