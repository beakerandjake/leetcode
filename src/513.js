/**
 * Given the root of a binary tree, return the leftmost value in the last row of
 * the tree.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2020/12/14/tree1.jpg]
 *
 *
 * Input: root = [2,1,3]
 * Output: 1
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2020/12/14/tree2.jpg]
 *
 *
 * Input: root = [1,2,3,4,null,5,6,null,null,7]
 * Output: 7
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in the tree is in the range [1, 104].
 *  * -231 <= Node.val <= 231 - 1
 *
 *
 *
 * https://leetcode.com/problems/find-bottom-left-tree-value
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const levelOrder = (root, visitFn) => {
  const queue = [root];
  while (queue.length) {
    const length = queue.length;
    const nodes = [];
    for (let i = 0; i < length; i++) {
      const { val, left, right } = queue.shift();
      nodes.push(val);
      if (left) {
        queue.push(left);
      }
      if (right) {
        queue.push(right);
      }
    }
    visitFn(nodes);
  }
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
export const findBottomLeftValue = (root) => {
  let leftMost;
  levelOrder(root, (nodes) => {
    leftMost = nodes[0];
  });
  return leftMost;
};
