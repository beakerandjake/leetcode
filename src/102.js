/**
 * Given the root of a binary tree, return the level order traversal of its nodes'
 * values. (i.e., from left to right, level by level).
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg]
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[9,20],[15,7]]
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1]
 * Output: [[1]]
 *
 *
 * Example 3:
 *
 *
 * Input: root = []
 * Output: []
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in the tree is in the range [0, 2000].
 *  * -1000 <= Node.val <= 1000
 *
 *
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// level order using recursion
const recursiveVersion = (root) => {
  if (!root) {
    return [];
  }
  const toReturn = [];
  const recursive = (node, level) => {
    if (!node) {
      return;
    }
    if (!toReturn[level]) {
      toReturn[level] = [node.val];
    } else {
      toReturn[level].push(node.val);
    }
    recursive(node.left, level + 1);
    recursive(node.right, level + 1);
  };
  recursive(root, 0);
  return toReturn;
};

// level order using queue
const iterativeVersion = (root) => {
  if (!root) {
    return [];
  }
  const toReturn = [];
  const queue = [{ node: root, level: 0 }];
  while (queue.length) {
    const { node, level } = queue.shift();
    if (!toReturn[level]) {
      toReturn[level] = [node.val];
    } else {
      toReturn[level].push(node.val);
    }

    if (node.left) {
      queue.push({ node: node.left, level: level + 1 });
    }
    if (node.right) {
      queue.push({ node: node.right, level: level + 1 });
    }
  }
  return toReturn;
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
export const levelOrder = recursiveVersion;
