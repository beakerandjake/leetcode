/**
 * Given a binary tree root and an integer target, delete all the leaf nodes with
 * value target.
 *
 * Note that once you delete a leaf node with value target, if its parent node
 * becomes a leaf node and has the value target, it should also be deleted (you
 * need to continue doing that until you cannot).
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2020/01/09/sample_1_1684.png]
 *
 *
 * Input: root = [1,2,3,2,null,2,4], target = 2
 * Output: [1,null,3,null,4]
 * Explanation: Leaf nodes in green with value (target = 2) are removed (Picture in left).
 * After removing, new nodes become leaf nodes with value (target = 2) (Picture in center).
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2020/01/09/sample_2_1684.png]
 *
 *
 * Input: root = [1,3,3,3,2], target = 3
 * Output: [1,3,null,null,2]
 *
 *
 * Example 3:
 *
 * [https://assets.leetcode.com/uploads/2020/01/15/sample_3_1684.png]
 *
 *
 * Input: root = [1,2,null,2,null,2], target = 2
 * Output: [1]
 * Explanation: Leaf nodes in green with value (target = 2) are removed at each step.
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in the tree is in the range [1, 3000].
 *  * 1 <= Node.val, target <= 1000
 *
 *
 *
 * https://leetcode.com/problems/delete-leaves-with-a-given-value
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
 * @return {TreeNode}
 */
export const removeLeafNodes = (root, target) => {
  if (!root) {
    return null;
  }
  root.left = removeLeafNodes(root.left, target);
  root.right = removeLeafNodes(root.right, target);
  return !root.left && !root.right && root.val === target ? null : root;
};
