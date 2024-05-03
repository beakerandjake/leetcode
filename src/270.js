/**
 * Given the root of a binary search tree and a target value, return the value in
 * the BST that is closest to the target. If there are multiple answers, print the
 * smallest.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/03/12/closest1-1-tree.jpg]
 *
 *
 * Input: root = [4,2,5,1,3], target = 3.714286
 * Output: 4
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1], target = 4.428571
 * Output: 1
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in the tree is in the range [1, 104].
 *  * 0 <= Node.val <= 109
 *  * -109 <= target <= 109
 *
 *
 *
 * https://leetcode.com/problems/closest-binary-search-tree-value
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
export const closestValue = (root, target) => {
  const recurse = (node, closest) => {
    if (!node) {
      return closest;
    }
    const dCurrent = Math.abs(target - node.val);
    const dClosest = Math.abs(target - closest);
    const newClosest =
      dCurrent < dClosest || (dCurrent === dClosest && node.val < closest)
        ? node.val
        : closest;
    if (target < node.val) {
      return recurse(node.left, newClosest);
    } else if (target > node.val) {
      return recurse(node.right, newClosest);
    }
    return newClosest;
  };
  return recurse(root, root.val);
};
