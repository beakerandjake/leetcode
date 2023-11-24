/**
 * Given the root of a binary tree and an integer targetSum, return the number of
 * paths where the sum of the values along the path equals targetSum.
 *
 * The path does not need to start or end at the root or a leaf, but it must go
 * downwards (i.e., traveling only from parent nodes to child nodes).
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/04/09/pathsum3-1-tree.jpg]
 *
 *
 * Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
 * Output: 3
 * Explanation: The paths that sum to 8 are shown.
 *
 *
 * Example 2:
 *
 *
 * Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 * Output: 3
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in the tree is in the range [0, 1000].
 *  * -109 <= Node.val <= 109
 *  * -1000 <= targetSum <= 1000
 *
 *
 *
 * https://leetcode.com/problems/path-sum-iii
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const dfs = (() => {
  const inOrder = (node, visitFn) => {
    if (!node) {
      return;
    }
    inOrder(node.left, visitFn);
    visitFn(node);
    inOrder(node.right, visitFn);
  };

  return (root, target) => {
    const findSum = (node, sum) => {
      if (!node) {
        return 0;
      }
      const newSum = node.val + sum;
      const subtreeSum = findSum(node.left, newSum) + findSum(node.right, newSum);
      return newSum === target ? 1 + subtreeSum : subtreeSum;
    };

    let found = 0;
    inOrder(root, (node) => {
      found += findSum(node, 0);
    });
    return found;
  };
})();

/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
export const pathSum = dfs;
