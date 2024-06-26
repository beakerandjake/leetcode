/**
 * Given the root of a binary tree, return the sum of all left leaves.
 *
 * A leaf is a node with no children. A left leaf is a leaf that is the left child
 * of another node.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/04/08/leftsum-tree.jpg]
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 24
 * Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
 *
 *
 * Example 2:
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
 *  * The number of nodes in the tree is in the range [1, 1000].
 *  * -1000 <= Node.val <= 1000
 *
 *
 *
 * https://leetcode.com/problems/sum-of-left-leaves
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const isLeaf = (node) => node && !node.left && !node.right;

/**
 * @param {TreeNode} root
 * @return {number}
 */
export const sumOfLeftLeaves = (root) => {
  if (!root) {
    return 0;
  }

  if (root.left && isLeaf(root.left)) {
    return root.left.val + sumOfLeftLeaves(root.right);
  }
  return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};
