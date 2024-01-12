/**
 * You are given the root of a binary tree.
 *
 * A ZigZag path for a binary tree is defined as follow:
 *
 *  * Choose any node in the binary tree and a direction (right or left).
 *  * If the current direction is right, move to the right child of the current
 *    node; otherwise, move to the left child.
 *  * Change the direction from right to left or from left to right.
 *  * Repeat the second and third steps until you can't move in the tree.
 *
 * Zigzag length is defined as the number of nodes visited - 1. (A single node has
 * a length of 0).
 *
 * Return the longest ZigZag path contained in that tree.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2020/01/22/sample_1_1702.png]
 *
 *
 * Input: root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]
 * Output: 3
 * Explanation: Longest ZigZag path in blue nodes (right -> left -> right).
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2020/01/22/sample_2_1702.png]
 *
 *
 * Input: root = [1,1,1,null,1,null,null,1,1,null,1]
 * Output: 4
 * Explanation: Longest ZigZag path in blue nodes (left -> right -> left -> right).
 *
 *
 * Example 3:
 *
 *
 * Input: root = [1]
 * Output: 0
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in the tree is in the range [1, 5 * 104].
 *  * 1 <= Node.val <= 100
 *
 *
 *
 * https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const bruteForce = (() => {
  const postOrder = (node, visitFn) => {
    if (!node) {
      return;
    }
    postOrder(node.left, visitFn);
    postOrder(node.right, visitFn);
    visitFn(node);
  };

  return (root) => {
    let max = 0;
    const memo = new Map();
    const zigZag = (node, isLeft) => {
      if (!node) {
        return 0;
      }
      if (!node.left && !node.right) {
        return 1;
      }
      if ((!node.left && isLeft) || (!node.right && !isLeft)) {
        return 1;
      }
      const memoIndex = isLeft ? 0 : 1;
      if (!memo.has(node) || memo.get(node)[memoIndex] === -1) {
        memo.set(node, [-1, -1]);
        memo.get(node)[memoIndex] =
          1 + (isLeft ? zigZag(node.left, false) : zigZag(node.right, true));
      }
      return memo.get(node)[memoIndex];
    };

    postOrder(root, (node) => {
      max = Math.max(max, zigZag(node, true), zigZag(node, false));
    });

    return Math.max(0, max - 1);
  };
})();

/**
 * @param {TreeNode} root
 * @return {number}
 */
export const longestZigZag = (root) => {
  const dfs = (node, isLeft, length) => {
    if (!node) {
      return length;
    }
    return isLeft
      ? Math.max(dfs(node.left, false, length + 1), dfs(node.right, true, 1))
      : Math.max(dfs(node.left, false, 1), dfs(node.right, true, length + 1));
  };
  return Math.max(dfs(root, false, 0) - 1, dfs(root, true, 0) - 1, 0);
};
