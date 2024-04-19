/**
 * You are given the root of a binary tree where each node has a value in the range
 * [0, 25] representing the letters 'a' to 'z'.
 *
 * Return the lexicographically smallest string that starts at a leaf of this tree
 * and ends at the root.
 *
 * As a reminder, any shorter prefix of a string is lexicographically smaller.
 *
 *  * For example, "ab" is lexicographically smaller than "aba".
 *
 * A leaf of a node is a node that has no children.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2019/01/30/tree1.png]
 *
 *
 * Input: root = [0,1,2,3,4,3,4]
 * Output: "dba"
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2019/01/30/tree2.png]
 *
 *
 * Input: root = [25,1,3,1,3,0,2]
 * Output: "adz"
 *
 *
 * Example 3:
 *
 * [https://assets.leetcode.com/uploads/2019/02/01/tree3.png]
 *
 *
 * Input: root = [2,2,1,null,1,0,null,0]
 * Output: "abc"
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in the tree is in the range [1, 8500].
 *  * 0 <= Node.val <= 25
 *
 *
 *
 * https://leetcode.com/problems/smallest-string-starting-from-leaf
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const bruteForce = (() => {
  const sorted = (arr) => [...arr].sort((a, b) => a.localeCompare(b));

  const toStr = (path) =>
    [...path]
      .reverse()
      .map((x) => String.fromCharCode(Number(x) + 97))
      .join('');

  const rootToLeafPaths = (node, path) => {
    if (!node) {
      return [];
    }
    const newPath = [...path, node.val];
    if (!node.left && !node.right) {
      return [toStr(newPath)];
    }
    return [
      ...rootToLeafPaths(node.left, newPath),
      ...rootToLeafPaths(node.right, newPath),
    ];
  };

  return (root) => sorted(rootToLeafPaths(root, []))[0];
})();

const usingDfs = (() => {
  const toChar = (code) => String.fromCharCode(Number(code) + 97);

  return (root) => {
    let min = '';
    const dfs = (node, path) => {
      if (!node) {
        return;
      }
      const newPath = toChar(node.val) + path;
      if (!node.left && !node.right) {
        min = !min || newPath.localeCompare(min) < 0 ? newPath : min;
        return;
      }
      dfs(node.left, newPath);
      dfs(node.right, newPath);
    };
    dfs(root, '');
    return min;
  };
})();

/**
 * @param {TreeNode} root
 * @return {string}
 */
export const smallestFromLeaf = usingDfs;
