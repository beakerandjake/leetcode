/**
 * Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n.
 * Return the answer in any order.
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const generate = (start, end) => {
  if (start > end) {
    return [null];
  }
  const trees = [];
  for (let i = start; i <= end; i++) {
    const leftTrees = generate(start, i - 1);
    const rightTrees = generate(i + 1, end);

    for (const left of leftTrees) {
      for (const right of rightTrees) {
        trees.push(new TreeNode(i, left, right));
      }
    }
  }
  return trees;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
export const generateTrees = (n) => (n > 0 ? generate(1, n) : []);
