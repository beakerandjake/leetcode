/**
 * Given the root of a binary tree, return all root-to-leaf paths in any order.
 *
 * A leaf is a node with no children.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/03/12/paths-tree.jpg]
 *
 *
 * Input: root = [1,2,3,null,5]
 * Output: ["1->2->5","1->3"]
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1]
 * Output: ["1"]
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in the tree is in the range [1, 100].
 *  * -100 <= Node.val <= 100
 *
 *
 *
 * https://leetcode.com/problems/binary-tree-paths
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
 * @return {string[]}
 */
export const binaryTreePaths = (root) => {
  const paths = [];
  const dfs = (node, history) => {
    if (!node) {
      return;
    }
    history.push(node.val);
    if (!node.left && !node.right) {
      paths.push(history.join('->'));
    }
    dfs(node.left, history);
    dfs(node.right, history);
    history.pop();
  };
  dfs(root, []);
  return paths;
};
