/**
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const depth = (node) => {
  if (!node) {
    return 0;
  }
  return Math.max(depth(node.left), depth(node.right)) + 1;
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
export const maxDepth = (root) => depth(root);
