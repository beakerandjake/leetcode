/**
 * Given the root of a binary tree, return the bottom-up level order traversal of
 * its nodes' values. (i.e., from left to right, level by level from leaf to root).
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg]
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[15,7],[9,20],[3]]
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1]
 * Output: [[1]]
 *
 *
 * Example 3:
 *
 *
 * Input: root = []
 * Output: []
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in the tree is in the range [0, 2000].
 *  * -1000 <= Node.val <= 1000
 *
 *
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// eslint-disable-next-line func-style
function* postOrder(root) {
  // eslint-disable-next-line func-style
  function* traverse(node, level) {
    if (!node) {
      return;
    }
    yield* traverse(node.left, level + 1);
    yield* traverse(node.right, level + 1);
    yield [node, level];
  }
  yield* traverse(root, 0);
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
export const levelOrderBottom = (root) => {
  const result = [];
  for (const [node, depth] of postOrder(root)) {
    if (!result[depth]) {
      result[depth] = [];
    }
    result[depth].push(node.val);
  }
  return result.reverse();
};
