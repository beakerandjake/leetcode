/**
 * Given the root of a binary tree, the level of its root is 1, the level of its
 * children is 2, and so on.
 *
 * Return the smallest level x such that the sum of all the values of nodes at
 * level x is maximal.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2019/05/03/capture.JPG]
 *
 *
 * Input: root = [1,7,0,7,-8,null,null]
 * Output: 2
 * Explanation:
 * Level 1 sum = 1.
 * Level 2 sum = 7 + 0 = 7.
 * Level 3 sum = 7 + -8 = -1.
 * So we return the level with the maximum sum which is level 2.
 *
 *
 * Example 2:
 *
 *
 * Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
 * Output: 2
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in the tree is in the range [1, 104].
 *  * -105 <= Node.val <= 105
 *
 *
 *
 * https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// const simple = (root) => {
//   const levelSums = [];
//   const queue = [{ node: root, level: 0 }];
//   while (queue.length) {
//     const { node, level } = queue.shift();
//     levelSums[level] = (levelSums[level] || 0) + node.val;
//     if (node.left) {
//       queue.push({ node: node.left, level: level + 1 });
//     }
//     if (node.right) {
//       queue.push({ node: node.right, level: level + 1 });
//     }
//   }
//   return levelSums.indexOf(Math.max(...levelSums)) + 1;
// };

/**
 * @param {TreeNode} root
 * @return {number}
 */
export const maxLevelSum = (root) => {
  let maxLevel;
  let maxSum = Number.MIN_SAFE_INTEGER;
  let level = 0;
  const queue = [root];
  while (queue.length) {
    level++;
    let levelSum = 0;
    for (let i = queue.length; i > 0; i--) {
      const node = queue.shift();
      levelSum += node.val;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    if (maxSum < levelSum) {
      maxSum = levelSum;
      maxLevel = level;
    }
  }
  return maxLevel;
};
