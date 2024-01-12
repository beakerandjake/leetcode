/**
 * You are given the root of a binary search tree (BST) and an integer val.
 * Find the node in the BST that the node's value equals val and return the subtree rooted with that node.
 * If such a node does not exist, return null.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const recursive = (root, val) => {
  if (!root || root.val === val) {
    return root;
  }
  return root.val > val ? recursive(root.left, val) : recursive(root.right, val);
};

const iterative = (root, val) => {
  let current = root;
  while (current && current.val !== val) {
    current = val < current.val ? current.left : current.right;
  }
  return current;
};

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
export const searchBST = iterative;
