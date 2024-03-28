/**
 * Given the root of a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).
 *
 * If two nodes are in the same row and column, the order should be from left to right.
 *
 * Example 1:
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[9],[3,15],[20],[7]]
 *
 * Example 2:
 *
 * Input: root = [3,9,8,4,0,1,7]
 * Output: [[4],[9],[3,0,1],[8],[7]]
 *
 * Example 3:
 *
 * Input: root = [3,9,8,4,0,1,7,null,null,null,2,5]
 * Output: [[4],[9,5],[3,0,1],[8,2],[7]]
 *
 * https://leetcode.com/problems/binary-tree-vertical-order-traversal/
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
 * Converts the map of col num -> nodes
 * To a two dimensional array of columns sorted ascending where each entry in the array
 * is the nodes of that column from left to right.
 */
const toArr = (columnMap) =>
  [...columnMap.keys()].sort((a, b) => a - b).map((column) => columnMap.get(column));

const usingLevelOrder = (root) => {
  if (!root) {
    return [];
  }
  const columnMap = new Map();
  const queue = [{ node: root, col: 0 }];
  while (queue.length) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const { node, col } = queue.shift();

      // store this node in its correct column.
      if (!columnMap.has(col)) {
        columnMap.set(col, [node.val]);
      } else {
        columnMap.get(col).push(node.val);
      }

      // enqueue children left to right to maintain traversal order.
      if (node.left) {
        queue.push({ node: node.left, col: col - 1 });
      }
      if (node.right) {
        queue.push({ node: node.right, col: col + 1 });
      }
    }
  }
  return toArr(columnMap);
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
export const verticalOrder = usingLevelOrder;
