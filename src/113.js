/**
 * Given the root of a binary tree and an integer targetSum, return all
 * root-to-leaf paths where the sum of the node values in the path equals
 * targetSum. Each path should be returned as a list of the node values, not node
 * references.
 *
 * A root-to-leaf path is a path starting from the root and ending at any leaf
 * node. A leaf is a node with no children.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/01/18/pathsumii1.jpg]
 *
 *
 * Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 * Output: [[5,4,11,2],[5,8,4,5]]
 * Explanation: There are two paths whose sum equals targetSum:
 * 5 + 4 + 11 + 2 = 22
 * 5 + 8 + 4 + 5 = 22
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg]
 *
 *
 * Input: root = [1,2,3], targetSum = 5
 * Output: []
 *
 *
 * Example 3:
 *
 *
 * Input: root = [1,2], targetSum = 0
 * Output: []
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in the tree is in the range [0, 5000].
 *  * -1000 <= Node.val <= 1000
 *  * -1000 <= targetSum <= 1000
 *
 *
 *
 * https://leetcode.com/problems/path-sum-ii
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// iterates the tree and yields the path from root to each leaf node
// eslint-disable-next-line func-style
function* rootToLeafPaths(root) {
  // eslint-disable-next-line func-style
  function* dfs(node, path) {
    if (!node) {
      return;
    }
    path.push(node.val);
    if (!node.left && !node.right) {
      yield [...path];
    }
    yield* dfs(node.left, path);
    yield* dfs(node.right, path);
    path.pop();
  }
  yield* dfs(root, []);
}

// returns the sum of all elements of the array.
const sum = (arr) => arr.reduce((acc, x) => acc + x, 0);

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
export const pathSum = (root, targetSum) =>
  [...rootToLeafPaths(root)].filter((path) => sum(path) === targetSum);
