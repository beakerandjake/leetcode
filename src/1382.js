/**
 * Given the root of a binary search tree, return a balanced binary search tree
 * with the same node values. If there is more than one answer, return any of them.
 *
 * A binary search tree is balanced if the depth of the two subtrees of every node
 * never differs by more than 1.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/08/10/balance1-tree.jpg]
 *
 *
 * Input: root = [1,null,2,null,3,null,4,null,null]
 * Output: [2,1,3,null,null,null,4]
 * Explanation: This is not the only correct answer, [3,1,4,null,2] is also correct.
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2021/08/10/balanced2-tree.jpg]
 *
 *
 * Input: root = [2,1,3]
 * Output: [2,1,3]
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in the tree is in the range [1, 104].
 *  * 1 <= Node.val <= 105
 *
 *
 *
 * https://leetcode.com/problems/balance-a-binary-search-tree
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// eslint-disable-next-line func-style
function* inOrder(root) {
  if (!root) {
    return;
  }
  yield* inOrder(root.left);
  yield root.val;
  yield* inOrder(root.right);
}

// recursively builds a balanced tree from the values.
const buildTree = (values) => {
  if (!values.length) {
    return null;
  }
  const m = Math.floor(values.length / 2);
  return new TreeNode(
    values[m],
    buildTree(values.slice(0, m)),
    buildTree(values.slice(m + 1)),
  );
};

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
export const balanceBST = (root) => buildTree([...inOrder(root)]);
