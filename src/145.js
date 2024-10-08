/**
 * Given the root of a binary tree, return the postorder traversal of its nodes'
 * values.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2020/08/28/pre1.jpg]
 *
 *
 * Input: root = [1,null,2,3]
 * Output: [3,2,1]
 *
 *
 * Example 2:
 *
 *
 * Input: root = []
 * Output: []
 *
 *
 * Example 3:
 *
 *
 * Input: root = [1]
 * Output: [1]
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of the nodes in the tree is in the range [0, 100].
 *  * -100 <= Node.val <= 100
 *
 *
 *
 * Follow up: Recursive solution is trivial, could you do it iteratively?
 *
 *
 *
 * https://leetcode.com/problems/binary-tree-postorder-traversal
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const postOrder = function* (node) {
  if (!node) {
    return;
  }
  yield* postOrder(node.left);
  yield* postOrder(node.right);
  yield node.val;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
export const postorderTraversal = (root) => [...postOrder(root)];
