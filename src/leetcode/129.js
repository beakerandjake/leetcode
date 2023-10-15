/**
 * You are given the root of a binary tree containing digits from 0 to 9 only.
 *
 * Each root-to-leaf path in the tree represents a number.
 *
 *     For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
 *
 * Return the total sum of all root-to-leaf numbers.
 * Test cases are generated so that the answer will fit in a 32-bit integer.
 *
 * A leaf node is a node with no children.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const addDigitToSum = (sum, digit) => sum * 10 + digit;

const inOrder = (node, currentSum = 0) => {
  if (!node) {
    return [];
  }
  const newSum = addDigitToSum(currentSum, node.val);

  // a leaf node is the end of a root to leaf number.
  if (!node.left && !node.right) {
    return [newSum];
  }
  // return root to leaf sums from left and right child
  return [...inOrder(node.left, newSum), ...inOrder(node.right, newSum)];
};

const sum = (arr) => arr.reduce((acc, x) => acc + x, 0);

/**
 * @param {TreeNode} root
 * @return {number}
 */
export const sumNumbers = (root) => sum(inOrder(root));
