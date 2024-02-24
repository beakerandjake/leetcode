/**
 * Given a binary tree, find its minimum depth.
 *
 * The minimum depth is the number of nodes along the shortest path from the root
 * node down to the nearest leaf node.
 *
 * Note: A leaf is a node with no children.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2020/10/12/ex_depth.jpg]
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 2
 *
 *
 * Example 2:
 *
 *
 * Input: root = [2,null,3,null,4,null,5,null,6]
 * Output: 5
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in the tree is in the range [0, 105].
 *  * -1000 <= Node.val <= 1000
 *
 *
 *
 * https://leetcode.com/problems/minimum-depth-of-binary-tree
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const preOrder = (root, depth, visitFn) => {
  if (!root) {
    return;
  }
  visitFn(root, depth);
  preOrder(root.left, depth + 1, visitFn);
  preOrder(root.right, depth + 1, visitFn);
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
export const minDepth = (root) => {
  let min = Number.MAX_SAFE_INTEGER;
  preOrder(root, 1, (node, depth) => {
    if (!node.left && !node.right) {
      min = Math.min(depth, min);
    }
  });
  return min !== Number.MAX_SAFE_INTEGER ? min : 0;
};
