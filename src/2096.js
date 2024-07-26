/**
 * You are given the root of a binary tree with n nodes. Each node is uniquely
 * assigned a value from 1 to n. You are also given an integer startValue
 * representing the value of the start node s, and a different integer destValue
 * representing the value of the destination node t.
 *
 * Find the shortest path starting from node s and ending at node t. Generate
 * step-by-step directions of such path as a string consisting of only the
 * uppercase letters 'L', 'R', and 'U'. Each letter indicates a specific direction:
 *
 *  * 'L' means to go from a node to its left child node.
 *  * 'R' means to go from a node to its right child node.
 *  * 'U' means to go from a node to its parent node.
 *
 * Return the step-by-step directions of the shortest path from node s to node t.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/11/15/eg1.png]
 *
 *
 * Input: root = [5,1,2,3,null,6,4], startValue = 3, destValue = 6
 * Output: "UURL"
 * Explanation: The shortest path is: 3 → 1 → 5 → 2 → 6.
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2021/11/15/eg2.png]
 *
 *
 * Input: root = [2,1], startValue = 2, destValue = 1
 * Output: "L"
 * Explanation: The shortest path is: 2 → 1.
 *
 *
 *
 *
 * Constraints:
 *
 *  * The number of nodes in the tree is n.
 *  * 2 <= n <= 105
 *  * 1 <= Node.val <= n
 *  * All the values in the tree are unique.
 *  * 1 <= startValue, destValue <= n
 *  * startValue != destValue
 *
 *
 *
 * https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// returns the node which is the lowest common ancestor of nodes with values a and b
const lowestCommonAncestor = (root, a, b) => {
  if (!root) {
    return null;
  }
  if (root.val === a || root.val === b) {
    return root;
  }
  const inLeft = lowestCommonAncestor(root.left, a, b);
  const inRight = lowestCommonAncestor(root.right, a, b);
  return inLeft && inRight ? root : inLeft || inRight;
};

// returns a string containing directions (L or R) from the root node to the node with the target value
const path = (root, targetValue) => {
  const search = (node, history) => {
    if (!node) {
      return '';
    }
    if (node.val === targetValue) {
      return history;
    }
    const leftPath = search(node.left, `${history}L`);
    const rightPath = search(node.right, `${history}R`);
    return leftPath || rightPath;
  };
  return search(root, '');
};

const reversePathToStart = (p) => 'U'.repeat(p.length);

/**
 * @param {TreeNode} root
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
export const getDirections = (root, startValue, destValue) => {
  const lca = lowestCommonAncestor(root, startValue, destValue);
  return reversePathToStart(path(lca, startValue)) + path(lca, destValue);
};
