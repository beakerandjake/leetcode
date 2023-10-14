/* eslint-disable no-param-reassign */

/**
 * Given the root of a binary tree, flatten the tree into a "linked list":
    The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
    The "linked list" should be in the same order as a pre-order traversal of the binary tree.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const reversePostOrder = (root, visitFn) => {
  if (!root) {
    return;
  }
  reversePostOrder(root.right, visitFn);
  reversePostOrder(root.left, visitFn);
  visitFn(root);
};

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
export const flatten = (root) => {
  const sentinel = { next: null };
  reversePostOrder(root, (node) => {
    node.right = sentinel.next;
    node.left = null;
    sentinel.next = node;
  });
  return sentinel.next;
};
